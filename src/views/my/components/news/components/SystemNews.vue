<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="系统消息" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--消息列表 start-->
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Set/Details'}">
      <div class="li_1">消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息</div>
      <div class="li_2">
        08-19 08:00
      </div>
    </div>
     <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Set/Details'}">
      <div class="li_1">消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息</div>
      <div class="li_2">
        08-19 08:00
      </div>
    </div>
    <!--消息列表 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 我的消息
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
      skip() {
        this.err_msg('测试出错哈哈哈')
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
    margin-right _c(30)
    width 150px
    font-size $font-size-12
    margin-top _c(40)
</style>