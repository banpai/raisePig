<template>
  <div>
    <Goback fanhuifalg="true" navtitle="本月已签到"></Goback>
    <!-- 规则介绍  s-->
    <div class="rulewrapper">
        <div class="rule">
            <img src="../../images/wenhao.png" alt="" v-tap="{methods:rule}" class="ruleimg"> 活动规则
        </div>	
        <Indexrule v-show="Indexruleflag"></Indexrule>	
    </div>
    <!-- 规则介绍  e-->
		<!-- 签到天数和抽奖  s-->
		<div class="attday">
			<p>5天</p>
			<p>再签到3天得一次抽奖</p>
			<p v-tap="{methods:luckdraw,url:'/index/Luckdraw'}">去抽奖</p>
		</div>
		<!-- 签到天数和抽奖  e-->
		<!-- 签到日历  s-->
		<div class="calendar">
			<img src="../../images/rili.png" alt="">
		</div>
		<!-- 签到日历  e-->
  </div>
</template>
<script>
/**@author gumiao
* @description 签到后页面
* @event 
*/
import Vue from 'vue'
import Axios from 'axios'
import router from '@/router'
import Goback from '@/components/topnav/Gobacknav'
import Indexrule from '@/components/dialog/indexrule'
import {mapMutations} from 'vuex'
export default {
  name: '',
data() {
    return {
			Indexruleflag: false, // 规则说明 false:隐藏 true：显示
    }
},
components:{
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
		luckdraw(e){
			this.$router.push(e.url);
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
	.attday
		display flex
		flex-direction column
		justify-content center
		align-items center
		width 100%
		margin-top _c(98)
		margin-bottom _c(17)
		p
			font-size $font-size-15
			margin-bottom _c(30)
		p:nth-child(1)
			width _c(200)
			height _c(150)
			border-radius 5px
			line-height _c(150)
			text-align center
			vertical-align middle
			background $color-bottom-cg
			color white
			font-size _c(60)
		p:nth-child(3)
			width _c(200)
			height _c(60)
			border 1px solid $color-bottom-cg
			text-align center
			vertical-align middle
			line-height _c(60)
			color $color-bottom-cg
	
	.calendar
		img
			width 100%
</style>
