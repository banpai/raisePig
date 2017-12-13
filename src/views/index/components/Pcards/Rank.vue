<template>
  <div>
    <Goback fanhuifalg="true" navtitle="排行"></Goback>
    <div class="rank">
        <p>小肥猪</p>
        <p>2017-09-03</p>
    </div>
    <div class="elonline"></div>
    <ul>
      <li>
        <div class="weui-cell">
            <p>1</p>
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                <img src="../../images/toux.png" style="width: 50px;display: block">
            </div>
            <div class="weui-cell__bd">
                <p>小肥猪</p>
            </div>
            <div class="weui-cell__ft">
                <p>猪只数量：20</p>
            </div>
        </div>
        <div class="elonline"></div>
      </li>
      <li>
        <div class="weui-cell">
            <p>2</p>
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                <img src="../../images/toux.png" style="width: 50px;display: block">
            </div>
            <div class="weui-cell__bd">
                <p>小肥猪</p>
            </div>
            <div class="weui-cell__ft">
                <p>猪只数量：12</p>
            </div>
        </div>
        <div class="elonline"></div>
      </li>
      <li>
        <div class="weui-cell">
            <p>3</p>
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                <img src="../../images/toux.png" style="width: 50px;display: block">
            </div>
            <div class="weui-cell__bd">
                <p>小肥猪</p>
            </div>
            <div class="weui-cell__ft">
                <p>猪只数量：6</p>
            </div>
        </div>
        <div class="elonline"></div>
      </li>
    </ul>
  </div>
</template>
<script>
/**@author gumiao
* @description 排行
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
    float left
    width 100%
  .rank
    display flex
    flex-direction row
    justify-content space-between
    padding _c(30) 
  .weui-cell__ft
    color black
  .weui-cell
    padding _c(30)
    .weui-cell__hd
      width _c(100) 
      height _c(100)
      border-radius 50%
      border _c(5) solid white
      margin-left _c(40)
      img
        width 100% !important
        border-radius 50%
        overflow hidden
    .weui-cell__bd
      margin-left _c(45)
</style>