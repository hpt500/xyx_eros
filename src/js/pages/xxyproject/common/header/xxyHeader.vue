<template>
    <div class="xxyHeader xxyHeaderSearch" :style="{'background-color':'rgba(20,139,200,'+(bgColorOp||'1')+')'}">
        <div class="app-notice" :style="{'height':appNoticeHeight + 'px',
        'background-color':'rgba(20,139,200,'+(bgColorOp||'1')+')'}"></div>

        <div class="xxyHeaderMain dhHeight flex-row flex-align">
            <div class="xxyHLeft xxyHeader_scan flex-column flex-align" @click="xxyLeft">
                <text class="xxyHeader_tex fs50 iconfont">{{
                        left_type=="search"?"&#xe65c;":
                        (left_type=="back"?"&#xe679;":
                        "")}}</text>
            </div>
            <div class="xxyHCenter dhHeight flex flex-row flex-align">
                <text class="xxyHeader_tex fs44" v-if="xxyTitleTex">{{title}}</text>
                <image v-if="xxyTitleImg" :src="title_icon" class="xxyHeader_logo"></image>
                <div class="xxyHeader_tab dhHeight posi-rel flex-row" v-if="xxyTitleTab">
                    <div class="xxyHTB_x" :style="{'left':tabIndex*130}"
                    ></div>
                    <div v-for="(item,index) in title_tab" 
                    class="xxyHeader_tabBox flex-row flex-align" 
                    :class="[index==0?'xxyHTab_box_actice':'']"
                    :ref="'tab_' + index"
                    :key="index"
                     @click="xxyTab(index)">
                        <text class="xxyHTab_box fs32 xxyColorfff flex">{{item.name}}</text>
                    </div>
                </div>
            </div>
            <div class="xxyHRight xxyHeader_scan flex-column flex-align" :class="[Math.floor(bgColorOp)==0?'xxyHeader_scan_opcity':'']" @click="xxyRight">
                <text class="xxyHeader_tex fs50 iconfont" >{{
                    right_type=="notice"?"&#xe70a;":
                    (right_type=="setup"?"&#xe7fb;":
                    (right_type=="more"?"&#xe7e5;":
                    ""))}}</text>
            </div>
        </div>
        
    </div>
</template>
<script>
import { WxcMinibar } from 'weex-ui';
const modal = weex.requireModule('modal');
export default {
    data(){
        return {
            // xxyTitleImg : this.title_icon==undefined?false:true,
            // xxyTitleBool: this.center_if=='true'?true:false,
            // xxyTitleTab : this.title_tab==undefined?false:true,

            xxyTitleTex: (!(this.title==undefined)&&this.center_if=='true'),
            xxyTitleImg: (!(this.title_icon==undefined)&&this.center_if=='true'),
            xxyTitleTab: (!(this.title_tab==undefined)&&this.center_if=='true'),

            appNoticeHeight: 56,

        }
    },
    props:[
        "title","title_icon","title_tab","left_type","right_type","center_if","bgColorOp","tabIndex"
    ],
    components: { WxcMinibar },
    created() {
        console.log("测试")
        console.log(this.title_tab)
        this.$storage.get('xxyType').then(resData => {
            console.log(resData.statusBarHeight)
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
        // 新秀游标题右侧
        xxyRight(){
            switch(this.right_type){
                case 'notice'://通知
                    this.$router.open({
                        name: 'xxyNotice',
                        type: 'PUSH',
                        navShow: false,
                        statusBarStyle: 'LightContent'
                    })
                    break;
                case 'setup'://设置
                    this.$router.open({
                        name: 'perSet',
                        type: 'PUSH',
                        statusBarStyle: 'LightContent'
                    })
                    break;
                case 'more'://更多
                    this.xxyMore();
                    
                    break;
            }
        },
        // 更多选项
        xxyMore(){
            console.log("更多选项")
            this.$share({
                        title:'',                                     
                        // 分享出去的 title
                        content:'',                                   
                        // 内容
                        url: '',                                      
                        // 用户点击后跳转 url
                        image: '',                                    
                        // 图片url    
                        platforms: ['Pasteboard','WechatSession']     
                        // 选填，不传此属性默认全部，目前支持朋友圈、朋友、复制链接
                    }).then(resData => {
                        // 成功的回调
                    }, error => {
                        // 失败的回调
                    })

        },
        // 新秀游标题tab切换
        xxyTab(index){
            this.tabIndex = index
            this.$emit('change', index)
        }


    }
}
</script>
<style lang="sass" src="./header.scss" scoped>
    
</style>