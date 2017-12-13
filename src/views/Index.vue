<template>
  <div>
    <Goback navtitle="人人养猪" :navimgsrc="navimgsrc" :callback="callback"></Goback>
    <indexadd v-show="addflag"></indexadd>
    <!--人数 s-->
    <div class="people">
      <div class="peopleb left">
        <p>800头</p>
        <p class="fontthree">总领养猪头数</p>
      </div>
      <div class="o-line"></div>
      <div class="peopleb right">
        <p>145,692人</p>
        <p class="fontthree">实名注册人数</p>
      </div>
    </div>
    <div class="elonline"></div>
    <!--人数 e-->
    <!--公告 s-->
    <div class="notice-board">
      <div class="ntimg">
        <img src="../common/assets/notice.png" alt="">
        <p>公告</p>
      </div>
      <div class="nttitle">
        <router-link to="/index/Notice"><p>9月20日软件更新</p></router-link>
      </div>
      <div class="ntmore">
        <router-link class="more" to="/index/Notice">
          <p>更多</p>
          <img src="../common/assets/more.png" alt="">
        </router-link>
      </div>
    </div>
    <!--公告 e-->
    <!--banner s-->
    <div class="mui-slider banner">
      <div class="mui-slider-group mui-slider-loop">
        <div class="mui-slider-item mui-slider-item-duplicate">
          <router-link to="/index/Activity"><img src="../common/assets/ad-1.png" /></router-link>
        </div>
        <div class="mui-slider-item">
          <router-link to="/index/Activity"><img src="../common/assets/ad-1.png" /></router-link>
        </div>
        <div class="mui-slider-item">
          <router-link to="/index/Activity"><img src="../common/assets/ad-1.png" /></router-link>
        </div>
        <div class="mui-slider-item mui-slider-item-duplicate">
          <router-link to="/index/Activity"><img src="../common/assets/ad-1.png" /></router-link>
        </div>
      </div>
    </div>
    <!--banner e-->
    <div class="linee5"></div>
    <!--首页多页面区块 s-->
    <elPattern></elPattern>
    <!--首页多页面区块 e-->
    <div class="linee5"></div>
    <!--广告 s-->
    <router-link to="/index/Activity" class="indexad">
      <img src="../common/assets/ad-2.png" alt="">
    </router-link>
    <!--广告 e-->
    <div class="linee5"></div>
    <!--养猪卡展示 s-->
    <div class="introduction">
      <div class="intrtop">
        <p>养猪赚钱</p>
        <router-link to="/index/Viewpast">查看往期</router-link>
      </div>
      <Pcard></Pcard>
    </div>
    <!--养猪卡展示 e-->
    <div class="elonline"></div>
    <!--底部footer s-->
    <elFooter></elFooter>
    <!--底部footer e-->
    <div class="elonline"></div>
    <Tab></Tab>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Axios from 'axios'
  import router from '@/router'
  import Goback from '@/components/topnav/Gobacknav'
  import Tab from '@/components/tab/tab'
  import elPattern from '@/components/indexpattern/Pattern'
  import elFooter from '@/components/indexpattern/Footer'
  import Pcard from '@/components/indexpattern/Pcard'
  import Indexadd from '@/components/dialog/Indexadd'
  import {
    mapMutations
  } from 'vuex'

  export default {
    name: '',
    data() {
      return {
        navimgsrc: require('../common/assets/add.png'),
        addflag:false,  //点击导航栏右边 true：显示 false:隐藏
      }
    },
    components: {
      Goback,
      elPattern,
      elFooter,
      Tab,
      Pcard,
      Indexadd
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      //  点击导航右边加号
      callback(e) {
        this.addflag = !this.addflag
      },
    },
    mounted(){
      // banner轮播 
      var gallery = mui('.mui-slider');
      gallery.slider({
        interval: 5000//自动轮播周期，若为0则不自动播放，默认为0；
      });
    },
    activated () {
      // 初始化导航右边加号弹出栏状态
      this.addflag = false;
      // 点击空白部分导航右边加号弹出栏消失
      document.addEventListener('tap', (e) => {
        var elclass = e.target.parentElement.className;
        if(elclass != 'topblock'&& this.addflag == true){
          this.addflag = !this.addflag; 
        }
      })
    },
  }
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
p
 margin 0 
 padding 0
 font-size $font-size-15
a
 color #000000
 font-size $font-size-14 

.people
  width 100%
  // height 
  display flex
  flex-direction row
  justify-content space-around
  overflow hidden
  .o-line
    width 1px
    height cgrem(55)
    background $border-color
  .peopleb
    width 50%
    padding-top cgrem(4) 
    text-align center
    .left
      border 1px solid $border-color
    p:first-child
      color:$color-red
    p
      font-size $font-size-18
    // .fontthree
    //   padding-bottom _c(15)
    //   // font-size $font-size-15 !important

.notice-board
    padding cgrem(8.5) cgrem(15)
    display flex
    flex-direction row
    justify-content space-between
    p
     font-size $font-size-15
    .ntimg
       height cgrem(16.5)
       img
        width cgrem(18)
        height cgrem(16.5)
        margin-top cgrem(2)
        float left
       p
        float left
        margin-left cgrem(8)
    .nttitle
      p
        width _c(300)
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    .ntmore 
        p,img
         float left
        img
         margin-top cgrem(4)
         margin-left cgrem(3)
         width cgrem(12)
         height cgrem(12)

.banner
    width 100%
    height cgrem(175)

.linee5
    height cgrem(10)
    background #e5e5e5

.indexad
    width 100%
    height cgrem(125)
    img
        width 100%
        height 100%

.introduction
    padding _c(25) _c(35)
    // height _c(672)
    // overflow hidden
    .intrtop
        display flex
        flex-direction row
        justify-content space-between
</style>
