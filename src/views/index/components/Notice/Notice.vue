<template>
  <div>
    <Goback fanhuifalg="true" navtitle="系统公告"></Goback>
    <ul>
      <li>
        <div class="noticelist">
          <div class="nottop">
            <p>双十一迁移公告</p>
            <div class="nottopt">
              <p>2017-11-11</p>
              <p>13:54:18</p>
            </div>
          </div>
          <div class="elonline"></div>
          <div class="content">
            <p>
              修行不是为了成佛，而是为了遇见自己，做一个有佛心理有禅心，一念苦，一念乐，一念得，一念失，胡思乱想，心乱如麻，欲望太多，是我们烦恼痛苦的根源，一念放下，万般自在，没有谁能主宰你的情绪，要做自己的主人，做个智慧的主人，知足、宽厚、仁爱、快乐、无忧。
            </p>
          </div>
          <div class="xline"></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
/**@author gumiao
* @description 
* @event 
*/
import Vue from 'vue'
import Axios from 'axios'
import router from '@/router'
import Goback from '@/components/topnav/Gobacknav'
import {mapMutations} from 'vuex'
export default {
  name: '',
data() {
    return {

    }
},
components:{
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
  p
    margin 0
    padding 0
  li    
    list-style-type none 
    float left
  .xline
    height _c(20)
    background #cdcdcd
  .nottop
    padding _c(20) _c(25)
    display flex
    flex-direction row
    justify-content space-between
    .nottopt
      display flex
      flex-direction row
      justify-content space-between
      p
        margin-right _c(15)
  .content
    padding _c(20) _c(25)
</style>