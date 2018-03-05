// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    'exports': [
        // appBoard 
        "js/config/index.js",
        // mediator
        "js/mediator/index.vue",
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
        // 新秀游个人中心界面体系
        "js/pages/xxyproject/xxyPersonal/login.vue",
        "js/pages/xxyproject/xxyPersonal/register.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/fans.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/follow.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/played.vue",
        "js/pages/xxyproject/xxyPersonal/xxyPersonalResource/posted.vue",

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
