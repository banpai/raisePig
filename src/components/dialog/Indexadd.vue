<template>
  <div class="indexaddwra">
    <div class="indexadd">
      <router-link to="/my/News">
        <img src="../../common/assets/xx.png" alt="">
        <p>消息</p>
      </router-link>
      <router-link to="">
        <img src="../../common/assets/ewmzf.png" alt="">
        <p>支付二维码</p>
      </router-link>
      <router-link to="">
        <img src="../../common/assets/ewmxz.png" alt="">
        <p>下载二维码</p>
      </router-link>
      <router-link to="">
        <img src="../../common/assets/sys.png" alt="">
        <p>扫一扫</p>
      </router-link>
    </div>
  </div>
</template>
<script>
  /**@author gumiao
   * @description 首页加号按钮
   * @event 
   */
  import Vue from 'vue'
  import Axios from 'axios'
  import router from '@/router'
  import {
    mapMutations
  } from 'vuex'
  export default {
    name: '',
    data() {
      return {}
    },
    components: {},
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
.indexaddwra
  position relative
  width 100%
  .indexadd
    position fixed
    right _c(20)
    width _c(300)
    background $color-bottom-cg
    color white
    z-index 99
    animation: indexadd 0.3s linear;
    transform-origin:100% 0;
    a
      display flex
      flex-direction row
      justify-content flex-start
      border-top 1px solid #1c7d81
      padding _c(15) _c(18)
      color white
      img
        width _c(48)
        height _c(48)
        margin-right _c(30)
      p
        width _c(300)
        line-height _c(48)
        vertical-align middle

@keyframes indexadd {
  0% { transform: scale(0); }
  50% { transform: scale(0.5);}
  100% { transform: scale(1);}
}

</style>