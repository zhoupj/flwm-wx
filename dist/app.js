'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/main', 'pages/vip/index', 'pages/index', 'pages/list', 'pages/user'],
      window: {
        navigationBarTitleText: '股票分析',
        navigationBarTextStyle: 'white',
        navigationBarBackgroundColor: '#049BFF',
        backgroundColor: '#eaeaea',
        backgroundTextStyle: 'light',
        enablePullDownRefresh: true
      },
      tabBar: {
        color: '#a9b7b7',
        selectedColor: '#11cd6e',
        backgroundColor: '#fff',
        borderStyle: 'black',
        list: [{
          pagePath: 'pages/main',
          selectedIconPath: './images/tabbars/icon-home-active.png',
          iconPath: './images/tabbars/icon-home.png',
          text: '首页'
        }, {
          pagePath: 'pages/list',
          selectedIconPath: './images/tabbars/icon-search-active.png',
          iconPath: './images/tabbars/icon-search.png',
          text: '查找'
        }, {
          pagePath: 'pages/main',
          selectedIconPath: './images/tabbars/icon-cart-active.png',
          iconPath: './images/tabbars/icon-cart.png',
          text: '自选'
        }, {
          pagePath: 'pages/user',
          selectedIconPath: './images/tabbars/icon-user-active.png',
          iconPath: './images/tabbars/icon-user.png',
          text: '我的'
        }]
      },
      networkTimeout: {
        request: 5000,
        downloadFile: 10000
      },
      debug: true
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }, {
    key: 'onShow',
    value: function onShow(options) {}

    /* ============= 工具方法 ============= */

  }, {
    key: 'isObject',
    value: function isObject(item) {
      return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !this.isArray(item);
    }
  }, {
    key: 'isArray',
    value: function isArray(item) {
      return Object.prototype.toString.apply(item) === '[object Array]';
    }
  }, {
    key: 'isUndefined',
    value: function isUndefined(item) {
      return typeof item === 'undefined';
    }

    /* ========================= 更新缓存信息 ======================== */

  }, {
    key: '$updateGlobalData',
    value: function $updateGlobalData(name, obj) {
      // 校验: globalData
      if (!this.globalData) return;
      // 校验: 操作字段
      if (typeof name !== 'string' || name === '') return {};
      // 取已有信息
      var info = this.globalData[name] || {};
      // 更新缓存
      if (obj && this.isObject(obj)) {
        // Object合并第一层
        this.globalData[name] = Object.assign({}, info, obj);
      } else if (!this.isUndefined(obj)) {
        // 其他非undefined数据直接覆盖
        this.globalData[name] = obj;
      }
      this.$apply && this.$apply();
      // console.info(`[${obj ? 'UPDATE' : 'GET'} GlobalData ${name}]:`, this.globalData[name])
      return this.globalData[name];
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwibGlzdCIsInBhZ2VQYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImljb25QYXRoIiwidGV4dCIsIm5ldHdvcmtUaW1lb3V0IiwicmVxdWVzdCIsImRvd25sb2FkRmlsZSIsImRlYnVnIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwib3B0aW9ucyIsIml0ZW0iLCJpc0FycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJhcHBseSIsIm5hbWUiLCJvYmoiLCJpbmZvIiwiaXNPYmplY3QiLCJhc3NpZ24iLCJpc1VuZGVmaW5lZCIsIiRhcHBseSIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOzs7OztBQXlERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBdERmQyxNQXNEZSxHQXRETjtBQUNQQyxhQUFPLENBQ0wsWUFESyxFQUVMLGlCQUZLLEVBR0wsYUFISyxFQUlMLFlBSkssRUFLTCxZQUxLLENBREE7QUFRUEMsY0FBUTtBQUNOQyxnQ0FBd0IsTUFEbEI7QUFFTkMsZ0NBQXdCLE9BRmxCO0FBR05DLHNDQUE4QixTQUh4QjtBQUlOQyx5QkFBaUIsU0FKWDtBQUtOQyw2QkFBcUIsT0FMZjtBQU1OQywrQkFBdUI7QUFOakIsT0FSRDtBQWdCUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOTCx5QkFBaUIsTUFIWDtBQUlOTSxxQkFBYSxPQUpQO0FBS05DLGNBQU0sQ0FBQztBQUNMQyxvQkFBVSxZQURMO0FBRUxDLDRCQUFrQix1Q0FGYjtBQUdMQyxvQkFBVSxnQ0FITDtBQUlMQyxnQkFBTTtBQUpELFNBQUQsRUFLSDtBQUNESCxvQkFBVSxZQURUO0FBRURDLDRCQUFrQix5Q0FGakI7QUFHREMsb0JBQVUsa0NBSFQ7QUFJREMsZ0JBQU07QUFKTCxTQUxHLEVBVUg7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyw0QkFBa0IsdUNBRmpCO0FBR0RDLG9CQUFVLGdDQUhUO0FBSURDLGdCQUFNO0FBSkwsU0FWRyxFQWVIO0FBQ0RILG9CQUFVLFlBRFQ7QUFFREMsNEJBQWtCLHVDQUZqQjtBQUdEQyxvQkFBVSxnQ0FIVDtBQUlEQyxnQkFBTTtBQUpMLFNBZkc7QUFMQSxPQWhCRDtBQTJDUEMsc0JBQWdCO0FBQ2RDLGlCQUFTLElBREs7QUFFZEMsc0JBQWM7QUFGQSxPQTNDVDtBQStDUEMsYUFBTztBQS9DQSxLQXNETTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVVLENBQ1Y7OzsyQkFFTUMsTyxFQUFTLENBQ2Y7O0FBRUQ7Ozs7NkJBQ1NDLEksRUFBTTtBQUNiLGFBQU8sUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUFoQixJQUE0QixDQUFDLEtBQUtDLE9BQUwsQ0FBYUQsSUFBYixDQUFwQztBQUNEOzs7NEJBQ09BLEksRUFBTTtBQUNaLGFBQU9FLE9BQU9DLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxLQUExQixDQUFnQ0wsSUFBaEMsTUFBMEMsZ0JBQWpEO0FBQ0Q7OztnQ0FDV0EsSSxFQUFNO0FBQ2hCLGFBQU8sT0FBT0EsSUFBUCxLQUFnQixXQUF2QjtBQUNEOztBQUVEOzs7O3NDQUNrQk0sSSxFQUFNQyxHLEVBQUs7QUFDM0I7QUFDQSxVQUFJLENBQUMsS0FBS1gsVUFBVixFQUFzQjtBQUN0QjtBQUNBLFVBQUksT0FBT1UsSUFBUCxLQUFnQixRQUFoQixJQUE0QkEsU0FBUyxFQUF6QyxFQUE2QyxPQUFPLEVBQVA7QUFDN0M7QUFDQSxVQUFNRSxPQUFPLEtBQUtaLFVBQUwsQ0FBZ0JVLElBQWhCLEtBQXlCLEVBQXRDO0FBQ0E7QUFDQSxVQUFJQyxPQUFPLEtBQUtFLFFBQUwsQ0FBY0YsR0FBZCxDQUFYLEVBQStCO0FBQzdCO0FBQ0EsYUFBS1gsVUFBTCxDQUFnQlUsSUFBaEIsSUFBd0JKLE9BQU9RLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixJQUFsQixFQUF3QkQsR0FBeEIsQ0FBeEI7QUFDRCxPQUhELE1BR08sSUFBSSxDQUFDLEtBQUtJLFdBQUwsQ0FBaUJKLEdBQWpCLENBQUwsRUFBNEI7QUFDakM7QUFDQSxhQUFLWCxVQUFMLENBQWdCVSxJQUFoQixJQUF3QkMsR0FBeEI7QUFDRDtBQUNELFdBQUtLLE1BQUwsSUFBZSxLQUFLQSxNQUFMLEVBQWY7QUFDQTtBQUNBLGFBQU8sS0FBS2hCLFVBQUwsQ0FBZ0JVLElBQWhCLENBQVA7QUFDRDs7OztFQWhHMEJPLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5pbXBvcnQgeyBzZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpXG5zZXRTdG9yZShzdG9yZSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL21haW4nLFxuICAgICAgJ3BhZ2VzL3ZpcC9pbmRleCcsXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2xpc3QnLFxuICAgICAgJ3BhZ2VzL3VzZXInXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogqHnpajliIbmnpAnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMDQ5QkZGJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlYWVhZWEnLFxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyNhOWI3YjcnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMxMWNkNmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXJTdHlsZTogJ2JsYWNrJyxcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbWFpbicsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24taG9tZS1hY3RpdmUucG5nJyxcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24taG9tZS5wbmcnLFxuICAgICAgICB0ZXh0OiAn6aaW6aG1J1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2xpc3QnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9pY29uLXNlYXJjaC1hY3RpdmUucG5nJyxcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tc2VhcmNoLnBuZycsXG4gICAgICAgIHRleHQ6ICfmn6Xmib4nXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbWFpbicsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tY2FydC1hY3RpdmUucG5nJyxcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tY2FydC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6Ieq6YCJJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3VzZXInLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9pY29uLXVzZXItYWN0aXZlLnBuZycsXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9pY29uLXVzZXIucG5nJyxcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgIH1dXG4gICAgfSxcbiAgICBuZXR3b3JrVGltZW91dDoge1xuICAgICAgcmVxdWVzdDogNTAwMCxcbiAgICAgIGRvd25sb2FkRmlsZTogMTAwMDBcbiAgICB9LFxuICAgIGRlYnVnOiB0cnVlXG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICB9XG5cbiAgb25TaG93KG9wdGlvbnMpIHtcbiAgfVxuXG4gIC8qID09PT09PT09PT09PT0g5bel5YW35pa55rOVID09PT09PT09PT09PT0gKi9cbiAgaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIXRoaXMuaXNBcnJheShpdGVtKVxuICB9XG4gIGlzQXJyYXkoaXRlbSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KGl0ZW0pID09PSAnW29iamVjdCBBcnJheV0nXG4gIH1cbiAgaXNVbmRlZmluZWQoaXRlbSkge1xuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ3VuZGVmaW5lZCdcbiAgfVxuXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT0g5pu05paw57yT5a2Y5L+h5oGvID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAkdXBkYXRlR2xvYmFsRGF0YShuYW1lLCBvYmopIHtcbiAgICAvLyDmoKHpqow6IGdsb2JhbERhdGFcbiAgICBpZiAoIXRoaXMuZ2xvYmFsRGF0YSkgcmV0dXJuXG4gICAgLy8g5qCh6aqMOiDmk43kvZzlrZfmrrVcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8IG5hbWUgPT09ICcnKSByZXR1cm4ge31cbiAgICAvLyDlj5blt7LmnInkv6Hmga9cbiAgICBjb25zdCBpbmZvID0gdGhpcy5nbG9iYWxEYXRhW25hbWVdIHx8IHt9XG4gICAgLy8g5pu05paw57yT5a2YXG4gICAgaWYgKG9iaiAmJiB0aGlzLmlzT2JqZWN0KG9iaikpIHtcbiAgICAgIC8vIE9iamVjdOWQiOW5tuesrOS4gOWxglxuICAgICAgdGhpcy5nbG9iYWxEYXRhW25hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgaW5mbywgb2JqKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNVbmRlZmluZWQob2JqKSkge1xuICAgICAgLy8g5YW25LuW6Z2edW5kZWZpbmVk5pWw5o2u55u05o6l6KaG55uWXG4gICAgICB0aGlzLmdsb2JhbERhdGFbbmFtZV0gPSBvYmpcbiAgICB9XG4gICAgdGhpcy4kYXBwbHkgJiYgdGhpcy4kYXBwbHkoKVxuICAgIC8vIGNvbnNvbGUuaW5mbyhgWyR7b2JqID8gJ1VQREFURScgOiAnR0VUJ30gR2xvYmFsRGF0YSAke25hbWV9XTpgLCB0aGlzLmdsb2JhbERhdGFbbmFtZV0pXG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YVtuYW1lXVxuICB9XG59XG4iXX0=