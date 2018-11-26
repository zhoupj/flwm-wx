
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置


Page({
  data: {
    tabs: ["观察", "候选", "持有","淘汰"],
    activeIndex: 2,
    sliderOffset: 0,
    sliderLeft: 0,
    data: [
      {
        "close": 7.36,
        "code": "002463",
        "difftohigh250": 8.696,
        "fluof250d": 58,
        "fundHolding": 8.02,
        "high": 7.74,
        "hkHoldingAmount": 85231.996,
        "incof2d": 0.684,
        "industry": "元器件",
        "isMR": 0,
        "ishighofyear": 0,
        "low": 7.3,
        "name": "沪电股份",
        "open": 7.3,
        "pettm": 8.696,
        "rps120": 99,
        "rps250": 99,
        "ssr2": 93,
        "timetomarket": "2010-08-18",
        "totals": 126.518,
        "tradeDate": "2018-11-01",
        "turn": 3.372,
        "volume": 56435320
      },
      {
        "close": 60,
        "code": "002841",
        "difftohigh250": 6.667,
        "fluof250d": 41.289,
        "fundHolding": 32.81,
        "high": 62,
        "hkHoldingAmount": 19114.8,
        "incof2d": 3.591,
        "industry": "元器件",
        "isMR": 0,
        "ishighofyear": 0,
        "low": 58.1,
        "name": "视源股份",
        "open": 58.1,
        "pettm": 6.667,
        "rps120": 97,
        "rps250": 97,
        "ssr2": 75,
        "timetomarket": "2017-01-19",
        "totals": 393,
        "tradeDate": "2018-11-01",
        "turn": 3.353,
        "volume": 2232097
      },
      {
        "close": 25.97,
        "code": "300394",
        "difftohigh250": 8.002,
        "fluof250d": 46.948,
        "fundHolding": 5.54,
        "high": 27,
        "incof2d": 1.248,
        "industry": "通信设备",
        "isMR": 0,
        "ishighofyear": 0,
        "low": 25.6,
        "name": "天孚通信",
        "open": 25.63,
        "pettm": 5.391,
        "rps120": 99,
        "rps250": 93,
        "ssr2": 67,
        "timetomarket": "2015-02-17",
        "totals": 51.421,
        "tradeDate": "2018-11-01",
        "turn": 2.777,
        "volume": 4544985
      },
      {
        "close": 9.5,
        "code": "600273",
        "difftohigh250": 10,
        "fluof250d": 32.976,
        "fundHolding": 12.59,
        "high": 9.54,
        "hkHoldingAmount": 9203.508,
        "incof2d": 1.171,
        "industry": "化工原料",
        "isMR": 0,
        "ishighofyear": 0,
        "low": 9.28,
        "name": "嘉化能源",
        "open": 9.37,
        "pettm": 10,
        "rps120": 99,
        "rps250": 95,
        "ssr2": 60,
        "timetomarket": "2003-06-27",
        "totals": 136.135,
        "tradeDate": "2018-11-01",
        "turn": 1.746,
        "volume": 24686085
      }
    ]
  },
  onLoad: function () {
    // var that = this;
    // wx.getSystemInfo({
    //   success: function (res) {
    //     that.setData({
    //       sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
    //       sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
    //     });
    //   }
    // });
  },
  tabClick: function (e) {
    this.setData({
      // sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  seeDetail: function (e) {

   var itemList=['详情'];
   if(this.data.activeIndex==0){
      itemList.push('＋候选组');
      itemList.push('＋持有组');
   } else if (this.data.activeIndex == 1){
     itemList.push('+持有组');
   } else if (this.data.activeIndex == 2) {
     itemList.push('+淘汰组');
   } 
    itemList.push('移除');

    wx.showActionSheet({
      itemList: itemList,
      success: function (res) {
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
  
});