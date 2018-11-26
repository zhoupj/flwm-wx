const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


const ajax = (param) => {
  
  var cookie='';
  try {
    var cookie = wx.getStorageSync('cookie')
    console.log('value:',value)
  } catch (e) {
  }

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
  console.log('param', param, defalutHdeader);
  //发起网络请求
  wx.request({
    url: 'https://www.zhoupj.top' + param.url,
    method: 'post',
    header: defalutHdeader,
    data: param.data,
    success(res) {
      console.log('res',res);
      if (res.header['Set-Cookie']){
        wx.setStorageSync('cookie', res.header['Set-Cookie']);
      }
      if (res.data.code == '1001') {
         param.succ(res.data);
      } else if (res.data.code =='2003') {
        getApp().onLogin()
      }else {
        //console.log(res.data.msg)
        //wx.setStorageSync('err',res.data.msg);
        wx.redirectTo({
          url: '/pages/error/error?err=' + res.data.msg,
        })
      }

    },
    fail(res) {
      wx.redirectTo({
        url: '/pages/error/error?err=' + res,
      })
    }
  })
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  ajax: ajax
}