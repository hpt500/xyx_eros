// 这里的后缀都是 .js 因为打包出来的都是js文件，而不是.vue文件，我们要告诉客户端跳转那个js

//  这里的路径和dev.json路径的区别
//  pages里面配置的是路由跳转的地址，也就是dev生成的 dist文件夹下的js bundle路径 从dist/js开始
//  dev.json 的 exports 需要打包的js地址，填入src的需要被打包成js bundle的地址   从src开始

export default {

    'a': {
        title: '路由测试页',
        url: '/pages/xxyproject/shop/a.js'
    },
    'xxyGSearch': {
        // title: '搜索游戏',
        url: '/pages/xxyproject/xxyGSearch/search.js'
    },
    //  消息通知
    'xxyNotice': {
        title: '消息通知',
        url: '/pages/xxyproject/xxyMessage/index.js'

    },
    'login': {
        // title: '登录',
        url: '/pages/xxyproject/xxyPersonal/login.js'
    },
    'register': {
        // title: '新用户注册',
        url: '/pages/xxyproject/xxyPersonal/register.js'
    },

    // 个人中心处的路由界面
    // -用户界面
    'perMain':{
        // title: 'Ta的主页',
        url: '/pages/xxyproject/xxyPersonal/index.js'
    },
    // -任务界面
    'perTask':{
        title: '我的任务',
        url: '/pages/xxyproject/xxyPersonal/xxyPersonalResource/task.js'
    },
    // -编辑资料
    'perEdit':{
        title: '编辑资料',
        url: '/pages/xxyproject/xxyPersonal/xxyPersonalResource/edit.js'
    },
    // -用户设置
    'perSet':{
        title: '我的设置',
        url: '/pages/xxyproject/xxyPersonal/xxyPersonalResource/set.js'
    },
    //  我的粉丝
    'perFans':{
        title: "我的粉丝",
        url: '/pages/xxyproject/xxyPersonal/xxyPersonalResource/fans.js'
    },
    //  我的关注
    'perFollow':{
        title: "我的关注",
        url: '/pages/xxyproject/xxyPersonal/xxyPersonalResource/follow.js'
    },
    //  我玩过的游戏
    'perPlayed':{
        title: "我玩过的游戏",
        url: '/pages/xxyproject/xxyPersonal/xxyPersonalResource/played.js'
    },


    // 新秀游游戏界面体系

    // 主页
    "game.main": {
        // title: "游戏名",
        url: '/pages/xxyproject/xxyGames/index.js'
    },

    // 游戏详情
    // "game.detail": {
    //     // title: "游戏详情",
    //     url: '/pages/xxyproject/xxyGames/xxyGameSource/gameDetail/index.vue",
    // },

    // 帖子相关
    // "game.post.index": {
    //     // title: "游戏帖子主页",
    //     url: '/pages/xxyproject/xxyGames/xxyGameSource/gameForum/index.js'
    // },
    "game.post.detail": {
        // title: "帖子详情",
        url: '/pages/xxyproject/xxyForum/xxyForumPost/detail.js'
    },
    "game.post.write": {
        title: "发表帖子",
        url: '/pages/xxyproject/xxyForum/xxyForumPost/write.js'
    },
    "game.post.group": {
        title: "帖子相关信息",
        url: '/pages/xxyproject/xxyForum/xxyForumPost/group.js'
    },
    "game.post.comment": {
        // title: "帖子评论",
        url: '/pages/xxyproject/xxyForum/xxyForumPost/comment.js'
    },

    // 公告相关
    "game.notice.detail": {
        title: "公告详情",
        url: '/pages/xxyproject/xxyNotice/xxyNoticeSource/detail.js'
    },
    "game.notice.write": {
        title: "发表公告",
        url: '/pages/xxyproject/xxyNotice/xxyNoticeSource/write.js'
    },
    "game.post.group": {
        title: "公告相关信息",
        url: '/pages/xxyproject/xxyNotice/xxyNoticeSource/group.js'
    },









    'demo': {
        title: 'weex-eros demo',
        url: '/pages/demo/index.js'
    },
    'demo.lifecycle': {
        title: '生命周期',
        url: '/pages/demo/lifecycle/index.js'
    },
    'demo.assets': {
        title: '本地资源',
        url: '/pages/demo/assets/index.js'
    },
    'demo.globalAttr': {
        title: '全局属性',
        url: '/pages/demo/globalAttr/index.js'
    },
    'demo.inputExtend': {
        title: '文本框扩展',
        url: '/pages/demo/inputExtend/index.js'
    },
    'demo.refresh': {
        title: '下拉刷新',
        url: '/pages/demo/refresh/index.js'
    },
    'demo.storage': {
        title: '本地化存储',
        url: '/pages/demo/storage/index.js'
    },
    'demo.navigator': {
        title: '导航条操作',
        url: '/pages/demo/navigator/index.js'
    },
    'demo.tools': {
        title: '工具',
        url: '/pages/demo/tools/index.js'
    },
    'demo.router': {
        title: '路由',
        url: '/pages/demo/router/index.js'
    },
    'demo.event.a': {
        title: '发布订阅-a页面',
        url: '/pages/demo/event/a.js'
    },
    'demo.event.b': {
        title: '发布订阅-b页面',
        url: '/pages/demo/event/b.js'
    },
    'demo.notice': {
        title: '弹窗通知',
        url: '/pages/demo/notice/index.js'
    },
    'demo.font': {
        title: '字体',
        url: '/pages/demo/font/index.js'
    },
    'demo.coms': {
        title: '联系功能',
        url: '/pages/demo/coms/index.js'
    },
    'demo.image': {
        title: '图片',
        url: '/pages/demo/image/index.js'
    },
    'demo.bmchart': {
        title: '图表',
        url: '/pages/demo/bmchart/index.js'
    },
    'demo.bmrichtext': {
        title: '富文本',
        url: '/pages/demo/bmrichtext/index.js'
    },
    'demo.bmcalendar': {
        title: '日期',
        url: '/pages/demo/bmcalendar/index.js'
    },
    'demo.other.waterfall': {
        title: 'weex 瀑布流',
        url: '/pages/demo/other/waterfall.js'
    },
    'demo.other.weex-ui': {
        title: 'weex-ui',
        url: '/pages/demo/other/weexui.js'
    },
}
