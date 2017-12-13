<template>
	<div class="indrulewrapper">
		<div class="indrulewra">
				<div class="indexrule">
						<p>7天连续签到，得到抽奖机会一次，连续签到30天，额外得到一次抽奖机会</p>
				</div>
		</div>
	</div>
</template>
<script>
	/**@author gumiao
	 * @description 规则气泡
	 * @event 
	 */
	export default {
		name: '',
		data() {
			return {}
		},
	}
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
.indrulewrapper
	position absolute
	top _c(35)
	width 100%
	
.indrulewra
	display flex
	flex-direction row
	justify-content center	

.indexrule
	width _c(465)
	height _c(251)
	background url('../../views/index/images/qipao.png') left top no-repeat
	background-size 99% 100%
	padding 0 _c(14)
	p
		margin-top _c(80)
</style>