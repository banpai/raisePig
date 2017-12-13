<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="吃肉订单" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--顶部nav start-->
    <div class="weui-navbar">
      <div v-tap="{methods: navTap, id: 0}" v-bind:class="id==0?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        全部
      </div>
      <div v-tap="{methods: navTap, id: 1}" v-bind:class="id==1?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        待支付
      </div>
      <div v-tap="{methods: navTap, id: 2}" v-bind:class="id==2?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        待发货
      </div>
      <div v-tap="{methods: navTap, id: 3}" v-bind:class="id==3?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        待收货
      </div>
    </div>
    <div style="height: 47px;"></div>
    <!--顶部nav end-->
    <!--订单列表 start-->
    <div class="order">
      <div class="elonline"></div>
      <div class="order_li elonline">
        <div class="order_state">
          <div class="o_s_pay">已完成</div>
          <div class="o_s_time">11-08 13:00</div>
        </div>
        <div class="weui-flex" v-tap="{methods: skip, url: '/my/PorkOrder/OrderDetails'}">
          <div class="o_c_img">
            <img src="./images/pig.jpg">
          </div>
          <div class="weui-flex__item order_content">
            <div class="placeholder">
              <div class="o_c_up">如果你再找找如果你再找找如果你再找找如果你再</div>
              <div class="o_c_dowm">
                <span class="o_c_dowm_1">共1件商品</span>
                <span class="o_c_dowm_2">共计：<span class="o_c_dowm_3">￥800</span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="weui-flex order_b">
          <div class="order_btn o_b_1" v-tap="{methods: skip, url: '/my/PorkOrder/logistics'}">查看物流</div>
          <div class="order_btn o_b_2" v-tap="{methods: skip, url: '/my/PorkOrder/evaluate'}">评价</div>
        </div>
      </div>
      <div class="order_li elonline">
        <div class="order_state">
          <div class="o_s_pay">已完成</div>
          <div class="o_s_time">11-08 13:00</div>
        </div>
        <div class="weui-flex" v-tap="{methods: skip, url: '/my/PorkOrder/OrderDetails'}">
          <div class="o_c_img">
            <img src="./images/pig.jpg">
          </div>
          <div class="weui-flex__item order_content">
            <div class="placeholder">
              <div class="o_c_up">如果你再找找如果你再找找如果你再找找如果你再</div>
              <div class="o_c_dowm">
                <span class="o_c_dowm_1">共1件商品</span>
                <span class="o_c_dowm_2">共计：<span class="o_c_dowm_3">￥800</span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="weui-flex order_b">
          <div class="order_btn o_b_1">查看物流</div>
          <div class="order_btn o_b_2">评价</div>
        </div>
      </div>
    </div>
    <!--订单列表 end-->
    <div style="height: 30px;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 吃肉订单
   * @event 
   */
  import Goback from '@/components/topnav/Gobacknav'
  import {
    mapMutations
  } from 'vuex'
  import {
    getPostData
  } from '@/api/api.js'
  export default {
    components: {
      Goback
    },
    data() {
      return {
        id: 0,
        list: []
      }
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      skip(e) {
        // this.err_msg('测试出错哈哈哈')
        this.$router.push(e.url)
      },
      // 点击nav状态
      navTap(e) {
        this.id = e.id
      },
      init() {
        // getPostData('getPigOrderList', {}).then(r => {
        //   this.list = r.list
        //   this.id = 0
        // })
      }
    },
    created() {
      this.init()
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.weui-navbar
  top 44px
  z-index 2
  .weui-bar__item_on
    background-color: #ffffff
    color $color-bottom-cg
.order
  margin-top _c(30)
  .order_li
    
    .order_state
      display flex
      justify-content space-between
      .o_s_pay
        font-size $font-size-18
        margin-left _c(30)
        margin-top _c(30)
        margin-bottom _c(30)
        color $color-bottom-cg
      .o_s_time
        font-size $font-size-18 
        margin-right _c(40)
        margin-top _c(30)
        margin-bottom _c(30)
    .o_c_img
      margin-left _c(30)
      width _c(180)
      height _c(130) !important
      img
        width 100%
        height 100%
    .order_content
      padding-right _c(40)
      .o_c_up
        margin-left _c(15)
        font-size $font-size-14
      .o_c_dowm
        float right
        margin-top _c(25)
        font-size $font-size-14
        .o_c_dowm_1
          padding-right _c(25)
        .o_c_dowm_3
          color red
          font-size $font-size-18
    .order_b
      justify-content flex-end
      padding-bottom _c(30)
      .order_btn
        border 1px solid #000000
        width _c(150)
        text-align center
        margin-top _c(30)
        border-radius 3px
        padding-top _c(18)
        padding-bottom _c(18)
        font-size $font-size-15
        &:active
          background $color-bottom-cg
          color #ffffff
      .o_b_1
        margin-right _c(20)
      .o_b_2
        margin-right _c(40)
        color $color-bottom-cg
        border 1px solid $color-bottom-cg
</style>