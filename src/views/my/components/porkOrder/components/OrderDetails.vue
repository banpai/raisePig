<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="订单详情" :callback="edit" text="联系客服" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--订单状态 start-->
    <div class="weui-flex od_top">
      <div class="od_icon">
        <img src="./images/present.png">
      </div>
      <div>订单状态</div>
    </div>
    <!--订单状态 end-->
    <div></div>
    <!--顶部介绍 start-->
    <div class="weui-flex">
      <div class="o_c_img">
        <img src="./../images/pig.jpg">
      </div>
      <div class="weui-flex__item ocmg">
        <div class="ocmg_1">小肥猪</div>
        <div class="ocmg_2">数量：1</div>
        <div class="ocmg_3">
          <span>￥800</span>
        </div>
      </div>
    </div>
    <!--顶部介绍 end-->
    <!--商品信息 start-->
    <div class="bd_msg">
      <div class="msg_f">订单编号：1236152127127</div>
      <div class="msg_f">下单时间：2017-09-08 13:21</div>
      <div class="msg_f">配送方式：包邮</div>
      <div class="msg_f">配送时间：2017-09-08 13:21</div>
    </div>
    <div class="elonline"></div>
    <!--商品信息 end-->
    <!--物流信息列表 start-->
    <div class="log_msg">
      <div class="weui-flex msg_li">
        <div class="weui-flex__item">
          <div class="font_1">商品总额：</div>
        </div>
        <div class="weui-flex__item">
          <div class="font_2">￥300</div>
        </div>
      </div>
      <div class="weui-flex msg_li">
        <div class="weui-flex__item">
          <div class="font_1">运费：</div>
        </div>
        <div class="weui-flex__item">
          <div class="font_2">￥0.00</div>
        </div>
      </div>
      <div class="weui-flex msg_li">
        <div class="weui-flex__item">
          <div class="font_1">优惠券抵扣：</div>
        </div>
        <div class="weui-flex__item">
          <div class="font_2">-￥1.00</div>
        </div>
      </div>
    </div>
    <div class="elonline"></div>
    <!--物流信息列表 end-->
    <!--实付款 start-->
    <div class="sjfk elonline">
      实付款：<span class="sj_money">￥300</span>
    </div>
    <!--实付款 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 订单详情
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
      skip() {
        this.err_msg('测试出错哈哈哈')
      },
      // 点击消息提醒
      edit() {
        alert('编辑')
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.log_top
  border-bottom 1px solid $border-color
.o_c_img
  margin-left _c(30)
  margin-top _c(30)
  margin-right _c(15)
  width _c(180)
  height _c(130) !important
  img
    width 100%
    height 100%
$font-top = $font-size-12
.ocmg
  margin-top _c(30)
  margin-bottom _c(30)
  margin-right _c(30)
  font-size $font-top
  .ocmg_1
    margin-bottom _c(30)
    height $font-top
    line-height $font-top
  .ocmg_2
    height $font-top
    line-height $font-top
  .ocmg_3
    margin-top _c(30)
    line-height $font-top
    display flex
    justify-content space-between
    .ocmg_3_btn
      width _c(200)
      height _c(60)
      border 1px solid $border-color
      border-radius 3px
      text-align center
      line-height _c(60)
      font-size $font-size-16
.log_msg
  margin-bottom _c(30)
  .msg_li
    padding-left _c(30)
    padding-right _c(35)
    padding-top _c(30)
    .font_1
      font-size $font-size-16
    .font_2
      font-size $font-size-16
      float right
.od_top
  margin-top _c(30)
  color $color-bottom-cg
  font-size $font-size-16
  .od_icon
    width _c(36)
    height _c(36)
    margin-left _c(12)
    margin-right _c(13)
    img 
      width 100%
      height 100%
.bd_msg
  padding-left _c(30)
  padding-right _c(30)
  .msg_f
    margin-bottom _c(30)
    font-size $font-size-16
    height $font-size-16
    line-height $font-size-16
.sjfk
  // display flex
  width 100%
  float right 
  text-align right 
  padding-top _c(30)
  padding-bottom _c(30)
  padding-right _c(35)
  font-size $font-size-16
  .sj_money
    color red
    font-size $font-size-18
</style>