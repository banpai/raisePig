<template>
  <div class="confirmwrapper">
    <div class="confirm">
      <p>{{confdata[0].cfmte}}</p>
      <div class="message" v-if="confdata[1].msgsty == 1?true:false">
        <div class="left">
          <img :src="confdata[2].msglt" alt="">
        </div>
        <div class="center" >
          <p>{{confdata[3].msgcrp1}}</p>
          <p>{{confdata[4].msgcrp2}}</p>
        </div>
        <div class="right">
           {{confdata[5].msgrt}}
        </div>
      </div>
      <div class="message" v-if="confdata[1].msgsty == 2?true:false">
        <p></p>
      </div>
      <div class="select" v-if="confdata[6].confirmstyle == 1?true:false">
        <div class="quxiao" v-tap={methods:callback}>{{confdata[7].quxiao?confdata[7].quxiao:'取消'}}</div>
        <div class="queren" v-tap="{methods:elqueren,dialogflag:'dialog'}">确认</div>
      </div>
      <div class="select" v-if="confdata[6].confirmstyle == 2?true:false">
        <div class="queren center" v-tap="{methods:elqueren,dialogflag:'dialog'}">确认</div>
      </div>
    </div>
  </div>
</template>
<script>
  /**@author gumiao
   * @description 确认消息框
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

      }
    },
    props: ['dialog','confdata','callback'],
    components: {
      Goback,
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      // 传值给父组件
      elqueren(e){
        this.$emit("fhdialog",!e.dialogflag)
      },
    },
    activated () {
      
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~@/common/stylus/variable';
  p
    margin 0
    padding 0
  .confirmwrapper
    position fixed
    left 0
    right 0
    background rgba(0,0,0,0.6)
    width 100%
    height 100%
    z-index 10
    .confirm
      position relative
      margin 0 auto
      margin-top 67%
      width _c(700)
      height _c(400)
      background  white
      padding _c(31) _c(50)
      &>p
        width 100%
        height _c(27)
        text-align center
        font-size $font-size-15
      .message
        padding _c(45) 0
        margin-top _c(27)
        width _c(600)
        height _c(200)
        border 1px solid $color-bg
        .left
          width _c(150)
          height _c(108)
          float left
          img
            width 100%
        .center
          float left
          margin-left _c(15)
          p:nth-child(2)
            margin-top _c(12)
        .right
          margin-top _c(30)
          float left
          color $color-red
          font-size $font-size-16
          margin-left _c(25)
      .select
        padding 0 _c(26)
        display flex
        margin-top _c(21)
        flex-direction row
        justify-content space-between
        div
          width _c(200)
          height _c(65)
          border-radius 5px
          color $color-bottom-cg
          text-align center
          line-height _c(65)
          border 1px solid $color-bottom-cg
        .center
          margin-left 30%
</style>