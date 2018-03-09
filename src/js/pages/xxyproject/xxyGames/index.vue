<template>
    <div class="xxy_wrapper xxyGames">
        <div class="app-notice" :style="{'height':appNoticeHeight + 'px'}"></div>
        <!--<text class="xxyBgColor">游戏主页</text>-->
        <xxy-header :title_tab="gameTab" 
                    left_type="back"
                    right_type="more"
                    :tabIndex = "tabIndex"
                    center_if=true ref="gameBox"
                    @change="onchange"></xxy-header>
        <scroller class="xxyMain_hasDh flex-row" paging-enabled="true" scroll-direction="horizontal" @scroll="onscroll" offset-accuracy="0" :style="{'top':Number(appNoticeHeight) + 103}">
            <div class="xxyGameList-page width750" ref="gtab_1">
                <xxy-game-detail></xxy-game-detail>
            </div>
            <div class="xxyGameList-page width750" ref="gtab_2">
                <xxy-game-forum></xxy-game-forum>
            </div>
            <div class="xxyGameList-page width750" ref="gtab_3">
                <xxy-game-notice></xxy-game-notice>
            </div>
        </scroller>
    </div>
</template>
<script>
import xxyHeader from "../common/header/xxyHeader.vue"
// 三板块
import xxyGameDetail from "./xxyGameSource/gameDetail/index.vue"
import xxyGameForum from "./xxyGameSource/gameForum/index.vue"
import xxyGameNotice from "./xxyGameSource/gameNotice/index.vue"

const dom = weex.requireModule('dom');
const SCROLL_FULL_WIDTH = 750
export default {
    data () {
        return {
            appNoticeHeight: 40,
            gameId: "",
            moniDeal: [],
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