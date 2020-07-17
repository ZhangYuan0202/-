Page({


  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
  },
  goSign() {
    wx.reLaunch({
      url: '/pages/home/home',
    })
  },

  
})