import wepy from 'wepy'
import { TIPS } from 'wepy-utils'
import { api } from '../api/index.js'

export default class userMixin extends wepy.mixin {
  /* ============= 工具方法（mixins没法复写，就再写一遍了） ============= */
  isFunction(item) {
    return typeof item === 'function'
  }

  /* ========================== 用户方法 ========================== */
  // 获取用户信息
  $getUserInfo(callback) {
    // 顶级容错
    if (!this.$parent || !this.$parent.$updateGlobalData) return
    // 取缓存信息
    const user = this.$parent.$updateGlobalData('user')
    // 不重复获取用户信息
    if (user && user.nickName) {
      this.isFunction(callback) && callback(user)
      this.$apply()
      return user
    }
    // 首次获取用户信息
    this.$login(() => {
      // 再获取用户信息
      this._wxUserInfo(callback)
    })
  }

  // 进行微信登陆
  $login(success = () => {}, noAutoLogin) {
    // 先登录
    wepy.login({
      success: (res, res1) => {
        // console.log('wepy.login.success:', res)

        // 如果不需要自动登录，就return
        if (noAutoLogin) {
          // 串行回调
          this.isFunction(success) && success(res)
          this.$apply()
          return
        }

        wx.request({
          url: api.host + api.login,
          data: {
            code: res.code,
            name: '蓝天'
          },
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          success: function(res) {
            wx.setStorageSync("sessionid", res.header["Set-Cookie"])
          }
        })

        // ===== 以下随机示例 =====
        setTimeout(() => {
          this.$parent.$updateGlobalData('user', {
            session: Math.random().toString(36).substring(2),
            packages: {
              times: 0,
              quantity: 0,
              status: '未借阅'
            }
          })
          // 串行回调
          this.isFunction(success) && success(res)
          this.$apply()
        }, 100)
      },
      fail: (res) => {
        // console.log('wepy.login.fail:', res)
      }
    })
  }

  /* ========================= 其他方法 ========================= */
  // 获取用户公开信息（微信）
  _wxUserInfo(callback) {
    wepy.getUserInfo({
      success: (res) => {
        // console.log('wepy.getUserInfo.success:', res)
        // 缓存用户信息
        const user = this.$parent.$updateGlobalData('user', res.userInfo)
        this.isFunction(callback) && callback(user)
        this.$apply()
      },
      fail: (res) => {
        // console.log('wepy.getUserInfo.fail:', res)
        // 用户拒绝授权:填充默认数据
        const user = this.$parent.$updateGlobalData('user', {
          nickName: '未授权',
          avatarUrl: '/images/icon/icon-avatar@2x.png'
        })

        // 串行回调
        this.isFunction(callback) && callback(user)
        this.$apply()

        // 尝试授权
        this._wxAuthModal(callback)
      }
    })
  }

  // 提示用户开启授权
  _wxAuthModal(callback) {
    // 先判断是否支持开启授权页的API

    TIPS.confirm({
      title: '授权提示',
      content: '希望获得以下权限：\n · 获取您的公开信息（昵称、头像等）',
      confirmText: '去授权',
      cancelText: '先不授权',
    }).then(() => {
      console.log('点击了确定')
      this._wxOpenSetting(callback)
    }).catch(() => {
    })
  }

  // 打开授权页
  _wxOpenSetting(callback) {
    wx.openSetting && wx.openSetting({
      success: ({authSetting}) => {
        console.log('wx.openSetting.success', authSetting)
        if (authSetting['scope.userInfo']) {
          // 用户打开设置，重新获取信息
          this._wxUserInfo(callback)
        }
      }
    })
  }
}
