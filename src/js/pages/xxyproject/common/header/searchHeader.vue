<template>
    <div class="wrapper xxyHeader xxyHeaderSearch">
        <div class="xxyHeader_scan">
            <text class="xxyHeader_ic iconfont">&#xe689;</text>
            <text class="xxyHeader_txt">扫一扫</text>
        </div>
        <text class="xxyHeader_search iconfont" @click="jumpWeb()">&#xe65c; 搜索好玩的游戏~</text>
        <div class="xxyHeader_notice">
            <text class="xxyHeader_ic iconfont">&#xe70a;</text>
            <text class="xxyHeader_txt">消息</text>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        jumpWeb(_url) {
            // if (!_url) _url = 'http://m.you.163.com/search';
            // this.$router.toWebView({
            //     url: _url,
            //     title: '',
            //     navShow: true,
            // })
        }
    }
}
</script>
<style lang="sass" src="./header.scss"></style>