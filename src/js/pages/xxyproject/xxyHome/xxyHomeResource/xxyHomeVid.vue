<template lang="">
    <div class="xxyHomeVid xxyHomePage">
        <scroller class="xxyHomePageScro xxyHPS2">

            <text style="font-size:28px;">视频</text>

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