'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyUtils = require('./../npm/wepy-utils/index.js');

var _index = require('./../api/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testMixin = function (_wepy$mixin) {
  _inherits(testMixin, _wepy$mixin);

  function testMixin() {
    _classCallCheck(this, testMixin);

    return _possibleConstructorReturn(this, (testMixin.__proto__ || Object.getPrototypeOf(testMixin)).apply(this, arguments));
  }

  _createClass(testMixin, [{
    key: 'post',
    value: function post(url, data, loading) {
      return new Promise(function (resolve, reject) {
        _wepyUtils.HTTP.post({
          url: _index.api.host + url,
          params: data,
          mask: true,
          loading: loading,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function (res) {
          var code = res.code,
              data = res.data;

          data = data && JSON.parse(res.data);
          code === '1000' ? resolve(data) : reject(data, res);
        }, function () {
          console.error('Network request failed');
        });
      });
    }
  }]);

  return testMixin;
}(_wepy2.default.mixin);

exports.default = testMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuanMiXSwibmFtZXMiOlsidGVzdE1peGluIiwidXJsIiwiZGF0YSIsImxvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkhUVFAiLCJwb3N0IiwiYXBpIiwiaG9zdCIsInBhcmFtcyIsIm1hc2siLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvZGUiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJ3ZXB5IiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7O3lCQUNkQyxHLEVBQUtDLEksRUFBTUMsTyxFQUFTO0FBQ3ZCLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0Msd0JBQUtDLElBQUwsQ0FBVTtBQUNSUCxlQUFLUSxXQUFJQyxJQUFKLEdBQVdULEdBRFI7QUFFUlUsa0JBQVFULElBRkE7QUFHUlUsZ0JBQU0sSUFIRTtBQUlSVCxtQkFBU0EsT0FKRDtBQUtSVSxtQkFBUztBQUNQLDRCQUFnQjtBQURUO0FBTEQsU0FBVixFQVFHQyxJQVJILENBUVEsVUFBQ0MsR0FBRCxFQUFTO0FBQUEsY0FDVEMsSUFEUyxHQUNNRCxHQUROLENBQ1RDLElBRFM7QUFBQSxjQUNIZCxJQURHLEdBQ01hLEdBRE4sQ0FDSGIsSUFERzs7QUFFZkEsaUJBQU9BLFFBQVFlLEtBQUtDLEtBQUwsQ0FBV0gsSUFBSWIsSUFBZixDQUFmO0FBQ0FjLG1CQUFTLE1BQVQsR0FBa0JYLFFBQVFILElBQVIsQ0FBbEIsR0FBa0NJLE9BQU9KLElBQVAsRUFBYWEsR0FBYixDQUFsQztBQUNELFNBWkQsRUFZRyxZQUFNO0FBQ1BJLGtCQUFRQyxLQUFSLENBQWMsd0JBQWQ7QUFDRCxTQWREO0FBZUQsT0FoQk0sQ0FBUDtBQWlCRDs7OztFQW5Cb0NDLGVBQUtDLEs7O2tCQUF2QnRCLFMiLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnd2VweS11dGlscydcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaS9pbmRleC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdE1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XG4gIHBvc3QodXJsLCBkYXRhLCBsb2FkaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEhUVFAucG9zdCh7XG4gICAgICAgIHVybDogYXBpLmhvc3QgKyB1cmwsXG4gICAgICAgIHBhcmFtczogZGF0YSxcbiAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9XG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgbGV0IHsgY29kZSwgZGF0YSB9ID0gcmVzO1xuICAgICAgICBkYXRhID0gZGF0YSAmJiBKU09OLnBhcnNlKHJlcy5kYXRhKVxuICAgICAgICBjb2RlID09PSAnMTAwMCcgPyByZXNvbHZlKGRhdGEpIDogcmVqZWN0KGRhdGEsIHJlcylcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==