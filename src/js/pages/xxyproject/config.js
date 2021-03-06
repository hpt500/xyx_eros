export const tabConfig = [{
    icon: '&#xe6b8;',
    icon_active: '&#xe6bb;',
    name: "首页",
    key: 'xxyHome',
    src: `${weex.config.eros.jsServer}/dist/js/pages/xxyproject/xxyHome/index.js`,
    visibility: 'visible'
}, {
    icon: '&#xe7aa;',
    icon_active: '&#xe7a9;',
    name: "专题",
    key: 'xxySpecial',
    src: `${weex.config.eros.jsServer}/dist/js/pages/xxyproject/xxySpecial/index.js`,
    visibility: 'hidden'
}, {
    icon: '&#xe722;',
    icon_active: '&#xe721;',
    name: "排行",
    key: 'xxyRank',
    src: `${weex.config.eros.jsServer}/dist/js/pages/xxyproject/xxyRank/index.js`,
    visibility: 'hidden'
}, {
    icon: '&#xe741;',
    icon_active: '&#xe740;',
    name: "讨论",
    key: 'xxyForum',
    src: `${weex.config.eros.jsServer}/dist/js/pages/xxyproject/xxyForum/index.js`,
    visibility: 'hidden'
}, {
    icon: '&#xe736;',
    icon_active: '&#xe735;',
    name: "个人",
    key: 'xxyPersonal',
    src: `${weex.config.eros.jsServer}/dist/js/pages/xxyproject/xxyPersonal/index.js`,
    visibility: 'hidden'
}]