
//获取应用实例
var app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  //变量声明
  data: {
    latitude: 0,
    longitude: 0,
    jjjk:'',
    movies: [
      { url: 'http://lx.wo2.me/images/banner1.jpg' },
      { url: 'http://lx.wo2.me/images/banner2.png' },
      { url: 'http://lx.wo2.me/images/banner3.jpg' },
      { url: 'http://lx.wo2.me/images/banner4.jpg' }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  listsViewTap: function () {
    wx.navigateTo({
      url: '../lists/lists'
    })
  },
  likeViewTap: function () {
    wx.navigateTo({
      url: '../like/like'
    })
  },
  moneyViewTap: function () {
    wx.navigateTo({
      url: '../money/money'
    })
  },
  loveViewTap: function () {
    wx.navigateTo({
      url: '../love/love'
    })
  },

  onLoad: function () {   
    wx.getLocation({
      type: 'wgs84',
      // =>直接拿到上层的this
      success: res => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
     
        //发送请求通过腾讯经纬度反查地址信息
        wx.request({
          url: 'http://apis.map.qq.com/ws/geocoder/v1/',
          data: {
            key: 'UW7BZ-SVZ36-OMHSW-MEXVA-A54BF-XXBUL',
            location: `${res.latitude},${res.longitude}`
          },
          header: {
            'content-type': 'application/json'
          },
          success: res => {           
            console.log(res.data.result.address)
            //弹出窗
            wx.showModal({
              title: '小仙女你的地址是',
              showCancel:false,
              content: res.data.result.address+' ?',
            })
          }
        })
      }
    })
},


})

