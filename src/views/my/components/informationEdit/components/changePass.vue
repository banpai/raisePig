<template>  
<div>
  <Goback fanhuifalg='true' navtitle="修改密码"></Goback>
  <div action="">
    <div class="mui-content land">
      <form action="" class="landform">
        <div class="psdcode">
          <input type="text" id="password" placeholder="请输入旧密码" class="psdcode-input">
        </div>
        <div class="password">
          <input :type="willShow?'password':'text'" id="password" placeholder="请输入6位及以上的新密码" class="password-input">
          <div class="showpsd" >
            <img src="./../../../../land/images/landhidden.png" alt=""  v-tap="{methods:_isShow,name:'willShow'}" v-show="willShow">
            <img src="./../../../../land/images/landshow.png" alt="" v-tap="{methods:_isShow,name:'willShow'}" v-show="!willShow">
          </div>
        </div>
        <button class="submit">重置密码</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
/**@author 半拍
 * @description 修改密码
 * @event
 * @field 
 *   
 *          
 */
  import Vue from 'vue'
  import Axios from 'axios'
  import Goback from '@/components/topnav/Gobacknav'

  export default {
    name: 'hello',
    components: {
      Goback,
    },
    data() {
      return {
        picked: "中国",   // 默认选中的
        willShow: true,     // 眼睛图标默认状态（true :闭合，false：睁开） 
        navtitle: '返回',   // 导航标题
        shortmsgflag: true, // 发送短信状态 false：未发送 true: 已发送
        msgcount: '',        // 倒计时时间
        timer: null,         // 倒计时状态
      }
    },
    methods:{
        // 眼睛显示数据
        _isShow(e){
          this[e.name] = !this[e.name];
        }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@/common/stylus/variable";
  @import url("/static/css/mui.picker.css");
  @import url("/static/css/mui.poppicker.css");

  .landlog
    display block
    margin 0 auto
    margin-top 84px
    margin-bottom 64px
    width 88px
    height 88px
    line-height 177px
    text-align center

  .landform
    padding 0 25px
    margin-top 101.5px
    margin-bottom 30px

  .phonenumber,.vcode,.password,.psdcode
    margin-bottom 45px

  .phonenumber,.password,.vcode
    border-bottom 1px solid #535353
    padding-bottom 1px
    height 23px

  .phonenumber-input,.password-input,.psdcode-input
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
    padding-bottom 1px
    height 23px
    border-bottom 1px solid #535353    

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

  .showpsd img
    width 19px
    height 19px
    float right 

  .mui-navigate-right:after
    right 0
    top 50%
    color #000
    
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

</style>
