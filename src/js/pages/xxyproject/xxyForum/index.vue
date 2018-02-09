<template lang="">
    <div class="xxy_wrapper xxyForum">       
        <xxy-header title="讨论"></xxy-header>
        
        
        
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

