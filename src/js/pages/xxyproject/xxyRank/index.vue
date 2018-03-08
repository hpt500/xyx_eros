<template lang="">
    <div class="xxy_wrapper xxyRank">       
        <xxy-header title="排行" 
                    left_type="search"
                    right_type="notice"
                    center_if=true></xxy-header>
        
        
        
    </div>
</template>
<script>
    import xxy_header from "../common/header/xxyHeader.vue"
    import refresher from '../common/refresh';
    export default{
        data(){
            return {
                
            }
        },
        components: {
            'xxy-header': xxy_header,
            'refresher': refresher,
        },
    }
</script>
<style lang="sass" src="./index.scss" scoped>
    
</style>

