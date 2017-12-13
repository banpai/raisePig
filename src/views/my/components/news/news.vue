<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="我的消息" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--消息列表 start-->
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/News/SystemNews'}">
      <div class="li_0"><img src="./images/1.png"></div>
      <div class="li_1 weui-flex__item">系统消息</div>
      <div class="li_2_img">
        <img src="./../../../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/News/ActivityNews'}">
      <div class="li_0"><img src="./images/2.png"></div>
      <div class="li_1 weui-flex__item">活动消息</div>
      <div class="li_2_img">
        <img src="./../../../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/News/ShopNews'}">
      <div class="li_0"><img src="./images/3.png"></div>
      <div class="li_1 weui-flex__item">商城信息消息</div>
      <div class="li_2_img">
        <img src="./../../../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/News/CouponNews'}">
      <div class="li_0"><img src="./images/4.png"></div>
      <div class="li_1 weui-flex__item">我的优惠券</div>
      <div class="li_2_img">
        <img src="./../../../../common/assets/go.png">
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
      skip(e) {
        this.$router.push(e.url)
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
</style>