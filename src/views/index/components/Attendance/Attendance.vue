<template>
	<div class="atten">
		<Goback fanhuifalg="true" navtitle="每日签到"></Goback>
		<!-- 规则介绍  s-->
		<div class="rulewrapper">
			<div class="rule">
				<img src="../../images/wenhao.png" alt="" v-tap="{methods:rule}" class="ruleimg"> 活动规则
			</div>	
			<Indexrule v-show="Indexruleflag"></Indexrule>	
		</div>
		<!-- 规则介绍  e-->
		<!-- 签到区域 s-->
		<div class="sign">
			<img src="../../images/qiandao.png" alt="" v-tap="{methods:sign,url:'/index/Attendanceafter'}">
			<p>每日签到得抽奖机会</p>
		</div>
		<!-- 签到区域 e-->
		<div class="elonline"></div>
		<!-- 签到列表 s-->
		<div class="qdtop">签到排名</div>
		<ul class="qdlist">
			<li v-for="(item,index) in signlist">
				<img src="../../images/qianxun.png" alt="">
				<p>{{item.username}}</p>
				<p>已签到{{item.signdays}}天</p>
				<p>{{item.chance}}次抽奖机会</p>
				<div class="elonline"></div>
			</li>
		</ul>
		<!-- 签到列表 e-->
	</div>
</template>
<script>
	/**@author gumiao
	 * @description 签到页面
	 * @event 
	 * 
	 * 
	 */
	import Vue from 'vue'
	import Axios from 'axios'
	import router from '@/router'
	import Goback from '@/components/topnav/Gobacknav'
	import {getPostData} from '@/api/api.js'
	import Indexrule from '@/components/dialog/indexrule'
	import {
		mapMutations
	} from 'vuex'

	export default {
		name: '',
		data() {
			return {
				signlist: [], 	//成员信息列表
				Indexruleflag: false, // 规则说明 false:隐藏 true：显示
			}
		},
		components: {
			Goback,
			Indexrule
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
			sign(e){
				this.$router.push(e.url);
			}
		},
		mounted () {
		},
		activated () {
			// 点击规则状态初始化
			this.Indexruleflag = false;
			var params={
				
			}
			getPostData('getAttListData',params).then(r =>{
				this.signlist = r.signlist
			})
		}
	}
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
	ul
		margin 0
		padding 0
	li
		list-style-type none
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

  .sign
		display flex
		flex-direction column
		justify-content center
		align-items center
		width 100%
		margin-top _c(48)
		img
			width _c(162)
			height _c(172)
		p
			margin-top _c(30)
			margin-bottom _c(80)
	
	.qdtop
		margin-top _c(30)
		margin-left _c(20)
		font-weight 600
	
	.qdlist
		li
			padding _c(30)
			padding-bottom 0
			height _c(149)
			vertical-align middle
			float left
			width 100%
			img
				float left
				width _c(100)
				height _c(100)
				border-radius 50%
				border _c(5) solid white
				overflow hidden
			p
				float left
				margin-top _c(28)
			p:nth-child(2)
				margin-left _c(27)
			p:nth-child(3)	
				margin-left _c(60)	
			p:nth-child(4)	
				margin-left _c(60)	
			.elonline
				float left
				width 100%
				margin-top _c(30)
</style>
