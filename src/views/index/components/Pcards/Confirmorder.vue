<template>
	<div>
		<Goback fanhuifalg="true" navtitle="确认订单"></Goback>
		<div class="ordertop">
			<img src="../../images/toux.png" alt="">
			<div class="ordercon">
				<p>小香猪</p>
				<p>订单编号：123456789</p>
			</div>
		</div>
		<div class="huibao">
			<p>回报日期：11月11日</p>
		</div>
		<div class="elonline"></div>
		<div class="zfje">
			<p>总支付金额</p>
			<p>￥800</p>
		</div>
		<div class="rlr">
			<p>认领人：猪猪猪</p>
			<p>手机号：123456789</p>
		</div>
		<div class="sfzh">
			<p>身份号码：123456789</p>
		</div>
		<div class="elonline"></div>
		<div class="detalist">
			<p>认领期数</p>
			<p>第100期</p>
		</div>
		<div class="elonline"></div>
		<div class="detalist">
			<p>合作养殖场</p>
			<p>养殖场名</p>
		</div>
		<div class="elonline"></div>
		<div class="detalist">
			<p>认领只数</p>
			<p>1</p>
		</div>
		<div class="elonline"></div>
		<div class="detalist">
			<p>认领单价</p>
			<p>800</p>
		</div>
		<div class="elonline"></div>
		<div class="detalist elonline">
			<p>支付方式</p>
			<p>银联支付</p>
		</div>
		<div class=""></div>
		<div class="connextbu" v-tap="{methods:connextbu}">
			<p>确认去支付</p>
		</div>
	</div>
</template>
<script>
	/**@author gumiao
	 * @description 确认订单
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
			connextbu() {

			}
		},
	}
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
p
	margin 0
	padding 0
	font-size $font-size-15 
.ordertop
	padding _c(45) _c(40)
	padding-bottom _c(20)
	display flex
	flex-direction row
	justify-content flex-start
	img
		width _c(110)
		height _c(110)
		margin-right _c(45)
	.ordercon
		p:first-child
			margin-bottom _c(30)
.huibao
	color $color-red
	text-align center
	margin-bottom _c(25)
.huibao
	text-align center
.connextbu
	margin-top _c(140)
	p
		position relative
		left 0
		bottom 0
		width 100%
		height _c(98)
		background $color-bottom-cg
		color white
		text-align center
		line-height _c(98)
		vertical-align middle
.zfje
	padding-top _c(25)
	padding-bottom _c(50)
	text-align center
	p:first-child
		margin-bottom _c(25)
.rlr
	padding 0 _c(30)
	padding-bottom _c(50)
	display flex
	flex-direction row
	justify-content space-between
.sfzh
	padding 0 _c(30)
	padding-bottom _c(30)
.detalist
	padding _c(30)
	display flex
	flex-direction row
	justify-content space-between
</style>