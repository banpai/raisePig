<template>
  <div>
    <Goback fanhuifalg='true' navtitle="修改头像"></Goback>
    <div class="icon_img">
      <img src="./../../../../../common/assets/head.jpg">
    </div>
    <div class="btn">修改头像</div>
    <div class="btn hui" v-tap="{methods:back}">取消</div>
  </div>
</template>

<script>
  /**@author 半拍
   * @description 修改头像
   * @event
   */
  import Vue from 'vue'
  import Axios from 'axios'
  import Goback from '@/components/topnav/Gobacknav'
  export default {
    name: 'hello',
    components: {
      Goback,
    },
    methods: {
      // 眼睛显示数据
      _isShow(e) {
        this[e.name] = !this[e.name];
      },
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="stylus">
@import "~@/common/stylus/variable"
.icon_img
  width _c(500)
  height _c(500)
  margin 0 auto
  margin-top _c(163)
  margin-bottom _c(30)
  img 
    width 100%
    height 100% 
</style>
