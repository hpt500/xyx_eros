<template lang="">
    <div class="xxyHomeAni xxyHomePage">
        <scroller class="xxyHomePageScro" offset-accuracy="300px">
            <refresher @loadingDown="loadingDown" @loadingAjax="loadingAjax"></refresher>
            <game-box v-for="(item, index) in msg.content" :msg="item" :index="index"></game-box>
        </scroller>  

    </div>
</template>
<script>
    import refresher from '../../common/refresh';
    import gameBox from '../../common/games/gameBox.vue';
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
            refresher,gameBox
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