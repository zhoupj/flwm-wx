'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_wepy$component) {
  _inherits(List, _wepy$component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Object,
        default: []
      },
      title: {
        type: String,
        default: null
      },
      loading: {
        type: Boolean,
        default: false
      },
      noMore: {
        type: Boolean,
        default: false
      },
      /**
       * [type 列表类型：常规列表/收藏列表]
       * @type {list/collect}
       */
      type: {
        type: String,
        default: 'list'
      }
    }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return List;
}(_wepy2.default.component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLWxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwidGl0bGUiLCJTdHJpbmciLCJsb2FkaW5nIiwiQm9vbGVhbiIsIm5vTW9yZSIsImNvbXBvbmVudHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTO0FBRkwsT0FEQTtBQUtOQyxhQUFPO0FBQ0xILGNBQU1JLE1BREQ7QUFFTEYsaUJBQVM7QUFGSixPQUxEO0FBU05HLGVBQVM7QUFDUEwsY0FBTU0sT0FEQztBQUVQSixpQkFBUztBQUZGLE9BVEg7QUFhTkssY0FBUTtBQUNOUCxjQUFNTSxPQURBO0FBRU5KLGlCQUFTO0FBRkgsT0FiRjtBQWlCTjs7OztBQUlBRixZQUFNO0FBQ0pBLGNBQU1JLE1BREY7QUFFSkYsaUJBQVM7QUFGTDtBQXJCQSxLLFFBMkJSTSxVLEdBQWEsRTs7OztFQTVCbUJDLGVBQUtDLFM7O2tCQUFsQmIsSSIsImZpbGUiOiJncm91cC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBub01vcmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFt0eXBlIOWIl+ihqOexu+Wei++8muW4uOinhOWIl+ihqC/mlLbol4/liJfooahdXG4gICAgICAgKiBAdHlwZSB7bGlzdC9jb2xsZWN0fVxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gIH1cblxuIl19