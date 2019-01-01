const util = require('../../utils/util.js')
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置


Page({
  data: {
    tabs: ["观察", "候选", "持有", "淘汰"],
    activeIndex: 2,
    result: {
      data: [],
      load: false,
      open: false
    }

  },

  sort: function (e) {
    var p = e.currentTarget.dataset.field
    var data = util.sort(this.data.result.data, p);
    this.setData({ 'result.data': data });
  },

  onPullDownRefresh: function() {
    wx.showNavigationBarLoading();
    console.log("refresh")
    this.loadData(this.data.activeIndex);
    wx.hideNavigationBarLoading();
  },

  loadData: function(idx) {
    var that = this;
    var bind = 'jsonData.d' + idx;
    util.ajax({
      url: '/sel/query',
      data: {
        group: idx
      },
      succ: function(res) {
        that.setData({
          'result.data': res.data,
        })
      }
    })
  },

  onLoad: function() {
    this.loadData(this.data.activeIndex);
  },
  tabClick: function(e) {
    this.setData({
      activeIndex: e.currentTarget.id,
    });
    this.loadData(e.currentTarget.id);
  },
  seeDetail: function(e) {

    var that = this;
    var itemList = ['详情'];
    if (this.data.activeIndex == 0) {
      itemList.push('+候选组');
      itemList.push('+持有组');
    } else if (this.data.activeIndex == 1) {
      itemList.push('+持有组');
    } else if (this.data.activeIndex == 2) {
      itemList.push('+淘汰组');
    } else {
      itemList.push('+观察组');
    }
    itemList.push('移除');

    wx.showActionSheet({

      itemList: itemList,
      success: function(res) {
        if (!res.cancel) {
          console.log('idx', res.tapIndex)
          if (res.tapIndex === 0) {
            wx.navigateTo({
              url: '/pages/detail/detail?code=' + e.currentTarget.dataset.code + '&name=' + e.currentTarget.dataset.name
            })
          } else {
            console.log(itemList[res.tapIndex]);
            console.log(e.currentTarget.dataset.code);
            if (itemList[res.tapIndex] == '移除') {
              util.ajax({
                url: '/sel/remove',
                data: {
                  code: e.currentTarget.dataset.code,
                  group: that.data.activeIndex
                },
                succ: function(res) {
                  wx.showToast({
                    title: '移除成功',
                    icon: 'success',
                    duration: 1000
                  });
                  that.loadData(that.data.activeIndex);
                }
              })
            } else {
              var gp = util.getGroupIdx(itemList[res.tapIndex])
              util.ajax({
                url: '/sel/add',
                data: {
                  code: e.currentTarget.dataset.code,
                  group: gp
                },
                succ: function(rest) {
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
      }
    });

  },

});