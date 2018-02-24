<template lang="">
    <div class="xxyHomeAni xxyHomePage">
        <scroller class="xxyHomePageScro" offset-accuracy="300px">
            <refresher @loadingDown="loadingDown" @loadingAjax="loadingAjax"></refresher>
            <div class="xxyGameBox" v-for="(item, index) in msg.content" :ref="'item'+index">
                <image :src="item.pic" class="xxyGb_pic" :ref="'gamePic'+index"></image>
                <div class="xxyGb_msg">
                    <text class="xxyGb_name" :ref="'gameName'+index">{{item.name}}</text>
                    <div class="xxyGb_score">
                        <image :src="'http://www.xinxiuyou.com/static/img/'+item.score+'.png'" class="xxyGbs_star"></image>
                        <text class="xxyGbs_num" :ref="'gameScore'+index">{{item.score}}</text>
                    </div>
                </div>
            </div>
        </scroller>  

    </div>
</template>
<script>
    import refresher from '../../common/refresh';
    export default{
        data(){
            return {

            }
        },
        props:{
            msg: {
                type: Object,
                default: function(){
                    return [];
                }
            }
        },
        created(){
           console.log(this.msg)
        },
        components:{
            refresher,
        },
        methods:{
            loadingDown(){

            },
            loadingAjax(e){
                console.log("触发进行ajax请求最近动态数据")
                
                 // this.$fetch({
                //     method: 'GET',
                //     name: 'yanxuan_home_getYXBanners',
                //     data: {}
                // }).then(resData => {
                //     this.YXBanners = resData.data
                // }, error => {

                // })

                // 模拟
                setTimeout(function(){
                    console.log("进行回调")
                    // this.$refs["scro"].refreshend();
                    e.deal.stopAnimation = true;
                    e.deal.loadingAniDown();
                },2000)
            }
        }
    }
</script>
<style lang="sass" src="../index.scss" scoped>
</style>
<style></style>