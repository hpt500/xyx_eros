// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    'exports': [
        // appBoard
        'js/config/index.js',
        // mediator
        'js/mediator/index.vue',
        // home
        'js/pages/demo/index.vue',
        'js/pages/demo/lifecycle/index.vue',
        'js/pages/demo/assets/index.vue',
        'js/pages/demo/globalAttr/index.vue',
        'js/pages/demo/inputExtend/index.vue',
        'js/pages/demo/refresh/index.vue',
        'js/pages/demo/storage/index.vue',
        'js/pages/demo/navigator/index.vue',
        'js/pages/demo/tools/index.vue',
        'js/pages/demo/router/index.vue',
        'js/pages/demo/router/home.vue',
        'js/pages/demo/event/a.vue',
        'js/pages/demo/event/b.vue',
        'js/pages/demo/notice/index.vue',
        'js/pages/demo/font/index.vue',
        'js/pages/demo/coms/index.vue',
        'js/pages/demo/image/index.vue',
        'js/pages/demo/bmchart/index.vue',
        'js/pages/demo/bmrichtext/index.vue',
        'js/pages/demo/bmcalendar/index.vue',
        'js/pages/demo/other/waterfall.vue',
        'js/pages/demo/other/weexui.vue',

        // home
        // "js/pages/news/index.vue",
        "js/pages/xxyproject/index.vue",
        "js/pages/xxyproject/xxyHome/index.vue",
        "js/pages/xxyproject/xxySpecial/index.vue",
        "js/pages/xxyproject/xxyRank/index.vue",
        "js/pages/xxyproject/xxyForum/index.vue",
        "js/pages/xxyproject/xxyPersonal/index.vue",
        // 新秀游搜索游戏界面
        "js/pages/xxyproject/xxyGSearch/search.vue",
        // 新秀游消息通知界面
        "js/pages/xxyproject/xxyMessage/index.vue",
        // 新秀游个人中心界面体系
        "js/pages/xxyproject/xxyPersonal/login.vue",
        "js/pages/xxyproject/xxyPersonal/register.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/fans.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/follow.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/played.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/posted.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/task.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/set.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/edit.vue",
        // 新秀游游戏主页界面体系
        "js/pages/xxyproject/xxyGames/index.vue",
        // 新秀游游戏主页界面体系--详情
        // "js/pages/xxyproject/xxyGames/xxyGameSource/gameDetail/index.vue",
        // 新秀游游戏主页界面体系--帖子
        // "js/pages/xxyproject/xxyGames/xxyGameSource/gameForum/index.vue",
        "js/pages/xxyproject/xxyForum/xxyForumPost/detail.vue",
        "js/pages/xxyproject/xxyForum/xxyForumPost/group.vue",
        "js/pages/xxyproject/xxyForum/xxyForumPost/write.vue",
        // 新秀游游戏主页界面体系--公告
        // "js/pages/xxyproject/xxyGames/xxyGameSource/gameNotice/index.vue",
        "js/pages/xxyproject/xxyNotice/xxyNoticeSource/detail.vue",
        "js/pages/xxyproject/xxyNotice/xxyNoticeSource/write.vue",
        "js/pages/xxyproject/xxyNotice/xxyNoticeSource/group.vue",


        "js/pages/xxyproject/home/index.vue",
        "js/pages/xxyproject/topic/index.vue",
        "js/pages/xxyproject/class/index.vue",
        "js/pages/xxyproject/shop/index.vue",
        "js/pages/xxyproject/my/index.vue",
        "js/pages/xxyproject/shop/a.vue",

    ],
    'alias': {
        'Components': 'js/components',
        'Common': 'js/common',
        'Config': 'js/config',
        'Widget': 'js/widget',
        'Pages': 'js/pages',
        'Utils': 'js/utils'
    },
    'eslint': false,
    'diff': {
        'pwd': '/Users/yangmingzhe/Work/opensource/eros-diff-folder',
        'proxy': 'https://app.weex-eros.com/source'
    },
    'server': {
        'path': './',
        'port': 8889
    },
    'mockServer': {
        'port': 52077,
        'mockDir': './dist/mock'
    }
}
