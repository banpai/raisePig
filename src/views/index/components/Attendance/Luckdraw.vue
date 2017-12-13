<template>
	<div>
		<Goback fanhuifalg="true" navtitle="抽奖"></Goback>
		<Confirm v-show="dialog" :dialog="dialog" @fhdialog="fhdialog" :confdata="confdata" :callback="callback"></Confirm>
		<p class="pchance">您还有3次抽奖机会</p>
		<!-- 规则介绍  s-->
		<div class="rulewrapper">
			<div class="rule">
				<img src="../../images/wenhao.png" alt="" v-tap="{methods:rule}" class="ruleimg"> 活动规则
			</div>
			<Indexrule v-show="Indexruleflag"></Indexrule>
		</div>
		<!-- 规则介绍  e-->
		<!-- 抽奖转盘 s-->
		<div class="lotterycenter">
			<img src="../../images/choujiang.png" alt="" v-tap="{methods:lottery}">
		</div>
		<!-- 抽奖转盘 e-->
	</div>
</template>
<script>
	/**@author gumiao
	 * @description 抽奖页面
	 * @event 
	 */
	import Vue from 'vue'
	import Axios from 'axios'
	import router from '@/router'
	import Goback from '@/components/topnav/Gobacknav'
	import Indexrule from '@/components/dialog/indexrule'
	import Confirm from	'@/components/dialog/confirm'
	import {
		mapMutations
	} from 'vuex'
	export default {
		name: '',
		data() {
			return {
				Indexruleflag: false, // 规则说明 false:隐藏 true：显示
				dialog: false,	//确认框confirm false:隐藏 true：显示
				confdata:[
					{cfmte:'恭喜获得'},
					{msgsty:'1'},
					{msglt:require('../../images/66.png')},
					{msgcrp1:'猪肉商城优惠券'},
					{msgcrp2:'有效期至2017-09-09'},
					{msgrt:'￥0.5'},
					{confirmstyle:'1'},
					{quxiao:'使用'},
				],
				// cfmte:'恭喜获得',	//确认框标题
				// msgsty:'1', 默认1分左中右图文显示 2垂直居中文字显示
				// msglt:'../../views/index/images/66.png',	 //msg左边的图片区域
				// msgcrp1:'猪肉商城优惠券',  //msg中间区域p1
				// msgcrp2:'有效期至2017-09-09',  //msg中间区域p2
				// msgrt:'￥0.5',  //msg右边区域
				// msgcrp:'2222',	//msgsty为2时的文字显示
				// confirmstyle:'1', //确认 默认1包含确认取消 2只有确认
				// quxiao:'使用', //取消
			}
		},
		components: {
			Goback,
			Indexrule,
			Confirm
		},
		methods: {
			...mapMutations({
				err_msg: 'err_msg'
			}),
			// 点击出现规则
			rule(){
				this.Indexruleflag = !this.Indexruleflag;
				document.addEventListener('tap', (e) => {
					// 图片的class
					var elclass = e.target.parentElement.className;
					if(elclass != 'rule' && this.Indexruleflag == true){
						this.Indexruleflag = false; 
					}
				})
			},
			lottery(){
				this.dialog = !this.dialog
			},
			// 确认后返回的状态
			fhdialog(data){
				this.dialog = data;
			},
			// 点击取消后的回调
			callback(){
				console.log('取消')
			}
		},
		activated () {
			// 点击规则状态初始化
			this.Indexruleflag = false;
		}
	}
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
p
	margin 0
	padding 0
	font-size $font-size-15
.rulewrapper
	width 100%
	height _c(56)
	position relative
	top _c(54)
	left 0
	.rule
		float right 
		margin-right  _c(40)
		line-height _c(56)
		vertical-align middle
		color $color-bottom-cg
		img 
			width _c(46)
			height _c(46)
			float left
			margin-right _c(15)
			margin-top _c(4)
.pchance
	margin-top _c(102)
	text-align center
	width 100%
	font-size $font-size-15
.lotterycenter
	margin-top _c(150)
	padding 0 3%
	img
		width 100%
</style>