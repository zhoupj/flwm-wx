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
      pages: ['pages/main', 'pages/index', 'pages/list', 'pages/user'],
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
          pagePath: 'pages/index',
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
      console.info('[' + (obj ? 'UPDATE' : 'GET') + ' GlobalData ' + name + ']:', this.globalData[name]);
      return this.globalData[name];
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwibGlzdCIsInBhZ2VQYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImljb25QYXRoIiwidGV4dCIsIm5ldHdvcmtUaW1lb3V0IiwicmVxdWVzdCIsImRvd25sb2FkRmlsZSIsImRlYnVnIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwib3B0aW9ucyIsIml0ZW0iLCJpc0FycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJhcHBseSIsIm5hbWUiLCJvYmoiLCJpbmZvIiwiaXNPYmplY3QiLCJhc3NpZ24iLCJpc1VuZGVmaW5lZCIsIiRhcHBseSIsImNvbnNvbGUiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7Ozs7QUF3REUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQXJEZkMsTUFxRGUsR0FyRE47QUFDUEMsYUFBTyxDQUNMLFlBREssRUFFTCxhQUZLLEVBR0wsWUFISyxFQUlMLFlBSkssQ0FEQTtBQU9QQyxjQUFRO0FBQ05DLGdDQUF3QixNQURsQjtBQUVOQyxnQ0FBd0IsT0FGbEI7QUFHTkMsc0NBQThCLFNBSHhCO0FBSU5DLHlCQUFpQixTQUpYO0FBS05DLDZCQUFxQixPQUxmO0FBTU5DLCtCQUF1QjtBQU5qQixPQVBEO0FBZVBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkwseUJBQWlCLE1BSFg7QUFJTk0scUJBQWEsT0FKUDtBQUtOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsYUFETDtBQUVMQyw0QkFBa0IsdUNBRmI7QUFHTEMsb0JBQVUsZ0NBSEw7QUFJTEMsZ0JBQU07QUFKRCxTQUFELEVBS0g7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyw0QkFBa0IseUNBRmpCO0FBR0RDLG9CQUFVLGtDQUhUO0FBSURDLGdCQUFNO0FBSkwsU0FMRyxFQVVIO0FBQ0RILG9CQUFVLFlBRFQ7QUFFREMsNEJBQWtCLHVDQUZqQjtBQUdEQyxvQkFBVSxnQ0FIVDtBQUlEQyxnQkFBTTtBQUpMLFNBVkcsRUFlSDtBQUNESCxvQkFBVSxZQURUO0FBRURDLDRCQUFrQix1Q0FGakI7QUFHREMsb0JBQVUsZ0NBSFQ7QUFJREMsZ0JBQU07QUFKTCxTQWZHO0FBTEEsT0FmRDtBQTBDUEMsc0JBQWdCO0FBQ2RDLGlCQUFTLElBREs7QUFFZEMsc0JBQWM7QUFGQSxPQTFDVDtBQThDUEMsYUFBTztBQTlDQSxLQXFETTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVVLENBQ1Y7OzsyQkFFTUMsTyxFQUFTLENBQ2Y7O0FBRUQ7Ozs7NkJBQ1NDLEksRUFBTTtBQUNiLGFBQU8sUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUFoQixJQUE0QixDQUFDLEtBQUtDLE9BQUwsQ0FBYUQsSUFBYixDQUFwQztBQUNEOzs7NEJBQ09BLEksRUFBTTtBQUNaLGFBQU9FLE9BQU9DLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxLQUExQixDQUFnQ0wsSUFBaEMsTUFBMEMsZ0JBQWpEO0FBQ0Q7OztnQ0FDV0EsSSxFQUFNO0FBQ2hCLGFBQU8sT0FBT0EsSUFBUCxLQUFnQixXQUF2QjtBQUNEOztBQUVEOzs7O3NDQUNrQk0sSSxFQUFNQyxHLEVBQUs7QUFDM0I7QUFDQSxVQUFJLENBQUMsS0FBS1gsVUFBVixFQUFzQjtBQUN0QjtBQUNBLFVBQUksT0FBT1UsSUFBUCxLQUFnQixRQUFoQixJQUE0QkEsU0FBUyxFQUF6QyxFQUE2QyxPQUFPLEVBQVA7QUFDN0M7QUFDQSxVQUFNRSxPQUFPLEtBQUtaLFVBQUwsQ0FBZ0JVLElBQWhCLEtBQXlCLEVBQXRDO0FBQ0E7QUFDQSxVQUFJQyxPQUFPLEtBQUtFLFFBQUwsQ0FBY0YsR0FBZCxDQUFYLEVBQStCO0FBQzdCO0FBQ0EsYUFBS1gsVUFBTCxDQUFnQlUsSUFBaEIsSUFBd0JKLE9BQU9RLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixJQUFsQixFQUF3QkQsR0FBeEIsQ0FBeEI7QUFDRCxPQUhELE1BR08sSUFBSSxDQUFDLEtBQUtJLFdBQUwsQ0FBaUJKLEdBQWpCLENBQUwsRUFBNEI7QUFDakM7QUFDQSxhQUFLWCxVQUFMLENBQWdCVSxJQUFoQixJQUF3QkMsR0FBeEI7QUFDRDtBQUNELFdBQUtLLE1BQUwsSUFBZSxLQUFLQSxNQUFMLEVBQWY7QUFDQUMsY0FBUUwsSUFBUixRQUFpQkQsTUFBTSxRQUFOLEdBQWlCLEtBQWxDLHFCQUFzREQsSUFBdEQsU0FBZ0UsS0FBS1YsVUFBTCxDQUFnQlUsSUFBaEIsQ0FBaEU7QUFDQSxhQUFPLEtBQUtWLFVBQUwsQ0FBZ0JVLElBQWhCLENBQVA7QUFDRDs7OztFQS9GMEJRLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5pbXBvcnQgeyBzZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpXG5zZXRTdG9yZShzdG9yZSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL21haW4nLFxuICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICdwYWdlcy9saXN0JyxcbiAgICAgICdwYWdlcy91c2VyJ1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IKh56Wo5YiG5p6QJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzA0OUJGRicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWFlYWVhJyxcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjYTliN2I3JyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMTFjZDZlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyU3R5bGU6ICdibGFjaycsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1ob21lLWFjdGl2ZS5wbmcnLFxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1ob21lLnBuZycsXG4gICAgICAgIHRleHQ6ICfpppbpobUnXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbGlzdCcsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tc2VhcmNoLWFjdGl2ZS5wbmcnLFxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1zZWFyY2gucG5nJyxcbiAgICAgICAgdGV4dDogJ+afpeaJvidcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9tYWluJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1jYXJ0LWFjdGl2ZS5wbmcnLFxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1jYXJ0LnBuZycsXG4gICAgICAgIHRleHQ6ICfoh6rpgIknXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdXNlcicsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tdXNlci1hY3RpdmUucG5nJyxcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tdXNlci5wbmcnLFxuICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgfV1cbiAgICB9LFxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XG4gICAgICByZXF1ZXN0OiA1MDAwLFxuICAgICAgZG93bmxvYWRGaWxlOiAxMDAwMFxuICAgIH0sXG4gICAgZGVidWc6IHRydWVcbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gIH1cblxuICBvblNob3cob3B0aW9ucykge1xuICB9XG5cbiAgLyogPT09PT09PT09PT09PSDlt6Xlhbfmlrnms5UgPT09PT09PT09PT09PSAqL1xuICBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhdGhpcy5pc0FycmF5KGl0ZW0pXG4gIH1cbiAgaXNBcnJheShpdGVtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkoaXRlbSkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfVxuICBpc1VuZGVmaW5lZChpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAndW5kZWZpbmVkJ1xuICB9XG5cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PSDmm7TmlrDnvJPlrZjkv6Hmga8gPT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICR1cGRhdGVHbG9iYWxEYXRhKG5hbWUsIG9iaikge1xuICAgIC8vIOagoemqjDogZ2xvYmFsRGF0YVxuICAgIGlmICghdGhpcy5nbG9iYWxEYXRhKSByZXR1cm5cbiAgICAvLyDmoKHpqow6IOaTjeS9nOWtl+autVxuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgbmFtZSA9PT0gJycpIHJldHVybiB7fVxuICAgIC8vIOWPluW3suacieS/oeaBr1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLmdsb2JhbERhdGFbbmFtZV0gfHwge31cbiAgICAvLyDmm7TmlrDnvJPlrZhcbiAgICBpZiAob2JqICYmIHRoaXMuaXNPYmplY3Qob2JqKSkge1xuICAgICAgLy8gT2JqZWN05ZCI5bm256ys5LiA5bGCXG4gICAgICB0aGlzLmdsb2JhbERhdGFbbmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBpbmZvLCBvYmopXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc1VuZGVmaW5lZChvYmopKSB7XG4gICAgICAvLyDlhbbku5bpnZ51bmRlZmluZWTmlbDmja7nm7TmjqXopobnm5ZcbiAgICAgIHRoaXMuZ2xvYmFsRGF0YVtuYW1lXSA9IG9ialxuICAgIH1cbiAgICB0aGlzLiRhcHBseSAmJiB0aGlzLiRhcHBseSgpXG4gICAgY29uc29sZS5pbmZvKGBbJHtvYmogPyAnVVBEQVRFJyA6ICdHRVQnfSBHbG9iYWxEYXRhICR7bmFtZX1dOmAsIHRoaXMuZ2xvYmFsRGF0YVtuYW1lXSlcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhW25hbWVdXG4gIH1cbn1cbiJdfQ==