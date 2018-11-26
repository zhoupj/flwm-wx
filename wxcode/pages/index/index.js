//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    theme:"断舍离",
    themeDesc:"得一种武功不易，坚持一种武功难，坚持一种武功长久更难",
    msgList: [
      {
        title: "前言",
        src: "../../images/zgs.jpeg",
        content: "这是一本书的名字，该书主要讲述了日本杂物管理咨询师山下英子推出的概念：断=不买、不收取不需要的东西。舍=处理掉堆放在家里没用的东西。离=舍弃对物质的迷恋，让自己处于宽敞舒适，自由自在的空间，反观投资中的道理亦是如此。"
      },{
        title: "断",
        src: "",
        content: "学习一种策略，了解"
      },
      {
        id: 2,
        title: "舍",
        time: "2017-3-5 23:02:59",
        src: "",
        content: '不懂得不要碰，不擅长的不要碰'
      },
      {
        id: 3,
        title: "离",
        time: "2017-3-5 23:03:59",
        src: "",
        content: "要有舒适自由自在的心态"
      }
    ],
  },
  onLoad: function() {
   
  },

})