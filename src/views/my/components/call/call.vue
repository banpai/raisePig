<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="在线客服" :callback="edit" fanhuifalg="true" text="编辑"></Goback>
    <!--头部 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 在线客服
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
      },
      // 点击消息提醒
      edit() {
        alert('编辑')
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
</style>