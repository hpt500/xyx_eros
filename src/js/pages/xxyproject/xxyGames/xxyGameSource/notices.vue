<template lang="">
    <div class="xxyGameNotice xxyGamePage" style="paddingTop:70">
        <scroller class="xxyGameScro flex flex-column" offset-accuracy="300px">
            <text>公告</text>
        </scroller>

    </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        props:[
            
        ],
        created(){
            // this.$notice.loading.show("")
            console.log("游戏公告页")
        },
        components:{

        },
        methods:{

        }
    }
</script>
<style lang="sass" src="../index.scss" scoped></style>