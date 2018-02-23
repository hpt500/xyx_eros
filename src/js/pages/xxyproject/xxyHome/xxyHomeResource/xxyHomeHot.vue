<template lang="">
    <div class="xxyHomeHot xxyHomePage">
        <scroller class="xxyHomePageScro" offset-accuracy="300px">
            <refresher @loadingDown="loadingDown" @loadingAjax="loadingAjax"></refresher>
            <text style="font-size:28px;">热点</text>

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
           
        },
        components:{
            refresher,
        },
        methods:{
            loadingDown(){

            },
            loadingAjax(e){
                console.log("触发")
                const ths = this.loadingAjax;
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
<style scoped></style>