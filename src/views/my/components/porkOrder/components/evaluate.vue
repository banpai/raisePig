<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="发表评论" :callback="edit" text="发布" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--顶部介绍 start-->
    <div class="weui-flex e_c_top">
      <div class="o_c_img">
        <img src="./../images/pig.jpg">
      </div>
      <div class="weui-flex__item ocmg">
        <div class="ocmg_1">小肥猪小肥猪小肥猪小肥猪小肥猪小肥猪小肥猪小肥猪</div>
      </div>
    </div>
    <!--顶部介绍 end-->
    <!--商品评价信息 start-->
    <div class="bd_msg elonline">
      <Evalstar name="商品满意度" inputdata="1" disabledInputs="false" className="star1"></Evalstar>
      <Evalstar name="物流评分" inputdata="4" disabledInputs="false" className="star2"></Evalstar>
      <Evalstar name="发货速度评分" inputdata="3" disabledInputs="false" className="star3"></Evalstar>
    </div>
    <!--商品评价信息 end-->
    <!--评论框 start-->
    <div class="weui-cells weui-cells_form e_form">
      <div class="">
        <div class="weui-cell__bd">
          <textarea class="weui-textarea" placeholder="宝贝瞒住你的期待吗？说说你的心得吧" rows="3"></textarea>
          <div class="weui-textarea-counter"><span>0</span>/200</div>
        </div>
      </div>
    </div>
    <!--评论框 end-->
    <!--上传图片 start-->
    <div class="e_up">
      <div class="e_up_img">
        <img src="./images/camery.png">
      </div>
      <div class="e_up_text">添加图片</div>
    </div>
    <!--上传图片 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 发表评论
   * @event 
   */
  import Goback from '@/components/topnav/Gobacknav'
  import Evalstar from '@/components/indexpattern/Evalstar'
  import {
    mapMutations
  } from 'vuex'
  export default {
    components: {
      Goback,
      Evalstar
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
      },
      // 点击消息提醒
      edit() {
        alert('编辑')
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.log_top
  border-bottom 1px solid $border-color
.e_c_top
  margin-bottom _c(30)
.o_c_img
  margin-left _c(30)
  margin-top _c(30)
  margin-right _c(15)
  width _c(180)
  height _c(130) !important
  img
    width 100%
    height 100%
$font-top = $font-size-16
.ocmg
  margin-top _c(30)
  margin-bottom _c(30)
  margin-right _c(30)
  font-size $font-top
.log_msg
  margin-bottom _c(30)
  .msg_li
    padding-left _c(30)
    padding-right _c(35)
    padding-top _c(30)
    .font_1
      font-size $font-size-16
    .font_2
      font-size $font-size-16
      float right
.od_top
  margin-top _c(30)
  color $color-bottom-cg
  font-size $font-size-16
  .od_icon
    width _c(36)
    height _c(36)
    margin-left _c(12)
    margin-right _c(13)
    img 
      width 100%
      height 100%
.bd_msg
  margin-left _c(30)
  margin-right _c(30)
  padding-bottom _c(30)
  .bd_msg_li
    padding-bottom _c(30)
    .msg_f
      font-size $font-size-16
      height $font-size-16
      line-height $font-size-16
    .msg_star
      width _c(32)
      height _c(32)
      float left
      margin-right _c(20)
      img 
        width 100%
        height 100%
.e_form
  border 1px solid $color-bg
  margin-left _c(45)
  margin-right _c(45)
.e_up
  width _c(100)
  height _c(100)
  border 1px dashed $color-bg
  margin-top _c(30)
  margin-left _c(45)
  .e_up_img
    width _c(40)
    height _c(36)
    margin _c(13) auto
    img 
      width 100%
      height 100%
  .e_up_text
    font-size $font-size-12
    margin-left 0
    color $border-color
</style>