<template lang="">
    <div class="xxyPostBox" :ref="'postBox_'+msg.id" @click="gameClick">
        <div class="xxyPb_top flex-row" @click="userFn(msg.user_id)">
            <image :src="msg.icon" class="xxyPb_usericon mr20"></image>
            <div class="xxyPb_usermsg flex flex-column-between">
                <text class="xxyColor333 fs28 font-weight">{{msg.user_name}}</text>
                <div class="flex-row-between">
                    <text class="fs24 xxyColor7f7">发表了新帖</text>
                    <text class="fs24 xxyColor999">{{msg.browseNum+`次浏览`}}</text>
                </div>
            </div>
        </div>
        <!--帖子内容板块-->
        <div class="xxyPb_bottom" @click="postFn">
            
            <image class="xxyScreen_750" :src="msg.pic[0].src" resize="cover" @load="imgLoad" :ref="'postImg_'+msg.id"></image>
            <div class="xxyPbb_msg">
                
                <text class="xxyColor333 fs32 limit_one font-weight mb20">{{msg.title}}</text>
                <text class="xxyColor7f7 fs28 limit_three mb20">{{msg.content}}</text>
                <div class="flex-row-between">
                    <text class="xxyColor999 fs24">{{msg.create_time}}</text>
                    <div class="flex-row">
                        <div class="mr50 flex-row-center" @click="postDz">
                            <text class="xxyColor999 iconfont fs28 mr10">&#xe644;</text>
                            <text class="xxyColor999 fs24">{{msg.thumbNum=="0"?'':msg.thumbNum}}</text>
                        </div>
                        <div class="flex-row-center">
                            <text class="xxyColor999 iconfont fs28 mr10">&#xe667;</text>
                            <text class="xxyColor999 fs24">{{msg.replyNum=="0"?'':msg.replyNum}}</text>
                        </div>
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
            gameid: {
                type: [String,Number],
                default: ''
            }
        },
        methods:{
            postFn(){
                console.log("帖子详情")
                // 点击路由帖子主页
                this.$router.open({
                    name: "game.post.detail",
                    type: "PUSH",
                    params: {
                        game_id: this.game_id,
                        post_id: this.msg.id,

                    },
                    statusBarStyle: "lightContent"
                })
            },
            postDz(){
                console.log("点赞帖子")
                this.$notice.toast({
                    message: "点赞帖子"
                })
                // 点赞帖子
                // const str = '';
                // this.$fetch({
                //     method: 'GET',    
                //     name: 'xxyPostDz',
                //     data: str,
                //     header: {
                //         'Content-Type': 'application/x-www-form-urlencoded',
                //     },
                // }).then(resData => {
                //     // 成功回调
                //     console.log(resData)
                // }, error => {
                //     // 错误回调
                //     console.log(error)
                // })
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
            imgLoad(event){
                // 图片加载成功后重置宽高
                if(event.success){
                    console.log("查看图片的原始宽高")
                }
            }
        }
    }
</script>
<style lang="sass" src="./index.scss" scoped></style>