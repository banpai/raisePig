<template>
  <div class="contain">
    <!--头部 start-->
    <Goback navtitle="我的余额" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--提现金额 start-->
    <div class="txje">
      <div class="t_title">
        <div class="t_title_left">提现金额</div>
        <div class="t_title_right" v-tap="{methods: skip, url:'/my/Balance/bill'}">
          <span class="t_t">账单明细</span>
          <img src="./images/go.png" class="t_img">
        </div>
      </div>
      <div class="t_balance">0</div>
    </div>
    <!--提现金额 end-->
    <!--钱包余额 start-->
    <div class="qbye">
      <div class="q_num">钱包余额：0.00</div>
      <div class="q_right">
        <div class="q_b_u" v-tap="{methods: skip, url: '/my/Balance/Withdrawals'}">钱包提现</div>
        <div class="q_b_b">钱包充值</div>
      </div>
    </div>
    <!--钱包余额 end-->
    <!--提现说明 start-->
    <div class="txsm">
      提现说明:

      <br>
      <br>

      在工作日内提现采用16:00前申请T+0,16:00后申请T+1模式。即如果当天16:00点前提现的，则当天到账；当天16:00后提现，则预计第二日到账。

      <br>
      <br>

      注：提现资金到银行卡的具体时间，请以银行为准。如遇节假日申请，则隔周第一个工作日到账。

    </div>
    <!--提现说明 end-->
    <!--底部图文 start-->
    <div class="tip_footer">
      <elFooter></elFooter>
    </div>
    <!--底部图文 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 我的余额
   * @event 
   */
  import Goback from '@/components/topnav/Gobacknav'
  import elFooter from '@/components/indexpattern/Footer'
  import {
    mapMutations
  } from 'vuex'

  export default {
    components: {
      Goback,
      elFooter
    },
    data() {
      return {
        list: []
      }
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      skip(e) {
        this.$router.push(e.url)
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.contain
  .txje
    border-bottom 1px solid #d2d2d2
    .t_title
      display flex
      justify-content space-between
      flex-wrap nowrap
      font-size $font-size-15
      .t_title_left
        margin-top _c(30)
        margin-bottom _c(40)
        margin-left _c(30)
      .t_title_right
        margin-top _c(30)
        margin-bottom _c(40)
        margin-right _c(30)
        position relative
        .t_t
          display inline-block
          margin-right _c(40)
        .t_img
          display block
          position absolute
          right 0
          bottom _c(6)
          width _c(16*1.2)
          height _c(28*1.2)
          margin-top _c(30)
          align-items flex-end
    .t_balance
      margin-bottom _c(30)
      margin-left _c(30)
      font-size $font-size-18
  .qbye
    display flex
    justify-content space-between
    border-bottom _c(20) solid #d2d2d2
    .q_num
      margin-top _c(30)
      font-size $font-size-15
      margin-left _c(30)
    .q_right
      color $color-bottom-cg
      font-size $font-size-15
      .q_b_u
        border 1px solid $color-bottom-cg
        border-radius 3px
        margin-right _c(35)
        margin-top _c(20)
        margin-bottom _c(20)
        padding-top _c(15)
        padding-bottom _c(15)
        padding-right _c(40)
        padding-left _c(40)
        &:active
          background $color-bottom-cg
          color #ffffff
      .q_b_b
        border 1px solid $color-bottom-cg
        border-radius 3px
        margin-right _c(35)
        margin-bottom _c(20)
        padding-top _c(15)
        padding-bottom _c(15)
        padding-right _c(40)
        padding-left _c(40)
        &:active
          background $color-bottom-cg
          color #ffffff
  .txsm
    padding _c(30)
    font-size $font-size-15
</style>