<template lang="">
    <div class="xxyGameForum xxyGamePage" style="paddingTop:70">
        <!--动态页初步设计03.19-->
        <scroller class="xxyGameScro flex flex-column" offset-accuracy="300px">
            <!-- 游戏通知栏-qq群之类-->
            <!--<div class="xxyGD_notcie xxyBgfff mb20 flex-row">
                <image :src="msg.icon" class="xxyGDIcon_small mr20"></image>
                <text class="xxyColor333 fs28 flex mr5">{{msg.game_name}}</text>
                <div class="flex-row flex-align" @click="gameUpload">
                    <text class="iconfont fs36 xxyColor333 mr5">&#xe703;</text>
                    <text class="fs24 xxyColor333">下载</text>
                </div>
            </div>-->
            <!--论坛帖子板块-->
            <div class="xxyGF_main mt20">
                <div class="xxyGF_select xxyBgfff xxyTitle">
                    <!--帖子类型-->
                    <div class="xxyGFS_left flex-row flex-align-center">

                        <text class="xxyGFS_btn" 
                        :class="[index==typeSelect?'xxyGFS_btn_active':'']" 
                        v-for="(item,index) in postMsg.select" @click="postSelect(index)">{{item.text}}</text>
                    </div>
                    <!--帖子排序-->
                    <div class="xxyGFS_right posi-rel flex-row flex-align-center" @click="popoverClicked">
                        
                        <text class="fs24 mr20">{{postMsg.regular[typeRegular].text}}</text>
                        <text class="iconfont fs24">&#xe79b;</text>
 
                        <wxc-popover ref="wxc-popover"
                            :buttons="postMsg.regular"
                            :position="popoverPosition"
                            :arrowPosition="popoverArrowPosition"
                            @wxcPopoverButtonClicked="postRegular"></wxc-popover>
                    </div>
                </div>
                <!--帖子板块-->
                <div class="xxyGF_posts">
                    
                    <div class="xxyGF_post xxyBgfff mb20"
                        v-for="(item,index) in postMsg.posts" 
                        :ref="'postRef_'+item.id" 
                        :key="'postKey_'+item.id">
                        
                        <xxy-post :msg="item" :gameid="msg.game_id"></xxy-post>

                    </div>
 
                </div>
            </div>

        </scroller>

    </div>
</template>
<script>
    import Config from '../config.js'
    import { WxcPopover} from 'weex-ui';
    import xxyPost from '../../common/posts/postBox.vue'
    export default{
        components: { WxcPopover , xxyPost },
        data(){
            return {
                msg:Config.gameDetail,
                postMsg:Config.gamePost,
                typeSelect:0,//帖子类型变量
                typeRegular:0,//帖子排序变量
                popoverPosition:{x:-1,y:308},
                popoverArrowPosition:{pos:'top',x:-15}
            }
        },
        props:[
            
        ],
        created(){
            // this.$notice.loading.show("")
            console.log("游戏动态页")
            
        },
        
        methods:{
            
            // 帖子类型选择
            postSelect(type){
                // 通过变量修改进而重新访问帖子ajax
                // 需要两个变量  --类型  --排序规则
                if(this.typeSelect==type) return;
                this.typeSelect = type;
                this.postAjax();
            },
            // 帖子排序规则
            popoverClicked(){
                this.$refs['wxc-popover'].wxcPopoverShow();
            }, 
            postRegular(obj){
                console.log(obj)
                if(this.typeRegular==obj.index) return;
                this.typeRegular = obj.index;
                this.postAjax();
            },
            // 帖子请求ajax
            postAjax(){
                // 通过类型变量、排序规则变量进行ajax请求
                // this.$fetch({
                //     method: 'GET',    
                //     name: '',
                //     data: {
                //     }
                // }).then(resData => {
                //     // 成功回调
                //     console.log(resData)
                // }, error => { 
                //     // 错误回调
                //     console.log(error)
                // })
            }
        }
    }
</script>
<style lang="sass" src="../index.scss" scoped></style>