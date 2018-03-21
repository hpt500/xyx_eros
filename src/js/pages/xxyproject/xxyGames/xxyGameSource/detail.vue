<template lang="">
    <div class="xxyGameDetail xxyGamePage">

        <scroller class="xxyGameScro flex flex-column" offset-accuracy="300px">
            <div class="xxyGD_top xxyBgfff mb20">
                <!--主图或者视频-->
                <image :src="msg.main_pic" class="xxyGD_mpic xxyGameMain_pic"></image>
                <div class="xxyGD_main">
                    <div class="xxyGD_msg flex-row mb20">
                        <image :src="msg.icon" class="gameIcon100 mr20"></image>
                        <div class="flex flex-column flex-column-between h100">
                            <text class="line-height60 fs40 limit-one">{{msg.game_name}}</text>
                            <text class="line-height40 fs28 xxyColor999 limit-one">{{msg.descript}}</text>
                        </div>
                    </div> 
                    <div class="xxyGD_admin flex-row flex-row-between">
                        <div class="flex-column flex-align w200" v-for="(item,index) in btnItems" @click="btnFn(index)">
                            <text class="fs50 iconfont">{{item.iconfont}}</text>
                            <text class="fs24 mt10">{{item.type}}</text>
                        </div>
                    </div> 
                </div>
            </div>
            <!-- 游戏通知栏-qq群之类-->
            <div class="xxyGD_notcie xxyBgfff mb20 flex-row" v-if="msg.tell!=''?true:false" @click="xxyTexClone(msg.tell,'复制QQ群成功')">
                <text class="fs28 xxyColor999">{{"《"+msg.game_name+"》官方QQ群："}}</text>
                <text class="fs28 limit-one flex xxyColor">{{msg.tell}}</text>
            </div>
            <!-- 游戏简介板块-->
            <div class="xxyGD_control xxyBgfff mb20" v-if="this.control!=''?true:false">
                <div class="xxyTitle">
                    <text class="fs36">简介</text>
                </div>
                <div class="xxyGDC_tex flex-column">
                    <text class="fs28 xxyColor999 line-height40" :class="[limitTexCT?'limit-three':'']">{{gameControl}}</text>
                    <div class="mt20 flex-row-end">
                        <text class="fs24 xxyColor" @click="showAll('control')">{{limitTexCT?"显示全部":"收起"}}</text>
                    </div>
                     
                </div>
            </div>    
            <!--图片--> 
            <div class="xxyGD_screen xxyBgfff mb20" v-if="msg.screen.length!=0?true:false">
                <div class="xxyTitle">
                   <text class="fs36">图片</text>
                </div>
                <div class="xxyGDS_boxs flex-row">
                    <image class="xxyGDS_box" resize="cover" :src="item.src" v-for="(item,index) in msg.screen" @click="openLightBox(index)"></image>
                    <wxc-lightbox
                        ref="wxc-lightbox"
                        height="750"
                        :check="imgCheck"
                        :show="imgShow"
                        :image-list="msg.screen"
                        @wxcLightboxOverlayClicked="wxcLightboxOverlayClicked">
                    </wxc-lightbox>
                </div>
            </div>  
            <!--更新内容-->  
            <div class="xxyGD_upload xxyBgfff mb20" v-if="msg.uploadCont.length!=0?true:false"> 
                 <div class="xxyTitle">
                   <text class="fs36">更新</text>
                </div>
                <div class="xxyGDC_tex flex-column ">
                    <text class="fs28 xxyColor999 line-height40" :class="[limitTexUP?'limit-three':'']">{{gameUploadCont}}</text>
                    <div class="mt20 flex-row-end">
                        <text class="fs24 xxyColor" @click="showAll('upload')">{{limitTexUP?"显示全部":"收起"}}</text>
                    </div>
                     
                </div>
            </div>

            <!--详细信息-->
            <div class="xxyGD_ven xxyBgfff mb20" v-if="msg.msgDetail.length!=0?true:false"> 
                 <div class="xxyTitle">
                   <text class="fs36">详细</text>
                </div>
                <div class="xxyGDV_boxs flex-row">
                    <div class="xxyGDV_box mb30" v-for="(item,index) in msg.msgDetail">
                        <text class="fs28 xxyColor535 font-weight mb15">{{item.type}}</text>
                        <text class="fs28 xxyColor999">{{item.content}}</text>
                    </div>
                </div>
            </div>


            
             
        
        </scroller>
        

    </div>
</template>
<script>
    import Config from '../config.js'
    import { WxcLightbox } from 'weex-ui';
    export default{
        data(){
            return {
                btnItems:[
                    {type:"评分",iconfont:"\ue759",index:0},
                    {type:"关注",iconfont:"\ue669",index:1},
                    {type:"下载",iconfont:"\ue75d",index:2}
                ],
                msg: Config.gameDetail,
                limitTexCT: true,limitTexUP: true,
                imgShow: false,
                imgCheck: 0,//图片索引
            }
        },
        props:[ 
            
        ],
        computed:{
            gameControl(){ 
                return this.msg.control.replace(/\<br>/g,"\n")
            },
            gameUploadCont(){
                return this.msg.uploadCont.replace(/\<br>/g,"\n")
            }
            
        },
        created(){
            // this.$notice.loading.show("")
            console.log("游戏详情页")
        },
        components:{
            WxcLightbox
        },
        methods:{
            openLightBox (index) {
                this.imgShow = true;
                this.imgCheck = index;
                console.log(this.imgCheck)
            },
            wxcLightboxOverlayClicked () {
                // 无状态组件，需要在此次关闭
                this.imgShow = false;
            },
            showAll(type){
                if(type=='') return;
                switch(type){
                    case 'control':
                        this.limitTexCT = !this.limitTexCT;
                        break;
                    case 'upload':
                        this.limitTexUP = !this.limitTexUP;
                        break;
                }
            },
            btnFn(index){
                switch(index){
                    case 0:
                        // 游戏评价
                        this.gamePj();
                        break;
                    case 1:
                        // 游戏关注
                        this.gameFl()
                        break;
                    case 2:
                        // 游戏下载
                        this.gameUp()
                        break;
                }
            },
            gamePj(){
                // 游戏评价
                console.log("游戏评价")
                this.$notice.toast({
                    message: '游戏评价'
                });
            },
            gameFl(){
                // 游戏关注
                console.log("游戏关注")
                this.$notice.toast({
                    message: '游戏关注'
                });
            },
            gameUp(){
                // 游戏下载
                console.log("游戏下载")
                this.$notice.toast({
                    message: '游戏下载'
                });
            },
            xxyTexClone(text,desc){
                // qq群文本复制
                console.log("文本复制")
                if (text.toString() === '') return;
                this.$tools.copyString(text.toString()).then(
                    resData => {
                        this.$notice.toast({
                            message: desc
                        });
                    }, 
                    error => {
                        this.$notice.toast({
                            message: '拷贝失败'
                        });
                    }
                );
            }
        }
    }
</script>
<style lang="sass" src="../index.scss" scoped></style>