<template>
  <div>
    <Goback fanhuifalg="true" navtitle="累计收益"></Goback>
    <!-- 累计收益 s-->
    <div class="yesear">
      <p>累计收益</p>
      <p>100.00</p>
    </div>
    <div class="backmoney">
        <div class="bmlt">
          <p>养猪收益（元）</p>
          <p>100.00</p>
        </div>
        <div class="bmrt">
          <p>养猪推荐返回（元）</p>
          <p>100.00</p>
        </div>
    </div>
    <!-- 累计收益 e-->
    <div class="elonline tenline"></div>
    <!-- 收益列表 s-->
    <ul>
      <li>
        <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                <img src="../images/toux.png" style="width: 50px;display: block">
            </div>
            <div class="weui-cell__bd">
                <p>小肥猪第100期</p>
                <p>11月11日</p>
            </div>
            <div class="weui-cell__ft">+100元</div>
        </div>
        <div class="elonline"></div>
      </li>
    </ul>
    <!-- 收益列表 e-->
    <div class="elonline"></div>
    <elFooter></elFooter>
  </div>
</template>
<script>
  /**@author gumiao
   * @description 累计收益
   * @event 
   */
  import Vue from 'vue'
  import Axios from 'axios'
  import router from '@/router'
  import Goback from '@/components/topnav/Gobacknav'
  import elFooter from '@/components/indexpattern/Footer'
  import {
    mapMutations
  } from 'vuex'
  export default {
    name: '',
    data() {
      return {
      }
    },
    components: {
      Goback,
      elFooter,
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
    },
  }
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
  p
    margin 0
    padding 0
    font-size $font-size-15
  li
    list-style-type none
  .tenline
    height _c(10)
    background #cdcdcd
  .elonline:after
    background #cdcdcd
  .yesear
    display flex
    flex-direction column
    justify-content center
    align-items center
    p
      margin-top _c(40)
    p:nth-child(2)
      font-size $font-size-18
      color $color-red
  .backmoney
    display flex
    flex-direction row
    justify-content center
    margin-top _c(48)
    div
      width 50%
      text-align center
      border 1px solid $border-color
      padding _c(25) 0
      p:nth-child(2)
        margin-top _c(20)
    .bmlt
      color white
      background $color-bottom-cg
      border-right none
  ul
    min-height _c(600)
  .weui-cell
    padding _c(30)
    .weui-cell__hd
      width _c(100) 
      height _c(100)
      border-radius 50%
      border _c(5) solid white
      img
        width 100% !important
    .weui-cell__bd
      margin-left _c(45)
      p
        text-align left
      p:nth-child(1)
        margin-bottom _c(15)
    .weui-cell__ft
      font-size $font-size-20
      color black
</style>