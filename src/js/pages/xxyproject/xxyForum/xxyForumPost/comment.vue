<template lang="">
    <div class="xxy_wrapper xxyPostComment">
        <!--帖子评论详情-->
        <div class="app-notice" :style="{'height':appNoticeHeight + 'px'}"></div>
        <xxy-header title="评论"
                    titleFs="36" 
                    left_type="back"
                    center_if=true
                    bgColor="#148bc8"></xxy-header>
        <scroller class="xxyMain_hasDh flex-column" 
                    offset-accuracy="0" 
                    :style="{'top':Number(appNoticeHeight) + 90}">   
            <div class="xxyPDB_com xxyBgfff mb20">
                <post-com-box :msg="msg" :lzid="msg.user_id"></post-com-box>
            </div>

        </scroller>
    </div>
</template>
<script>
    import xxyHeader from "../../common/header/xxyHeader.vue"
    import postComBox from "../../common/posts/comBox.vue"
    import Config from '../config.js'
    export default{
        data(){
            return {
                appNoticeHeight: 50,
                msg: {},
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
            },
        },
        components:{
            xxyHeader,postComBox
        },
        created(){

        },
        methods:{

        }

    }
</script>
<style src="../index.scss" lang="sass" scoped></style>