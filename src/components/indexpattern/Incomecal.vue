<template>
  <div class="js_dialog" id="iosDialog2" style="opacity:1;">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
      <div class="weui-dialog__bd">
        <p>计算收益</p>
        <div class="year">
          <div>
            <p>{{shoyiRate}}%</p>
            <p>年化收益率（%）</p>
          </div>
          <div>
            <p>{{totalshouyi}}</p>
            <p>预期收益</p>
          </div>
        </div>
        <input type="text" ref="days" placeholder="投资期限（天）">
        <div class="elonline"></div>
        <p>请输出猪只总数</p>
        <div class="count">
          <p class="reduce" v-tap="{methods:reduce}">-</p>
          <p>{{counter}}</p>
          <p class="plus" v-tap="{methods:plus}">+</p>
      </div>
      </div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-tap="{methods:settleqr,Inflag:dialogFlag}">取消</a>
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-tap="{methods:settleqr,Inflag:dialogFlag}">确认</a>
      </div>
    </div>
  </div>
</template>
<script>
  /**@author gumiao
   * @description 收益计算器
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
        counter: '1', // 猪只数
        totalcounter: '5', // 库存量
        shoyiRate: '9.50',   // 年化收益率
        totalshouyi: '0.0', // 总的收益
      }
    },
    props:['dialogFlag'],
    components: {
      Goback,
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      // 给父组件传值
      settleqr(e){
        let params =[
          {value: !e.Inflag},
          {value: this.counter},
        ]  
        this.$emit("Inconmflag",params)
      },
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
      // 收益计算
      Incomecal(){
        // 总的收益 = 收益天数 * 年化收益率
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
  .elonline
    margin-bottom _c(20)
  .weui-dialog__bd
    padding-top _c(50)
  .weui-dialog__btn
    color $color-bottom-cg
  .year
    margin-top _c(40)
    display flex
    flex-direction row
    justify-content space-between
    div
      width 50%
      p
        width 100%
      p:nth-child(1)
        margin-bottom _c(30)
  input
    margin-top _c(40)
  .count
    display flex
    flex-direction row
    justify-content space-between
    width _c(352)
    height _c(80)
    border 1px solid $color-bg
    margin 0 auto
    margin-top _c(20)
    p
      font-size $font-size-18
      line-height _c(80)
    .reduce,.plus
      width _c(100)
      height 100%
      border-left none 
      border-right 1px solid $color-bg
      line-height _c(60)
      font-size _c(70)
    .plus
      border-right none 
      border-left 1px solid $color-bg
      line-height _c(75)
</style>