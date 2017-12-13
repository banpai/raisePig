<template>
  <div>
    <!-- 卖猪结算组件 s-->
    <div class="settle">
        <p>共{{setcounter}}件</p>
        <p>合计：￥{{hjmoney}}</p>
        <p v-tap="{methods:settle}">去结算</p>
    </div>
    <!-- 卖猪结算组件 e-->
    <!-- 结算提示框 s-->
    <div class="js_dialog" id="iosDialog2" style="opacity:1;" v-show="js_dialogFlag">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__bd">售卖成功，金额自动存入钱包</div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-tap="{methods:settleqr}">确认</a>
            </div>
        </div>
    </div>
  </div>
  <!-- 结算提示框 e-->
</template>
<script>
  /**@author gumiao
   * @description 卖猪结算组件
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
      return {
        js_dialogFlag: false, //结算提示框 false：不显示 true:显示
       }
    },
    props:['setcounter','hjmoney'],
    components: {
      Goback,
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      // 点击结算
      settle(){
          this.js_dialogFlag = !this.js_dialogFlag
      },
      // 点击确认 返回上一页
      settleqr(){
          mui.back();
          this.js_dialogFlag = !this.js_dialogFlag
      }
    },
  }
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
  .settle
    position fixed
    flex-direction row
    justify-content space-between
    left 0
    bottom 0
    width 100%
    border 1px solid $color-bg
    p
      display inline-block
    p:nth-child(1)
      margin-left _c(50)
      margin-top _c(20)
    p:nth-child(2)
      margin-left _c(80)
    p:nth-child(3)
      width _c(250)
      float right
      line-height _c(86)
      margin 0
      vertical-align middle
      text-align center
      background $color-bottom-cg
      color white
  .weui-dialog__ft
    a
      color $color-bottom-cg
</style>