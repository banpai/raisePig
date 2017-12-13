<template>  
<div>
  <Goback fanhuifalg='true'></Goback>
  <div action="" v-show="LOR">
    <div class="mui-content land">
      <img src="../../common/assets/logo.png" alt="logo" class="landlog">
      <form action="" class="landform">
        <div class="phonenumber">
            <input type="text" placeholder="请输入手机号" maxlength="11" class="phonenumber-input">
            <div class="country mui-navigate-right" v-tap="{methods:countrypicker}"><span>{{picked}}</span></div>
        </div>
        <div class="password" v-show="POC">
          <input :type="willShow?'password':'text'" id="password" placeholder="请输入密码" class="password-input">
          <div class="showpsd" >
            <img src="./images/landhidden.png" alt="" v-tap="{methods:_isShow, name:'willShow'}" v-show="willShow">
            <img src="./images/landshow.png" alt="" v-tap="{methods:_isShow,name:'willShow'}" v-show="!willShow">
          </div>
        </div>
        <div class="psdcode" v-show="!POC">
          <input type="text" id="password" placeholder="请输入验证码" class="psdcode-input">
          <div class="sendcode">
            <span v-tap="{methods:msgsettime,name:'shortmsgflag'}" v-show="shortmsgflag">发送</span>
            <span v-show="!shortmsgflag">{{msgcount}}秒</span>
          </div>
        </div>
        <div class="validate">
          <div class="phonecode" v-tap="{methods:_isShow,name:'POC'}">
            <span v-show="POC">手机验证码登录</span>
            <span v-show="!POC">密码登陆</span>
          </div>
          <router-link class="forgetpsd" :to="{name:'Forgetpsd'}">忘记密码？</router-link>
        </div>
        <button class="submit">登录</button>
      </form>
      <div class="register">
          还没有账号，<span v-tap="{methods:_isShow,name:'LOR'}">立即注册</span>
      </div>  
    </div>
  </div>
  <div action="" v-show="!LOR" class="registeryemian">
    <div class="mui-content land">
      <img src="../../common/assets/logo.png" alt="logo" class="landlog">
      <form action="" class="registry">
        <div class="phonenumber">
          <input type="text" placeholder="请输入手机号" maxlength="11" class="phonenumber-input">
          <div class="country mui-navigate-right" v-tap="{methods:countrypicker}"><span>{{picked}}</span></div>
        </div>
        <div class="vcode">
          <input type="text" id="password" placeholder="请输入验证码" class="psdcode-input">
          <div class="sendcode">
            <span v-tap="{methods:msgsettime,name:'shortmsgflag'}" v-show="shortmsgflag">发送</span>
            <span v-show="!shortmsgflag">{{msgcount}}秒</span>
          </div>
        </div>
        <div class="password">
          <input :type="willShow?'password':'text'" id="password" placeholder="请输入6位及以上密码" class="password-input">
          <div class="showpsd" >
            <img src="./images/landhidden.png" alt=""  v-tap="{methods:_isShow,name:'willShow'}" v-show="willShow">
            <img src="./images/landshow.png" alt="" v-tap="{methods:_isShow,name:'willShow'}" v-show="!willShow">
          </div>
        </div>
        <div class="invitation">
          <input type="text" placeholder="邀请码（选填）" class="invitation-input">
        </div>
        <div class="agree">
          <div class="mui-input-row mui-checkbox mui-left">
            <label style="padding-right:0;padding-left:23%;font-size:14px;width:57%">我同意并遵守</label>
            <input name="checkbox1" value="Item 1" type="checkbox" class="agreecheck iconfont icon-check-box-empty">
            <span class="appusage" v-tap="{methods: _isShow, name:'Appupflag'}">APP使用协议</span>
          </div>
        </div>
        <button class="submit">注册</button>
      </form>
      <div class="register">
          已有账号<span v-tap="{methods:_isShow,name:'LOR'}">去登陆</span>
      </div>  
    </div>
  </div>
  <Appup v-show="Appupflag" :Appupflag="Appupflag" @chAppupflag="chAppupflag"></Appup>
</div>
</template>

<script>
/**@author gumiao
 * @description 
 * @event
 * @field
 *          
 */
  import Vue from 'vue'
  import Axios from 'axios'
  import router from '@/router'
  import Goback from '@/components/topnav/Gobacknav'
  import Appup from '@/components/dialog/AppUp'

  export default {
    name: 'hello',
    components: {
      Goback,
      Appup,
    },
    data() {
      return {
        navimgsrc:'1',          // 功能图标
        picked: "中国",   // 默认选中的
        selectShow: "",     // 国家json数据
        willShow: true,     // 眼睛图标默认状态（true :闭合，false：睁开） 
        LOR: true,          // 登陆页面 :true 注册页面 :false
        POC: true,          // 密码登陆 :true 手机验证码登陆 :false
        shortmsgflag: true, // 发送短信状态 false：未发送 true: 已发送
        msgcount: '',        // 倒计时时间
        timer: null,         // 倒计时状态
        Appupflag: false     // app用户协议显示状态 false：未显示 true： 显示
      }
    },
    activated () {
      Axios.get('/static/data/db_en.dat')
      .then(response => {
          this.selectShow = response.country;
      }, response => {})
    },
    methods:{
        // 眼睛显示数据
        // 登陆页面和注册页面切换
        // 密码登陆和手机验证码登陆切换
        // app协议是否显示判断
        _isShow(e){
          this[e.name] = !this[e.name];
        },
        // 国家选择器
        countrypicker:function(){
          let picker = new mui.PopPicker();
          // 新建国家数组
          let pickerdata = [];
          // 遍历循环
          for(let i in this.selectShow){
            pickerdata[i] = this.selectShow[i].name
            pickerdata.push(pickerdata[i]);
          }
          // 设置数据
          picker.setData(pickerdata);
          // 选中替换
          let that = this;
          picker.show(function (res) {                            
              that.picked = res[0];
          })
        },
        // 短信发送倒计时
        msgsettime:function(e){
           const TIME_COUNT = 60;
           if(!this.timer){
             this.msgcount = TIME_COUNT;
             this[e.name] = false;
             this.timer = setInterval(()=>{
               if(this.msgcount > 0 && this.msgcount <= TIME_COUNT){
                 this.msgcount--;
               }else{
                  this[e.name] = true;
                  clearInterval(this.timer);
                  this.timer = null;
               }
             },1000)
           }
        },
        // app协议是否显示判断 （appup传值过来关闭）
        chAppupflag:function(data){
          this.Appupflag = data;
        }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/common/stylus/variable";
  @import url("/static/css/mui.picker.css");
  @import url("/static/css/mui.poppicker.css");
  @import url("/static/css/iconfont.css");
  

  .landlog
    display block
    margin 0 auto
    margin-top 84px
    margin-bottom 64px
    width 88px
    height 88px
    line-height 177px
    text-align center

  .landform,.registry
    padding 0 25px
    margin-bottom 30px
  
  .registry
    margin-bottom $font-size-30

  .phonenumber
    margin-bottom 77.5px

  .registeryemian .phonenumber,.vcode,.registeryemian .password,.psdcode
    margin-bottom 42.5px

  .invitation
    margin-bottom 27.5px

  .agree
    margin-bottom 54px

  .agreecheck
    left 11% !important
    top 8px   !important
    width 20px !important
    height 20px !important

  .password,.psdcode
    margin-bottom 12px

  .phonenumber,.password,.vcode,.invitation
    border-bottom 1px solid #535353
    padding-bottom 1px
    height 23px

  .phonenumber-input,.password-input,.vcode-input,.invitation-input,.psdcode-input
    float left
    padding 5px 0 5px 5px
    margin-bottom 0
    width 82%
    height 22px
    line-height 22px
    border 0
    font-size $font-size-15
    color #535353

  .psdcode
    border-bottom 1px solid #535353
    padding-bottom 1px
    height 23px

  .psdcode-input
    width 70%

  .sendcode
    display inline-block
    width 48px
    text-align center
    line-height 27.5px
    float right 
    margin-top -4px
    border-radius 5px
    font-size $font-size-15
    color: #535353;

  .country
    display inline-block
    width 18%
    position relative
    font-size $font-size-15
    color #535353
    span 
      float right 
      margin-right 25%

  select
    padding 0
    margin 0

  .showpsd
    display inline-block
    width 18%

  .showpsd img
    width 19px
    height 19px
    float right 

  .mui-navigate-right:after
    right 0
    top 50%
    color #000

  .validate
    padding-left 5px
    margin-bottom 118.5px;

  .phonecode
    float left
    font-size $font-size-15
    color #37bdc2
    
  .forgetpsd
    float right 
    font-size $font-size-15
    color #535353

  .submit
    width 100%
    height 40px
    background #37bdc2
    color #fff
    letter-spacing 4px
    border-radius 6px;
    font-size $font-size-15

  .register
    text-align center
    font-size $font-size-15
    span
      color #37bdc2

  .registeryemian .register span 
    margin-left 8px

  .appusage
    display inline-block
    color #37bdc2
    font-size 14px

</style>
