<template lang="">
    <div class="xxyHomeAni xxyHomePage">

        <scroller class="xxyHomePageScro xxyHPS1" offset-accuracy="300px">
            <refresher></refresher>
            <text style="font-size:28px;">动态</text>

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
        components:{
            refresher,
        }
    }
</script>
<style lang="sass" src="../index.scss" scoped>
</style>
<style></style>