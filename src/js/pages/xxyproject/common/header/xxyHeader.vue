<template>
    <div class="xxyHeader xxyHeaderSearch">
        <wxc-minibar background-color="#148bc8">
            <div class="xxyHeader_scan" @click="xxySearch" slot="left">
                <text class="xxyHeader_sic iconfont">&#xe65c;</text>
            </div>
            <div class="xxyHeader_center" slot="middle">
                <text class="xxyHeader_title" v-if="xxyTitleImg">{{title}}</text>
                <image v-if="!xxyTitleImg" :src="title_icon" class="xxyHeader_logo"></image>
            </div>
            <div class="xxyHeader_notice" @click="xxyNotice" slot="right">
                <text class="xxyHeader_ic iconfont">&#xe70a;</text>
                <text class="xxyHeader_txt">消息</text>
            </div>
        </wxc-minibar>
    </div>
</template>
<script>
import { WxcMinibar } from 'weex-ui';
const modal = weex.requireModule('modal');
export default {
    data(){
        return {
            xxyTitleImg : this.title_icon==undefined?true:false,
        }
    },
    props:[
        "title","title_icon"
    ],
    components: { WxcMinibar },
    created() {
        this.xxySearch();
    },
    methods: {
        jumpWeb(_url) {
            // if (!_url) _url = 'http://m.you.163.com/search';
            // this.$router.toWebView({
            //     url: _url,
            //     title: '',
            //     navShow: true,
            // })
        },
        // 新秀游消息界面  ---通过路由
        xxyNotice(){

        },
        // 新秀游路由界面  ---通过路由
        xxySearch(){
            this.$router.open({
                name: 'xxyGSearch',
                type: 'PUSH'
            })
        }

    }
}
</script>
<style lang="sass" src="./header.scss" scoped>
    
</style>