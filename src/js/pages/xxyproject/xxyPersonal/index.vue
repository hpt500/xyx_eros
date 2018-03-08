<template lang="">
    <div class="xxy_wrapper xxyPersonal">       
        
        <scroller class="xxyMain_hasDh_hasRout xxyPerMain">

            <div class="xxyPerTop">
            
                <image :src="userMsg.usericon" class="xxyPerBg" resize="cover"></image>
                <div class="xxyZheZ"></div>
                <!--<div class="xxyPerSetup">
                    <text class="xxyPSetup_tex iconfont">&#xe7fb;</text>
                </div>-->

            </div>
            <div class="xxyPerMsg">
                <div class="xxyPM_top">
                    <image :src="userMsg.usericon" resize="cover" class="xxyPMT_icon"></image>
                    <div class="xxyPMT_each ml20 h100 flex flex-column">
                        <div class="xxyPMT_user flex flex-row flex-row-align-center">
                            <text class="xxyPMT_name fs36 xxyColor333">{{userMsg.username}}</text>
                            <image :src="'http://www.xinxiuyou.com/static/img/personal/'+userMsg.userdj.dj+'.png'" class="xxyPMT_dj ml10 mb5"></image>
                        </div>
                        <div class="xxyPMT_id flex-row-just-center flex-row">
                            <text class="xxyPMT_id_tex flex fs28 xxyColor999">{{`ID: `+userMsg.userid}}</text>
                        </div>
                    </div>
                    <div class="xxyPMT_btn">
                        <text class="xxybtn fs24 line-height40 br20" @click="xxyPerFn('perEdit')">编辑资料</text>
                        <!--<text class="xxybtn fs24 line-height40 br20 mt10">礼仪考试</text>-->
                    </div>
                </div>
                <div class="xxyPM_each">
                    <!--等级板块-->
                    <div class="xxyPME_dj xxyBoxShaow-small mb20">
                        <div class="xxyPMED_title">
                            <text class="fs28 xxyColor535">用户等级</text>
                            <text class="fs28 xxyColor" @click="xxyPerFn('perTask')">成长任务</text>
                        </div>
                        <div class="xxyPMED_group">
                            <div class="xxyPMEDG_top flex-row flex-row-between">
                                <div class="xxyPMEDGT_left flex flex-column">
                                    <text class="xxyColor999 fs28  h40 line-height40">{{userMsg.userdj.mqScore.type+userMsg.userdj.mqScore.num}}</text>
                                    <text class="xxyColor999 fs28  h40 line-height40">{{userMsg.userdj.jrScore.type+userMsg.userdj.jrScore.num}}</text>
                                    <text class="xxyColor999 fs28  h40 line-height40">{{userMsg.userdj.xyScore.type+userMsg.userdj.mqScore.num + "/" + userMsg.userdj.xyScore.num}}</text>
                                </div>
                                <div class="xxyPMEDGT_right flex-row flex-row-align-end">
                                    <text class="fs28 xxyColorfff mb5">等级:</text>
                                    <text class="fs60 xxyColorfff flex xxyTex-center line-height60">{{userMsg.userdj.dj}}</text>
                                </div>
                            </div>
                            <div class="xxyPMED_process mt10">
                                <wxc-progress :value="(userMsg.userdj.mqScore.num/userMsg.userdj.xyScore.num)*100" bar-width="666" bar-height="24"	bar-color="#148bc8"
                                pro-radius="12px"
                                pro-bgcolor="#5bc5e5"></wxc-progress>
                            </div>
                        </div>
                    </div>
                    <!--按钮板块-->
                    <div class="xxyPME_alink flex-row">
                        
                        <div class="xxyPMEA_box flex flex-column xxyBoxShaow-small" :class="[index==1?'xxyPMEA_box_2':'']" v-for="(item,index) in userMsg.userflo" @click="xxyPerFn(item.title)">
                            <text class="fs48 xxyColor7f7 xxyTex-center line-height68">{{item.num}}</text>
                            <text class="fs28 xxyColor999 xxyTex-center">{{item.type}}</text>
                        </div>
                    </div>
                    <!--设置板块-->
                    <div class="">
                        
                    </div>
                </div>
            </div>
            <div class="xxyPerEach">
                <xxy-tab :active-index="activeIndex" :menu="menuTex" @change="onchange"></xxy-tab>
                <div style="flex:1;position:relative">
                
                    <scroller class="flex flex-row posi-rel" paging-enabled="true" scroll-direction="horizontal" @scroll="onscroll" offset-accuracy="0">
                       
                        <div class="width750" ref="page_1">
                            <text>我的评论区域</text>
                        </div>
                        <div class="width750" ref="page_2">
                            <text>我的帖子区域</text>
                        </div>
                        

                    </scroller>

                </div>


            </div>

        </scroller>

        <xxy-header :title="userMsg.username" 
                    right_type="setup"
                    center_if=false
                    bgColorOp="0"
                    ></xxy-header>
        
        
        
    </div>
</template>
<script>
    import xxyHeader from "../common/header/xxyHeader.vue"
    import xxyTab from "../common/tabSelect/xxyTab.vue"
    import refresher from '../common/refresh';
    import { WxcProgress } from 'weex-ui';
    import Config from './config.js'
    const dom = weex.requireModule('dom');
    const SCROLL_FULL_WIDTH = 750;
    
    export default{
        data(){
            return {
                userMsg:Config.userMsg,
                activeIndex: "0",
                menuTex: Config.userMsg.userTabMsg,
            }
        },
        components: {
            xxyHeader,xxyTab,refresher,WxcProgress
        },
        methods:{
            // 二次改版tab切换
            onchange(index){
                if(index==this.activeIndex) return;
                dom.scrollToElement(this.$refs[`page_${index + 1}`])
            },

            onscroll(e) {
                let formatOffset = Math.abs(e.contentOffset.x)
                if( formatOffset % SCROLL_FULL_WIDTH === 0 ){
                    this.activeIndex = formatOffset / SCROLL_FULL_WIDTH
                }
            },
            // 以下路由可能需要传递参数并在其界面created中进行数据请求03.06
            xxyPerFn(page){
                // 根据索引判断路由界面
                console.log(page)

                this.$router.open({
                    name: page,
                    type: 'PUSH'
                })
            }
        }
        
    }
</script>
<style lang="sass" src="./index.scss" scoped>
    
</style>

