<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="设置" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--设置列表 start-->
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Set/Details'}">
     <div class="li_1">关于人人养猪</div>
     <div class="li_2_img">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
    <div class="pig_li weui-flex elonline">
     <div class="li_1">检查更新</div>
     <div class="li_2">当前版本 v5.2.1-b211</div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Set/Feedback'}">
     <div class="li_1">意见反馈</div>
     <div class="li_2_img">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
    <!--设置列表 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 设置
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
  .li_2_img
    margin-right _c(35)
    width _c(16)
    height _c(28)
    margin-top _c(2)
    img 
      width 100%
      height 100%
</style>