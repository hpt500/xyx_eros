<template>
    <div class="xxy_wrapper xxyGames">
        <div class="app-notice" :style="{'height':appNoticeHeight + 'px'}"></div>
        <xxy-header :title_tab="gameTab" 
                    left_type="back"
                    right_type="more"
                    :tabIndex = "tabIndex"
                    center_if=true ref="gameBox"
                    @change="onchange"></xxy-header>
        <scroller class="xxyMain_hasDh flex-row" paging-enabled="true" scroll-direction="horizontal" @scroll="onscroll" offset-accuracy="0" :style="{'top':Number(appNoticeHeight) + 90}">
            
            <div class="xxyGameList-page width750" ref="gtab_1">
                <xxy-game-detail></xxy-game-detail>
            </div>
            <div class="xxyGameList-page width750" ref="gtab_2">
                <div class="xxyGD_notcie xxyBgfff flex-row xxyBBorder">
                    <image :src="msg.icon" class="xxyGDIcon_small mr20"></image>
                    <text class="xxyColor333 fs28 flex mr5">{{msg.game_name}}</text>
                    <div class="flex-row flex-align" @click="gameUpload">
                        <text class="iconfont fs36 xxyColor333 mr5">&#xe703;</text>
                        <text class="fs24 xxyColor333">下载</text>
                    </div>
                </div>
                <xxy-game-forum></xxy-game-forum>
            </div>
            
            <div class="xxyGameList-page width750" ref="gtab_3">
            <div class="xxyGD_notcie xxyBgfff flex-row xxyBBorder">
                    <image :src="msg.icon" class="xxyGDIcon_small mr20"></image>
                    <text class="xxyColor333 fs28 flex mr5">{{msg.game_name}}</text>
                    <div class="flex-row flex-align" @click="gameUpload">
                        <text class="iconfont fs36 xxyColor333 mr5">&#xe703;</text>
                        <text class="fs24 xxyColor333">下载</text>
                    </div>
                </div>
                <xxy-game-notice></xxy-game-notice>
            </div>
        </scroller>
        
    </div>
</template>
<script>
import xxyHeader from "../common/header/xxyHeader.vue"
// 三板块
import xxyGameDetail from "./xxyGameSource/detail.vue"
import xxyGameForum from "./xxyGameSource/posts.vue"
import xxyGameNotice from "./xxyGameSource/notices.vue"

const dom = weex.requireModule('dom');
import Config from './config.js'
const SCROLL_FULL_WIDTH = 750
export default {
    data () {
        return {
            appNoticeHeight: 50,
            gameId: "",
            moniDeal: [],
            msg: Config.gameDetail,
            gameTab:[
                {name:"详情",type:"game_detail"},
                {name:"动态",type:"game_post"},
                {name:"公告",type:"game_notie"}
            ],
            tabIndex:0,
        }
    },
    components: {
        xxyHeader,xxyGameDetail,xxyGameForum,xxyGameNotice
    },

    created () {
        this.$storage.get('xxyType').then(resData => {
            this.appNoticeHeight = resData.statusBarHeight;
        })
        console.log("查看:"+this.appNoticeHeight)
        this.$router.getParams().then(resData => {
            this.gameId = resData.game_id;
            this.ajaxGame(this.gameId);
            console.log(resData)
        })
        // 通过路由进行数据传递
        // 于界面初始获取游戏id及其其他数据 借此进行ajax请求以获取该游戏的数据
        // 或许需包含三大板块的数据 详情 帖子 公告
    },
    methods:{
        // ajax请求游戏页面数据--通过游戏id
        ajaxGame(gameid){
            console.log("进行游戏数据请求")
            // this.$fetch({
            //     method: 'POST',    
            //     name: 'xxyGameMain',
            //     data: {
            //         game_id: gameid
            //     },
            //     header: {
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            // }).then(resData => {
            //     // 成功回调
            //     console.log("成功返回数据")
            //     console.log(resData)
                
            // }, error => {
            //     // 错误回调
            //     console.log("失败")
            //     console.log(error)
            // })
        },
        // 游戏下载
        gameUpload(){
            console.log("游戏下载")
            this.$notice.toast({
                message: "游戏下载"
            })
        },
        onchange(index){
            dom.scrollToElement(this.$refs[`gtab_${index + 1}`])
        },
        onscroll(e) {
            let formatOffset = Math.abs(e.contentOffset.x)
            if( formatOffset % SCROLL_FULL_WIDTH === 0 ){
                this.tabIndex = formatOffset / SCROLL_FULL_WIDTH
            }
        },

    }
}
</script>
<style lang="sass" src="./index.scss" scoped></style>