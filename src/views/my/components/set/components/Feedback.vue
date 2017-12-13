<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="意见反馈" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--表单提交 start-->
    <div class="weui-cell f_top">
      <div class="weui-cell__bd">
        <input class="weui-input" type="text" placeholder="联系电话或微信">
      </div>
    </div>
    <div class="weui-cell__bd f_text">
      <textarea class="weui-textarea" placeholder="请输入意见" rows="3"></textarea>
      <div class="weui-textarea-counter"><span>0</span>/200</div>
    </div>

    <div class="weui-flex f_bottom">

      <div class="f_1"></div>
      <div class="weui-flex__item">
        <input class="weui-input f_2" type="text" placeholder="单行输入">
      </div>
      
      <div class="f_3">
        发送
      </div>

    </div>
    <!--表单提交 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 意见反馈
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
      return {}
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
.f_top
  padding _c(30)
.f_text
  border 1px solid $border-color
  margin-left _c(30)
  margin-right _c(30)
.f_bottom
  position fixed 
  bottom 0
  width 100%
  border-top 1px solid $border-color
  .f_1
    width _c(100)
    height _c(60)
    border-right 1px solid $border-color 
  .f_2
    padding 0
    border 0
    height auto
    margin-bottom 0
    line-height _c(60)
    padding-left _c(20)
  .f_3
    width _c(100)
    text-align center
    height _c(60)
    line-height _c(60)
    border-left 1px solid $border-color
    font-size $font-size-15
</style>