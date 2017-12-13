<template>
  <div>
    <Goback fanhuifalg="true" navtitle="活动详情"></Goback>
    <div class="tuwen" v-html="tuwen"></div>
  </div>
</template>
<script>
  /**@author gumiao
   * @description 活动详情
   * @event 
   */
  import Vue from 'vue'
  import Axios from 'axios'
  import router from '@/router'
  import Goback from '@/components/topnav/Gobacknav'
  import {getPostData} from '@/api/api.js'
  import {
    mapMutations
  } from 'vuex'
  export default {
    name: '',
    data() {
      return {
        tuwen:''
      }
    },
    components: {
      Goback,
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      init(){
        getPostData('tuWen',{}).then(r=>{
          this.tuwen = r.data 
        })
      }
    },
    mounted () {
      this.init();
    }
  }
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';

</style>