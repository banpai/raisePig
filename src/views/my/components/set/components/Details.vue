<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="关于人人养猪APP" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--logo start-->
    <div class="logo">
        <img src="./../../../../../common/assets/logo.png">
    </div>
    <!--logo end-->
    <div class="elonline"></div>
    <!--信息列表 start-->
    <div class="elonline d_zi">订单</div>
    <div class="elonline d_zi">AOBEEF PTY LTD</div>
    <div class="elonline d_zi">免费客服电话：12365478963</div>
    <div class="elonline d_zi">中国办公室：36985214789</div>
    <div class="elonline d_zi">澳洲办公室：36987412563</div>
    <div class="elonline d_zi">联系邮箱：123654789@qq.com</div>
    <!--信息列表 end-->
    <div class="d_bottom">其他问题请在“人人养猪”微信公众号留言</div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 设置
   * @event 
   */
  import Goback from '@/components/topnav/Gobacknav'
  import {
    mapMutations
  } from 'vuex'
  export default {
    components: {
      Goback
    },
    data() {
      return {
        
      }
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      skip(e) {
        this.$router.push(e.url)
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.logo
  width _c(176)
  height _c(176)
  margin 0 auto
  margin-top _c(36)
  margin-bottom _c(30)
  img 
    width 100%
    height 100%
.d_zi
  text-align center
  padding-top _c(30)
  padding-bottom _c(30)
  font-size $font-size-16
  color #000
.d_bottom
  text-align center
  font-size $font-size-13
  color #515151
  margin-top _c(145)
</style>