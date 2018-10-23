'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyUtils = require('./../npm/wepy-utils/index.js');

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
        success: function success(res) {
          console.log('wepy.login.success:', res);

          // 如果不需要自动登录，就return
          if (noAutoLogin) {
            // 串行回调
            _this3.isFunction(_success) && _success(res);
            _this3.$apply();
            return;
          }

          // 根据业务接口处理:业务登陆:异步
          // this.$post({ url: service.login, data: {code: res.code} }, {
          //   success: ({code, data}) => {},
          //   fail: ({code, data}) => {}
          // })

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
          console.log('wepy.login.fail:', res);
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
          console.log('wepy.getUserInfo.success:', res);
          // 缓存用户信息
          var user = _this4.$parent.$updateGlobalData('user', res.userInfo);
          _this4.isFunction(callback) && callback(user);
          _this4.$apply();
        },
        fail: function fail(res) {
          console.log('wepy.getUserInfo.fail:', res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsidXNlck1peGluIiwiaXRlbSIsImNhbGxiYWNrIiwiJHBhcmVudCIsIiR1cGRhdGVHbG9iYWxEYXRhIiwidXNlciIsIm5pY2tOYW1lIiwiaXNGdW5jdGlvbiIsIiRhcHBseSIsIiRsb2dpbiIsIl93eFVzZXJJbmZvIiwic3VjY2VzcyIsIm5vQXV0b0xvZ2luIiwid2VweSIsImxvZ2luIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJzZXNzaW9uIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicGFja2FnZXMiLCJ0aW1lcyIsInF1YW50aXR5Iiwic3RhdHVzIiwiZmFpbCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJfd3hBdXRoTW9kYWwiLCJUSVBTIiwiY29uZmlybSIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm1UZXh0IiwiY2FuY2VsVGV4dCIsInRoZW4iLCJfd3hPcGVuU2V0dGluZyIsImNhdGNoIiwid3giLCJvcGVuU2V0dGluZyIsImF1dGhTZXR0aW5nIiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7OztBQUNuQjsrQkFDV0MsSSxFQUFNO0FBQ2YsYUFBTyxPQUFPQSxJQUFQLEtBQWdCLFVBQXZCO0FBQ0Q7O0FBRUQ7QUFDQTs7OztpQ0FDYUMsUSxFQUFVO0FBQUE7O0FBQ3JCO0FBQ0EsVUFBSSxDQUFDLEtBQUtDLE9BQU4sSUFBaUIsQ0FBQyxLQUFLQSxPQUFMLENBQWFDLGlCQUFuQyxFQUFzRDtBQUN0RDtBQUNBLFVBQU1DLE9BQU8sS0FBS0YsT0FBTCxDQUFhQyxpQkFBYixDQUErQixNQUEvQixDQUFiO0FBQ0E7QUFDQSxVQUFJQyxRQUFRQSxLQUFLQyxRQUFqQixFQUEyQjtBQUN6QixhQUFLQyxVQUFMLENBQWdCTCxRQUFoQixLQUE2QkEsU0FBU0csSUFB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QUFrQkQsR0FBR0MsV0FBSCxDQUFlO0FBQy9CaEMsaUJBQVMsdUJBQW1CO0FBQUEsY0FBakJpQyxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQzFCNUIsa0JBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQzJCLFdBQXRDO0FBQ0EsY0FBSUEsWUFBWSxnQkFBWixDQUFKLEVBQW1DO0FBQ2pDO0FBQ0EsbUJBQUtsQyxXQUFMLENBQWlCUixRQUFqQjtBQUNEO0FBQ0Y7QUFQOEIsT0FBZixDQUFsQjtBQVNEOzs7O0VBNUhvQ1csZUFBS2dDLEs7O2tCQUF2QjdDLFMiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBUSVBTIH0gZnJvbSAnd2VweS11dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdXNlck1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XG4gIC8qID09PT09PT09PT09PT0g5bel5YW35pa55rOV77yIbWl4aW5z5rKh5rOV5aSN5YaZ77yM5bCx5YaN5YaZ5LiA6YGN5LqG77yJID09PT09PT09PT09PT0gKi9cbiAgaXNGdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnZnVuY3Rpb24nXG4gIH1cblxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PSDnlKjmiLfmlrnms5UgPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICRnZXRVc2VySW5mbyhjYWxsYmFjaykge1xuICAgIC8vIOmhtue6p+WuuemUmVxuICAgIGlmICghdGhpcy4kcGFyZW50IHx8ICF0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEpIHJldHVyblxuICAgIC8vIOWPlue8k+WtmOS/oeaBr1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEoJ3VzZXInKVxuICAgIC8vIOS4jemHjeWkjeiOt+WPlueUqOaIt+S/oeaBr1xuICAgIGlmICh1c2VyICYmIHVzZXIubmlja05hbWUpIHtcbiAgICAgIHRoaXMuaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2sodXNlcilcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIHJldHVybiB1c2VyXG4gICAgfVxuICAgIC8vIOmmluasoeiOt+WPlueUqOaIt+S/oeaBr1xuICAgIHRoaXMuJGxvZ2luKCgpID0+IHtcbiAgICAgIC8vIOWGjeiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgdGhpcy5fd3hVc2VySW5mbyhjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgLy8g6L+b6KGM5b6u5L+h55m76ZmGXG4gICRsb2dpbihzdWNjZXNzID0gKCkgPT4ge30sIG5vQXV0b0xvZ2luKSB7XG4gICAgLy8g5YWI55m75b2VXG4gICAgd2VweS5sb2dpbih7XG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZXB5LmxvZ2luLnN1Y2Nlc3M6JywgcmVzKVxuXG4gICAgICAgIC8vIOWmguaenOS4jemcgOimgeiHquWKqOeZu+W9le+8jOWwsXJldHVyblxuICAgICAgICBpZiAobm9BdXRvTG9naW4pIHtcbiAgICAgICAgICAvLyDkuLLooYzlm57osINcbiAgICAgICAgICB0aGlzLmlzRnVuY3Rpb24oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qC55o2u5Lia5Yqh5o6l5Y+j5aSE55CGOuS4muWKoeeZu+mZhjrlvILmraVcbiAgICAgICAgLy8gdGhpcy4kcG9zdCh7IHVybDogc2VydmljZS5sb2dpbiwgZGF0YToge2NvZGU6IHJlcy5jb2RlfSB9LCB7XG4gICAgICAgIC8vICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge30sXG4gICAgICAgIC8vICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge31cbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyA9PT09PSDku6XkuIvpmo/mnLrnpLrkvosgPT09PT1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kcGFyZW50LiR1cGRhdGVHbG9iYWxEYXRhKCd1c2VyJywge1xuICAgICAgICAgICAgc2Vzc2lvbjogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpLFxuICAgICAgICAgICAgcGFja2FnZXM6IHtcbiAgICAgICAgICAgICAgdGltZXM6IDAsXG4gICAgICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICAgICAgICBzdGF0dXM6ICfmnKrlgJ/pmIUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyDkuLLooYzlm57osINcbiAgICAgICAgICB0aGlzLmlzRnVuY3Rpb24oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LCAxMDApXG4gICAgICB9LFxuICAgICAgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnd2VweS5sb2dpbi5mYWlsOicsIHJlcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PSDlhbbku5bmlrnms5UgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAvLyDojrflj5bnlKjmiLflhazlvIDkv6Hmga/vvIjlvq7kv6HvvIlcbiAgX3d4VXNlckluZm8oY2FsbGJhY2spIHtcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dlcHkuZ2V0VXNlckluZm8uc3VjY2VzczonLCByZXMpXG4gICAgICAgIC8vIOe8k+WtmOeUqOaIt+S/oeaBr1xuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy4kcGFyZW50LiR1cGRhdGVHbG9iYWxEYXRhKCd1c2VyJywgcmVzLnVzZXJJbmZvKVxuICAgICAgICB0aGlzLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHVzZXIpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZXB5LmdldFVzZXJJbmZvLmZhaWw6JywgcmVzKVxuICAgICAgICAvLyDnlKjmiLfmi5Lnu53mjojmnYM65aGr5YWF6buY6K6k5pWw5o2uXG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEoJ3VzZXInLCB7XG4gICAgICAgICAgbmlja05hbWU6ICfmnKrmjojmnYMnLFxuICAgICAgICAgIGF2YXRhclVybDogJy9pbWFnZXMvaWNvbi9pY29uLWF2YXRhckAyeC5wbmcnXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g5Liy6KGM5Zue6LCDXG4gICAgICAgIHRoaXMuaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2sodXNlcilcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuXG4gICAgICAgIC8vIOWwneivleaOiOadg1xuICAgICAgICB0aGlzLl93eEF1dGhNb2RhbChjYWxsYmFjaylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8g5o+Q56S655So5oi35byA5ZCv5o6I5p2DXG4gIF93eEF1dGhNb2RhbChjYWxsYmFjaykge1xuICAgIC8vIOWFiOWIpOaWreaYr+WQpuaUr+aMgeW8gOWQr+aOiOadg+mhteeahEFQSVxuXG4gICAgVElQUy5jb25maXJtKHtcbiAgICAgIHRpdGxlOiAn5o6I5p2D5o+Q56S6JyxcbiAgICAgIGNvbnRlbnQ6ICfluIzmnJvojrflvpfku6XkuIvmnYPpmZDvvJpcXG4gwrcg6I635Y+W5oKo55qE5YWs5byA5L+h5oGv77yI5pi156ew44CB5aS05YOP562J77yJJyxcbiAgICAgIGNvbmZpcm1UZXh0OiAn5Y675o6I5p2DJyxcbiAgICAgIGNhbmNlbFRleHQ6ICflhYjkuI3mjojmnYMnLFxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ+eCueWHu+S6huehruWumicpXG4gICAgICB0aGlzLl93eE9wZW5TZXR0aW5nKGNhbGxiYWNrKVxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICB9KVxuICB9XG5cbiAgLy8g5omT5byA5o6I5p2D6aG1XG4gIF93eE9wZW5TZXR0aW5nKGNhbGxiYWNrKSB7XG4gICAgd3gub3BlblNldHRpbmcgJiYgd3gub3BlblNldHRpbmcoe1xuICAgICAgc3VjY2VzczogKHthdXRoU2V0dGluZ30pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3d4Lm9wZW5TZXR0aW5nLnN1Y2Nlc3MnLCBhdXRoU2V0dGluZylcbiAgICAgICAgaWYgKGF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g55So5oi35omT5byA6K6+572u77yM6YeN5paw6I635Y+W5L+h5oGvXG4gICAgICAgICAgdGhpcy5fd3hVc2VySW5mbyhjYWxsYmFjaylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==