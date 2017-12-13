<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="优惠券" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--猪只列表 start-->
    <div class="pig_li" v-tap="{methods:skip, url: '/my/Pig/pigDetails'}">
      <div class="weui-flex log_top">
        <div class="o_c_img">
          <img src="./../../../../common/assets/pig.jpg">
        </div>
        <div class="weui-flex__item ocmg">
          <div class="ocmg_1">猪肉商城优惠券</div>
          <div class="ocmg_3">
            <span>有效期至2017-09-09</span>
          </div>
        </div>
        <div class="ocmg_red">￥0.5</div>
      </div>
    </div>
    <div class="pig_li">
      <div class="weui-flex log_top">
        <div class="o_c_img">
          <img src="./../../../../common/assets/pig.jpg">
        </div>
        <div class="weui-flex__item ocmg">
          <div class="ocmg_1">猪肉商城优惠券</div>
          <div class="ocmg_3">
            <span>有效期至2017-09-09</span>
          </div>
        </div>
        <div class="ocmg_red">￥0.5</div>
      </div>
    </div>
    <!--猪只列表 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 优惠券
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
        // this.$router.push(e.url)
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.pig_li
  padding-bottom 0
.pig_li_title
  padding-top _c(30)
  padding-bottom _c(30)
  margin-bottom _c(30)
  margin-left _c(30)
  font-size $font-size-16
.log_top
  padding-top _c(30)
  padding-bottom _c(30)
  margin-left _c(30)
  margin-right _c(30)
  border 1px solid $border-color
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
  margin-right _c(0)
  font-size $font-top
  .ocmg_1
    height $font-top
    line-height $font-top
  .ocmg_3
    margin-top _c(68)
    line-height $font-top
    height $font-top
    display flex
    justify-content space-between
.ocmg_red
  height _c(130) !important
  line-height _c(130)
  margin-right _c(30)
  font-size $font-size-18
  color red
</style>