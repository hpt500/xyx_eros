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
                        <div class="flex-column flex-align w200" v-for="(item,index) in btnItems" >
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
            <div class="xxyGD_control xxyBgfff mb20" v-if="gameControl==''?true:false">
                <div class="xxyTitle">
                    <text class="fs36">简介</text>
                </div>
                <div class="xxyGDC_tex flex-column">
                    <text class="fs28 xxyColor999 line-height40" :class="[limitTex?'limit-three':'']">{{gameControl}}</text>
                    <div class="mt20 flex-row-end">
                        <text class="fs24 xxyColor" @click="showAll">{{limitTex?"显示全部":"收起"}}</text>
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
            <div class="xxyGD_upload xxyBgfff mb20" v-if="msg.screen.length!=0?true:false"> 
                 <div class="xxyTitle">
                   <text class="fs36">更新</text>
                </div>
            </div>
            
             
        
        </scroller>
        

    </div>
</template>
<script>
    import Config from '../../config.js'
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
                limitTex: true,
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
            
        },
        created(){
            // this.$notice.loading.show("")
            console.log("游戏详情页") 
            console.log(this.nobrTex)
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
            showAll(){
                console.log("点击")
                this.limitTex = !this.limitTex;
            },
            btnFn(index){
                switch(index){
                    case 0:
                        // 游戏评价
                        gamePj();
                        break;
                    case 1:
                        // 游戏关注
                        gameFl()
                        break;
                    case 2:
                        // 游戏下载
                        gameUp()
                        break;
                }
            },
            gamePj(){
                // 游戏评价
                console.log("游戏评价")
            },
            gameFl(){
                // 游戏关注
                console.log("游戏关注")
            },
            gameUp(){
                // 游戏下载
                console.log("游戏下载")
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
<style lang="sass" src="../../index.scss" scoped></style>