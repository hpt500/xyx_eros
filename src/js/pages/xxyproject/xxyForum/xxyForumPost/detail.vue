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
        <scroller class="xxyMain_hasDh flex-column" 
                    offset-accuracy="0" 
                    :style="{'top':Number(appNoticeHeight) + 90}">
            <div class="xxyPD_top xxyBgfff mb20">
                <div class="xxyPDT_poster flex-row flex-align-center">
                    <image :src="msg.icon" class="xxyPoster_icon" @click="userFn(msg.user_id)"></image>
                    <div class="xxyPoster_msg flex flex-column-between mr10">
                        <div class="flex-row flex-align-center" @click="userFn(msg.user_id)">
                            <text class="fs28 xxyColor333 font-weight">{{msg.user_name}}</text>
                            <div class="flex-row flex-align-center ml10" v-if="msg.theCh">
                                <image src="http://www.xinxiuyou.com/static/img/houtai/bz.png" class="xxyTenChIcon_30 mr5"></image>
                                <text class="fs24 xxyColor535">{{msg.theCh}}</text>
                            </div>
                        </div>
                        <text class="fs24 xxyColor999">{{msg.create_time}}</text>
                    </div>
                    <div class="xxyPostFollow xxyBgColor flex-row-center"
                    @click="followUser(msg.user_id)">
                        <text class="xxyColorfff fs24">关注</text>
                    </div>
                </div>
                <div class="xxyPDT_title">
                    <text class="xxyColor333 fs40 line-height60">{{msg.title}}</text>
                </div>
                <div class="xxyPDT_button flex-row-between">
                    <div class="flex-row flex-align-center">
                        <text class="iconfont fs24 xxyColor999 mr5">&#xe73d;</text>
                        <text class="fs20 xxyColor999 font-weight">{{msg.browseNum}}</text>
                    </div>
                    <div class="flex-row flex-align-center">
                        <text class="fs28" 
                        :style="{'color': theOrder==1?'#148bc8':'#7f7f7f'}"
                        @click="postSx('1')">正序</text>
                        <text class="xxyPost_sx24"></text>
                        <text class="fs28" 
                        :style="{'color': theOrder==2?'#148bc8':'#7f7f7f'}"
                        @click="postSx('2')">倒序</text>
                        <text class="xxyPost_sx"></text>
                        <div class="flex-row-center ml10"
                        @click="justWatch()">
                            <text class="fs28 iconfont mr5" :style="{'color':justWatchLz?'#148bc8':'#7f7f7f'}">&#xe7fe;</text>
                            <text class="fs28" :style="{'color':justWatchLz?'#148bc8':'#7f7f7f'}">只看楼主</text>
                        </div>
                    </div>
                </div>
            </div>
            <div class="xxyPD_bottom xxyBgfff">
                <div class="xxyPDB_msg">
                    <div class="xxyPDB_content">
                        <!--此处后续需运用自定义模板打出图片结合的内容-->
                        <!--暂时-->
                        <text class="xxyColor333 fs32 line-height50">{{msg.content}}</text>
                    </div>
                    <div class="xxyPDB_button flex-row-center mt40">
                        <div class="xxyPDB_btn flex-column flex-align-center" 
                            v-for="(item,index) in postCzArr"
                            @click="postBtnFn(index)">
                            <div class="xxyPDB_btnIcon flex-row-center"
                                :style="{'backgroundColor':item.is?'#148bc8':'#ecebeb'}">
                                <text class="iconfont fs40 ml2"
                                    :style="{'color':item.is?'#ffffff':'#999999'}">{{item.is?item.iconActive:item.icon}}</text>
                            </div>
                            <text class="fs24 mt5"
                                :style="{'color':item.is?'#148bc8':'#999999'}">{{(index==1||item.is)?'已收藏':item.type}}</text>
                        </div>
                    </div>
                </div>
                <div class="xxyPDB_comment">
                    <div class="xxyPDB_com" v-for="(item,index) in msg.comment" v-if="!justWatchLz?true:(item.user_id==msg.user_id?true:false)">
                        <post-com-box :msg="item" :lzid="msg.user_id"></post-com-box>
                    </div>
                </div>
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
                dhTitle: "帖子",
                msg: Config.postDetail,
                theOrder: "1",
                justWatchLz: false,
                postCzArr: [
                    {icon:'\ue7e0',type:'分享',is:false},
                    {icon:'\ue669',type:'收藏',is:false,iconActive:'\ue668'},
                    {icon:'\ue644',type:'赞同',is:false,iconActive:'\ue6e3'},
                    {icon:'\ue815',type:'反对',is:false,iconActive:'\ue814'},
                    {icon:'\ue667',type:'回复',is:false},
                ]
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
        computed:{
            // 在计算属性中进行评论列表的正序\倒序 以及只看楼主的计算
        },
        created(){
            if(this.msg.isCollect) this.postCzArr[1].is = true;
            if(this.msg.isthumb) this.postCzArr[2].is = true;
            if(this.msg.isstamp) this.postCzArr[3].is = true;
            if(this.msg.thumbNum!=''&&this.msg.thumbNum!='0') this.postCzArr[2].type = this.msg.thumbNum;
            if(this.msg.stampNum!=''&&this.msg.stampNum!='0') this.postCzArr[3].type = this.msg.stampNum;
            if(this.msg.replyNum!=''&&this.msg.replyNum!='0') this.postCzArr[4].type = this.msg.replyNum;

        },
        components:{
            xxyHeader,postComBox
        },
        methods:{
            // 正序 倒序 ->切换
            postSx(index){
                console.log(index)
                if(index == this.theOrder) return;
                console.log("触发")
                this.theOrder = index;
                this.msg.comment.reverse()
                // 置换样式之后对帖子进行数据颠倒
            },
            // 只看楼主
            justWatch(){
                this.justWatchLz = !this.justWatchLz;
            },
            // 路由用户界面
            userFn(userid){
                // 点击路由用户主页
                this.$router.open({
                    name: "perMain",
                    type: "PUSH",
                    params: {
                        user_id: userid
                    },
                    statusBarStyle: "lightContent"
                })
            },
            followUser(userid){
                this.$notice.toast({
                    message: '关注该用户,id为'+userid
                });
            },
            postBtnFn(index){
                switch(index){
                    case 0:
                        // 分享
                        this.postFx();break;
                    case 1:
                        // 收藏
                        this.postSc();break;
                    case 2:
                        // 点赞
                        this.postDz();break;
                    case 3:
                        // 反对
                        this.postBs();break;
                    case 4:
                        // 回复
                        this.postHf();break;
                }
            },
            postFx(){
                // 分享
                this.$notice.toast({
                    message: '帖子分享'
                });
            },
            postSc(){
                // 收藏
                this.$notice.toast({
                    message: '帖子收藏'
                });
            },
            postDz(){
                // 点赞
                this.$notice.toast({
                    message: '帖子点赞'
                });
            },
            postBs(){
                // 反对
                this.$notice.toast({
                    message: '帖子反对'
                });
            },
            postHf(){
                // 回复
                this.$notice.toast({
                    message: '帖子回复'
                });
            }
        }

    }
</script>
<style src="../index.scss" lang="sass" scoped></style>