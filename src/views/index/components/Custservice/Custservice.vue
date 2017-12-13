<template>
  <div>
    <Goback fanhuifalg="true" navtitle="客服服务"></Goback>
    <img src="../../images/kefw.png" alt="">
    <div class="plsend">
      <input type="text">
      <p>发送</p>
    </div>
  </div>
</template>
<script>
  /**@author gumiao
   * @description 客服服务
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
    components: {
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
p,input
  margin 0
  padding 0
img
  width 100%
  height 100%
.plsend
  position absolute
  left 0
  bottom 0
  width 100%
  height _c(98)
  display flex
  flex-direction row
  justify-content space-between
  border 1px solid $border-color
  input
    padding _c(35) 0
    padding-left _c(41)
    width 70%
    height 100%
    border none
  p
    width 30%
    height 100%
    text-align center
    line-height _c(98)
    vertical-align middle
    border-left 1px solid $border-color
</style>