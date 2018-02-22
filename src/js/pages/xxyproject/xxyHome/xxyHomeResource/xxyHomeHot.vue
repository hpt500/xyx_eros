<template lang="">
    <div class="xxyHomeHot xxyHomePage">
        <scroller class="xxyHomePageScro xxyHPS3" scroll-direction="vertical">

            <text style="font-size:28px;">热点</text>

        </scroller>

    </div>
</template>
<script>
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
    }
</script>
<style lang="sass" src="../index.scss" scoped>
</style>
<style scoped></style>