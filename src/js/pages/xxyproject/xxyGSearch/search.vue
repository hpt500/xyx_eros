<template>
    <div class="wrapper xxyGSearch">
       <div class="xxyGS">
           <div class="xxyGS_back" @click="xxyBack">
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
           </div>
       </div>
       <scroller class="xxyGS_list">
            <div class="xxyGSL_loding" v-if="refreshing" ref="xxyloading">
                <image src="http://www.xinxiuyou.com/static/img/loader.gif" style="width:50px;height:50px;"></image>
            </div>
            <div v-for="(item,index) in searchDeal" :ref="'search'+index" class="xxyGSL_box">
                
                <div class="xxyGSLB_msg">
                    <image :src="item.icon" 
                    style="width:96px;height:96px;border-radius:20.4px;"></image>
                    <div class="xxyGSLBM_name">
                        <text style="font-size:32px;width:400px;" class="limit-one">{{item.name}}</text>
                    </div>
                </div>
                <div class="xxyGSLB_button" 
                :style="{'backgroundColor':item.type==0?'#148bc8':'#ffa800'}">
                    <text style="color:#ffffff;font-size:28px;">{{item.type==0?"进入热议":"推荐"}}</text>
                </div>

            </div>
            
       </scroller>
    </div>
</template>
<script>
if(process.env.NODE_ENV === 'development') require('Config')
import { WxcMinibar } from 'weex-ui';
const modal = weex.requireModule('modal');
export default {
    components: {
        
    },
    created() {
        
    },
    data() {
        return {
           refreshing: false, 
           focusBool: true,
           searchDeal:[
               {
                   icon:"http://is4.mzstatic.com/image/thumb/Purple118/v4/ea/32/bf/ea32bfa5-9284-a67b-eae2-41adb794bd3b/source/512x512bb.jpg",
                   name:"元气偶像季-艺人养成手游",
                   type:1,
               },
               {
                   icon:"http://www.xinxiuyou.com/static/img/gameBackups/2017/12/06/151253022936128.png",
                   name:"元气封神",
                   type:0,
               },
               {
                   icon:"http://www.xinxiuyou.com/static/img/gameBackups/2017/12/06/151253022936128.png",
                   name:"元气封封封封封封封封封封封封封封封封封封封封封神",
                   type:0,
               },
           ]
        }
    },
    methods: {
       xxyBack(){
           this.$router.back({
                length: 1,
                type: 'PUSH',
                callback() {
                    // 返回成功回调
                }
            })
       },
       xxyGSAJax(){
           console.log("输入完成")
       }

    }
}
</script>
<style lang="sass" src="./index.scss"></style>