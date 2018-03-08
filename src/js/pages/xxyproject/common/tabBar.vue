<template>
    <div class="wrapper">
        <div v-for="(i,index) in items" :key="index" class="bar-item" :class="[pIndexKey == i.key ? 'bar-active' : '']" @click="tabTo(i.key)">
            <text class="bar-ic iconfont">{{pIndexKey == i.key ? i.icon_active : i.icon | myFilter}}</text>
            <text class="bar-txt">{{i.name}}</text>
        </div>
    </div>
</template>

<script>
import he from '../utils/he';
Vue.filter('myFilter', function(value) {
    return he.decode(value);
})
export default {
    props: {
        // indexKey: {
        //     type: String,
        //     default: 'home'
        // },
        // reClick: {
        //     type: Boolean,
        //     default: false
        // },
        items: {
            type: Array
        }
    },
    data() {
        return {
            pIndexKey: 'xxyHome',
        }
    },
    created(){
        // this.tabTo("xxyPersonal")
    },
    methods: {
        tabTo(_key) {
            // 
            if(_key=="xxyPersonal"){
                // 此处进行判断
                // 若用户未登录则路由到登录界面
                // 否则跳转到个人中心界面
                // this.$router.open({
                //     name: 'register',
                //     type: 'PUSH'
                // })
                // return;
            }
            if (this.pIndexKey == _key) return;
            this.pIndexKey = _key;
            this.$emit('tabTo', {
                status: 'tabTo',
                data: {
                    key: _key
                }
            })
        }
    }
}
</script>

<style scoped>
.iconfont {
    font-family: iconfont;
    
}

.wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 1px;
    border-top-color: #3bb5fc;
    background-color: #148bc8;
}

.bar-item {
    flex: 1;
}

.bar-txt,
.bar-ic {
    color: #ffffff;
    text-align: center;
}

.bar-active {
    background-color: #3bb5fc;

}

.bar-ic {
    padding-top: 14px;
    font-size: 38px;
}

.bar-txt {
    font-size: 22px;
    padding-top: 2px;
}
</style>