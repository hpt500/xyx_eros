<template lang="">
    <div class="xxy_wrapper xxyHome">       
        <xxy-header title_icon="http://www.xinxiuyou.com/static/img/top_logo2.png"></xxy-header>
        <div class="xxyHome_main">
            
           <wxc-tab-page ref="wxc-tab-page"
                            :tab-titles="tabTitles"
                            :tab-styles="tabStyles"
                            title-type="fonticon"
                            :needSlider="needSlider"
                            :is-tab-view="isTabView"
                            :tab-page-height="tabPageHeight"
                            @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">    
                <list v-for="(v,index) in tabList"
                        :key="index" 
                        class="item-container" offset-accuracy="300px" 
                        :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                    
                    <refresher @loadingDown="loadingDown" 
                                @loadingAjax="loadingAjax" 
                                :xxyKey="index"
                                :ref="'refre'+index"></refresher>
                    <!--<cell class="border-cellborder-cell"></cell>-->
                    
                    <cell v-for="(demo,key) in v"
                            class="cell"
                            :key="key">
                        <wxc-pan-item :ext-id="'1-' + (v) + '-' + (key)"
                                    url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                                    @wxcPanItemPan="wxcPanItemPan">
                            <div class="content">
                                <text>{{key}}</text>
                            </div>
                        </wxc-pan-item>
                    </cell>
                </list>
               
            </wxc-tab-page>
            

        </div>
         <!--<scroller class="xxyHome-list" offset-accuracy="300px">
            <text style="font-size:50px;">首页</text>

         </scroller>-->
    </div>
</template>
<script>
    import xxy_header from "../common/header/xxyHeader.vue"
    import refresher from '../common/refresh';

    const dom = weex.requireModule('dom');
    import { WxcTabPage, WxcPanItem, Utils } from 'weex-ui';

    import Config from './config'

    var globalEvent = weex.requireModule('globalEvent');


    export default{
        data(){
            return {
                // 当前索引
                hindex : 0,

                tabTitles: Config.tabIconFontTitles,
                tabStyles: Config.tabIconFontStyles,
                needSlider: true,
                isTabView: true,
                tabPageHeight: 1334,

                tabList: [],
                demoList: [1,2],
                supportSlide: true,
                
            }
        },
        created () {
            this.init();
            this.tabPageHeight = Utils.env.getPageHeight()-70;
            this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
            Vue.set(this.tabList, this.hindex, this.demoList);
            
        },
        components: {
            'xxy-header': xxy_header,
            'refresher': refresher,
            WxcTabPage, WxcPanItem,
        },
        methods: {
            wxcTabPageCurrentTabSelected (e) {
                console.log("切页")
                console.log(e)
                const self = this;
                this.hindex = e.page;
                /* Unloaded tab analog data request */
                if (!Utils.isNonEmptyArray(self.tabList[this.hindex])) {
                    setTimeout(() => {
                        Vue.set(self.tabList, this.hindex, self.demoList);
                    }, 100);
                }
            },
            wxcPanItemPan (e) {
                console.log(e)
                if (Utils.env.supportsEBForAndroid()) {
                    this.$refs['wxc-tab-page'].bindExp(e.element);
                }
            },
            init(){
                xxyAni();
            },
            // 新秀游动态
            xxyAni (){

            },
            // 新秀游视频
            xxyVid (){

            },
            // 新秀游热点
            xxyHot (){
                
            },
            // 新秀游数据请求 
            xxyDealLoad (){
                const ajaxIndex = this.hindex;
                
                if(ajaxIndex==0){
                // 动态
                
                }else if(ajaxIndex==1){
                // 视频

                }else if(ajaxIndex==2){
                // 热点

                }


            },
            // 新秀游数据
            xxyDeal (){
                Vue.set(this.tabList, this.hindex, this.demoList)
            },

            // 刷新完 -- 回调函数
            loadingDown (e){
                console.log("获取回调并重新刷新数据")
                console.log(e)
                console.log(e.status)
                // Vue.set(this.tabList, this.hindex, []);
                // this.xxyDeal ();
                // Vue.set(this.tabList, this.hindex, this.demoList)

                // Vue.set(self.tabList, this.hindex, self.demoList);
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

