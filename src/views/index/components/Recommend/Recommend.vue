<template>
  <div>
    <Goback fanhuifalg="true" navtitle="推荐好友" text="推荐记录" :callback="recrecords"></Goback>
    <div class="invite">
        <!-- 邀请码和数据区域 s-->
        <div class="invitetop">
          <p>123456789</p>
          <p>我的邀请码</p>
        </div>
        <div class="invitebot">
            <div class="invitebotlt">
                <p>10</p>
                <p>已邀请人数</p>
            </div>
            <div class="yonline"></div>
            <div class="invitebotrt">
                <p>100</p>
                <p>累计收益金额（元）</p>
            </div>
        </div>
        <!-- 邀请码和数据区域 e-->
    </div>
    <!-- 我的二维码 s-->
    <div class="qrcode">
        <p>我的推广二维码</p>
        <div class="qrbg">
          <img src="../../images/qrcode.png" alt="">
        </div>
    </div>
    <!-- 我的二维码 e-->
    <div class="elonline"></div>
    <!-- 推荐奖励说明 s-->
    <div class="awards">
        <p>推荐奖励说明</p>
        <div class="awardswrapper">
          <div class="awardslt">
            <img src="../../images/woshou.png" alt="">
            <p>被邀请人注册时填写邀请码，得养猪奖金20元。</p>
          </div>
          <div class="awardsct">
            <img src="../../images/liwu.png" alt="">
            <p>额外享有被邀请人收益的10%奖金。</p>
          </div>
          <div class="awardsrt">
            <img src="../../images/ka.png" alt="">
            <p>所有推荐类奖金，和认购的猪只一同提现。</p>
          </div>
        </div>
    </div>
    <!-- 推荐奖励说明 e-->
    <!-- 分享模块 s-->
    <div class="elonline"></div>
    <div class="share">
        <div class="wxshare">
          <img src="../../images/wx.png" alt="">
          <p>分享至微信</p>
        </div>
        <div class="yonline"></div>
        <div class="pyshare">
          <img src="../../images/pyq.png" alt="">
          <p>分享至朋友圈</p>
        </div>
        <div class="yonline"></div>
        <div class="qqshare">
          <img src="../../images/qq.png" alt="">
          <p>分享至QQ</p>
        </div>
    </div>
    <!-- 分享模块 e-->
  </div>
</template>
<script>
/**@author gumiao
* @description 推荐好友
* @event 
*/
import Vue from 'vue'
import Axios from 'axios'
import router from '@/router'
import Goback from '@/components/topnav/Gobacknav'
import {mapMutations} from 'vuex'
export default {
  name: '',
  data() {
      return {
        
      }
  },
  components:{
      Goback,
  },
  methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      recrecords(){
        this.$router.push('/index/Recrecords')
      },
  },
}
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
  p
    margin 0
    padding 0
    text-align center
    font-size $font-size-15
  .yonline
    width _c(2)
    height _c(70)
    margin-top _c(10)
    background white
  .invite
    display flex
    flex-direction row
    justify-content center
    flex-wrap wrap
    background $color-bottom-cg
    color white
    width 100%
    height _c(255)
    .invitetop
      width 100%
      padding-top _c(40)
      padding-bottom _c(10)
      p:nth-child(1)
        font-size _c(48)
    .invitebot
      width 100%
      display flex
      flex-wrap nowrap
      .invitebotlt,.invitebotrt
        width 50%
        p:nth-child(1)
          font-size $font-size-18
          margin-bottom _c(10)
  .qrcode
    display flex
    flex-direction column
    justify-content center
    align-items center
    padding-top _c(30)
    padding-bottom _c(35)
    p
      padding-bottom _c(35)
    .qrbg
      width _c(400)
      height _c(400)
      background #cdcdcd
      img
        width _c(346)
        height _c(343)
        margin 7%
  .awards
    padding _c(25) _c(51) _c(45) _c(51)
    display flex
    flex-direction row
    justify-content center
    flex-wrap wrap
    &>p
      padding-bottom _c(25)
    .awardswrapper
      display flex
      flex-wrap nowrap
      justify-content space-between
      div
        width 28%
        display flex
        flex-direction column
        align-items center 
        flex-wrap wrap
        p
          text-align left
          color $color-bg
          font-size $font-size-12
        img
          width _c(60)
          height _c(50)
          margin-bottom _c(20)
  .share
    display flex
    flex-direction row
    flex-wrap nowrap
    div
      display flex
      flex-direction row
      justify-content center
      flex-wrap nowrap
      width 50%
      margin-top _c(30)
    .yonline
      width _c(4)
      height _c(116)
      margin-top _c(-1)
      background $color-bg
    img
      width _c(48)
      height _c(48)
    p
      margin-left _c(15)
</style>