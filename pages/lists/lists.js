var app = getApp()
Page({
  data: {
    navLeftItems: [
      { url: 'http://lx.wo2.me/images/icon02.png', tex: '暴发户' },
      { url: 'http://lx.wo2.me/images/icon05.png', tex: '贴心暖男' },
      { url: 'http://lx.wo2.me/images/icon06.png', tex: 'IQ惊人' },
      { url: 'http://lx.wo2.me/images/icon07.png', tex: '必备男宠' },
      { url: 'http://lx.wo2.me/images/icon08.png', tex: '居家好男人' },
      { url: 'http://lx.wo2.me/images/icon09.png', tex: '行走的荷尔蒙' },
    ],
    navRightItems:[
      { url: 'http://lx.wo2.me/images/icon02.png', tex: '暴发户' },
      { url: 'http://lx.wo2.me/images/icon05.png', tex: '贴心暖男' },
      { url: 'http://lx.wo2.me/images/icon06.png', tex: 'IQ惊人' },
      { url: 'http://lx.wo2.me/images/icon07.png', tex: '必备男宠' },
      { url: 'http://lx.wo2.me/images/icon08.png', tex: '居家好男人' },
      { url: 'http://lx.wo2.me/images/icon09.png', tex: '行走的荷尔蒙' },
    ],
    // onLoad: function () {
    //   var that = this
    //   wx.request({
    //     url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
    //     method: 'GET',
    //     data: {},
    //     header: {
    //       'Accept': 'application/json'
    //     },
    //     success: function (res) {
    //       that.setData({
    //         navRightItems: res.data
    //       })
    //     }
    //   })
    // },
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数
  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  }

})