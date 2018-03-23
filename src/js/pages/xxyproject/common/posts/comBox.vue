<template lang="">
    <div class="xxyPostCom flex-row">
        <image :src="msg.icon" class="xxyPC_icon mr10" @click="userFn(msg.user_id)"></image>
        <div class="flex flex-column">
            <div class="xxyPC_msg flex-column-between">
                <div class="flex-row-between">
                    <div class="flex-row flex-align-center" @click="userFn(msg.user_id)">
                        <text class="fs28 xxyColor333 font-weight">{{msg.user_name}}</text>
                        <!--判断该评论id==楼主id则显示楼主标识-->
                        <div class="xxyPostLz ml10" v-if="msg.user_id==lzid">
                            <text class="fs18 xxyColor999">楼主</text>
                        </div>
                        <!--判断是否存在特殊标识-->
                        <div class="flex-row flex-align-center ml10" v-if="msg.theCh">
                            <image src="http://www.xinxiuyou.com/static/img/houtai/bz.png" class="xxyTenChIcon_30 mr5"></image>
                            <text class="fs24 xxyColor535">{{msg.theCh}}</text>
                        </div>
                    </div>
                    <div class="flex-row flex-align-center">
                        <!--此处或许需要判断-->
                        <text class="fs28 xxyColor999 mr10" @click="reportComment">举报</text>
                        <text class="fs28 xxyColor999">{{msg.lnum+'楼'}}</text>
                    </div>
                </div>
                <text class="fs24 xxyColor999">{{msg.create_time}}</text>
            </div>
            <div class="xxyPC_content"> 
                
                <div class="xxyPC_con mb20" @click="commentFn">
                    <!--此处同帖子一样 需通过计算属性或者定义模板输出图文结果的模板-->
                    <text class="fs32 xxyColor333 line-heihgt48">{{msg.content}}</text>
                </div>
                <div class="xxyPC_button flex-row-end">
                    <div class="mr30 flex-row-center" @click="comDz">
                        <text class="iconfont fs32 xxyColor999 mr5">&#xe644;</text>
                        <text class="fs24 xxyColor999">{{msg.thumbNum=='0'?'':msg.thumbNum}}</text>
                    </div>
                    <div class="mr30 flex-row-center" @click="comBs">
                        <text class="iconfont fs32 xxyColor999 mr5">&#xe815;</text>
                        <text class="fs24 xxyColor999">{{msg.stampNum=='0'?'':msg.stampNum}}</text>
                    </div>
                    <div class="flex-row-center" @click="comHf">
                        <text class="iconfont fs32 xxyColor999 mr5">&#xe667;</text>
                        <text class="fs24 xxyColor999">{{msg.replyNum=='0'?'':msg.replyNum}}</text>
                    </div>
                </div>
            </div>
            <div class="xxyPC_reply" v-if="(msg.reply.length>0||msg.reply)">
                <div class="xxyPC_rep" 
                    v-for="(item,index) in msg.reply"
                    :class="[index!=1?'mb20':'']" v-if="index<2"
                    @click="commentFn">
                    <post-com-rep-box 
                    :msg="item" 
                    :lzid="lzid"
                    :comid="msg.id"
                    :comuserid="msg.user_id"
                    :comusername="msg.user_name" 
                    :lnum="msg.lnum"></post-com-rep-box>
                </div> 
                <div class="flex-row-end mt20 mr10" v-if="msg.reply.length>2">
                    <text class="fs28 xxyColor" @click="commentFn">{{'全部 '+msg.reply.length+' 条回复' }}</text>
                </div>
                
            </div>
            
        </div>
    </div>
</template>
<script>
    import postComRepBox from "./repBox.vue"
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
            }
        },
        components:{
            postComRepBox
        },
        create(){

        },
        methods:{
            comDz(){
                // 点赞评论
            },
            comBs(){
                // 反对评论
            },
            comHf(){
                // 回复评论
                this.commentFn()
            },
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
            commentFn(){
                this.$router.open({
                    name: "game.post.comment",
                    type: "PUSH",
                    params: Object.assign(this.msg,{lzid:this.lzid}),
                    statusBarStyle: "lightContent"
                })
            }
        }
    }
</script>
<style src="./index.scss" lang="sass" scoped></style>