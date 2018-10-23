'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _groupList = require('./../components/group-list.js');

var _groupList2 = _interopRequireDefault(_groupList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '列表'
    }, _this.$repeat = {}, _this.$props = { "list": { "xmlns:v-bind": "", "v-bind:list.sync": "list", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMoreList" } }, _this.$events = {}, _this.components = {
      list: _groupList2.default
    }, _this.data = {
      page: 1,
      pageSize: 20,
      loading: false,
      noMoreList: false,
      list: [{
        id: 999,
        title: '才人'
      }, {
        id: 456,
        title: '小三'
      }, {
        id: 789,
        title: '小姑娘'
      }, {
        id: 789,
        title: '天线图'
      }, {
        id: 789,
        title: 'K路图'
      }]
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.initPageData();
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      this.initPageData();
    }
  }, {
    key: 'initPageData',
    value: function initPageData() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibGlzdCIsIkxpc3QiLCJkYXRhIiwicGFnZSIsInBhZ2VTaXplIiwibG9hZGluZyIsIm5vTW9yZUxpc3QiLCJpZCIsInRpdGxlIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwiZXZlbnRzIiwiaW5pdFBhZ2VEYXRhIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFFbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLE1BQXRDLEVBQTZDLHVCQUFzQixTQUFuRSxFQUE2RSxzQkFBcUIsWUFBbEcsRUFBUixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxZQUFNQztBQURFLEssUUFJVkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FERDtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGVBQVMsS0FISjtBQUlMQyxrQkFBWSxLQUpQO0FBS0xOLFlBQU0sQ0FBQztBQUNMTyxZQUFJLEdBREM7QUFFTEMsZUFBTztBQUZGLE9BQUQsRUFHSDtBQUNERCxZQUFJLEdBREg7QUFFREMsZUFBTztBQUZOLE9BSEcsRUFNSDtBQUNERCxZQUFJLEdBREg7QUFFREMsZUFBTztBQUZOLE9BTkcsRUFTSDtBQUNERCxZQUFJLEdBREg7QUFFREMsZUFBTztBQUZOLE9BVEcsRUFZSDtBQUNERCxZQUFJLEdBREg7QUFFREMsZUFBTztBQUZOLE9BWkc7QUFMRCxLLFFBdUJQQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTSxHQUFTLEU7Ozs7O3dDQUdXO0FBQ2xCLFdBQUtDLFlBQUw7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS0EsWUFBTDtBQUNEOzs7bUNBRWMsQ0FDZDs7OztFQXJEZ0NDLGVBQUtYLEk7O2tCQUFuQlYsSyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAtbGlzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiX6KGoJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCIsXCJ2LWJpbmQ6bG9hZGluZy5zeW5jXCI6XCJsb2FkaW5nXCIsXCJ2LWJpbmQ6bm9Nb3JlLnN5bmNcIjpcIm5vTW9yZUxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbGlzdDogTGlzdFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBwYWdlOiAxLFxuICAgICAgcGFnZVNpemU6IDIwLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBub01vcmVMaXN0OiBmYWxzZSxcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIGlkOiA5OTksXG4gICAgICAgIHRpdGxlOiAn5omN5Lq6J1xuICAgICAgfSwge1xuICAgICAgICBpZDogNDU2LFxuICAgICAgICB0aXRsZTogJ+Wwj+S4iSdcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDc4OSxcbiAgICAgICAgdGl0bGU6ICflsI/lp5HlqJgnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA3ODksXG4gICAgICAgIHRpdGxlOiAn5aSp57q/5Zu+J1xuICAgICAgfSwge1xuICAgICAgICBpZDogNzg5LFxuICAgICAgICB0aXRsZTogJ0vot6/lm74nXG4gICAgICB9XVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xuICAgIH1cbiAgfVxuIl19