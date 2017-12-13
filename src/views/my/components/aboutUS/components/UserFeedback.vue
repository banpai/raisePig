<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="用户反馈" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <div class="tuwen" v-html="tuWen"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 用户反馈
   * @event 
   */
  import Goback from '@/components/topnav/Gobacknav'
  import {
    getPostData
  } from '@/api/api.js'
  import {
    mapMutations
  } from 'vuex'
  export default {
    components: {
      Goback
    },
    data() {
      return {
        tuWen: ''
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
    },
    mounted() {
      getPostData('tuWen', {}).then(r => {
        this.tuWen = r.data;
        // console.log(r.data)
      })
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
</style>