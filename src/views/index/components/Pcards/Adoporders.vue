<template>
	<div>
		<Goback fanhuifalg="true" navtitle="认养订单"></Goback>
		<!-- 填写信息 s-->
		<div class="adoline elonline">
			<p>认领人</p>
			<input type="text" placeholder="请填写真实姓名">
		</div>
		<div class="adoline elonline">
			<p>身份证</p>
			<input type="text" placeholder="请填写真实身份证号码">
		</div>
		<div class="adoline elonline">
			<p>手机号码</p>
			<input type="text" placeholder="请填写真实手机号码">
		</div>
		<div class="adoline elonline">
			<p>推荐人代码</p>
			<input type="text" placeholder="填写推荐人可立返金额">
		</div>
		<div class="adoline elonline">
			<p>合同寄送</p>
			<input type="text" placeholder="填写准确地址">
		</div>
		<div class="adoline elonline yhq">
			<p>优惠券</p>
			<router-link to="/my/Coupon" tag="p" class="mui-navigate-right">无可用</router-link>
		</div>
		<!-- 填写信息 e-->
		<!-- 选择支付方式 s-->
		<p class="zffs">支付方式</p>
		<div class="adoline elonline zffsk weui-cells weui-cells_checkbox">
			<img src="../../images/qbzf.png" alt="">
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
			<img src="../../images/ylzf.png" alt="">
			<div>
				<p>银联快捷支付</p>
			</div>
			<label class="weui-cell__hd gou" for="Index2">
        <input type="radio" class="weui-check" name="zf" id="Index2">
        <i class="weui-icon-checked"></i>
      </label>
		</div>
		<div class="adoline elonline zffsk otherzf weui-cells weui-cells_checkbox">
			<img src="../../images/wxzf.png" alt="">
			<div>
				<p>微信支付</p>
			</div>
			<label class="weui-cell__hd gou" for="Index3">
        <input type="radio" class="weui-check" name="zf" id="Index3">
        <i class="weui-icon-checked"></i>
      </label>
		</div>
		<div class="adoline elonline zffsk otherzf weui-cells weui-cells_checkbox">
			<img src="../../images/zfbzf.png" alt="">
			<div>
				<p>支付宝支付</p>
			</div>
			<label class="weui-cell__hd gou" for="Index4">
				<input type="radio" class="weui-check" name="zf" id="Index4">
				<i class="weui-icon-checked"></i>
			</label>
		</div>
		<!-- 选择支付方式 e-->
		<div class="nextbu" v-tap="{methods:nextbu}">
			<p>下一步</p>
		</div>
	</div>
</template>
<script>
	/**@author gumiao
	 * @description 认养订单
	 * @event 
	 */
	import Vue from 'vue'
	import Axios from 'axios'
	import router from '@/router'
	import Goback from '@/components/topnav/Gobacknav'
	import {
		mapMutations
	} from 'vuex'
	export default {
		name: '',
		data() {
			return {}
		},
		components: {
			Goback,
		},
		methods: {
			...mapMutations({
				err_msg: 'err_msg'
			}),
			nextbu() {
				this.$router.push('/index/Confirmorder');
			}
		},
	}
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable'
@import '~@/common/stylus/order'
</style>