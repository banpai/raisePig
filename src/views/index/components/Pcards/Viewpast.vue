<template>
  <div>
    <Goback fanhuifalg="true" navtitle="往期详情"></Goback>
    <ul>
      <router-link to="/index/Pcardsdeta" tag="li">
        <div class="thepast">
           <div class="tptit">新手专享第100期</div>
           <div class="tpcontent">
              <div class="tptleft">
                <p>1000</p>
                <p>剩余数量</p>
              </div>
              <div class="tptcenter">
                <p>20%</p>
                <p>收益率</p>
              </div>
              <div class="tptright">
                <p>1000</p>
                <p>已卖数量</p>
              </div>
           </div>
           <img src="../../images/jieshu.png" alt="">
        </div>
        <div class="xline"></div>
      </router-link>
      <router-link to="/index/Pcardsdeta" tag="li">
        <div class="thepast">
           <div class="tptit">大肥猪第100期</div>
           <div class="tpcontent">
              <div class="tptleft">
                <p>1000</p>
                <p>剩余数量</p>
              </div>
              <div class="tptcenter">
                <p>20%</p>
                <p>收益率</p>
              </div>
              <div class="tptright">
                <p>1000</p>
                <p>已卖数量</p>
              </div>
           </div>
           <img src="../../images/jieshu.png" alt="">
        </div>
        <div class="xline"></div>
      </router-link>
      <router-link to="/index/Pcardsdeta" tag="li">
        <div class="thepast">
           <div class="tptit">小肥猪第100期</div>
           <div class="tpcontent">
              <div class="tptleft">
                <p>1000</p>
                <p>剩余数量</p>
              </div>
              <div class="tptcenter">
                <p>20%</p>
                <p>收益率</p>
              </div>
              <div class="tptright">
                <p>1000</p>
                <p>已卖数量</p>
              </div>
           </div>
           <img src="../../images/jieshu.png" alt="">
        </div>
        <div class="xline"></div>
      </router-link>
    </ul>
    <elFooter></elFooter>
  </div>
</template>
<script>
/**@author gumiao
* @description 往期详情
* @event 
*/
import Vue from 'vue'
import Axios from 'axios'
import router from '@/router'
import Goback from '@/components/topnav/Gobacknav'
import elFooter from '@/components/indexpattern/Footer'
import {mapMutations} from 'vuex'
export default {
  name: '',
data() {
    return {

    }
},
components:{
    Goback,
    elFooter
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
  ul
    min-height _c(900)
    float left
  li
    float left
    width 100%
    list-style-type none 
  .footer
    float left
    width 100%
    text-align center
  .xline
    height _c(20)
    background #cdcdcd

  .thepast
    padding _c(22) _c(38) 
    position relative
    left 0
    top 0
    .tptit
      margin-bottom _c(42)
    .tpcontent
      display flex
      flex-direction row
      justify-content space-between
      p
        text-align center
      div
        p:first-child
          font-size $font-size-24 
          margin-bottom _c(20)
          color $color-red
    img
      position absolute
      right 0
      top 0
      width _c(135)
      height _c(135)
</style>