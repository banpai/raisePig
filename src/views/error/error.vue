<template>
  <div class="containt">
    <Goback navtitle="错误" fanhuifalg="true"></Goback>
    <div class="center">
      <img class="errpng" src="./images/err.png">
      <div class="msg" v-text="err_msg"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 报错后跳转的错误页面
   * @event 获取vuex变量下的err_msg进行页面的出错渲染提示
   */
  import Goback from '@/components/topnav/Gobacknav'   
  export default {
    components: {
      Goback
    },
    data() {
      return {
        navtitle: '返回',
        err_msg: '页面出错了~'
      }
    },
    activated(){
      console.log(this.$store)
      if(this.$store.state.global.err_msg){
        this.err_msg = this.$store.state.global.err_msg
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.containt
  .center
    height cgrem(350)
    width cgrem(250)
    position absolute
    top 50%
    right 50%
    margin-top cgrem(-350/2)
    margin-right cgrem(-250/2)
    overflow hidden
    .errpng
      width cgrem(750/3)
      height cgrem(738/3)
      margin cgrem(10) auto
      display block
      margin-bottom 0
    .msg
      text-align center
      margin-top 30px
      color $color-bottom-cg
      font-size cgrem(16)
</style>