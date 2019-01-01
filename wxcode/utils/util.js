const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//const domon_name = 'http://localhost:8080';
const domon_name = 'https://www.zhoupj.top';

const ajax = (param) => {

  var cookie = '';
  try {
    var cookie = wx.getStorageSync('cookie')
    // console.log('value:',value)
  } catch (e) {}

  var defalutHdeader = {
    'content-type': 'application/x-www-form-urlencoded', // 默认值
    'cookie': cookie
  };
  if (param.t) {
    defalutHdeader = {
      'content-type': 'application/json',
      'cookie': cookie
    }
  }
  // console.log('param', param, defalutHdeader);
  //发起网络请求
  wx.request({
    url: domon_name + param.url,
    method: 'post',
    header: defalutHdeader,
    data: param.data,
    success(res) {
      // console.log('res',res);
      if (res.header['Set-Cookie']) {
        wx.setStorageSync('cookie', res.header['Set-Cookie']);
      }
      if (res.data.code == '1001') {
        param.succ(res.data);
      } else if (res.data.code == '2003') {
        getApp().onLogin()
      } else {
        //console.log(res.data.msg)
        //wx.setStorageSync('err',res.data.msg);
        wx.navigateTo({
          url: '/pages/error/error?err=' + res.data.msg,
        })
      }

    },
    fail(res) {
      console.log(res)
      wx.navigateTo({
        url: '/pages/error/error?err=服务器维护中，请稍后',
      })
    }
  })
}

String.prototype.endWith = function (str) {
  if (str == null || str == "" || this.length == 0 || str.length > this.length) {
    return false;
  }
  if (this.substring(this.length - str.length)) {
    return true;
  } else {
    return false;
  }
}

String.prototype.startWith = function (str) {
  if (str == null || str == "" || this.length == 0 || str.length > this.length) {
    return false;
  }
  if (this.substr(0, str.length) == str) {
    return true;
  } else {
    return false;
  }
}

Array.prototype.min = function() {
  var min = this[0];
  var len = this.length;
  for (var i = 1; i < len; i++) {
    if (this[i] < min) {
      min = this[i];
    }
  }
  return min;
}
//最大值
Array.prototype.max = function() {
  var max = this[0];
  var len = this.length;
  for (var i = 1; i < len; i++) {
    if (this[i] > max) {
      max = this[i];
    }
  }
  return max;
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getGroupIdx = name => {
  if (name == '+观察组') {
    return 0;
  } else if (name == '+候选组') {
    return 1;
  } else if (name == '+持有组') {
    return 2;
  } else if (name == '+淘汰组') {
    return 3;
  }
  return 0;
}


const sort2 = (item, p) => {
  if (item && item.length > 1) {

    //判断之前的顺序
    var vs = item[0][p];
    var ve = item[item.length - 1][p];
    if (vs > ve) {
      return item.sort(function(a, b) {
        var v1 = a[p];
        var v2 = b[p];
        return v1 >=v2 ? 1:-1;
      })
    } else {
      return item.sort(function(a, b) {
        var v1 = a[p];
        var v2 = b[p];
        return v2 >= v1 ? 1:-1;
      })
    }
  }
}


module.exports = {
  formatTime: formatTime,
  ajax: ajax,
  getGroupIdx: getGroupIdx,
  sort: sort2,
  dm: domon_name,
}


// var arr = [{
//     name: 'zopp',
//     age: '0'
//   },
//   {
//     name: 'gpp',
//     age: '18'
//   },
//   {
//     name: 'yjj',
//     age: '8'
//   },
//   {
//     name: 'zzz',
//     age: '5'
//   }
// ];

// console.log(arr);
// arr = sort2(arr, 'age');
// console.log(arr)
// console.log(sort2(arr, 'age'))