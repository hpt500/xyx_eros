
export default{

    loginTitles:[
        {
        title: '手机登录',
        codePoint: ''
        },
        {
        title: '邮箱登录',
        codePoint: '',
        }
    ],
    registerTitles:[
        // {
        //     title: '手机注册',
        //     codePoint: ''
        // },
        // {
        //     title: '邮箱注册',
        //     codePoint: '',
        // }
    ],

    lrStyles:{
        // bgColor: '#FFFFFF',
        titleColor: '#535353',
        activeTitleColor: '#148bc8',
        // activeBgColor: '#FFFFFF',
        isActiveTitleBold: false,
        width: 375,
        height: 80,
        fontSize: 32,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontColor: '#535353',
        activeIconFontColor: '#148bc8',
        iconFontUrl: 'bmlocal://iconfont/xxy_iconfont.ttf',
        
        hasActiveBottom: true,

        bottomColor: "#d4d4d4",
        bottomHeight: 1,
        
        activeBottomColor: '#148bc8',
        activeBottomHeight: 5,
        activeBottomWidth: 375,
    },
    // 登录输入框状态
    loginInputs: [
        {
            index: "0",
            type: "number",
            value: "",
            bColorBool: false,
            hasTex: false,
            placeTex: "请输入手机号码"
        },
        {
            index: "1",
            type: "email",
            value: "",
            bColorBool: false,
            hasTex: false,
            placeTex: "请输入邮箱地址"
        },
        {
            index: "2",
            type: "password",
            value: "",
            bColorBool: false,
            hasTex: false,
            placeTex: "请输入注册密码"
        },
    ],
    // 注册输入框状态
    registerInputs: [
        {
            index: "0",
            type: "number",
            value: "",
            bColorBool: false,
            hasTex: false,
            placeTex: "请输入手机号码"
        }
    ],

    // 用户数据
    userMsg:{
        username: "他竟然竟然然然然然",
        userid:"20028",
        usericon: "http://www.xinxiuyou.com/static/img/user/2018/03/01/151987762446259.jpg",
        userdj:{
            dj:"1",
            mqScore:{
                type:"当前积分: ",
                num: "20"
            },
            jrScore:{
                type:"今日积分: ",
                num: "1"
            },
            xyScore:{
                type:"下一等级所需积分: ",
                num: "100"
            }
        },
        userflo:[
            {
                title:"perPlayed",
                type:"玩过的游戏",
                num: "5"
            },
            {
                title:"perFollow",
                type:"我的关注",
                num: "20"
            },
            {
                title:"perFans",
                type:"我的粉丝",
                num: "10"
            }
        ],
        userset:[
            {
                title:"perEdit",
                type:"编辑资料",
                icon:""
            }
        ],
        userTabMsg:[
            { 
                name:"评论",
                content:[],
            },
            { 
                name:"帖子",
                content:[],
            },
        ]
    }

}
