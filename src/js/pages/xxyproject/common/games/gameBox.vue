<template lang="">
    <div class="xxyGameBox mb20"  :ref="'item'+index" @click="gameClick">
        <image :src="msg.pic" class="xxyGb_pic" :ref="'gamePic'+index"></image>
        <div class="xxyGb_msg">
            <text class="xxyGb_name" :ref="'gameName'+index">{{msg.name}}</text>
            <div class="xxyGb_score">
                <image :src="'http://www.xinxiuyou.com/static/img/'+msg.score+'.png'" class="xxyGbs_star"></image>
                <text class="xxyGbs_num" :ref="'gameScore'+index">{{msg.score}}</text>
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
                    return [];
                }
            },
            index: {
                type: String,
                default: function(){
                    return "";
                }
            }
        },
        methods:{
            gameClick(){
                // 点击路由游戏主页
                this.$router.open({
                    name: "game.main",
                    type: "PUSH",
                    params: {
                        game_id: this.msg.game_id
                    },
                    statusBarStyle: "lightContent"
                })
            }
        }
    }
</script>
<style lang="sass" src="./index.scss" scoped></style>