
//获取应用实例
var app = getApp()
Page({
  //变量声明
  data: {
    latitude: 0,
    longitude: 0,
    speed: ''
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
        console.log(this.latitude, this.longitude)
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
          success: function (res) {
            console.log(res.data)
          }
        })
      }
    })
  }
})

