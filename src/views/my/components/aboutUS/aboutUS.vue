<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="关于我们" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--顶部广告 start-->
    <img src="./../../../../common/assets/ad-1.png" class="a_g">
    <!--顶部广告 end-->
    <!--信息列表 start-->
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/AboutUS/ProjectIntroduction'}">
     <div class="li_1">项目介绍</div>
     <div class="li_2_img">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Pig/pigDetails/Farm'}">
     <div class="li_1">合作养殖场</div>
     <div class="li_2_img">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/AboutUS/UnderstandUs'}">
     <div class="li_1">了解我们</div>
     <div class="li_2_img">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/AboutUS/UserFeedback'}">
     <div class="li_1">用户反馈</div>
     <div class="li_2_img">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
    <div class="pig_li weui-flex elonline">
     <div class="li_1">服务热线</div>
     <div class="li_2">8080880880</div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/AboutUS/Terms'}">
     <div class="li_1">服务条款</div>
     <div class="li_2_img">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
    <!--信息列表 end-->
    <!--底部图文 start-->
    <div class="tip_footer">
      <elFooter></elFooter>
    </div>
    <!--底部图文 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 关于我们
   * @event 
   */
  import elFooter from '@/components/indexpattern/Footer'
  import Goback from '@/components/topnav/Gobacknav'
  import {
    mapMutations
  } from 'vuex'
  export default {
    components: {
      Goback,
      elFooter
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
.a_g
  display block
  width 100%
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