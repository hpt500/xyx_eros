<template lang="">
    <div class="xxy_wrapper xxySpecial">       
        <xxy-header title="专题"></xxy-header>
        <list class="list" ref="list" :showRefresh="true" @refresh="onrefresh">
            <cell class="listcell">
                <div class="lc_content">
                    
                </div>
            </cell>
            <cell class="listcell">
                <div class="lc_content">
                    
                </div>
            </cell>
            <cell class="listcell">
                <div class="lc_content">
                    
                </div>
            </cell>
        </list>
        
        
    </div>
</template>
<script>
    import xxy_header from "../common/header/xxyHeader.vue"
    import refresher from '../common/refresh';

    var globalEvent = weex.requireModule('globalEvent');

    export default{
        data(){
            return {
                
            }
        },
        components: {
            'xxy-header': xxy_header,
            'refresher': refresher,
        },
        methods: {
            onrefresh() {
                console.log("log222")
                console.log(this.$refs["list"].refreshEnd)
                setTimeout(() => {
                    // Vue.set(self.tabList, this.hindex, self.demoList);
                    this.$refs["list"].refreshEnd()
                }, 2000);
                // Promise.all([disease.GET_COMMONDISEASES_LIST(this), banner.GET_BANNER_LIST(this)]).then(() => {
                //     // 请求数据结束后调用 refreshEnd 方法
                    
                    
                // })
            }
        }
    }
</script>
<style lang="sass" src="./index.scss" scoped></style>
<style scoped>
    .list{
        width: 750px;
        background-color: #f2f3f4;
        padding-top:114px;
    }
    .listcell{
        background-color: #ffffff;
    }
    .lc_content{
        width:750px;
        height:300px;
        border-bottom-width:1px;
        align-items: center;
        justify-content: center;
    }

</style>

