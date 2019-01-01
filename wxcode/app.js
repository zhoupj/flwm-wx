//app.js
const util = require('utils/util.js')

App({




  onLogin: function(first) {
    var that = this;
    wx.login({
      success(res) {
        if (res.code) {
          util.ajax({
            url: "/login",
            data: {
              code: res.code,
              name: that.globalData.userInfo.nickName
            },
            succ: function succ(res) {
              that.globalData.userData = res.data;
              if (first == true) {
                wx.switchTab({
                  url: '/pages/index/index',
                })
              }
            },
            t: false
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },

  onLaunch: function() {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)


    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              this.onLogin(true);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else { //跳转到授权页面
          wx.redirectTo({
            url: '/pages/auth/auth',
          })
        }
      }
    })



  },
  globalData: {
    userInfo: null,
    userData: null,
  }
})