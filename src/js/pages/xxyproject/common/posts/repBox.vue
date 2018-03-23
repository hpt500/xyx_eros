<template lang="">
    <div class="xxyPostRep">
        <div class="flex-row flex-align-center mb5">
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
                <text class="fs28 xxyColor333 ml10 mr10">回复</text>
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
            <text class="fs28 xxyColor333 font-weight ml5">:</text>
        </div>
        <text class="fs28 xxyColor333 limit-two">{{msg.content}}</text>
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
        }
    }
</script>
<style src="./index.scss" lang="sass" scoped></style>