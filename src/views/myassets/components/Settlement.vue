<template>
  <div>
    <Goback fanhuifalg="true" navtitle="卖猪结算"></Goback>
    <!-- 固定资产和猪只数量 s-->
    <div class="P-num">
        <div class="P-numlt">
          <p>5000</p>
          <p>固定资产</p>
        </div>
        <div class="yonline"></div>
        <div class="P-numrt">
          <p>50</p>
          <p>总猪只数</p>
        </div>
    </div>
    <div class="elonline"></div>
    <!-- 固定资产和猪只数量 e-->
    <!-- 猪的图片 s-->
    <div class="p-ad">
      <img src="../images/AD1.jpg" alt="">
      <div class="p-data">
        <p>小肥猪第100期</p>
        <p>2017-09-09</p>
      </div>
    </div>
    <!-- 猪的图片 e-->
    <!-- 卖猪详情列表 s-->
    <div class="x-linelist">
      <p>养殖场</p>
      <router-link to="">查看</router-link>
    </div>
    <div class="elonline"></div>
    <div class="x-linelist">
      <p>耳标：123456789</p>
    </div>
    <div class="elonline"></div>
    <div class="x-linelist">
      <p>猪只保险</p>
      <router-link to="">查看</router-link>
    </div>
    <div class="elonline"></div>
    <div class="x-linelist numbers">
      <p>猪只总数</p>
      <p>{{totalcounter}}</p>
    </div>
    <div class="elonline"></div>
    <div class="x-linelist">
      <p>猪只数</p>
      <div class="count">
        <p class="reduce" v-tap="{methods:reduce}">-</p>
        <p>{{counter}}</p>
        <p class="plus" v-tap="{methods:plus}">+</p>
      </div>
    </div>
    <div class="elonline"></div>
    <!-- 卖猪详情列表 e-->
    <Settle :setcounter="counter" :hjmoney="hjmoney"></Settle>
  </div>
</template>
<script>
/**@author gumiao
* @description 卖猪结算
* @event 
*/
import Vue from 'vue'
import Axios from 'axios'
import router from '@/router'
import Goback from '@/components/topnav/Gobacknav'
import Settle from '@/components/myassets/Settle'
import {mapMutations} from 'vuex'
export default {
  name: '',
data() {
    return {
      totalcounter: '5', //猪只总数
      counter: '0', //猪只数
      danjia: '900', //猪的单价
      hjmoney: '0', //总合计默认是0
    }
},
components:{
    Goback,
    Settle
},
methods: {
    ...mapMutations({
      err_msg: 'err_msg'
    }),
    // 减号运算
    reduce(){
      if(this.counter > 0){
          this.counter = parseInt(this.counter) - 1;
          this.hjmoney = parseInt(this.counter * this.danjia)
      }
    },
    // 加好运算
    plus(){
      if(this.counter < this.totalcounter){
          this.counter = parseInt(this.counter) + 1;
          this.hjmoney = parseInt(this.counter * this.danjia)
      }
    }
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
  li
    width 100%
    float left
    margin-top _c(20)
    list-style-type none
  .yonline
    width _c(2) !important
    height _c(200)
    background $color-bg
  .P-num
    display flex
    flex-direction row
    justify-content space-between
    div
      width 50%
      p
        margin-top _c(35)
  .p-ad
    width 100%
    height _c(350)
    position relative
    left 0
    top 0
    img
      width 100%
      height 100%
      position absolute
      left 0
      top 0
      z-index 1
    .p-data
      position absolute
      left 0
      bottom _c(32)
      padding 0 _c(35)
      width 100%
      z-index 99
      display flex
      flex-direction row
      justify-content space-between
      p
        color white
  .x-linelist
    width 100%
    display flex
    flex-direction row
    justify-content space-between
    padding _c(30 )
    a
      color black
      font-size $font-size-15
    .count
      display flex
      flex-direction row
      justify-content space-around
      width 25%
      p:nth-child(1),p:nth-child(3)
        font-size _c(50)
      P
        width _c(42)
        height _c(42)
        line-height _c(42)
        vertical-align middle
        text-align center
  .numbers
    p:nth-child(2)
      margin-right _c(80) 
</style>