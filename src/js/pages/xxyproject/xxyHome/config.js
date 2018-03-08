export default {
  // 使用 iconfont 模式的tab title配置
  tabIconFontTitles: [
    {
      title: '动态',
      // codePoint: '\ue623'
    },
    {
      title: '视频',
      // codePoint: '\ue608'
    },
    {
      title: '热点',
      // codePoint: '\ue752',
      badge: 5
    },
    // {
      // title: '我的主页',
      // codePoint: '\ue601',
      // dot: true
    // }
  ],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#999999',
    activeTitleColor: '#148bc8',
    activeBgColor: '#ffffff',
    isActiveTitleBold: false,
    width: 250,
    height: 60,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontColor: '#333333',
    activeIconFontColor: '#148bc8',
    iconFontUrl: 'bmlocal://iconfont/xxy_iconfont.ttf',

    hasActiveBottom: true,

    bottomColor: "#d4d4d4",
    bottomHeight: 2,
    
    activeBottomColor: '#148bc8',
    activeBottomHeight: 3,
    activeBottomWidth: 250,
  },

  // 新秀游顶部tab切换
  xxyTabMsg: [
    { 
      name:"动态",
      content:[],
    },
    { 
      name:"视频",
      content:[],
    },
    { 
      name:"热点",
      content:[],
    },
  ],

  // 新秀游动态数据
  xxyAniMsg: [
    {
      pic:"http://www.xinxiuyou.com/static/img/gameBackups/2018/01/15/151598445658019.jpg",
      name:"元气封神",
      score:"8"
    },
    {
      pic:"http://www.xinxiuyou.com/static/img/gameBackups/2018/01/15/151598445658019.jpg",
      name:"佣兵对决",
      score:"10"
    },
    {
      pic:"http://www.xinxiuyou.com/static/img/gameBackups/2018/01/15/151598445658019.jpg",
      name:"英魂之战",
      score:"9"
    }
  ],

  // 新秀游视频数据
  xxyVidMsg: [
    {},{},{},{},{}
  ],

  // 新秀游热点数据
  xxyHotMsg: [
    {},{}
  ],

}

