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

var httpMixin = function (_wepy$mixin) {
  _inherits(httpMixin, _wepy$mixin);

  function httpMixin() {
    _classCallCheck(this, httpMixin);

    return _possibleConstructorReturn(this, (httpMixin.__proto__ || Object.getPrototypeOf(httpMixin)).apply(this, arguments));
  }

  _createClass(httpMixin, [{
    key: 'post',
    value: function post(url, data, loading) {
      return new Promise(function (resolve, reject) {
        _wepyUtils.HTTP.post({
          url: _index.api.host + url,
          params: data,
          mask: true,
          loading: loading,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'cookie': wx.getStorageSync("sessionid")
          }
        }).then(function (res) {
          var code = res.code,
              data = res.data;

          code === '1001' ? resolve(data) : reject(data, res);
        }, function () {
          console.error('Network request failed');
        });
      });
    }
  }]);

  return httpMixin;
}(_wepy2.default.mixin);

exports.default = httpMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuanMiXSwibmFtZXMiOlsiaHR0cE1peGluIiwidXJsIiwiZGF0YSIsImxvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkhUVFAiLCJwb3N0IiwiYXBpIiwiaG9zdCIsInBhcmFtcyIsIm1hc2siLCJoZWFkZXJzIiwid3giLCJnZXRTdG9yYWdlU3luYyIsInRoZW4iLCJyZXMiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwid2VweSIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozt5QkFDZEMsRyxFQUFLQyxJLEVBQU1DLE8sRUFBUztBQUN2QixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLHdCQUFLQyxJQUFMLENBQVU7QUFDUlAsZUFBS1EsV0FBSUMsSUFBSixHQUFXVCxHQURSO0FBRVJVLGtCQUFRVCxJQUZBO0FBR1JVLGdCQUFNLElBSEU7QUFJUlQsbUJBQVNBLE9BSkQ7QUFLUlUsbUJBQVM7QUFDUCw0QkFBZ0IsbUNBRFQ7QUFFUCxzQkFBVUMsR0FBR0MsY0FBSCxDQUFrQixXQUFsQjtBQUZIO0FBTEQsU0FBVixFQVNHQyxJQVRILENBU1EsVUFBQ0MsR0FBRCxFQUFTO0FBQUEsY0FDVEMsSUFEUyxHQUNNRCxHQUROLENBQ1RDLElBRFM7QUFBQSxjQUNIaEIsSUFERyxHQUNNZSxHQUROLENBQ0hmLElBREc7O0FBRWZnQixtQkFBUyxNQUFULEdBQWtCYixRQUFRSCxJQUFSLENBQWxCLEdBQWtDSSxPQUFPSixJQUFQLEVBQWFlLEdBQWIsQ0FBbEM7QUFDRCxTQVpELEVBWUcsWUFBTTtBQUNQRSxrQkFBUUMsS0FBUixDQUFjLHdCQUFkO0FBQ0QsU0FkRDtBQWVELE9BaEJNLENBQVA7QUFpQkQ7Ozs7RUFuQm9DQyxlQUFLQyxLOztrQkFBdkJ0QixTIiwiZmlsZSI6Imh0dHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ3dlcHktdXRpbHMnXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGkvaW5kZXguanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGh0dHBNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xuICBwb3N0KHVybCwgZGF0YSwgbG9hZGluZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBIVFRQLnBvc3Qoe1xuICAgICAgICB1cmw6IGFwaS5ob3N0ICsgdXJsLFxuICAgICAgICBwYXJhbXM6IGRhdGEsXG4gICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgJ2Nvb2tpZSc6IHd4LmdldFN0b3JhZ2VTeW5jKFwic2Vzc2lvbmlkXCIpXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBsZXQgeyBjb2RlLCBkYXRhIH0gPSByZXM7XG4gICAgICAgIGNvZGUgPT09ICcxMDAxJyA/IHJlc29sdmUoZGF0YSkgOiByZWplY3QoZGF0YSwgcmVzKVxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIl19