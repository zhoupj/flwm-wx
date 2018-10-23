'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Index = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page)) || _class);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: '首页'
  };
  this.$repeat = {};
  this.$props = { "counter1": { "xmlns:v-on": "" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" }, "list": { "v-bind:data.sync": "list" }, "group": { "v-bind:grouplist.once": "item", "v-bind:indexa.once": "index" } };
  this.$events = { "counter1": { "v-on:index-emit": "counterEmit" } };
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    list: [{
      id: '9',
      title: '这是一个测试的过程啊啊职。。。'
    }],
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsIndlcHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiUGFuZWwiLCJjb3VudGVyMSIsIkNvdW50ZXIiLCJjb3VudGVyMiIsImxpc3QiLCJMaXN0IiwiZ3JvdXAiLCJHcm91cCIsInRvYXN0IiwiVG9hc3QiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwiaWQiLCJ0aXRsZSIsIm15bnVtIiwidXNlckluZm8iLCJuaWNrTmFtZSIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwiY291bnQiLCJuZXRyc3QiLCJncm91cExpc3QiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJwbHVzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJpbWciLCJ0aGVuIiwiZCIsInRhcCIsIiRuYW1lIiwiY29tbXVuaWNhdGUiLCIkYnJvYWRjYXN0IiwicmVxdWVzdCIsInNlbGYiLCJpIiwibWFwIiwidXJsIiwic3VjY2VzcyIsIiRhcHBseSIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O2tCQUd5QztBQUNUO0FBQ1E7QUFDUDs7O0FBTC9COzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBQSxRQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNDLGlCQUFqQyxFLENBQTBDOztJQWNyQkMsSyxXQVpwQix3QkFBUTtBQUNQQyxLQURPLGVBQ0ZD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QUFDUCxrQkFBYyxxQkFBYTtBQUFBOztBQUN6QixVQUFJSCxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQW5FLGNBQVFDLEdBQVIsQ0FBZSxPQUFLc0QsS0FBcEIsaUJBQXFDVyxPQUFPekIsSUFBNUMsY0FBeUR5QixPQUFPRSxNQUFQLENBQWNiLEtBQXZFO0FBQ0Q7QUFKTSxHOzs7a0JBaElVcEQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJyAvLyBhbGlhcyBleGFtcGxlXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCcgLy8gYWxpYXNGaWVsZHMgZXhhbXBsZVxuICBpbXBvcnQgbW9kdWxlQSBmcm9tICdtb2R1bGUtYScgLy8gYWxpYXNGaWVsZHMgaWdub3JlIG1vZHVsZSBleGFtcGxlXG4gIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgY29uc29sZS5sb2coJ21vZHVsZUEgaWdub3JlZDogJywgbW9kdWxlQSkgLy8gPT4gbW9kdWxlQSBpZ25vcmVkOiB7fVxuXG4gIEBjb25uZWN0KHtcbiAgICBudW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW1cbiAgICB9LFxuICAgIGFzeW5jTnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW1cbiAgICB9LFxuICAgIHN1bU51bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bSArIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW1cbiAgICB9XG4gIH0pXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjb3VudGVyMVwiOntcInhtbG5zOnYtb25cIjpcIlwifSxcImNvdW50ZXIyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwibXludW1cIn0sXCJsaXN0XCI6e1widi1iaW5kOmRhdGEuc3luY1wiOlwibGlzdFwifSxcImdyb3VwXCI6e1widi1iaW5kOmdyb3VwbGlzdC5vbmNlXCI6XCJpdGVtXCIsXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjpcImluZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHtcImNvdW50ZXIxXCI6e1widi1vbjppbmRleC1lbWl0XCI6XCJjb3VudGVyRW1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgcGFuZWw6IFBhbmVsLFxuICAgICAgY291bnRlcjE6IENvdW50ZXIsXG4gICAgICBjb3VudGVyMjogQ291bnRlcixcbiAgICAgIGxpc3Q6IExpc3QsXG4gICAgICBncm91cDogR3JvdXAsXG4gICAgICB0b2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIGlkOiAnOScsXG4gICAgICAgIHRpdGxlOiAn6L+Z5piv5LiA5Liq5rWL6K+V55qE6L+H56iL5ZWK5ZWK6IGM44CC44CC44CCJ1xuICAgICAgfV0sXG4gICAgICBteW51bTogMjAsXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH0sXG4gICAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxuICAgICAgY291bnQ6IDAsXG4gICAgICBuZXRyc3Q6ICcnLFxuICAgICAgZ3JvdXBMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4yJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4zJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzMuMScsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBwbHVzICgpIHtcbiAgICAgICAgdGhpcy5teW51bSsrXG4gICAgICB9LFxuICAgICAgdG9hc3QgKCkge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJylcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0YXAgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXG4gICAgICB9LFxuICAgICAgY29tbXVuaWNhdGUgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuXG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNilcbiAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpXG5cbiAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuICAgICAgfSxcbiAgICAgIHJlcXVlc3QgKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGkgPSAxMFxuICAgICAgICBsZXQgbWFwID0gWydNQT09JywgJ01Rbz0nLCAnTWc9PScsICdNdz09JywgJ05BPT0nLCAnTlE9PScsICdOZz09JywgJ053PT0nLCAnT0E9PScsICdPUT09J11cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJ1xuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvdW50ZXJFbWl0ICguLi5hcmdzKSB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=