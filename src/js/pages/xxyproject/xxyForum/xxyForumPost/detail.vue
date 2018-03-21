<template lang="">
    <div class="xxy_wrapper xxyPostDetail">
        <!--帖子详情-->
        <div class="app-notice" :style="{'height':appNoticeHeight + 'px'}"></div>
        <xxy-header :title="dhTitle"
                    titleFs="36" 
                    left_type="back"
                    right_type="more"
                    center_if=true
                    bgColor="#148bc8"></xxy-header>
        <scroller class="xxyMain_hasDh flex-row" offset-accuracy="0" :style="{'top':Number(appNoticeHeight) + 90}">

        </scroller>
    </div>
</template>
<script>
    import xxyHeader from "../../common/header/xxyHeader.vue"
    import Config from '../config.js'
    export default{
        data(){
            return {
                appNoticeHeight: 50,
                dhTitle: "帖子",
                msg: Config.postDetail,
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
            },
        },
        created(){
            
        },
        components:{
            xxyHeader
        },
        methods:{

        }

    }
</script>
<style src="../index.scss" lang="sass" scoped></style>