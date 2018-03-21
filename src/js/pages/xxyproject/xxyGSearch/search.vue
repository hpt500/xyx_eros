<template>
    <div class="wrapper xxyGSearch">
       <div class="xxyGS">
           <!--<div class="xxyGS_back" @click="xxyBack">
               <text class="iconfont" style="color:#ffffff;font-size:32px;">&#xe622;</text>
               <text style="color:#ffffff;font-size:28px;">返回</text>
           </div>
           <div class="xxyGS_form">
                <div class="xxyGSF_input">
                    <input style="font-size: 28px; tint-color: #3bb5fc;flex:1; height: 40px;" 
                    type="text" 
                    placeholder="搜索新秀游戏" 
                    :autofocus="focusBool"  
                    value=""
                    @return="xxyGSAJax"/>
                </div>
                <div class="xxyGSF_button">
                    <text style="color:#999999;font-size:28px;">搜索</text>
                </div>
           </div>-->
           <div class="app-notice" :style="{'height':appNoticeHeight + 'px'}"></div>
           <div class="xxyGS_input dhHeight">
               
                <wxc-searchbar ref="wxc-searchbar" 
                            autofocus="true"
                            placeholder="搜索新秀游戏"
                            always-show-cancel="true"
                            theme="xxyBlue"
                            @wxcSearchbarCancelClicked="xxySearchCancle"
                            @wxcSearchbarInputReturned="xxySearchReturn"
                            @wxcSearchbarInputOnInput="xxySearchInput"
                            @wxcSearchbarCloseClicked="xxySearchColse"
                            @wxcSearchbarInputOnFocus="xxySearchFocus"
                            @wxcSearchbarInputOnBlur="xxySearchBlur"></wxc-searchbar>

           </div>   
           
       </div>
       <scroller class="xxyGS_list" :style="{'top':Number(appNoticeHeight)+90}">
            <div class="xxyGSL_loding" v-if="refreshing" ref="xxyloading">
                <image :src="loadingSrc" style="width:50px;height:50px;"></image>
            </div>
            <!--遍历搜索数据:key="item.real==1?item.id:''"-->
            <div v-for="(item,index) in searchDeal" :ref="'search'+index" class="xxyGSL_box">
                
                <div class="xxyGSLB_msg">
                    <image :src="xxy+item.icon" 
                    style="width:96px;height:96px;border-radius:20.4px;"></image>
                    <div class="xxyGSLBM_name">
                        <text style="font-size:32px;width:400px;" class="limit-one">{{item.real==1?item.ch_name:item.gamename}}</text>
                    </div>
                </div>
                <div class="xxyGSLB_button" 
                :style="{'backgroundColor':item.real==1?'#148bc8':'#ffa800'}">
                    <text style="color:#ffffff;font-size:28px;">{{item.real==1?"进入热议":"推荐"}}</text>
                </div>

            </div>

            <div class="xxyGSL_no" v-if="botBool">
                <text style="font-size:32px;color:#999999">{{botTex}}</text>
            </div>
            
       </scroller>
    </div>
</template>
<script>
if(process.env.NODE_ENV === 'development') require('Config')
import { WxcMinibar,WxcSearchbar } from 'weex-ui';
const modal = weex.requireModule('modal');

var stream = weex.requireModule('stream');

export default {
    components: {
        WxcSearchbar 
    },
    created() {
        
        this.$storage.get('xxyType').then(resData => {
            this.appNoticeHeight = resData.statusBarHeight;
        })
    },
    data() {
        return {
            appNoticeHeight: 50,
            
            xxy:"http://www.xinxiuyou.com/",
            refreshing: false, 
            focusBool: true,
            loadingSrc: "http://www.xinxiuyou.com/static/img/loader.gif",//动态刷新图标
            botBool: false,
            botTex: "没有找到...输入更准确的关键字试试!",
            searchDeal:[],

        }
    },
    methods: {
        // 取消按钮
        xxySearchCancle(){
            this.$router.back({
                length: 1,
                type: 'PUSH',
                callback() {
                    // 返回成功回调
                }
            })
        },
        // 输入确认按钮
        xxySearchReturn(e){
            const div = this;
            const val = e.value;
            if(val!=""&&!this.refreshing){
                this.refreshing = true;
                this.botBool = false;
                this.searchDeal = [];

                // 暂缺登录用户的id
                const seaStr = "str="+val+"&user_id=";

                this.$fetch({
                    method: 'POST',    
                    name: 'xxySearchGame',
                    data: seaStr,
                    header: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }).then(resData => {
                    // 成功回调
                    div.refreshing = false;
                    console.log("成功返回数据")
                    div.searchDeal = resData.data.data;
                    console.log(resData)
                    if(resData.data.state==3){div.botBool = true;}
                    
                }, error => {
                    // 错误回调
                    div.refreshing = false;
                    console.log("失败")
                    console.log(error)
                })
            }
            
        },

    }
}
</script>
<style lang="sass" src="./index.scss" scoped></style>