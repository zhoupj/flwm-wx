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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      list: []
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
    key: 'onShow',
    value: function onShow() {
      this.initPageData();
    }
  }, {
    key: 'initPageData',
    value: function initPageData() {
      var _this2 = this;

      wx.showToast({ title: 'fdsklfjsdl' });
      this.post(_index.api.atclist, {
        pn: 0,
        sz: 10
      }, false).then(function (res) {
        _this2.list = [].concat(_toConsumableArray(_this2.list), _toConsumableArray(res));
        _this2.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/main'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJtaXhpbnMiLCJodHRwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxpc3QiLCJMaXN0IiwiZGF0YSIsInBhZ2UiLCJwYWdlU2l6ZSIsImxvYWRpbmciLCJub01vcmVMaXN0IiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwiZXZlbnRzIiwiaW5pdFBhZ2VEYXRhIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsInBvc3QiLCJhcGkiLCJhdGNsaXN0IiwicG4iLCJzeiIsInRoZW4iLCJyZXMiLCIkYXBwbHkiLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEMsUUFFVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsTUFBdEMsRUFBNkMsdUJBQXNCLFNBQW5FLEVBQTZFLHNCQUFxQixZQUFsRyxFQUFSLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLFlBQU1DO0FBREUsSyxRQUlWQyxJLEdBQU87QUFDTEMsWUFBTSxDQUREO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsZUFBUyxLQUhKO0FBSUxDLGtCQUFZLEtBSlA7QUFLTE4sWUFBTTtBQUxELEssUUFRUE8sUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0Y7QUFDTCxlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBTVhDLE0sR0FBUyxFOzs7Ozt3Q0FHVztBQUNsQixXQUFLQyxZQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtBLFlBQUw7QUFDRDs7O21DQUVjO0FBQUE7O0FBQ2JDLFNBQUdDLFNBQUgsQ0FBYSxFQUFFQyxPQUFPLFlBQVQsRUFBYjtBQUNBLFdBQUtDLElBQUwsQ0FBVUMsV0FBSUMsT0FBZCxFQUF1QjtBQUNyQkMsWUFBSSxDQURpQjtBQUVyQkMsWUFBSTtBQUZpQixPQUF2QixFQUdHLEtBSEgsRUFHVUMsSUFIVixDQUdlLFVBQUNDLEdBQUQsRUFBUztBQUN0QixlQUFLckIsSUFBTCxnQ0FDSyxPQUFLQSxJQURWLHNCQUVLcUIsR0FGTDtBQUlBLGVBQUtDLE1BQUw7QUFDRCxPQVREO0FBVUQ7Ozs7RUFsRGdDQyxlQUFLcEIsSTs7a0JBQW5CWixLIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cC1saXN0J1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpL2luZGV4LmpzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbaHR0cF1cblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuLvpobUnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJsaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIixcInYtYmluZDpsb2FkaW5nLnN5bmNcIjpcImxvYWRpbmdcIixcInYtYmluZDpub01vcmUuc3luY1wiOlwibm9Nb3JlTGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBsaXN0OiBMaXN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBwYWdlU2l6ZTogMjAsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIG5vTW9yZUxpc3Q6IGZhbHNlLFxuICAgICAgbGlzdDogW11cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xuICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICdmZHNrbGZqc2RsJyB9KVxuICAgICAgdGhpcy5wb3N0KGFwaS5hdGNsaXN0LCB7XG4gICAgICAgIHBuOiAwLFxuICAgICAgICBzejogMTBcbiAgICAgIH0sIGZhbHNlKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5saXN0ID0gW1xuICAgICAgICAgIC4uLnRoaXMubGlzdCxcbiAgICAgICAgICAuLi5yZXNcbiAgICAgICAgXVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19