<template>
  <div>
    <Goback fanhuifalg="true" navtitle="卖猪详情"></Goback>
    <!-- 卖猪详情的列表 s-->
    <ul>
      <li>
        <div class="p-selllist">
            <div class="p-sltcontent">
              <img src="../images/pigsell.jpg" alt="">
              <div class="p-sltcenter">
                <p>小肥猪第100期</p>
                <p>售卖只数：10</p>
                <p>固定资产：5000</p>
              </div>
              <div class="shouyi">
                <p>2017-09-09</p>
                <p>总收益：800</p>
              </div>
            </div>
            <div class="totalmoney">
              <p>总金额：</p>
              <p>5800</p>
            </div>
        </div>
        <div class="elonline"></div>
      </li>
    </ul>
    <!-- 卖猪详情的列表 e-->
  </div>
</template>
<script>
/**@author gumiao
* @description 卖猪详情
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
    text-align center
    font-size $font-size-15
  li
    width 100%
    float left
    list-style-type none
  ul
    min-height _c(600)
    .p-selllist
      width 100%
      padding _c(33)
      .p-sltcontent
        display flex
        flex-direction row
        justify-content space-between
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
        .shouyi
          display flex
          flex-direction column
          justify-content space-between
          p
            width _c(200)
            height _c(60)
            text-align center
            line-height _c(60)
          p:nth-child(1)
            margin-top _c(-10)
          p:nth-child(2)
            text-align bottom 
    .totalmoney
      display flex
      flex-direction row
      justify-content flex-end 
      margin-top _c(45)
      p
        text-align right
      p:nth-child(2)
        color $color-red
        font-size $font-size-18 
        margin-right _c(50)
</style>