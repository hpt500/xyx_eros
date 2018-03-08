<template>
    <div class="xxyHeader xxyHeaderSearch" :style="{'background-color':'rgba(20,139,200,'+(bgColorOp||'1')+')'}">
        <div class="app-notice" :style="{'height':appNoticeHeight + 'px',
        'background-color':'rgba(20,139,200,'+(bgColorOp||'1')+')'}"></div>
        <div class="xxyHeaderMain">
            <wxc-minibar :background-color="'rgba(20,139,200,'+(bgColorOp||'1')+')'">
                <div class="xxyHeader_scan xxyHLeft" @click="xxyLeft" slot="left">
                    <text class="xxyHeader_sic iconfont">{{
                        left_type=="search"?"&#xe65c;":
                        (left_type=="back"?"&#xe679;":
                        "")}}</text>
                </div>
                <div class="xxyHeader_center" slot="middle">
                    <text class="xxyHeader_title" v-if="(xxyTitleImg&&xxyTitleBool)">{{title}}</text>
                    <image v-if="(!xxyTitleImg&&xxyTitleBool)" :src="title_icon" class="xxyHeader_logo"></image>
                </div>
                <div class="xxyHeader_scan xxyHright" :class="[Math.floor(bgColorOp)==0?'xxyHeader_scan_opcity':'']" @click="xxyRight" slot="right">
                    <text class="xxyHeader_sic iconfont" >{{
                        right_type=="notice"?"&#xe70a;":
                        (right_type=="setup"?"&#xe7fb;":
                        "")}}</text>
                </div>
            </wxc-minibar>
        </div>
        
    </div>
</template>
<script>
import { WxcMinibar } from 'weex-ui';
const modal = weex.requireModule('modal');
export default {
    data(){
        return {
            xxyTitleImg : this.title_icon==undefined?true:false,
            xxyTitleBool: this.center_if=='true'?true:false,
            appNoticeHeight: 40,
        }
    },
    props:[
        "title","title_icon","left_type","right_type","center_if",'bgColorOp'
    ],
    components: { WxcMinibar },
    created() {
        this.$storage.get('xxyType').then(resData => {
            this.appNoticeHeight = resData.statusBarHeight;
        })
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
        xxyLeft(){
            switch(this.left_type){
                case 'search'://搜索
                    this.$router.open({
                        name: 'xxyGSearch',
                        type: 'PUSH',
                        statusBarStyle: 'LightContent'
                    })
                    break;
                case 'back'://返回
                    this.$router.back({
                        length: 1,
                        type: 'PUSH',
                    })
                    break;
            }
        },
        // 新秀游标题返回  
        xxyRight(){
            switch(this.right_type){
                case 'notice'://通知
                    this.$router.open({
                        name: 'xxyNotice',
                        type: 'PUSH',
                        navShow: false,
                    })
                    break;
                case 'setup'://设置
                    this.$router.open({
                        name: 'perSet',
                        type: 'PUSH'
                    })
                    break;
            }
        },


    }
}
</script>
<style lang="sass" src="./header.scss" scoped>
    
</style>