<template lang="">
    <div class="xxy_wrapper xxyHome">       
        <xxy-header title_icon="http://www.xinxiuyou.com/static/img/top_logo2.png" 
                    left_type="search"
                    right_type="notice"
                    center_if=true ref="hhh"></xxy-header>
        <div class="xxyMain_hasDh_hasRout" :style="{'paddingTop':dhTop+'px'}">
            <xxy-tab :active-index="activeIndex" :menu="menuTex" @change="onchange"></xxy-tab>
            <div style="flex:1;position:relative">
                
                <scroller class="xxyHome-list" paging-enabled="true" scroll-direction="horizontal" @scroll="onscroll" offset-accuracy="0">
                    <!--<div class="xxyHomeList-page" :ref="'page_'+(index+1)" v-for="(item,index) in menuTex">

                        <scroller class="xxyHomePageScro" :class="['xxyHPS'+(index+1)]">
                        
                            <div>
                                <text style="font-size:28px;">{{item.name}}</text>
                            </div>
                        </scroller>
                    </div>-->
                    <div class="xxyHomeList-page" ref="page_1">
                        <xxy-home-ani :msg="menuTex[0]"></xxy-home-ani>
                    </div>
                    <div class="xxyHomeList-page" ref="page_2">
                        <xxy-home-vid :msg="menuTex[1]"></xxy-home-vid>
                    </div>
                    <div class="xxyHomeList-page" ref="page_3">
                        <xxy-home-hot :msg="menuTex[2]"></xxy-home-hot>
                    </div>

                </scroller>

            </div>
            
          

        </div>
    </div>
</template>
<script>
    import xxyHeader from "../common/header/xxyHeader.vue"
    import refresher from '../common/refresh'
    import xxyTab from "../common/tabSelect/xxyTab.vue"

    import xxyHomeAni from './xxyHomeResource/xxyHomeAni.vue'
    import xxyHomeVid from './xxyHomeResource/xxyHomeVid.vue'
    import xxyHomeHot from './xxyHomeResource/xxyHomeHot.vue'

    const SCROLL_FULL_WIDTH = 750
    const dom = weex.requireModule('dom');
    import { WxcTabPage, WxcPanItem, Utils } from 'weex-ui';

    import Config from './config'

    var globalEvent = weex.requireModule('globalEvent');


    export default{
        globalEvent: {
            appActive() {
                console.log('active')
            },
            appDeactive() {
                console.log('deactive')
            }
        },
        data(){
            return {
                activeIndex: "0",
                menuTex: Config.xxyTabMsg,
                dhTop: 143,//通知栏的高度 待设
            }
        },
        created () {
            
            

            this.init(); 
            this.$storage.get('xxyType').then(resData => {
                this.dhTop = Number(resData.statusBarHeight) + 103;
            })
        },
        components: {
            xxyHeader, refresher, xxyTab, xxyHomeAni, xxyHomeVid, xxyHomeHot

        },
        methods: {
            
            // 二次改版tab切换
            onchange(index){
                dom.scrollToElement(this.$refs[`page_${index + 1}`])
            },

            onscroll(e) {
                let formatOffset = Math.abs(e.contentOffset.x)
                if( formatOffset % SCROLL_FULL_WIDTH === 0 ){
                    this.activeIndex = formatOffset / SCROLL_FULL_WIDTH
                }
            },
            onrefresh() {
                console.log(122)
                // setTimeout(function(){
                //     console.log("123123")
                //     this.$refs["list"].refreshEnd()
                // },5000)
                
                    // 请求数据结束后调用 refreshEnd 方法
                    //

            },
            
            init(){
                this.xxyAni();
                this.xxyVid();
                this.xxyHot();
            },

            // 新秀游动态
            xxyAni (){
                // this.$fetch({
                //     method: 'GET',
                //     name: 'yanxuan_home_getYXBanners',
                //     data: {}
                // }).then(resData => {
                //     this.YXBanners = resData.data
                // }, error => {

                // })
                this.menuTex[0].content = Config.xxyAniMsg;

            },
            // 新秀游视频
            xxyVid (){
                // this.$fetch({
                //     method: 'GET',
                //     name: 'yanxuan_home_getYXBanners',
                //     data: {}
                // }).then(resData => {
                //     this.YXBanners = resData.data
                // }, error => {

                // })
                this.menuTex[1].content = Config.xxyVidMsg;
            },
            // 新秀游热点
            xxyHot (){
                // this.$fetch({
                //     method: 'GET',
                //     name: 'yanxuan_home_getYXBanners',
                //     data: {}
                // }).then(resData => {
                //     this.YXBanners = resData.data
                // }, error => {

                // })
                this.menuTex[2].content = Config.xxyHotMsg;
            },

            wxcTabPageCurrentTabSelected (e) {
                console.log("切页")
                console.log(e)
                const self = this;
                this.hindex = e.page;
                /* Unloaded tab analog data request */
                if (!Utils.isNonEmptyArray(self.tabList[this.hindex])) {
                    setTimeout(() => {
                        this.xxyDealLoad(this.hindex)
                    }, 100);
                }
            },
            wxcPanItemPan (e) {
                console.log(e)
                if (Utils.env.supportsEBForAndroid()) {
                    this.$refs['wxc-tab-page'].bindExp(e.element);
                }
            },

            // 新秀游数据请求 
            xxyDealLoad (val){          
                if(val==0){// 动态
                    this.xxyAni()
                }else if(val==1){ // 视频
                    this.xxyVid()
                }else if(val==2){ // 热点
                    this.xxyHot()
                }
            },
            // 新秀游数据
            xxyDeal (){
                // Vue.set(this.tabList, this.hindex, this.demoList)
            },
            // 刷新完 -- 回调函数
            loadingDown (e){
                console.log("获取回调并重新刷新数据")
                console.log(e.index)
                this.xxyDealLoad(e.index)
            },

        }
    }
</script>
<style lang="sass" src="./index.scss" scoped></style>
<style scoped>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
    }

    .border-cell {
        background-color: #f2f3f4;
        width: 750px;
        height: 24px;
        align-items: center;
        justify-content: center;
        border-bottom-width: 1px;
        border-style: solid;
        border-color: #e0e0e0;
    }

    .cell {
        background-color: #ffffff;
    }

    .content{
        width:750px;
        height:300px;
        border-bottom-width:1px;
        align-items: center;
        justify-content: center;
    }
</style>

