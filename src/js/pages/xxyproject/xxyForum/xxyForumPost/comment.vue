<template lang="">
    <div class="xxy_wrapper xxyPostComment">
        <!--帖子评论详情-->
        <div class="app-notice" :style="{'height':appNoticeHeight + 'px'}"></div>
        <xxy-header :title="'回复 '+msg.lnum+' 楼'"
                    titleFs="36" 
                    left_type="back"
                    center_if=true
                    bgColor="#148bc8"></xxy-header>
        <scroller class="xxyMain_hasDh flex-column xxyBgfff"
                    offset-accuracy="0" 
                    :style="{'top':Number(appNoticeHeight) + 90}">   
            <div class="xxyPDB_com xxyBgfff">
                <post-com-box :msg="msg" :lzid="msg.user_id" isDetail="1"></post-com-box>
            </div>
            <div class="xxyPDB_rep">
                <div class="xxyTitle xxyBBorder">
                    <text class="fs32">{{'全部回复('+replyNum+')'}}</text>
                    <div class="flex-row-center">
                        <text class="fs28" 
                        :style="{'color': theOrder==1?'#148bc8':'#7f7f7f'}"
                        @click="comSx('1')">正序</text>
                        <text class="xxyPost_sx20"></text>
                        <text class="fs28" 
                        :style="{'color': theOrder==2?'#148bc8':'#7f7f7f'}"
                        @click="comSx('2')">倒序</text>
                    </div>
                </div>
                <div class="xxyPDB_repBoxs">
                    
                    <div class="xxyPDB_repBox" v-for="(item,index) in msg.reply" :class="[index!=(msg.replyNum-1)?'mb20':'']">
                        <com-rep-box :msg="item" :lzid="msg.lzid" isDetail="1"></com-rep-box>
                    </div>

                </div>
                
            </div>

        </scroller>
    </div>
</template>
<script>
    import xxyHeader from "../../common/header/xxyHeader.vue"
    import postComBox from "../../common/posts/comBox.vue"
    import comRepBox from "../../common/posts/repBox.vue"
    import Config from '../config.js'
    export default{
        data(){
            return {
                appNoticeHeight: 50,
                msg: {},
                replyNum: 0,
                theOrder: "1",
            }
        },
        eros:{
            // 路由打开本页面之前
            beforeAppear (params, options) {
                this.$storage.get('xxyType').then(resData => {
                    this.appNoticeHeight = resData.statusBarHeight;
                })
                // 获取帖子ID所属游戏ID进行请求该user数据
                console.log(params);
                this.msg = params;
                this.replyNum = this.msg.reply.length;
            },
        },
        components:{
            xxyHeader,postComBox,comRepBox
        },
        created(){

        },
        methods:{
            // 正序 倒序 ->切换
            comSx(index){
                if(index == this.theOrder) return;
                this.theOrder = index;
                this.msg.reply.reverse()
                // 置换样式之后对帖子进行数据颠倒
            },
        }

    }
</script>
<style src="../index.scss" lang="sass" scoped></style>