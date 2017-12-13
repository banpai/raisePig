<template>
  <div>
    <Goback navtitle="总资产"></Goback>
    <div class="invite">
      <!-- 邀请码和数据区域 s-->
      <div class="invitetop">
        <p>123456789</p>
      </div>
      <div class="invitebot">
        <router-link to="/Myassets/Yestearnings" class="invitebotlt">
          <p>昨日收益（元）</p>
          <p>100</p>
        </router-link>
        <div class="yonline"></div>
        <router-link to="/Myassets/Cumincome" class="invitebotrt">
          <p>累计收益（元）</p>
          <p>100</p>
        </router-link>
      </div>
      <!-- 邀请码和数据区域 e-->
    </div>
    <!--卖猪记录  s-->
    <div class="record mui-table-view-cell">
      <p>养猪资产</p>
      <router-link to="/Myassets/sellrecord" class="mui-navigate-right">卖猪记录</router-link>
    </div>
    <div class="elonline"></div>
    <!--卖猪记录  e-->
    <!--我要卖猪  s-->
    <div class="sell">
      <p>100元</p>
      <router-link to="/Myassets/Tosell">我要卖猪</router-link>
    </div>
    <!--我要卖猪  e-->
    <!--折线图  s-->
    <div id="main"></div>
    <div class="elonline"></div>
    <!--折线图  e-->
    <!--我的钱包  s-->
    <div class="record mybill mui-table-view-cell">
      <p>我的钱包</p>
      <router-link to="my/Balance/bill" class="mui-navigate-right">账单明细</router-link>
    </div>
    <div class="elonline"></div>
    <!--我的钱包  e-->
    <!--充值提现  s-->
    <div class="record wallet">
      <p>100元</p>
      <div class="wetwrapper">
        <router-link to="">钱包充值</router-link>
        <router-link to="/my/Balance/Withdrawals">钱包提现</router-link>
      </div>
    </div>
    <!--充值提现  e-->
    <div class="elonline"></div>
    <!--底部footer s-->
    <elFooter></elFooter>
    <!--底部footer e-->
    <Tab></Tab>
  </div>
</template>
<script>
  /**@author gumiao
   * @description 总资产
   * @event 
   */
  import Vue from 'vue'
  import Axios from 'axios'
  import router from '@/router'
  import Goback from '@/components/topnav/Gobacknav'
  import Tab from '@/components/tab/tab'
  import echarts from 'echarts'
  import elFooter from '@/components/indexpattern/Footer'
  import {
    mapMutations
  } from 'vuex'
  export default {
    name: '',
    data() {
      return {}
    },
    components: {
      Goback,
      Tab,
      elFooter
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      // echarts折线图
      drawLine(id) {
        this.charts = echarts.init(document.getElementById(id));
        this.charts.setOption({
          title: {
            x: 'center',
            text: '七日收益曲线（元）',
            textStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              color: '#333' // 主标题文字颜色 
            },
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              x:255,
              data:['金额']
          },
          xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          },
          yAxis: {
            name: '收益（元）',
          },
          series: [{
            name:'金额',
            type: 'line',
            symbolSize: 10,
            data: [10, 10, 20, 10]
          }],
          grid : {
              top : 40,   
              bottom: 40  
          }
        })
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.drawLine('main')
      })
    }
  }
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
  p
    margin 0
    padding 0
    text-align center
    font-size $font-size-15
  .yonline
    width _c(2)
    height _c(70)
    margin-top _c(20)
    background white
  .invite
    display flex
    flex-direction row
    justify-content center
    flex-wrap wrap
    background $color-bottom-cg
    color white
    width 100%
    height _c(255)
    .invitetop
      width 100%
      padding-top _c(40)
      padding-bottom _c(10)
      p:nth-child(1)
        font-size _c(48)
    .invitebot
      width 100%
      display flex
      flex-wrap nowrap
      a
        color white
      .invitebotlt,.invitebotrt
        width 50%
        p:nth-child(1)
          margin-bottom _c(10)
        p:nth-child(2)
          font-size $font-size-18  
  .record,.sell
    padding _c(20) _c(30)
    display flex
    flex-direction row
    justify-content space-between
    a
      width 33%
      font-size $font-size-15 
      color black
      span
        margin-left _c(10)
  .sell
    p
      font-size $font-size-18
      line-height _c(61)
      vertical-align middle
    a
      padding _c(10) _c(8)
      width auto
      background $color-bottom-cg
      color white
      border-radius 5px
  #main
    width 100%
    height _c(700)
  .mybill
    a,p
      color $color-bottom-cg
  .wallet
    padding _c(15) _c(30)
    line-height _c(60)
    vertical-align middle
    .wetwrapper a
      padding _c(15)
      border 1px solid $color-bottom-cg
      text-align center
      color $color-bottom-cg
      border-radius 5px
</style>