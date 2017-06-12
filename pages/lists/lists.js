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
      { url: 'http://lx.wo2.me/images/img03.jpg', tex: '让人产生保护欲的小受受' },
      { url: 'http://lx.wo2.me/images/img07.jpg', tex: '年轻帅气桀骜不驯港仔一枚' },
      { url: 'http://lx.wo2.me/images/img01.jpg', tex: '行走的荷尔蒙' },
      { url: 'http://lx.wo2.me/images/img04.jpg', tex: '傻逼蒙多起' },
      { url: 'http://lx.wo2.me/images/img05.jpg', tex: '呆萌小屁孩' },
      { url: 'http://lx.wo2.me/images/img06.jpg', tex: '无敌帅气男友力MAX马龙大人' },
      { url: 'http://lx.wo2.me/images/img02.jpg', tex: '精明能干季博士' },
      { url: 'http://lx.wo2.me/images/img08.jpg', tex: 'zheshisheishei' },
      { url: 'http://lx.wo2.me/images/img09.jpg', tex: 'sheisheihsiehi' },
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