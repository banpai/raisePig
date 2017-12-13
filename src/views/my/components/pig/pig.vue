<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="我的猪只" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--顶部猪只数量 start-->
    <div class="p_header">
      <div class="p_header_title">现有猪只数量（只）</div>
      <div class="p_header_number">20</div>
    </div>
    <div class="elonline"></div>
    <!--顶部猪只数量 end-->
    <!--猪只列表 start-->
    <div class="pig_li" v-tap="{methods:skip, url: '/my/Pig/pigDetails'}">
      <div class="pig_li_title">小肥猪第100期</div>
      <div class="weui-flex log_top">
        <div class="o_c_img">
          <img src="./../../../../common/assets/pig.jpg">
        </div>
        <div class="weui-flex__item ocmg">
          <div class="ocmg_1">小肥猪</div>
          <div class="ocmg_3">
            <span>2017-09-09</span>
          </div>
        </div>
      </div>
      <div class="elonline"></div>
    </div>
    <div class="pig_li">
      <div class="pig_li_title">小肥猪第100期</div>
      <div class="weui-flex log_top">
        <div class="o_c_img">
          <img src="./../../../../common/assets/pig.jpg">
        </div>
        <div class="weui-flex__item ocmg">
          <div class="ocmg_1">小肥猪</div>
          <div class="ocmg_3">
            <span>2017-09-09</span>
          </div>
        </div>
      </div>
      <div class="elonline"></div>
    </div>
    <!--猪只列表 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 我的猪只
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
.p_header_title
  text-align center
  margin-top _c(40)
  font-size $font-size-16
.p_header_number
  text-align center
  margin-top _c(35)
  margin-bottom _c(45)
  font-size _c(48)
  color $color-bottom-cg
.pig_li_title
  padding-top _c(30)
  margin-bottom _c(30)
  margin-left _c(30)
  font-size $font-size-16
.log_top
  padding-bottom _c(30)
.o_c_img
  margin-left _c(30)
  margin-right _c(15)
  width _c(180)
  height _c(130) !important
  img
    width 100%
    height 100%
$font-top = $font-size-15
.ocmg
  margin-right _c(30)
  font-size $font-top
  .ocmg_1
    height $font-top
    line-height $font-top
  .ocmg_3
    margin-top _c(57)
    line-height _c(60)
    display flex
    justify-content space-between
</style>