// pages/detail/detail.js

const util = require('../../utils/util.js')
const echartUtil = require('../../utils/echartUtil.js')

var sliderWidth = 96;


Page({
  data: {
    name: '',
    tabs: ["财务", "技术", "机构", "观星", "六度"],
    detail: {
      data: [{
        id: 1,
        name: "盈利强度",
        tabIdx: 0
      }, {
          id: 6,
          name: "利率变化",
          tabIdx: 0
        }, {
        id: 2,
        name: "季度利润",
        tabIdx: 0
      }, {
        id: 3,
        name: "季度同比",
        tabIdx: 0
      }, {
        id: 4,
        name: "年度利润",
        tabIdx: 0
      }, {
        id: 5,
        name: "年度同比",
        tabIdx: 0
        },{
        id: 21,
        name: "RPS",
        tabIdx: 1
      }, {
        id: 22,
        name: "差值",
        tabIdx: 1
      },  {
        id: 23,
        name: "换手率",
        tabIdx: 1
      },  {
        id: 24,
        name: "波动率",
        tabIdx: 1
      }, {
        id: 41,
        name: "基金持仓",
        tabIdx: 2
      }, {
        id: 42,
        name: "港资持仓",
        tabIdx: 2
      }],
      scrollId: 0,
      activeIndex: 0
    },
    sliderOffset: 0,
    sliderLeft: 0,
    ec_data: {
      onInit: echartUtil.initChart
    },
    canvasId:'detail_chart',
    f_data: null,
    t_data: null,
    o_data: null,
    load:false
  },

  canSee:function(code){
    this.setData({load:true})
    var that=this;
    util.ajax({
      url: '/search/can',
      succ: function (res) {
        that.loadFin(code);
        that.loadTech(code);
        that.loadOrg(code);
        that.setData({load:false})
      },
    });
  },

  loadFin: function(code) {
    var that = this;
    util.ajax({
      url: '/search/basic',
      data: {
        code: code
      },
      succ: function(res) {
        res.data.sea.reverse();
        res.data.year.reverse();
        that.setData({
          f_data: res.data
        })
        echartUtil.draw_spr(that.data.canvasId,res.data.sea);
        that.setData({
          'detail.scrollId': 1
        })

      },
    });

  },

  loadTech: function(code) {
    var that = this;
    util.ajax({
      url: '/search/tech',
      data: {
        code: code
      },
      succ: function(res) {
        that.setData({
          t_data: res.data.reverse()
        })
      },
    });
  },

  loadOrg: function(code) {
    var that = this;
    util.ajax({
      url: '/search/org',
      data: {
        code: code
      },
      succ: function(res) {
        res.data.fs.reverse();
        res.data.fd.reverse();
        that.setData({
          o_data: res.data,
        });
      },
    });
  },

  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          name: options.name,
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    this.canSee(options.code);
  },

  showChart: function(id) {
    this.setData({
      'detail.scrollId': id,
    })
    if (id == 1) {
      echartUtil.draw_spr(this.data.canvasId, this.data.f_data.sea);
    } else if (id == 2) {
      echartUtil.draw_profit(this.data.canvasId,this.data.f_data.sea);
    } else if (id == 3) {
      echartUtil.draw_profit_tb(this.data.canvasId,this.data.f_data.sea);
    } else if (id == 4) {
      echartUtil.draw_profit(this.data.canvasId,this.data.f_data.year, '年度利润');
    } else if (id == 5) {
      echartUtil.draw_profit_tb(this.data.canvasId,this.data.f_data.year, '年度同比');
    } else if (id == 6) {
      echartUtil.draw_ll(this.data.canvasId,this.data.f_data.year);
    } else if (id == 21) {
      echartUtil.draw_rps(this.data.canvasId,this.data.t_data);
    } else if (id == 22) {
      echartUtil.draw_diff(this.data.canvasId,this.data.t_data);
    } else if (id == 23) {
      echartUtil.draw_turn(this.data.canvasId,this.data.t_data);
    } else if (id == 24) {
      echartUtil.draw_fluc(this.data.canvasId,this.data.t_data);
    } else if (id == 41) {
      echartUtil.draw_fund(this.data.canvasId,this.data.o_data.fs);
    } else if (id == 42) {
      echartUtil.draw_hk(this.data.canvasId,this.data.o_data.fd);
    }
  },

  tapEvent: function(e) {
    this.showChart(e.currentTarget.dataset.id);
  },

  tabClick: function(e) {
    echartUtil.draw_empty();
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      'detail.activeIndex': e.currentTarget.id
    });
    for (var i = 0; i < this.data.detail.data.length; i++) {
      var item = this.data.detail.data[i];
      if (item.tabIdx == e.currentTarget.id) {
        this.showChart(item.id);
        return;
      }
    }
    this.setData({
      'detail.scrollId': -1,
    })

  },

  // onShareAppMessage: function() {
  //   return {
  //     title: 'ECharts 可以在微信小程序中使用啦！',
  //     path: '/pages/index/index',
  //     success: function() {},
  //     fail: function() {}
  //   }
  // },
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.name,
      success: function(res) {
        // success
      }
    })
    // setTimeout(function() {
    //   // 获取 chart 实例的方式
    //   console.log(chart)
    // }, 2000);
  }




})