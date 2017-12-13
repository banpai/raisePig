<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="个人中心" :navimgsrc="navimgsrc" :callback="callback"></Goback>
    <!--头部 end-->
    <!--个人展示 start-->
    <div class="h_contaion">
      <div class="head_pic" v-tap="{methods: skip, url:'/my/InformationEdit'}">
        <img class="pic_src" src="./images/head.jpg">
      </div>
      <div class="context">
        <div class="c_name">ZERO</div>
        <div class="c_level" v-tap="{methods: skip, url:'/my/Member'}">会员等级</div>
      </div>
    </div>
    <!--个人展示 end-->
    <!--会员等级 start-->
    <div class="hy">
      <div class="hy_lfet" v-tap="{methods: skip, url:'/my/RaisePigOrder'}">
        <img class="img" src="./images/_1.png">
        <div class="hy_title">养猪订单</div>
      </div>
      <div class="hy_right" v-tap="{methods: skip, url:'/my/PorkOrder'}">
        <img class="img" src="./images/_2.png">
        <div class="hy_title">吃肉订单</div>
      </div>
    </div>
    <!--会员等级 end-->
    <div style="clear: both;" class="elonline"></div>
    <!--消息列表 start-->
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Balance'}">
      <div class="li_0"><img src="./images/1.png"></div>
      <div class="li_1 weui-flex__item">我的余额</div>
      <div class="li_txt">￥100</div>
      <div class="li_2_img">
        <img src="./../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/Myassets/Cumincome'}">
      <div class="li_0"><img src="./images/2.png"></div>
      <div class="li_1 weui-flex__item">我的收益</div>
      <div class="li_txt">￥100</div>
      <div class="li_2_img">
        <img src="./../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Coupon'}">
      <div class="li_0"><img src="./images/3.png"></div>
      <div class="li_1 weui-flex__item">我的优惠券</div>
      <div class="li_txt">2张</div>
      <div class="li_2_img">
        <img src="./../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Collection'}">
      <div class="li_0"><img src="./images/4.png"></div>
      <div class="li_1 weui-flex__item">我的收藏</div>
      <div class="li_2_img">
        <img src="./../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Contract'}">
      <div class="li_0"><img src="./images/5.png"></div>
      <div class="li_1 weui-flex__item">我的合同</div>
      <div class="li_2_img">
        <img src="./../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Pig'}">
      <div class="li_0"><img src="./images/6.png"></div>
      <div class="li_1 weui-flex__item">我的猪只</div>
      <div class="li_2_img">
        <img src="./../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/index/Recommend'}">
      <div class="li_0"><img src="./images/7.png"></div>
      <div class="li_1 weui-flex__item">邀请好友</div>
      <div class="li_2_img">
        <img src="./../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/aboutUS'}">
      <div class="li_0"><img src="./images/8.png"></div>
      <div class="li_1 weui-flex__item">关于我们</div>
      <div class="li_2_img">
        <img src="./../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/index/Custservice'}">
      <div class="li_0"><img src="./images/9.png"></div>
      <div class="li_1 weui-flex__item">在线客服</div>
      <div class="li_2_img">
        <img src="./../../common/assets/go.png">
      </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/Set'}">
      <div class="li_0"><img src="./images/10.png"></div>
      <div class="li_1 weui-flex__item">设置</div>
      <div class="li_2_img">
        <img src="./../../common/assets/go.png">
      </div>
    </div>
    <!--消息列表 end-->
    <elFooter></elFooter>
    <!--底部nav start-->
    <tab></tab>
    <!--底部nav end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 个人中心页面
   * @event 展示人人养猪的个人中心
   */
  import Tab from '@/components/tab/tab'
  import Goback from '@/components/topnav/Gobacknav'
  import elFooter from '@/components/indexpattern/Footer'
  import {
    mapMutations
  } from 'vuex'
  export default {
    components: {
      Tab,
      Goback,
      elFooter
    },
    data() {
      return {
        navimgsrc: require('./images/_3.png')
      }
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      skip(e) {
        if(e.url){
          this.$router.push(e.url)
        }
        // this.err_msg()
      },
      // 点击消息提醒
      callback() {
        this.$router.push('/my/News')
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.li_1
  margin-left _c(35) !important
.h_contaion
  background $color-bottom-cg
  border _c(1) solid $color-bottom-cg
  position relative
  .head_pic
    border _c(5) solid #ffffff
    width _c(120)
    height _c(120)
    border-radius 50%
    overflow hidden
    margin-left _c(30)
    margin-top _c(45)
    margin-bottom _c(45)
    .pic_src
      width _c(120)
      height _c(120)
  .context
    float left
    position absolute
    top _c(53)
    left _c(212)
    .c_name
      color #ffffff
      font-size _c(30)
      height _c(30)
      line-height _c(30)
    .c_level
      margin-top _c(60)
      font-size _c(30)
      height _c(30)
      line-height _c(30)
      color #6410f2
      
.hy
  clear both
  text-align center
  .hy_lfet
    width 50%
    float left
    height 100%
    border-right 1px solid #c8c7cc
    &:active
      background #eeeeee
  .img
    width cgrem(54/2)
    height cgrem(64/2)
    margin-top cgrem(15)
  .hy_title
    font-size cgrem(15)
    margin-top cgrem(5)
    margin-bottom cgrem(15)
  .hy_right
    width 50%
    float right
    height 100%
    &:active
      background #eeeeee

.mui-table-view-cell:after
  left 0px
.mui-table-view
  clear both
  .mui-navigate-right
    font-size $font-size-15
    .n_pic
      float left
      display inline-block
      width 21px
      height 21px
      margin-right 8px
    .n_right
      float right
      margin-right 30px
      color $color-bottom-cg
</style>