<template lang="">
    <div class="xxyPostRep">

        <div class="xxyPR_top flex-row flex-align-center">
            <image :src="msg.icon" 
                class="xxyPR_icon mr15"
                v-if="isDetail!=''"
                @click="userFn(msg.user_id)"></image>
            <div class="flex-row flex-align-center" @click="userFn(msg.user_id)">
                <text class="fs28 xxyColor333 font-weight">{{msg.user_name}}</text>
                <!--判断该评论id==楼主id则显示楼主标识-->
                <div class="xxyPostLz ml10" v-if="msg.user_id==lzid">
                    <text class="fs18 xxyColor999">楼主</text>
                </div>
                <!--判断是否存在特殊标识-->
                <div class="flex-row flex-align-center ml10" v-if="msg.theCh">
                    <image src="http://www.xinxiuyou.com/static/img/houtai/bz.png" class="xxyTenChIcon_20"></image>
                </div>
            </div>
            
            <div class="flex-row flex-align-center" 
                v-if="msg.ouser_name">
                <text class="fs28 xxyColor999 ml10 mr10">回复</text>
                <div class="flex-row flex-align-center" @click="userFn(msg.user_id)">
                    <text class="fs28 xxyColor333 font-weight">{{msg.ouser_name}}</text>
                    <!--判断该评论id==楼主id则显示楼主标识-->
                    <div class="xxyPostLz ml10" v-if="msg.ouser_id==lzid">
                        <text class="fs18 xxyColor999">楼主</text>
                    </div>
                    <!--判断是否存在特殊标识-->
                    <div class="flex-row flex-align-center ml10" v-if="msg.ouserCh">
                        <image src="http://www.xinxiuyou.com/static/img/houtai/bz.png" class="xxyTenChIcon_20"></image>
                    </div>
                </div>
            </div>
            
            <text class="fs28 xxyColor333 font-weight ml5" v-if="isDetail==''">:</text>
        </div>
        <div class="xxyPR_bottom" 
        :class="[isDetail==''?'':'xxyPRB_detail']">
            <text class="fs28 xxyColor333 line-height40" 
            :class="[isDetail==''?'mt5':'mb15',
            isDetail==''?'limit-two':'']">{{msg.content}}</text>
            <div class="xxyPRB_msg flex-row-between mt5" v-if="isDetail!=''">
                <text class="fs24 xxyColor999">{{msg.create_time}}</text>
                <div class="xxyPRB_button flex-row-center">
                    <div class="xxyPRB_btn flex-row-center mr30"
                    @click="repHf">
                        <text class="fs24 xxyColor">回复</text>
                    </div>
                    <div class="xxyPRB_btn flex-row-center mr30"
                    @click="repDz">
                        <text class="fs24 xxyColor999">赞</text>
                        <text class="fs24 xxyColor999 ml2">{{msg.thumbNum}}</text>
                    </div>
                    <div class="xxyPRB_btn flex-row-center mr30"
                    @click="repBs">
                        <text class="fs24 xxyColor999">踩</text>
                        <text class="fs24 xxyColor999 ml2">{{msg.stampNum}}</text>
                    </div>
                    <div class="xxyPRB_btn flex-row-center"
                    @click="repJb">
                        <text class="fs24 xxyColor999">投诉</text>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        props:{
            msg: {
                type: Object,
                default: function(){
                    return {};
                }
            },
            lzid: {
                type: String,
                default: ""
            },
            comid: {// 回复的评论的id
                type: String,
                default: ""
            },
            comuserid: {// 回复的评论人的id
                type: String,
                default: ""
            },
            comusername: {// 回复的评论人的名称
                type: String,
                default: ""
            },
            lnum: {//楼层数
                type: String,
                default: ""
            },
            isDetail:{
                type: String,
                default: ""
            }
        },
        create(){

        },
        methods:{
            userFn(userid){
                // 点击路由用户主页
                this.$router.open({
                    name: "perMain",
                    type: "PUSH",
                    params: {
                        user_id: userid
                    },
                    statusBarStyle: "lightContent"
                })
            },
            repHf(){
                // 回复->回复
                this.$notice.toast({
                    message: '回复回复'
                });
            },
            repDz(){
                // 点赞->回复
                this.$notice.toast({
                    message: '回复点赞'
                });
            },
            repBs(){
                // 反对->回复
                this.$notice.toast({
                    message: '回复反对'
                });
            },
            repJb(){
                // 举报->回复
                this.$notice.toast({
                    message: '回复举报'
                });
            }
        }
    }
</script>
<style src="./index.scss" lang="sass" scoped></style>