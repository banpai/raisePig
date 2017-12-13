<template>
  <div>
    <Goback fanhuifalg="true" navtitle="卖猪记录"></Goback>
    <!-- 卖猪记录 s-->
    <ul>
      <li>
        <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                <img src="../images/toux.png" style="width: 50px;display: block">
            </div>
            <div class="weui-cell__bd">
                <p>小肥猪第100期</p>
                <p>10头</p>
            </div>
            <div class="weui-cell__ft">
              <p>+100元</p>
              <p>11月11日</p>
            </div>
        </div>
        <div class="elonline"></div>
      </li>
    </ul>
    <!-- 卖猪记录 e-->
  </div>
</template>
<script>
/**@author gumiao
* @description 卖猪记录
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
  .weui-cell__ft
    color black
  .weui-cell
    padding _c(30)
    .weui-cell__hd
      width _c(100) 
      height _c(100)
      border-radius 50%
      border _c(5) solid white
      overflow hidden
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
      p:nth-child(1)
        margin-bottom _c(15)
</style>