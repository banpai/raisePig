<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="选择收货地址" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--收获地址 start-->
    <div class="elonline de_li">
      <div class="elonline xg_t">
        <div class="weui-flex xg_bot">
          <div>收货人：张依依</div>
          <div class="weui-flex__item xg_bot_right">手机号：12345678901</div>
        </div>
        <div class="xg_txt">上海市上海区上海街100</div>
      </div>
      <div class="weui-flex de_li2 weui-cells weui-cells_checkbox">
        <label class="weui-cell__hd gou" for="Index3">
          <input type="radio" class="weui-check" name="zf" id="Index3">
          <i class="weui-icon-checked"></i>
        </label>
        <div class="weui-flex__item index_li2">设为默认</div>
        <div>编辑</div>
        <div class="index_li4">删除</div>
      </div>
    </div>
    <div class="elonline de_li">
      <div class="elonline xg_t">
        <div class="weui-flex xg_bot">
          <div>收货人：张依依</div>
          <div class="weui-flex__item xg_bot_right">手机号：12345678901</div>
        </div>
        <div class="xg_txt">上海市上海区上海街100</div>
      </div>
      <div class="weui-flex de_li2 weui-cells weui-cells_checkbox">
        <label class="weui-cell__hd gou" for="Index4">
          <input type="radio" class="weui-check" name="zf" id="Index4">
          <i class="weui-icon-checked"></i>
        </label>
        <div class="weui-flex__item index_li2">设为默认</div>
        <div>编辑</div>
        <div class="index_li4">删除</div>
      </div>
    </div>
    <!--收货地址 end-->
    <!--底部按钮 start-->
    <div class="btn_bottom" v-tap="{methods: skip, url: '/shop/AddDeliveryAddress'}">添加地址</div>
    <!--底部按钮 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 选择收货地址
   * @event
   */
  import Goback from '@/components/topnav/Gobacknav'
  import {
    getPostData
  } from '@/api/api.js'
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
      // 跳转地址
      skip(e) {
        this.$router.push(e.url)
      },
      // 显示弹层
      tanCen(e) {
        this[e.name] = true
      }
    },
    mounted() {}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.de_li
  font-size $font-size-16
  line-height $font-size-16
  .xg_t
    margin-left _c(30)
    margin-right _c(30)
    .xg_bot
      margin-top _c(30)
      margin-bottom _c(30)
      .xg_bot_right
        text-align right
    .xg_txt
      padding-bottom _c(30)
  .de_li2
    font-size $font-size-16
    line-height _c(60)
    margin-top _c(20)
    padding-bottom _c(20)
    .index_li2
      margin-left _c(20)
    .index_li4
      margin-right _c(30)
      margin-left _c(87)
.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before
  color $color-bottom-cg
.gou
  width _c(60)
  height 100%
  display inline-block
  margin-left _c(30)
.weui-cells:after, .weui-cells:before
  border: 0
.btn_bottom
  height _c(98)
  text-align center
  width 100%
  position fixed
  bottom 0
  line-height _c(98)
  background $color-bottom-cg
  font-size $font-size-18
  color #ffffff
</style>