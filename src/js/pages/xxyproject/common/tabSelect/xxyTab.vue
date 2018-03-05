<template>
  <div class="xxyTab">
    <scroller ref="TabScroller" scroll-direction="horizontal" show-scrollbar="false" class="xxyTabScro flex-row" @scroll="menuScroll">
        <div class="xxyTabBox flex-column-center" :key="index" @click="activeMenu(index)" :ref="'menu_' + index" :class="[ index == activeIndex ? 'xxyTabBox-on' : 'xxyTabBox-default']" v-for="(item, index) in menu">
            <text class="xxyTabBox-items" :class="[ index == activeIndex ? 'xxyTabBoxItems-on' : '']">{{item.name}}</text> 
        </div>
    </scroller>
    <!--<image class="scroll-arrow" v-if="showRight" src="//img.benmu-health.com/app-benmu-health/doctor/linear-gradient-arrow.png" @click="scrollToMenu(menu.length - 1)"></image>-->
</div>
</template>

<script>
const dom = weex.requireModule('dom')
export default {
    props: {
        activeIndex: {
            type: Number,
            default: 0
        },
        menu: {
            type: Object,
            default: function(){
                return [];
            }
        }

    },
    data() {
       return {
            showRight: true
       }
    },
    watch: {
        activeIndex(newVal, oldVal) {
            let  scrollIndex = newVal < 1 ?  0 : newVal -1
            this.scrollToMenu(scrollIndex)
        }
    },
    methods: {
        activeMenu(index) {
            this.activeIndex = index
            this.$emit('change', index)
        },
        menuScroll(e) {
			if (this.menu.length <= 4) return
			let menuWidth = this.$refs['menu_0'][0].style.width,
				scrollWidth = e.contentSize.width,
                offsetX = e.contentOffset.x
                //最后这个1 有意思
			this.showRight = scrollWidth - menuWidth * 4 + offsetX + 1 > menuWidth
        },
        scrollToMenu(index) {
            dom.scrollToElement(this.$refs[`menu_${index}`][0])
        }
    }
}
</script>
<style lang="sass" src="./tab.scss">
</style>
<style scoped>

</style>