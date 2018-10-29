'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      navigationBarTitleText: '会员VIP'
    }, _this.components = {}, _this.data = {
      colorArray: [{
        id: '001',
        name: '八折出售（￥30）',
        cname: '一月VIP会员',
        color: 'DC9FB4'
      }, {
        id: '002',
        name: '八折出售（￥60）',
        cname: '二月VIP会员',
        color: 'E16B8C'
      }, {
        id: '003',
        name: '八折出售（￥90）',
        cname: '三月VIP会员',
        color: '8E354A'
      }, {
        id: '004',
        name: '八折出售（￥180）',
        cname: '半年VIP会员',
        color: '64363c'
      }, {
        id: '005',
        name: '八折出售（￥360）',
        cname: '全年VIP会员',
        color: 'D0104C'
      }, {
        id: '006',
        name: '八折出售（￥720）',
        cname: '二年VIP会员',
        color: '904840'
      }]
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.events = {}, _this.methods = {
      tap: function tap() {
        wx.navigateBack();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/vip/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiY29sb3JBcnJheSIsImlkIiwibmFtZSIsImNuYW1lIiwiY29sb3IiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJldmVudHMiLCJtZXRob2RzIiwidGFwIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJpbml0UGFnZURhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0xDLGtCQUFZLENBQUM7QUFDWEMsWUFBSSxLQURPO0FBRVhDLGNBQU0sV0FGSztBQUdYQyxlQUFPLFNBSEk7QUFJWEMsZUFBTztBQUpJLE9BQUQsRUFLVDtBQUNESCxZQUFJLEtBREg7QUFFREMsY0FBTSxXQUZMO0FBR0RDLGVBQU8sU0FITjtBQUlEQyxlQUFPO0FBSk4sT0FMUyxFQVVUO0FBQ0RILFlBQUksS0FESDtBQUVEQyxjQUFNLFdBRkw7QUFHREMsZUFBTyxTQUhOO0FBSURDLGVBQU87QUFKTixPQVZTLEVBZVQ7QUFDREgsWUFBSSxLQURIO0FBRURDLGNBQU0sWUFGTDtBQUdEQyxlQUFPLFNBSE47QUFJREMsZUFBTztBQUpOLE9BZlMsRUFvQlQ7QUFDREgsWUFBSSxLQURIO0FBRURDLGNBQU0sWUFGTDtBQUdEQyxlQUFPLFNBSE47QUFJREMsZUFBTztBQUpOLE9BcEJTLEVBeUJUO0FBQ0RILFlBQUksS0FESDtBQUVEQyxjQUFNLFlBRkw7QUFHREMsZUFBTyxTQUhOO0FBSURDLGVBQU87QUFKTixPQXpCUztBQURQLEssUUFrQ1BDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNGO0FBQ0wsZUFBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNEO0FBSFEsSyxRQU1YQyxNLEdBQVMsRSxRQWNUQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKQyxXQUFHQyxZQUFIO0FBQ0Q7QUFITyxLOzs7Ozt3Q0FYVTtBQUNsQixXQUFLQyxZQUFMO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUtBLFlBQUw7QUFDRDs7O21DQUVjLENBQ2Q7Ozs7RUEzRGdDQyxlQUFLQyxJOztrQkFBbkJwQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkvJrlkZhWSVAnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNvbG9yQXJyYXk6IFt7XG4gICAgICAgIGlkOiAnMDAxJyxcbiAgICAgICAgbmFtZTogJ+WFq+aKmOWHuuWUru+8iO+/pTMw77yJJyxcbiAgICAgICAgY25hbWU6ICfkuIDmnIhWSVDkvJrlkZgnLFxuICAgICAgICBjb2xvcjogJ0RDOUZCNCdcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICcwMDInLFxuICAgICAgICBuYW1lOiAn5YWr5oqY5Ye65ZSu77yI77+lNjDvvIknLFxuICAgICAgICBjbmFtZTogJ+S6jOaciFZJUOS8muWRmCcsXG4gICAgICAgIGNvbG9yOiAnRTE2QjhDJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzAwMycsXG4gICAgICAgIG5hbWU6ICflhavmipjlh7rllK7vvIjvv6U5MO+8iScsXG4gICAgICAgIGNuYW1lOiAn5LiJ5pyIVklQ5Lya5ZGYJyxcbiAgICAgICAgY29sb3I6ICc4RTM1NEEnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnMDA0JyxcbiAgICAgICAgbmFtZTogJ+WFq+aKmOWHuuWUru+8iO+/pTE4MO+8iScsXG4gICAgICAgIGNuYW1lOiAn5Y2K5bm0VklQ5Lya5ZGYJyxcbiAgICAgICAgY29sb3I6ICc2NDM2M2MnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnMDA1JyxcbiAgICAgICAgbmFtZTogJ+WFq+aKmOWHuuWUru+8iO+/pTM2MO+8iScsXG4gICAgICAgIGNuYW1lOiAn5YWo5bm0VklQ5Lya5ZGYJyxcbiAgICAgICAgY29sb3I6ICdEMDEwNEMnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnMDA2JyxcbiAgICAgICAgbmFtZTogJ+WFq+aKmOWHuuWUru+8iO+/pTcyMO+8iScsXG4gICAgICAgIGNuYW1lOiAn5LqM5bm0VklQ5Lya5ZGYJyxcbiAgICAgICAgY29sb3I6ICc5MDQ4NDAnXG4gICAgICB9XVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0YXAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=