<template>
  <div>
    <Goback fanhuifalg="true" navtitle="卖猪" text="卖猪记录" :callback="record"></Goback>
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
    <!-- 售卖猪的列表 s-->
    <ul>
      <li>
        <div class="p-selllist">
            <div class="p-slttop">
                <p>小肥猪第100期</p>
                <p>2017-09-09</p>
            </div>
            <div class="p-sltcontent">
              <img src="../images/pigsell.jpg" alt="">
              <div class="p-sltcenter">
                <p>猪只数：10</p>
                <p>猪只价：5000</p>
                <p>猪只收益：50</p>
              </div>
              <router-link to="/Myassets/Settlement">售卖</router-link>
            </div>
        </div>
      </li>
    </ul>
    <!-- 售卖猪的列表 e-->
  </div>
</template>
<script>
/**@author gumiao
* @description 卖猪操作页面
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
      record(){
        this.$router.push('/Myassets/Selldetails');
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
    background $border-color
  .P-num
    display flex
    flex-direction row
    justify-content space-between
    div
      width 50%
      p
        margin-top _c(35)
  ul
    min-height _c(600)
    padding 0 _c(30)
    .p-selllist
      width 100%
      border 1px solid $border-color
      padding _c(30)
      .p-slttop,.p-sltcontent
        display flex
        flex-direction row
        justify-content space-between
      .p-sltcontent
        margin-top _c(25)
        img
          width _c(170)
          height _c(170)
        .p-sltcenter
          width 35%
          p:first-child
            margin-top 0
          p
            text-align left
            margin-top _c(25) 
            font-size $font-size-12
        a
          width _c(200)
          height _c(60)
          text-align center
          line-height _c(60)
          align-self flex-end
          border 1px solid $color-btn
          color $color-btn
          border-radius 5px
</style>