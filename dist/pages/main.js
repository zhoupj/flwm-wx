'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _groupList = require('./../components/group-list.js');

var _groupList2 = _interopRequireDefault(_groupList);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _index = require('./../api/index.js');

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_http2.default], _this.config = {
      navigationBarTitleText: '主页'
    }, _this.$repeat = {}, _this.$props = { "list": { "xmlns:v-bind": "", "v-bind:list.sync": "list", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMoreList" } }, _this.$events = {}, _this.components = {
      list: _groupList2.default
    }, _this.data = {
      page: 1,
      pageSize: 20,
      loading: false,
      noMoreList: false,
      list: [{
        id: 999,
        title: '许仙'
      }, {
        id: 456,
        title: '雷峰 '
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
    value: function initPageData() {
      this.post(_index.api.register, {
        code: '123456',
        name: '测试一下'
      }, false).then(function (res) {
        console.log(res);
        // 停止下拉状态
        // wx.stopPullDownRefresh()
      });
      this.post(_index.api.login, {
        code: '123456'
      }, false).then(function (res) {});
      this.post(_index.api.atclist, {
        pn: 1,
        sz: 10
      }, false).then(function (res) {});
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/main'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJtaXhpbnMiLCJodHRwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxpc3QiLCJMaXN0IiwiZGF0YSIsInBhZ2UiLCJwYWdlU2l6ZSIsImxvYWRpbmciLCJub01vcmVMaXN0IiwiaWQiLCJ0aXRsZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsImluaXRQYWdlRGF0YSIsInBvc3QiLCJhcGkiLCJyZWdpc3RlciIsImNvZGUiLCJuYW1lIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsImF0Y2xpc3QiLCJwbiIsInN6Iiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsQyxRQUVUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixNQUF0QyxFQUE2Qyx1QkFBc0IsU0FBbkUsRUFBNkUsc0JBQXFCLFlBQWxHLEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsWUFBTUM7QUFERSxLLFFBSVZDLEksR0FBTztBQUNMQyxZQUFNLENBREQ7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxlQUFTLEtBSEo7QUFJTEMsa0JBQVksS0FKUDtBQUtMTixZQUFNLENBQUM7QUFDTE8sWUFBSSxHQURDO0FBRUxDLGVBQU87QUFGRixPQUFELEVBR0g7QUFDREQsWUFBSSxHQURIO0FBRURDLGVBQU87QUFGTixPQUhHLEVBTUg7QUFDREQsWUFBSSxHQURIO0FBRURDLGVBQU87QUFGTixPQU5HLEVBU0g7QUFDREQsWUFBSSxHQURIO0FBRURDLGVBQU87QUFGTixPQVRHLEVBWUg7QUFDREQsWUFBSSxHQURIO0FBRURDLGVBQU87QUFGTixPQVpHO0FBTEQsSyxRQXVCUEMsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0Y7QUFDTCxlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBTVhDLE0sR0FBUyxFOzs7Ozt3Q0FHVztBQUNsQixXQUFLQyxZQUFMO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUtBLFlBQUw7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS0MsSUFBTCxDQUFVQyxXQUFJQyxRQUFkLEVBQXdCO0FBQ3RCQyxjQUFNLFFBRGdCO0FBRXRCQyxjQUFNO0FBRmdCLE9BQXhCLEVBR0csS0FISCxFQUdVQyxJQUhWLENBR2UsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RCQyxnQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0E7QUFDQTtBQUNELE9BUEQ7QUFRQSxXQUFLTixJQUFMLENBQVVDLFdBQUlRLEtBQWQsRUFBcUI7QUFDbkJOLGNBQU07QUFEYSxPQUFyQixFQUVHLEtBRkgsRUFFVUUsSUFGVixDQUVlLFVBQUNDLEdBQUQsRUFBUyxDQUV2QixDQUpEO0FBS0EsV0FBS04sSUFBTCxDQUFVQyxXQUFJUyxPQUFkLEVBQXVCO0FBQ3JCQyxZQUFJLENBRGlCO0FBRXJCQyxZQUFJO0FBRmlCLE9BQXZCLEVBR0csS0FISCxFQUdVUCxJQUhWLENBR2UsVUFBQ0MsR0FBRCxFQUFTLENBRXZCLENBTEQ7QUFNRDs7OztFQXpFZ0NPLGVBQUt4QixJOztrQkFBbkJaLEsiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwLWxpc3QnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvaW5kZXguanMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtodHRwXVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4u+mhtSdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwidi1iaW5kOmxvYWRpbmcuc3luY1wiOlwibG9hZGluZ1wiLFwidi1iaW5kOm5vTW9yZS5zeW5jXCI6XCJub01vcmVMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGxpc3Q6IExpc3RcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgcGFnZTogMSxcbiAgICAgIHBhZ2VTaXplOiAyMCxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbm9Nb3JlTGlzdDogZmFsc2UsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBpZDogOTk5LFxuICAgICAgICB0aXRsZTogJ+iuuOS7mSdcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDQ1NixcbiAgICAgICAgdGl0bGU6ICfpm7fls7AgJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogNzg5LFxuICAgICAgICB0aXRsZTogJ+Wwj+WnkeWomCdcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDc4OSxcbiAgICAgICAgdGl0bGU6ICflpKnnur/lm74nXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA3ODksXG4gICAgICAgIHRpdGxlOiAnS+i3r+WbvidcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICBpbml0UGFnZURhdGEoKSB7XG4gICAgICB0aGlzLnBvc3QoYXBpLnJlZ2lzdGVyLCB7XG4gICAgICAgIGNvZGU6ICcxMjM0NTYnLFxuICAgICAgICBuYW1lOiAn5rWL6K+V5LiA5LiLJ1xuICAgICAgfSwgZmFsc2UpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAvLyDlgZzmraLkuIvmi4nnirbmgIFcbiAgICAgICAgLy8gd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICB9KVxuICAgICAgdGhpcy5wb3N0KGFwaS5sb2dpbiwge1xuICAgICAgICBjb2RlOiAnMTIzNDU2J1xuICAgICAgfSwgZmFsc2UpLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICB9KVxuICAgICAgdGhpcy5wb3N0KGFwaS5hdGNsaXN0LCB7XG4gICAgICAgIHBuOiAxLFxuICAgICAgICBzejogMTBcbiAgICAgIH0sIGZhbHNlKS50aGVuKChyZXMpID0+IHtcblxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==