const util = require('../../utils/util.js')
Page({
  data: {
    search: {
      showTopTips: false,
      date: "2018-11-22",
      rps: ["250", "120", "50"],
      rpsIdx: 0,
      high: ["一年新高", "半年新高"],
      highIdx: 0,
    },
    pageNo: 0,
    total: 0,
    ps: 20,
    data: [],
    open: false,
    formData: null
  },
  onLoad: function(options) {

    // 页面初始化 options为页面跳转所带来的参数
  },



  onReady: function() {

  },

  seeDetail: function(e) {
    wx.showActionSheet({
      itemList: ['详情', '＋观察组', '＋候选组', '＋持有组', '＋淘汰组'],
      success: function(res) {
        if (!res.cancel) {
          console.log('idx', res.tapIndex)
          if (res.tapIndex === 0) {
            wx.navigateTo({
              url: '/pages/detail/detail?code=' + e.currentTarget.dataset.code,
            })
          } else {

          }
        }
      }
    });

  },

  showTopTips: function() {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function() {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  bindRpsChange: function(e) {
    this.setData({
      'search.rpsIdx': e.detail.value
    })
  },
  bindHighChange: function(e) {
    this.setData({
      'search.highIdx': e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      'search.date': e.detail.value
    })
  },

  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  onReachBottom: function() {
    var pn = this.data.pageNo + 1;
    var t = this.data.total;
    var that = this;
    if (pn * 20 < t) {
      var formData = this.data.formData;
      formData['pageNo'] = pn;

      util.ajax({
        url: '/search/list',
        data: formData,
        succ: function(res) {
          var newData = that.data.data.concat(res.data);
          that.setData({
            data: newData,
            total: res.total,
            formData: formData,
            pageNo: pn
          })
        },
        t: true
      })
    }
  },
  kindToggle: function(e) {
    this.setData({
      open: !this.data.open
    });
  },



  formSubmit: function(e) {
    var that = this;
    var formData = e.detail.value;
    if (formData.rps == 0) {
      formData['rps250'] = formData.rps_value;
    } else if (formData.rps == 1) {
      formData['rps120'] = formData.rps_value;
    } else {
      formData['rps50'] = formData.rps_value;
    }
    if (formData.diff == 0) {
      formData['difftohigh250'] = formData.diffValue;
    } else {
      formData['difftohigh120'] = formData.diffValue;
    }
    formData['gy'] = formData['gy'] == true ? 1 : 0;
    formData['isMR'] = formData['isMR'] == true ? 1 : 0;

    if (formData['hkHoldingAmount'] == '') {
      formData['hkHoldingAmount'] = null;
    }

    formData['pageSize'] = this.data.ps;
    formData['pageNo'] = 0;

    util.ajax({
      url: '/search/list',
      data: formData,
      succ: function(res) {
        that.setData({
          open: false,
          data: res.data,
          total: res.total,
          formData: formData
        })
      },
      t: true
    })
  },
  formReset: function() {

  }
})