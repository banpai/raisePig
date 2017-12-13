<template>
  <div>
    <Goback fanhuifalg="true" navtitle="视频展示"></Goback>
    <div class="weui-tab">
        <div class="weui-navbar">
            <div v-tap="{methods:navbar,id:0}" :class="id==0?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
                资讯视频
                <div class="elonline" v-show="id==0?true:false"></div>
            </div>
            <div v-tap="{methods:navbar,id:1}" :class="id==1?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
                猪场视频
                <div class="elonline" v-show="id==1?true:false"></div>
            </div>
        </div>
        <div class="weui-tab__panel">
            <div class="navbar1"  v-show="id == 0?true:false">
                <div class="tuwen" v-html="tuwen"></div>
                <video :src="videosrc"  width="320" height="240" controls="controls" style="margin-left:8%">
                Your browser does not support the video tag.
                </video>
            </div>
            <div class="navbar2"  v-show="id == 1?true:false">
                <div class="tuwen" v-html="tuwen"></div>
                <video :src="videosrc"  width="320" height="240" controls="controls" style="margin-left:8%">
                Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
/**@author gumiao
* @description 视频直播
* @event 
*/
import Vue from 'vue'
import Axios from 'axios'
import router from '@/router'
import Goback from '@/components/topnav/Gobacknav'
import {getPostData} from '@/api/api.js'
import {mapMutations} from 'vuex'
export default {
  name: '',
  data() {
      return {
          id: '0',   //navbar的id
          tuwen: '',
          videosrc:'',
      }
  },
  components:{
      Goback,
  },
  methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      navbar(e){
        this.id = e.id
      },
      init(){
        getPostData('video',{}).then(r=>{
          this.tuwen = r.data ,
          this.videosrc = r.src
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
  p
    padding 0
  .weui-navbar__item
    padding 0
    margin-top _c(20)
  .weui-bar__item_on
    color $color-bottom-cg
    background white
    .elonline
      width _c(180)
      margin-left _c(100)
      margin-top _c(20)
    .elonline:after
      background $color-bottom-cg
  .weui-navbar__item:after
    border none 
</style>