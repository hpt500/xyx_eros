<template lang="">
    <div class="xxyLogin">
        <xxy-header title="登录" 
                    left_type="back"
                    right_type="setup"
                    center_if=true></xxy-header>
        <div class="xxyMain_hasDh xxyLR">
            <div class="xxyLR_main">
                <div class="xxyLRM_logo">
                    <image src="bmlocal://assets/zi_1.png" resize="cover" style="width:572px;height:110px;"></image>
                </div>

                <wxc-tab-page ref="wxc-tab-page"
                            :tab-titles="tabTitles"
                            :tab-styles="tabStyles"
                            title-type="iconFont"
                            :needSlider="needSlider"
                            :is-tab-view="isTabView"
                            tab-page-height="600"
                            @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
                    <list class="xxyLRM_list">
                        <cell class="xxyLRM_bottom">
                            <div class="xxyLRMB_input">
                                <div class="xxyLR_input" :class="[inputs[0].bColorBool?'xxyLR_input_on':'xxyLR_input_default']">
                                    <text class="xxyLRI_type">CN+86</text>
                                    <input
                                    :type="inputs[0].type"
                                    autofocus="false"
                                    :placeholder="inputs[0].placeTex"
                                    @focus="xxyLRI_focus"
                                    @blur="xxyLRI_blur"
                                    :value="inputs[0].value"
                                    :data-dx="inputs[0].index"
                                    @input="regInputFn"
                                    class="xxyLRI_input">
                                    </input>
                                    <text class="xxyLRI_btn iconfont"
                                    @click="xxyCloseTex"
                                    :data-tx="inputs[0].index"
                                    v-if="inputs[0].value==''?false:true">&#xe7f0;</text>
                                </div>
                            </div>
                            <div class="xxyLRMB_btn" 
                            :class="[phoneInput?'xxyLRMB_btn_on':'xxyLRMB_btn_default']"
                            @click="xxyLogin_phone">
                                <text class="xxyLRMBB_tex">登录</text>
                            </div>
                        </cell>
                    </list>
                    <list class="xxyLRM_list">
                        <cell class="xxyLRM_bottom">
                            <div class="xxyLRMB_input">
                                
                                <div class="xxyLR_input xxyLR_input_mb" :class="[inputs[1].bColorBool?'xxyLR_input_on':'xxyLR_input_default']">
                                    <input
                                    :type="inputs[1].type"
                                    autofocus="false"
                                    :placeholder="inputs[1].placeTex"
                                    @focus="xxyLRI_focus"
                                    @blur="xxyLRI_blur"
                                    :value="inputs[1].value"
                                    :data-dx="inputs[1].index"
                                    @input="regInputFn"
                                    class="xxyLRI_input">
                                    </input>
                                    <text class="xxyLRI_btn iconfont"
                                    @click="xxyCloseTex"
                                    :data-tx="inputs[1].index"
                                    v-if="inputs[1].value==''?false:true">&#xe7f0;</text>
                                </div>
                                <div class="xxyLR_input" :class="[inputs[2].bColorBool?'xxyLR_input_on':'xxyLR_input_default']">
                                    <input
                                    :type="inputs[2].type"
                                    autofocus="false"
                                    :placeholder="inputs[2].placeTex"
                                    @focus="xxyLRI_focus"
                                    @blur="xxyLRI_blur"
                                    :value="inputs[2].value"
                                    :data-dx="inputs[2].index"
                                    @input="regInputFn"
                                    class="xxyLRI_input">
                                    </input>
                                    <text class="xxyLRI_btn iconfont"
                                    @click="xxyPassWatch"
                                    :data-tx="inputs[2].index">{{passWatch==true?`&#xe73c;`:`&#xe73d;`}}</text>
                                </div>
                            </div>
                            <div class="xxyLRMB_btn" 
                            :class="[(inputs[2].value!=''&&inputs[1].value!='')?'xxyLRMB_btn_on':'xxyLRMB_btn_default']"
                            @click="xxyLogin_email">
                                <text class="xxyLRMBB_tex">登录</text>
                            </div>
                        </cell>
                    </list>
                </wxc-tab-page>
                
            </div>
            <xxy-each-login></xxy-each-login>
        </div>
    </div>
</template>
<script>
    import xxyHeader from "../common/header/xxyHeader.vue"
    import xxyEachLogin from "./component/eachLogin.vue"
    const dom = weex.requireModule('dom');
    import { WxcTabPage, WxcPanItem, Utils } from 'weex-ui';
    import Config from './config'
    export default{
        data(){
            return {
                tabType: "phone",
                tabTitles: Config.loginTitles,
                tabStyles: Config.lrStyles,
                needSlider: true,
                isTabView: true,
                // 输入框状态
                inputs: Config.loginInputs,
                // 输入手机号码是否正确
                phoneInput: false,
               
                // 是否查看输入的注册密码
                passWatch: false,

            }
        },
        created(){
            
        },
        components: {
            xxyHeader,xxyEachLogin,WxcTabPage
        },
        methods:{
            xxyLRI_focus(e){
                // 输入框定位
                const dwnum = e.target.attr.dataDx;
                // 文本是否为空
                const dwval = e.target.attr.value;
                this.inputs[dwnum].bColorBool = true;
                if(dwval!=""){
                    this.inputs[dwnum].hasTex = true;
                }
            },
            xxyLRI_blur(e){
                 // 输入框定位
                 console.log(e)
                const dwnum = e.target.attr.dataDx;
                this.inputs[dwnum].bColorBool = false;
                this.inputs[dwnum].hasTex = false;
            },
            regInputFn(e){
                // 手机号码输入响应
                // 此处进行正则表达式验证输入的手机号码
                const dwnum = e.target.attr.dataDx;
                this.inputs[dwnum].value = e.value;
                console.log(e.value)
                // 验证成功修改 phoneInput 的boolen值
            },
            xxyCloseTex(e){
                // 清除输入框内容
                console.log(e)
                const dwnum = e.target.attr.dataTx;
                this.inputs[dwnum].value = '';
            },
            xxyPassWatch(){
                this.passWatch = !this.passWatch;
                this.inputs[2].type = this.inputs[2].type=='password'?'text':'password'
            },
            xxyLogin_phone(){
                // 响应注册新秀游账号
                if(!this.phoneInput) return
                console.log("通过验证进行ajax")
                // 发送短信进行验证码注册

            },
            xxyLogin_email(){
                // 邮箱账号登录
                const user = this.inputs[1].value;
                const pass = this.inputs[1].value;
                if(user==''||pass=='') return;

                // 进行ajax登录


            }

        }
    }
</script>
<style lang="sass" src="./index.scss" scoped>
</style>
<style scoped></style>