//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    pn:0,
    sz:10,
    msgList: [
      {
        title: "使用说明",
        digest: "让投资变的更简单是我们的梦想",
        visit:2323234,
        publishTime: "2017-3-5 23:02:59",
        id:9
      },{
        id:8,
        title: "如何入门",
        digest: "学习一种策略，了解",
        publishTime: "2017-3-5 23:02:59",
        visit: 12324
      },
      {
        id: 2,
        title: "如何笑到最后",
        publishTime: "2017-3-5 23:02:59",
        src: "",
        digest: '不懂得不要碰，不擅长的不要碰',
        visit: 103240
      },
      {
        id: 3,
        title: "坚持一个习惯",
        publishTime: "2017-3-5 23:03:59",
        digest: "要有舒适自由自在的心态",
        visit: 1046560,
      },
      {
        title: "坚持就是胜利",
        digest: "让投资变的更简单是我们的梦想",
        visit: 2323234,
        publishTime: "2017-3-5 23:02:59",
        id: 9
      }, {
        id: 8,
        title: "未来不迎，当时不杂，既过不恋",
        digest: "学习一种策略，了解",
        publishTime: "2017-3-5 23:02:59",
        visit: 12324
      },
    ],
  },
  onLoad: function() {
    var that=this;
    util.ajax({
      url: '/art/list',
      data: {pn:this.data.pn,sz:this.data.sz},
      succ: function (res) {
        var pn=that.data.pn;
        if(res.data.size==20){
            pn=pn+1;
        }
        that.setData({
          msgList: res.data,
          pn:pn
        })
      }
    })
  },

})