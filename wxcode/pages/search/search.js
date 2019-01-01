const util = require('../../utils/util.js')
Page({
  data: {
    search: {
      showTopTips: false,
      dateRange:[],
      dateIdx:0,
      rps: ["250", "120", "50"],
      rpsIdx: 0,
      high: ["250", "120"],
      highIdx: 0,

    },
    result: {
      data: [],
      load: false,
    },
    open: false,
    pageNo: 1,
    total: 0,
    ps: 20,
    formData: null
  },
  onLoad: function(options) {
    var that=this;
    // 页面初始化 options为页面跳转所带来的参数
    util.ajax({
      url: '/search/ds',
      succ: function (res) {
        that.setData({
          'search.dateRange': res.data,
        })
      }
    })
  },

  sort:function(e){
     var p = e.currentTarget.dataset.field
     var data=util.sort(this.data.result.data,p);
     this.setData({'result.data':data});
  },

  // onShow:function(){
  //   if(this.data.search.dateRange.length==0){
  //     this.onLoad();
  //   }
  // },

  onReady: function() {

  },

  seeDetail: function(e) {
    var itemList=['分析', '+观察组', '+候选组', '+持有组'];
    wx.showActionSheet({
      itemList: itemList,
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex === 0) {
            wx.navigateTo({
              url: '/pages/detail/detail?code=' + e.currentTarget.dataset.code + '&name=' + e.currentTarget.dataset.name,
            })
          } else {
            var gp = util.getGroupIdx(itemList[res.tapIndex])
            util.ajax({
              url: '/sel/add',
              data: {code: e.currentTarget.dataset.code,group:gp},
              succ: function (res) {
                wx.showToast({
                  title: '添加成功',
                  icon: 'success',
                  duration: 1000
                });
              }
            })    
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
      'search.dateIdx': e.detail.value
    })
  },

  onPullDownRefresh:function(){
    console.log("refresh");
  },

  onReachBottom: function() {
    var pn = this.data.pageNo + 1;
    var t = this.data.total;
    var that = this;
    if (pn * 20-20< t) {
      var formData = this.data.formData;
      formData['pageNo'] = pn;

      util.ajax({
        url: '/search/list',
        data: formData,
        succ: function(res) {
          var newData = that.data.result.data.concat(res.data);
          that.setData({
            'result.data': newData,
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

  recordToggle:function(e){
    wx.navigateTo({
      url: '/pages/search/record/record',
    })
  },



  formSubmit: function(e) {
    this.setData({
      'result.load': true,
      open: false,
    })
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
    formData['tradeDate'] = this.data.search.dateRange[formData.dt];

    if (formData['hkHoldingAmount'] == '') {
      formData['hkHoldingAmount'] = null;
    }

    formData['pageSize'] = this.data.ps;
    formData['pageNo'] = 1;

    util.ajax({
      url: '/search/list',
      data: formData,
      succ: function(res) {
        that.setData({
          'result.load':false,
          'result.data': res.data,
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