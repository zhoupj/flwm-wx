'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyUtils = require('./../npm/wepy-utils/index.js');

var _index = require('./../api/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userMixin = function (_wepy$mixin) {
  _inherits(userMixin, _wepy$mixin);

  function userMixin() {
    _classCallCheck(this, userMixin);

    return _possibleConstructorReturn(this, (userMixin.__proto__ || Object.getPrototypeOf(userMixin)).apply(this, arguments));
  }

  _createClass(userMixin, [{
    key: 'isFunction',

    /* ============= 工具方法（mixins没法复写，就再写一遍了） ============= */
    value: function isFunction(item) {
      return typeof item === 'function';
    }

    /* ========================== 用户方法 ========================== */
    // 获取用户信息

  }, {
    key: '$getUserInfo',
    value: function $getUserInfo(callback) {
      var _this2 = this;

      // 顶级容错
      if (!this.$parent || !this.$parent.$updateGlobalData) return;
      // 取缓存信息
      var user = this.$parent.$updateGlobalData('user');
      // 不重复获取用户信息
      if (user && user.nickName) {
        this.isFunction(callback) && callback(user);
        this.$apply();
        return user;
      }
      // 首次获取用户信息
      this.$login(function () {
        // 再获取用户信息
        _this2._wxUserInfo(callback);
      });
    }

    // 进行微信登陆

  }, {
    key: '$login',
    value: function $login() {
      var _this3 = this;

      var _success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var noAutoLogin = arguments[1];

      // 先登录
      _wepy2.default.login({
        success: function success(res, res1) {
          // console.log('wepy.login.success:', res)

          // 如果不需要自动登录，就return
          if (noAutoLogin) {
            // 串行回调
            _this3.isFunction(_success) && _success(res);
            _this3.$apply();
            return;
          }

          wx.request({
            url: _index.api.host + _index.api.login,
            data: {
              code: res.code,
              name: '蓝天'
            },
            method: 'POST',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function success(res) {
              wx.setStorageSync("sessionid", res.header["Set-Cookie"]);
            }
          });

          // ===== 以下随机示例 =====
          setTimeout(function () {
            _this3.$parent.$updateGlobalData('user', {
              session: Math.random().toString(36).substring(2),
              packages: {
                times: 0,
                quantity: 0,
                status: '未借阅'
              }
            });
            // 串行回调
            _this3.isFunction(_success) && _success(res);
            _this3.$apply();
          }, 100);
        },
        fail: function fail(res) {
          // console.log('wepy.login.fail:', res)
        }
      });
    }

    /* ========================= 其他方法 ========================= */
    // 获取用户公开信息（微信）

  }, {
    key: '_wxUserInfo',
    value: function _wxUserInfo(callback) {
      var _this4 = this;

      _wepy2.default.getUserInfo({
        success: function success(res) {
          // console.log('wepy.getUserInfo.success:', res)
          // 缓存用户信息
          var user = _this4.$parent.$updateGlobalData('user', res.userInfo);
          _this4.isFunction(callback) && callback(user);
          _this4.$apply();
        },
        fail: function fail(res) {
          // console.log('wepy.getUserInfo.fail:', res)
          // 用户拒绝授权:填充默认数据
          var user = _this4.$parent.$updateGlobalData('user', {
            nickName: '未授权',
            avatarUrl: '/images/icon/icon-avatar@2x.png'
          });

          // 串行回调
          _this4.isFunction(callback) && callback(user);
          _this4.$apply();

          // 尝试授权
          _this4._wxAuthModal(callback);
        }
      });
    }

    // 提示用户开启授权

  }, {
    key: '_wxAuthModal',
    value: function _wxAuthModal(callback) {
      var _this5 = this;

      // 先判断是否支持开启授权页的API

      _wepyUtils.TIPS.confirm({
        title: '授权提示',
        content: '希望获得以下权限：\n · 获取您的公开信息（昵称、头像等）',
        confirmText: '去授权',
        cancelText: '先不授权'
      }).then(function () {
        console.log('点击了确定');
        _this5._wxOpenSetting(callback);
      }).catch(function () {});
    }

    // 打开授权页

  }, {
    key: '_wxOpenSetting',
    value: function _wxOpenSetting(callback) {
      var _this6 = this;

      wx.openSetting && wx.openSetting({
        success: function success(_ref) {
          var authSetting = _ref.authSetting;

          console.log('wx.openSetting.success', authSetting);
          if (authSetting['scope.userInfo']) {
            // 用户打开设置，重新获取信息
            _this6._wxUserInfo(callback);
          }
        }
      });
    }
  }]);

  return userMixin;
}(_wepy2.default.mixin);

exports.default = userMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsidXNlck1peGluIiwiaXRlbSIsImNhbGxiYWNrIiwiJHBhcmVudCIsIiR1cGRhdGVHbG9iYWxEYXRhIiwidXNlciIsIm5pY2tOYW1lIiwiaXNGdW5jdGlvbiIsIiRhcHBseSIsIiRsb2dpbiIsIl93eFVzZXJJbmZvIiwic3VjY2VzcyIsIm5vQXV0b0xvZ2luIiwid2VweSIsImxvZ2luIiwicmVzIiwicmVzMSIsInd4IiwicmVxdWVzdCIsInVybCIsImFwaSIsImhvc3QiLCJkYXRhIiwiY29kZSIsIm5hbWUiLCJtZXRob2QiLCJoZWFkZXIiLCJzZXRTdG9yYWdlU3luYyIsInNldFRpbWVvdXQiLCJzZXNzaW9uIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicGFja2FnZXMiLCJ0aW1lcyIsInF1YW50aXR5Iiwic3RhdHVzIiwiZmFpbCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJfd3hBdXRoTW9kYWwiLCJUSVBTIiwiY29uZmlybSIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm1UZXh0IiwiY2FuY2VsVGV4dCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiX3d4T3BlblNldHRpbmciLCJjYXRjaCIsIm9wZW5TZXR0aW5nIiwiYXV0aFNldHRpbmciLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7O0FBQ25COytCQUNXQyxJLEVBQU07QUFDZixhQUFPLE9BQU9BLElBQVAsS0FBZ0IsVUFBdkI7QUFDRDs7QUFFRDtBQUNBOzs7O2lDQUNhQyxRLEVBQVU7QUFBQTs7QUFDckI7QUFDQSxVQUFJLENBQUMsS0FBS0MsT0FBTixJQUFpQixDQUFDLEtBQUtBLE9BQUwsQ0FBYUMsaUJBQW5DLEVBQXNEO0FBQ3REO0FBQ0EsVUFBTUMsT0FBTyxLQUFLRixPQUFMLENBQWFDLGlCQUFiLENBQStC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Q0FGRTtBQUdYQyxxQkFBYSxLQUhGO0FBSVhDLG9CQUFZO0FBSkQsT0FBYixFQUtHQyxJQUxILENBS1EsWUFBTTtBQUNaQyxnQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSxlQUFLQyxjQUFMLENBQW9CbEQsUUFBcEI7QUFDRCxPQVJELEVBUUdtRCxLQVJILENBUVMsWUFBTSxDQUNkLENBVEQ7QUFVRDs7QUFFRDs7OzttQ0FDZW5ELFEsRUFBVTtBQUFBOztBQUN2QmUsU0FBR3FDLFdBQUgsSUFBa0JyQyxHQUFHcUMsV0FBSCxDQUFlO0FBQy9CM0MsaUJBQVMsdUJBQW1CO0FBQUEsY0FBakI0QyxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQzFCTCxrQkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDSSxXQUF0QztBQUNBLGNBQUlBLFlBQVksZ0JBQVosQ0FBSixFQUFtQztBQUNqQztBQUNBLG1CQUFLN0MsV0FBTCxDQUFpQlIsUUFBakI7QUFDRDtBQUNGO0FBUDhCLE9BQWYsQ0FBbEI7QUFTRDs7OztFQXJJb0NXLGVBQUsyQyxLOztrQkFBdkJ4RCxTIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgVElQUyB9IGZyb20gJ3dlcHktdXRpbHMnXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvaW5kZXguanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHVzZXJNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xuICAvKiA9PT09PT09PT09PT09IOW3peWFt+aWueazle+8iG1peGluc+ayoeazleWkjeWGme+8jOWwseWGjeWGmeS4gOmBjeS6hu+8iSA9PT09PT09PT09PT09ICovXG4gIGlzRnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJ1xuICB9XG5cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT0g55So5oi35pa55rOVID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAkZ2V0VXNlckluZm8oY2FsbGJhY2spIHtcbiAgICAvLyDpobbnuqflrrnplJlcbiAgICBpZiAoIXRoaXMuJHBhcmVudCB8fCAhdGhpcy4kcGFyZW50LiR1cGRhdGVHbG9iYWxEYXRhKSByZXR1cm5cbiAgICAvLyDlj5bnvJPlrZjkv6Hmga9cbiAgICBjb25zdCB1c2VyID0gdGhpcy4kcGFyZW50LiR1cGRhdGVHbG9iYWxEYXRhKCd1c2VyJylcbiAgICAvLyDkuI3ph43lpI3ojrflj5bnlKjmiLfkv6Hmga9cbiAgICBpZiAodXNlciAmJiB1c2VyLm5pY2tOYW1lKSB7XG4gICAgICB0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHVzZXIpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICByZXR1cm4gdXNlclxuICAgIH1cbiAgICAvLyDpppbmrKHojrflj5bnlKjmiLfkv6Hmga9cbiAgICB0aGlzLiRsb2dpbigoKSA9PiB7XG4gICAgICAvLyDlho3ojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgIHRoaXMuX3d4VXNlckluZm8oY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIC8vIOi/m+ihjOW+ruS/oeeZu+mZhlxuICAkbG9naW4oc3VjY2VzcyA9ICgpID0+IHt9LCBub0F1dG9Mb2dpbikge1xuICAgIC8vIOWFiOeZu+W9lVxuICAgIHdlcHkubG9naW4oe1xuICAgICAgc3VjY2VzczogKHJlcywgcmVzMSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnd2VweS5sb2dpbi5zdWNjZXNzOicsIHJlcylcblxuICAgICAgICAvLyDlpoLmnpzkuI3pnIDopoHoh6rliqjnmbvlvZXvvIzlsLFyZXR1cm5cbiAgICAgICAgaWYgKG5vQXV0b0xvZ2luKSB7XG4gICAgICAgICAgLy8g5Liy6KGM5Zue6LCDXG4gICAgICAgICAgdGhpcy5pc0Z1bmN0aW9uKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogYXBpLmhvc3QgKyBhcGkubG9naW4sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgICBuYW1lOiAn6JOd5aSpJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJzZXNzaW9uaWRcIiwgcmVzLmhlYWRlcltcIlNldC1Db29raWVcIl0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vID09PT09IOS7peS4i+maj+acuuekuuS+iyA9PT09PVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEoJ3VzZXInLCB7XG4gICAgICAgICAgICBzZXNzaW9uOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiksXG4gICAgICAgICAgICBwYWNrYWdlczoge1xuICAgICAgICAgICAgICB0aW1lczogMCxcbiAgICAgICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgICAgICAgIHN0YXR1czogJ+acquWAn+mYhSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIOS4suihjOWbnuiwg1xuICAgICAgICAgIHRoaXMuaXNGdW5jdGlvbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcylcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sIDEwMClcbiAgICAgIH0sXG4gICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3ZXB5LmxvZ2luLmZhaWw6JywgcmVzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09IOWFtuS7luaWueazlSA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIC8vIOiOt+WPlueUqOaIt+WFrOW8gOS/oeaBr++8iOW+ruS/oe+8iVxuICBfd3hVc2VySW5mbyhjYWxsYmFjaykge1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnd2VweS5nZXRVc2VySW5mby5zdWNjZXNzOicsIHJlcylcbiAgICAgICAgLy8g57yT5a2Y55So5oi35L+h5oGvXG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEoJ3VzZXInLCByZXMudXNlckluZm8pXG4gICAgICAgIHRoaXMuaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2sodXNlcilcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3dlcHkuZ2V0VXNlckluZm8uZmFpbDonLCByZXMpXG4gICAgICAgIC8vIOeUqOaIt+aLkue7neaOiOadgzrloavlhYXpu5jorqTmlbDmja5cbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMuJHBhcmVudC4kdXBkYXRlR2xvYmFsRGF0YSgndXNlcicsIHtcbiAgICAgICAgICBuaWNrTmFtZTogJ+acquaOiOadgycsXG4gICAgICAgICAgYXZhdGFyVXJsOiAnL2ltYWdlcy9pY29uL2ljb24tYXZhdGFyQDJ4LnBuZydcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDkuLLooYzlm57osINcbiAgICAgICAgdGhpcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayh1c2VyKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG5cbiAgICAgICAgLy8g5bCd6K+V5o6I5p2DXG4gICAgICAgIHRoaXMuX3d4QXV0aE1vZGFsKGNhbGxiYWNrKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyDmj5DnpLrnlKjmiLflvIDlkK/mjojmnYNcbiAgX3d4QXV0aE1vZGFsKGNhbGxiYWNrKSB7XG4gICAgLy8g5YWI5Yik5pat5piv5ZCm5pSv5oyB5byA5ZCv5o6I5p2D6aG155qEQVBJXG5cbiAgICBUSVBTLmNvbmZpcm0oe1xuICAgICAgdGl0bGU6ICfmjojmnYPmj5DnpLonLFxuICAgICAgY29udGVudDogJ+W4jOacm+iOt+W+l+S7peS4i+adg+mZkO+8mlxcbiDCtyDojrflj5bmgqjnmoTlhazlvIDkv6Hmga/vvIjmmLXnp7DjgIHlpLTlg4/nrYnvvIknLFxuICAgICAgY29uZmlybVRleHQ6ICfljrvmjojmnYMnLFxuICAgICAgY2FuY2VsVGV4dDogJ+WFiOS4jeaOiOadgycsXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygn54K55Ye75LqG56Gu5a6aJylcbiAgICAgIHRoaXMuX3d4T3BlblNldHRpbmcoY2FsbGJhY2spXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgIH0pXG4gIH1cblxuICAvLyDmiZPlvIDmjojmnYPpobVcbiAgX3d4T3BlblNldHRpbmcoY2FsbGJhY2spIHtcbiAgICB3eC5vcGVuU2V0dGluZyAmJiB3eC5vcGVuU2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiAoe2F1dGhTZXR0aW5nfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnd3gub3BlblNldHRpbmcuc3VjY2VzcycsIGF1dGhTZXR0aW5nKVxuICAgICAgICBpZiAoYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAvLyDnlKjmiLfmiZPlvIDorr7nva7vvIzph43mlrDojrflj5bkv6Hmga9cbiAgICAgICAgICB0aGlzLl93eFVzZXJJbmZvKGNhbGxiYWNrKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19