'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _user = require('./../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { UTILS, HTTP, TIPS } from 'wepy-utils'


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_user2.default], _this.config = {
      navigationBarTitleText: '用户'
    }, _this.components = {}, _this.data = {
      userInfo: {
        nickName: '加载中...',
        // 头像占位图
        avatarUrl: '../images/icon/icon-avatar@2x.png'
      }
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {
      var _this2 = this;

      // 初始化页面数据
      this.$getUserInfo(function (info) {
        // const uinfo = this.getObject(info)
        // const userInfo = this.getObject(this.userInfo)
        _this2.userInfo = info;
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJtaXhpbnMiLCJ1c2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsIiRnZXRVc2VySW5mbyIsImluZm8iLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEMsUUFFVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBVSxRQURGO0FBRVI7QUFDQUMsbUJBQVc7QUFISDtBQURMLEssUUFRUEMsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0Y7QUFDTCxlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBZVhDLE0sR0FBUyxFOzs7Ozs2QkFUQTtBQUFBOztBQUNQO0FBQ0EsV0FBS0MsWUFBTCxDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDMUI7QUFDQTtBQUNBLGVBQUtSLFFBQUwsR0FBZ0JRLElBQWhCO0FBQ0QsT0FKRDtBQUtEOzs7O0VBOUJnQ0MsZUFBS0MsSTs7a0JBQW5CakIsSyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIGltcG9ydCB7IFVUSUxTLCBIVFRQLCBUSVBTIH0gZnJvbSAnd2VweS11dGlscydcbiAgaW1wb3J0IHVzZXIgZnJvbSAnLi4vbWl4aW5zL3VzZXInXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFt1c2VyXVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUqOaItydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nLFxuICAgICAgICAvLyDlpLTlg4/ljaDkvY3lm75cbiAgICAgICAgYXZhdGFyVXJsOiAnLi4vaW1hZ2VzL2ljb24vaWNvbi1hdmF0YXJAMngucG5nJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXG4gICAgICB0aGlzLiRnZXRVc2VySW5mbygoaW5mbykgPT4ge1xuICAgICAgICAvLyBjb25zdCB1aW5mbyA9IHRoaXMuZ2V0T2JqZWN0KGluZm8pXG4gICAgICAgIC8vIGNvbnN0IHVzZXJJbmZvID0gdGhpcy5nZXRPYmplY3QodGhpcy51c2VySW5mbylcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IGluZm9cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cbiAgfVxuIl19