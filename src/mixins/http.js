import wepy from 'wepy'
import { HTTP } from 'wepy-utils'
import { api } from '../api/index.js'

export default class httpMixin extends wepy.mixin {
  post(url, data, loading) {
    return new Promise((resolve, reject) => {
      HTTP.post({
        url: api.host + url,
        params: data,
        mask: true,
        loading: loading,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'cookie': wx.getStorageSync("sessionid")
        }
      }).then((res) => {
        let { code, data } = res;
        code === '1001' ? resolve(data) : reject(data, res)
      }, () => {
        console.error('Network request failed')
      })
    })
  }
}
