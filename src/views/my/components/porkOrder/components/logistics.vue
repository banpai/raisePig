<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="查看物流" :callback="edit" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--顶部介绍 start-->
    <div class="weui-flex log_top">
      <div class="o_c_img">
        <img src="./../images/pig.jpg">
      </div>
      <div class="weui-flex__item ocmg">
        <div class="ocmg_1">运送中</div>
        <div class="ocmg_2">物流单号：21459876127123212</div>
        <div class="ocmg_3">
          <span>联系方式</span>
          <div class="ocmg_3_btn" v-tap="{methods: skip, url: '/index/Custservice'}">联系客服</div>
        </div>
      </div>
    </div>
    <!--顶部介绍 end-->
    <!--物流信息列表 start-->
    <div class="log_msg">
      <div class="weui-flex msg_li">
        <div class="weui-flex__item">
          <div class="font_1">2017-09-30</div>
        </div>
        <div class="weui-flex__item">
          <div class="font_1">包装中</div>
          <div class="font_1">江苏省无锡市滨湖区</div>
        </div>
      </div>
      <div class="weui-flex msg_li">
        <div class="weui-flex__item">
          <div class="font_1">2017-10-01</div>
        </div>
        <div class="weui-flex__item">
          <div class="font_1">运送中</div>
          <div class="font_1">江苏省无锡市滨湖区</div>
        </div>
      </div>
      <div class="weui-flex msg_li">
        <div class="weui-flex__item">
          <div class="font_1">2017-10-01</div>
        </div>
        <div class="weui-flex__item">
          <div class="font_1">已送到</div>
          <div class="font_1">江苏省无锡市滨湖区</div>
        </div>
      </div>
    </div>
    <!--物流信息列表 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 查看物流
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
      skip(e) {
        if(e.url){
          this.$router.push('/index/Custservice')
        }else{
          this.err_msg('出错了哦~')
        }
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
.o_c_img
  margin-left _c(30)
  margin-top _c(30)
  margin-right _c(15)
  width _c(180)
  height _c(130) !important
  img
    width 100%
    height 100%
$font-top = $font-size-12
.ocmg
  margin-top _c(30)
  margin-bottom _c(30)
  margin-right _c(30)
  font-size $font-top
  .ocmg_1
    margin-bottom _c(30)
    height $font-top
    line-height $font-top
  .ocmg_2
    height $font-top
    line-height $font-top
  .ocmg_3
    margin-top _c(15)
    line-height _c(60)
    display flex
    justify-content space-between
    .ocmg_3_btn
      width _c(200)
      height _c(60)
      border 1px solid $border-color
      border-radius 3px
      text-align center
      line-height _c(60)
      font-size $font-size-16
.log_msg
  
  .msg_li
    margin-left _c(30)
    margin-right _c(30)
    margin-top _c(30)
    border-bottom 1px solid $border-color
    .font_1
      margin-bottom _c(30)
      font-size $font-size-16



</style>