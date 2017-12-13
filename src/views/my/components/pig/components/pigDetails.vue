<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="猪只详情" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--顶部图片 start-->
    <div class="pd_img">

      <img src="./../../../../../common/assets/pig.jpg">

    </div>
    <!--顶部图片 end-->
    <!--猪只列表 start-->
    <div class="pig_li weui-flex elonline">
     <div class="li_1">小肥猪</div>
     <div class="li_2">2017-09-30</div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Pig/pigDetails/Farm'}">
     <div class="li_1">养殖场</div>
     <div class="li_2">查看</div>
    </div>
    <div class="pig_li weui-flex elonline">
     <div class="li_1">耳标</div>
     <div class="li_2">12345678</div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Pig/pigDetails/Insurance'}">
     <div class="li_1">猪只保险</div>
     <div class="li_2">查看</div>
    </div>
    <!--猪只列表 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 我的猪只
   * @event 
   */
  import Goback from '@/components/topnav/Gobacknav'
  import {
    mapMutations
  } from 'vuex'
  export default {
    components: {
      Goback
    },
    data() {
      return {
      }
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      skip(e) {
        this.$router.push(e.url)
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.pd_img
  width 100%
  height _c(350)
  overflow hidden
  img 
    width 100%
    height auto
.pig_li
  justify-content space-between
  margin-top _c(30)
  padding-bottom _c(30)
  font-size $font-size-16 
  color #000000
  .li_1
    margin-left _c(30)
  .li_2
    margin-right _c(35) 
</style>