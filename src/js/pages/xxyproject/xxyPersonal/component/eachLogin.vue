<template lang="">
    <div class="xxyEachLogin">
        
        <div class="xxyEL_box" @click="xxyWXFn">
            <text class="xxyELB_icon iconfont">&#xe610;</text>
            <text class="xxyELB_name">微信</text>
        </div>
        <div class="xxyEL_box" @click="xxyQQFn">
            <text class="xxyELB_icon iconfont">&#xe63c;</text>
            <text class="xxyELB_name">QQ</text>
        </div>
        <div class="xxyEL_box" @click="xxyFBFn">
            <text class="xxyELB_icon iconfont">&#xe600;</text>
            <text class="xxyELB_name">fackbook</text>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                
            }
        },
        components: {

        },
        methods:{
            xxyWXFn(){
                // 微信登录

            },
            xxyQQFn(){
                // qq登录
            },
            xxyFBFn(){
                // facebook登录

            }

        }
    }
</script>
<style lang="sass" src="../index.scss" scoped>
</style>
<style scoped></style>