// pages/error/error.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  console.log(options.err)
    //   err= wx.getStorageSync('err');
    //  console.log(err)
    this.setData({ msg: options.err})
  },

  bindClose:function(){
    // wx.navigateBack({
    // })
    wx.switchTab({
      url: '/pages/index/index',
    })
  }


})