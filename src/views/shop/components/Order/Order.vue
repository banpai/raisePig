<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="订单信息" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--跳转收货地址 start-->
    <div class="weui-flex o_address elonline" v-tap="{methods: skip, url: '/shop/DeliveryAddress'}">
      <div class="address_icon">
        <img src="./images/address.png">
      </div>
      <div class="weui-flex__item">
        <div class="address_txt">请填写您的收货地址</div>
      </div>
      <div class="icon_go">
        <img src="./../../../../common/assets/go.png">
      </div>
    </div>
    <!--跳转收货地址 end-->
    <!--商品列表 start-->
    <div class="shop_li">
      <div class="weui-flex o_li elonline" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="tu_icon">
          <img src="./../../../../common/assets/ad-1.png">
        </div>
        <div class="weui-flex__item shop_right">
          <div class="shop_content">
            如果你无法简单的表达你的意思，那只能说明你该不够了解他。
          </div>
          <div class="weui-flex con_right">
            <div>数量：1</div>
            <div class="weui-flex__item con_red">￥900</div>
          </div>
        </div>
      </div>
      <div class="weui-flex o_li elonline" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="tu_icon">
          <img src="./../../../../common/assets/ad-1.png">
        </div>
        <div class="weui-flex__item shop_right">
          <div class="shop_content">
            如果你无法简单的表达你的意思，那只能说明你该不够了解他。
          </div>
          <div class="weui-flex con_right">
            <div>数量：1</div>
            <div class="weui-flex__item con_red">￥900</div>
          </div>
        </div>
      </div>
      <div class="weui-flex o_li elonline" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="tu_icon">
          <img src="./../../../../common/assets/ad-1.png">
        </div>
        <div class="weui-flex__item shop_right">
          <div class="shop_content">
            如果你无法简单的表达你的意思，那只能说明你该不够了解他。
          </div>
          <div class="weui-flex con_right">
            <div>数量：1</div>
            <div class="weui-flex__item con_red">￥900</div>
          </div>
        </div>
      </div>
    </div>
    <!--商品列表 end-->
    <!-- 填写信息 s-->
		<div class="adoline elonline addstyle" v-tap="{methods: tanCen, name: 'pFlag'}">
			<p>配送方式</p>
		</div>
		<div class="adoline elonline yhq addstyle">
			<p>优惠券</p>
			<router-link to="/my/Coupon" tag="p" class="mui-navigate-right">无可用</router-link>
		</div>
		<!-- 填写信息 e-->
		<!-- 选择支付方式 s-->
		<p class="zffs">支付方式</p>
		<div class="adoline elonline zffsk weui-cells weui-cells_checkbox">
			<img src="./../../../index/images/qbzf.png" alt="">
			<div>
				<p>钱包资金</p>
				<p>钱包余额800</p>
			</div>
			<label class="weui-cell__hd gou" for="Index1">
        <input type="radio" class="weui-check" name="zf" id="Index1">
        <i class="weui-icon-checked"></i>
      </label>
		</div>
		<p class="zffs">其他支付方式</p>
		<div class="adoline elonline zffsk otherzf weui-cells weui-cells_checkbox">
			<img src="./../../../index/images/ylzf.png" alt="">
			<div>
				<p>银联快捷支付</p>
			</div>
			<label class="weui-cell__hd gou" for="Index2">
        <input type="radio" class="weui-check" name="zf" id="Index2">
        <i class="weui-icon-checked"></i>
      </label>
		</div>
		<div class="adoline elonline zffsk otherzf weui-cells weui-cells_checkbox">
			<img src="./../../../index/images/wxzf.png" alt="">
			<div>
				<p>微信支付</p>
			</div>
			<label class="weui-cell__hd gou" for="Index3">
        <input type="radio" class="weui-check" name="zf" id="Index3">
        <i class="weui-icon-checked"></i>
      </label>
		</div>
		<div class="adoline elonline zffsk otherzf weui-cells weui-cells_checkbox">
			<img src="./../../../index/images/zfbzf.png" alt="">
			<div>
				<p>支付宝支付</p>
			</div>
      <label class="weui-cell__hd gou" for="Index4">
        <input type="radio" class="weui-check" name="zf" id="Index4">
        <i class="weui-icon-checked"></i>
      </label>
		</div>
		<!-- 选择支付方式 e-->
    <div style="height: 60px;"></div>
    <!-- 卖猪结算组件 s-->
    <div class="settle weui-cells weui-cells_checkbox">
      <p>共{{counter}}件</p>
      <p>合计：￥{{hjmoney}}</p>
       <p v-tap="{methods:skip, url:'/shop/Order'}">去结算</p>
    </div>
    <!-- 卖猪结算组件 e-->
    <!--选择配送方式 start-->
    <Distribution :visible.sync="pFlag"></Distribution>
    <!--选择配送方式 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 订单信息
   * @event
   */
  import Goback from '@/components/topnav/Gobacknav'
  import Distribution from '@/components/dialog/Distribution'
  import {
    getPostData
  } from '@/api/api.js'
  import {
    mapMutations
  } from 'vuex'
  export default {
    components: {
      Goback,
      Distribution
    },
    data() {
      return {
        tuWen: '',
        counter: '0', //猪只数,
        hjmoney: '0',
        // 配送弹出层
        pFlag: false
      }
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
      tanCen(e){
        this[e.name] = true
      }
    },
    mounted() {}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.o_address
  padding-bottom _c(30)
  .address_icon
    width _c(32)
    height _c(32)
    margin-left _c(30)
    margin-top _c(30)
    img
      width 100%
      height 100%
  .address_txt
    margin-left _c(50)
    font-size $font-size-16
    line-height $font-size-16
    margin-top _c(30)
  .icon_go
    width 8px
    height 14px
    margin-top _c(30)
    margin-right _c(45)
    img
      width 100%
      height 100%
.shop_li
  .o_li
    padding-top _c(30)
    padding-bottom _c(30)
  .tu_icon
    width _c(182)
    height height _c(130)
    margin-left _c(30)
    img
      width 100%
      height 100%
  .shop_right
    margin-left _c(20)
    margin-right _c(30)
    .shop_content
      font-size $font-size-14
      line-height $font-size-14
    .con_right
      margin-right _c(60)
      font-size $font-size-14
      line-height $font-size-14
      margin-top _c(30)
      .con_red
        text-align right
        color red
        font-size $font-size-16
@import '~@/common/stylus/order'
.addstyle
  margin 0
  padding-left _c(30)

.weui-cell
  padding-left _c(30)
  padding-right _c(30)
.settle
  position fixed
  flex-direction row
  justify-content space-between
  left 0
  bottom 0
  width 100%
  z-index 1000
  background #ffffff
  .gou
    width _c(60)
    height 100%
    display inline-block
    margin-left _c(30)
    margin-top _c(20)
  p
    display inline-block
    // line-height 43px
    height 100%
    // border 1px solid
    font-size $font-size-16
  p:nth-child(1)
    margin-left _c(30)
    margin-top _c(20)
  p:nth-child(2)
    margin-left _c(80)
  p:nth-child(3)
    width _c(250)
    float right
    line-height _c(86)
    margin 0
    vertical-align middle
    text-align center
    background $color-bottom-cg
    color white
.weui-dialog__ft
  a
    color $color-bottom-cg
</style>