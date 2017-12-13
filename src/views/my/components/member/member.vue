<template>
  <div class="mui-content">
    <!--nav start-->
    <Goback navtitle="我的会员" fanhuifalg="true"></Goback>
    <!--nav end-->
    <!--头部 start-->
    <div class="m_head">
      <div class="weui-flex">
        <div class="h_img">
          <img src="./../../images/head.jpg">
        </div>
        <div class="weui-flex__item">
          <div class="weui-flex m_f_b">
            <div class="m_name">ZERO</div>
            <div class="m_icon weui-flex__item">
              <div class="weui-flex m_icon_item">
                <div class="m_icon_L1">
                  <img src="./images/L1_.png">
                </div>
                <div class="m_icon_txt">新手</div>
              </div>
            </div>
          </div>
          <div class="weui-progress m_bar">
            <div class="weui-progress__bar">
              <div class="weui-progress__inner-bar js_progress" style="width: 80%;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="h_txt">ZERO, 您已打败了同等级77%的用户</div>
    </div>
    <!--头部 end-->
    <!--会员特权说明 start-->
    <div class="m_details">
      <div class="m_details_title">会员特权</div>
      <div class="m_details_content">如果你无法简单地表达你的想法，那就说明你还不够了解他。如果你达到如果你无法简单地表达你的想法，那就说明你还不够了解他。如果你达到如果如果你无法简单地表达你的想法，那就说明你还不够了解他。如果你达到</div>
    </div>
    <!--会员特权说明 end-->
    <!--等级 start-->
    <div class="weui-flex m_level">
      <div class="weui-flex__item">
        <div class="m_level_icon">
          <img src="./images/L1.png">
        </div>
        <div class="m_level_title">新手</div>
      </div>
      <div class="weui-flex__item">
        <div class="m_level_icon">
          <img src="./images/L2_g.png">
        </div>
        <div class="m_level_title m_level_title_g">小资</div>
      </div>
      <div class="weui-flex__item">
        <div class="m_level_icon">
          <img src="./images/L3_g.png">
        </div>
        <div class="m_level_title m_level_title_g">品质</div>
      </div>
      <div class="weui-flex__item">
        <div class="m_level_icon">
          <img src="./images/L4_g.png">
        </div>
        <div class="m_level_title m_level_title_g">尊享</div>
      </div>
    </div>
    <!--等级 end-->
    <!--徽章 start-->
    <div class="weui-flex m_tara">
      <div class="weui-flex__item">
        <div class="m_tara_icon">
          <img src="./images/tara.png">
        </div>
        <div class="m_tara_title">身份象征</div>
      </div>
      <div class="weui-flex__item"></div>
      <div class="weui-flex__item"></div>
      <div class="weui-flex__item"></div>
    </div>
    <!--徽章 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 我的会员
   * @event 
   */
  import Goback from '@/components/topnav/Gobacknav'
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
      skip() {
        this.err_msg('测试出错哈哈哈')
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.m_head
  background #4cd9dd
  .h_img
    width _c(130)
    height _c(130)
    margin-left _c(65)
    margin-right _c(25)
    margin-top _c(55)
    margin-bottom _c(30)
    border _c(5) solid #f8f8f3
    border-radius 50%
    overflow hidden
    img
      width 100%
      height 100%
  .m_f_b
    justify-content space-between
    .m_name
      color #ffffff
      margin-top _c(70)
      font-size $font-size-16
    .m_icon
      margin-top _c(70)
      color #ffffff
      font-size $font-size-16
      margin-right _c(45)
      text-align right
      .m_icon_item
        justify-content flex-end
        .m_icon_L1
          width _c(31)
          height _c(26)
          margin-right _c(15)
          img
            width 100%
            height 100%
          .m_icon_txt
            margin-left _c(15)
  .m_bar
    width 86%
    margin-top _c(45)
    height _c(25)
    border-radius 4px
    overflow hidden
    .weui-progress__bar
      height 100%
      background #ffffff
      .weui-progress__inner-bar
        background #e0d6d9
  .h_txt
    color #ffffff
    text-align center
    font-size $font-size-16
    padding-bottom _c(60)
.m_details
  background #e0d6d9
  border-top 1px solid #e0d6d9 
  overflow hidden
  padding-bottom _c(45)
  .m_details_title
    margin-top _c(25)
    text-align center
    font-size $font-size-20
  .m_details_content
    padding-left _c(20)
    padding-right _c(20)
    margin-top _c(35)
    font-size $font-size-13
.m_level
  margin-top _c(25)
  margin-bottom _c(25)
  .m_level_icon
    width _c(64)
    height _c(52)
    margin 0 auto
    img 
      width 100%
      height 100%
  .m_level_title
    font-size $font-size-16
    text-align center
    margin-top _c(25)
    color #000000
  .m_level_title_g
    color #bfbfbf
.m_tara
  padding-top _c(30)
  margin-left _c(30)
  margin-right _c(30)
  .m_tara_icon
    width _c(172)
    height _c(172)
    margin 0 auto
    img 
      width 100%
      height 100%
  .m_tara_title
    font-size $font-size-16
    text-align center
    margin-top _c(25)
    color #000000
</style>