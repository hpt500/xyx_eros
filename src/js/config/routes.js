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
        url: '/pages/xxyproject/xxyNotice/notice.js'

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
    }


    
}
