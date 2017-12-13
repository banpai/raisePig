<template>
  <div>
    <Goback fanhuifalg="true" navtitle="新手专享第100期" text="排行" :callback="Ranking"></Goback>
    <!-- 认养详情 s-->
    <div class="title">
      <p>限购一只</p>
      <p>预期年养殖回报率</p>
    </div>
    <p class="yue">约10%</p>
    <div class="price">
      <div class="pricelt">
        <p>猪只单价</p>
        <p>200</p>
      </div>
      <div class="pricert">
        <p>猪只数量</p>
        <p>500</p>
      </div>
    </div>
    <p>养满6个月得10斤猪肉</p>
    <img src="../../../../common/assets/ad-1.png" alt="" class="detaimg">
    <div class="detalist">
      <p>牧场介绍</p>
      <router-link to="/my/Pig/pigDetails/Farm">查看</router-link>
    </div>
    <div class="elonline"></div>
    <div class="detalist wrap">
      <p>收益方式</p>
      <p>每日发放养殖收益</p>
    </div>
    <div class="elonline"></div>
    <div class="detalist">
      <p>收益起始日</p>
      <p>2017年11月11日18:00</p>
    </div>
    <div class="elonline"></div>
    <div class="detalist">
      <p>收益计算器</p>
      <p v-tap="{methods: income}">查看</p>
    </div>
    <div class="elonline"></div>
    <div class="detalist">
      <p>截止时间</p>
      <p>2018年05月01日18:00</p>
    </div>
    <div class="elonline"></div>
    <div class="detalist wrap">
      <p>收益说明</p>
      <p>依托宜信多年风控经验，专业的风控系统，保障交易真实、安全、透明；</p>
    </div>
    <div class="elonline"></div>
    <!-- 认养详情 e-->
    <Evalstar name="安全等级参考" inputdata="2" disabledInputs="true" className="star1"></Evalstar>
    <!-- 计算器 s-->
    <div class="calc">
      <div class="count">
        <p class="reduce" v-tap="{methods:reduce}">-</p>
        <p>{{counter}}</p>
        <p class="plus" v-tap="{methods:plus}">+</p>
      </div>
      <div class="purchase">
        <router-link to="/index/Adoporders">立即购买</router-link>
      </div>
    </div>
    <Incomecal :dialogFlag="dialogFlag" @Inconmflag="Inconmflag" v-show="dialogFlag"></Incomecal>
    <!-- 计算器 e-->
  </div>
</template>
<script>
  /**@author gumiao
   * @description 养猪卡详情
   * @event 
   */
  import Vue from 'vue'
  import Axios from 'axios'
  import router from '@/router'
  import Goback from '@/components/topnav/Gobacknav'
  import Evalstar from '@/components/indexpattern/Evalstar'
  import Incomecal from '@/components/indexpattern/Incomecal'
  import {
    mapMutations
  } from 'vuex'
  export default {
    name: '',
    data() {
      return {
        counter: '1', //猪只数
        totalcounter: '5', //库存量
        dialogFlag: false, //收益计算器显示状态 false:未显示 true：显示
      }
    },
    components: {
      Goback,
      Evalstar,
      Incomecal
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      // 减号运算
      reduce(){
        if(this.counter > 1){
            this.counter = parseInt(this.counter) - 1;
        }
      },
      // 加号运算
      plus(){
        if(this.counter < this.totalcounter){
            this.counter = parseInt(this.counter) + 1;
        }
      },
      // 收益计算器
      income(){
        this.dialogFlag = !this.dialogFlag
      },
      // 接收计算器回调的值
      Inconmflag(data){
        this.dialogFlag =data[0].value;
        this.counter = data[1].value
      },
      Ranking() {
        this.$router.push('/index/Rank')
      }
    },
    activated () {
      // 初始化
      this.dialogFlag = false
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
  a
    color black
    font-size $font-size-15
  .title
    padding _c(10)
    width 100%
    height _c(80)
    line-height _c(60)
    vertical-align middle
    margin-bottom _c(15)
    p:nth-child(1)
      width _c(140)
      height _c(60)
      line-height _c(60)
      vertical-align middle
      color white
      background $color-red
      display block
      float left
    p:nth-child(2)
      width 80%
  .yue
    width 100%
    font-size $font-size-24
    color $color-red
  .price
    display flex
    flex-direction row
    justify-content space-between
    margin-bottom _c(20)
    div
      width 50%
      p
        width 100%
      p:nth-child(1)
        margin-bottom _c(30)
  .detaimg
    margin-top _c(20)
    width 100%
  .detalist
    padding _c(30)
    display flex
    flex-direction row
    justify-content space-between
  .wrap
    flex-direction column
    p
      text-align left 
    p:nth-child(2)
      margin-top _c(20)
      color $color-bg
  .calc
    width 100%
    height _c(90)
    display block
    margin-top _c(40)
    border 1px solid $color-bg
    .count
      display flex
      flex-direction row
      justify-content space-between
      float left
      width 60%
      height 100%
      p:nth-child(1),p:nth-child(3)
        font-size _c(50)
      P
        width 20%
        height 100%
        line-height _c(80)
        vertical-align middle
        text-align center
        font-size $font-size-24
      .reduce
        border-right 1px solid $color-bg
      .plus
        border-left 1px solid $color-bg
    .purchase
      float left 
      width 40%
      height 100%
      line-height _c(80)
      border-left 1px solid $color-bg
      text-align center
</style>