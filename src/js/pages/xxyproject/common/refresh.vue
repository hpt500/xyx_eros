<template>
    <refresh class="u-refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
        <image class="loading-bg" resize="contain" src="http://www.xinxiuyou.com/static/img/top_logo2.png"></image>
        <div class="l-txt-box">
            <text ref="lTxt1" class="l-txt l-txt-1">追</text>
            <text ref="lTxt2" class="l-txt l-txt-2">踪</text>
            <text ref="lTxt3" class="l-txt l-txt-3">推</text>
            <text ref="lTxt4" class="l-txt l-txt-4">荐</text>
            <text ref="lTxt5" class="l-txt l-txt-5">新</text>
            <text ref="lTxt6" class="l-txt l-txt-6">秀</text>
            <text ref="lTxt7" class="l-txt l-txt-7">游</text>
            <text ref="lTxt8" class="l-txt l-txt-8">戏</text>
        </div>
    </refresh> 
</template>
<script>
var animation = weex.requireModule('animation')
export default {
    props: ["xxyKey"],
    data() {
        return {
            refreshing: false,
            stopAnimation: false,
            loadingAR: [
                { ref: 'lTxt1', p: [-77, -75], delay: 0 },
                { ref: 'lTxt2', p: [-47, -81], delay: 50 },
                { ref: 'lTxt3', p: [-15, -88], delay: 100 },
                { ref: 'lTxt4', p: [12, -90], delay: 150 },
                { ref: 'lTxt5', p: [-5, -49], delay: 200 },
                { ref: 'lTxt6', p: [25, -55], delay: 250 },
                { ref: 'lTxt7', p: [55, -61], delay: 300 },
                { ref: 'lTxt8', p: [85, -61], delay: 350 }
            ]
        }
    },
    methods: {
        loadingAni() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], this.loadingAR[i].p[0], this.loadingAR[i].p[1], 3, 1, 200, this.loadingAR[i].delay);
            }
        },
        loadingAniDown() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], 0, 0, 0, 0, 500, 0, i == this.loadingAR.length - 1);
            }                        
        },
        endRefresh(time) {
            setTimeout(() => {
                this.$emit('loadingDown', {
                    status: 'loadingDown'
                })       
                setTimeout(() => {
                    this.refreshing = false
                },100)            
            }, time) 
        },
        shake(_ref, _x, _y, _k, _d, _duration, _delay, endShake) {
            animation.transition(_ref, {
                styles: {
                    transform: 'translate(' + (_x - 0) + 'px,' + (_y - _k * _d) + 'px)',
                },
                duration: _duration | 500, //ms
                timingFunction: 'ease-out',
                delay: _delay | 0 //ms
            }, function() {
                !this.stopAnimation && this.shake(_ref, _x, _y, _k, -1 * _d);
                if (endShake) {
                    
                    this.endRefresh(_duration + 100)
                }

            }.bind(this))
        },
        onrefresh(event) {
            console.log(123455)
            this.stopAnimation= false
            this.loadingAni();
            this.refreshing = true;

            setTimeout(() => {
                this.stopAnimation = true
                this.loadingAniDown();
            }, 2000)

            // 请求数据
            
            
            // const deal = this.xxyKey;
            // this.$emit("loadingAjax",{
            //     index:deal,
            // })

        },
        onpullingdown(event) {}
    }

}
</script>
<style scoped>
.u-refresh {
    height: 125px;
    width: 750px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
}

.loading-bg {
    position: absolute;
    left: 250px;
    margin-top: 50px;
    width: 187px;
    height: 90px;
}

.l-txt-box {
    height: 106px;
    width: 200px;
    overflow: hidden;
}

.l-txt {
    height: 30px;
    width: 30px;
    font-size: 18px;
    position: absolute;
    top: 100px;
    left: 87px;
    color: #3bb5fc;
}
</style>