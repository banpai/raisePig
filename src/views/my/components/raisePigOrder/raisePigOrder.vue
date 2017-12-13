<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="养猪订单" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--顶部nav start-->
    <div class="weui-navbar">
      <div v-tap="{methods: navTap, id: 0}" v-bind:class="id==0?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        全部
      </div>
      <div v-tap="{methods: navTap, id: 1}" v-bind:class="id==1?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        已完成
      </div>
      <div v-tap="{methods: navTap, id: 2}" v-bind:class="id==2?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        未完成
      </div>
      <div v-tap="{methods: navTap, id: 3}" v-bind:class="id==3?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        待支付
      </div>
    </div>
    <div style="height: 47px;"></div>
    <!--顶部nav end-->
    <!--订单列表 start-->
    <div class="order_li" v-for="(item, index) in list" v-show="id == 0?true:(id - item.state - 1 == 0?true:false)">
      <div class="o_t t_header">{{ item.content }}</div>
      <div class="o_t t_b">订单编号：{{ item.order }}</div>
      <div class="o_t t_b">
        <div class="o_t_l">数量</div>
        <div class="o_t_r">{{ item.count }}</div>
      </div>
      <div class="o_t t_header">
        <div class="o_t_l">总金额</div>
        <div class="o_t_r">{{ item.total }}</div>
      </div>
      <div class="o_t t_b">
        <div class="o_t_l">优惠券抵扣</div>
        <div class="o_t_r">-{{ item.disCount }}</div>
      </div>
      <div class="o_t">
        <div class="o_t_l">实付金额：{{ item.realPay }}</div>
        <div class="o_t_r" v-show="item.state == 0">已完成</div>
        <div class="o_t_r" v-show="item.state == 1">未完成</div>
        <div class="o_t_r" v-show="item.state == 2">待付款</div>
      </div>
    </div>
    <!--订单列表 end-->
    <div style="height: 30px;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 养猪订单
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
      skip() {
        this.err_msg('测试出错哈哈哈')
      },
      // 点击nav状态
      navTap(e){
        this.id = e.id
      },
      init(){
        getPostData('getPigOrderList', {}).then(r => {
          this.list = r.list
          this.id = 0
        })
      }
    },
    created(){
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
.order_li
  border 1px solid $border-color
  margin-left _c(30)
  margin-right _c(30)
  margin-top _c(20)
  .o_t
    font-size $font-size-15
    margin-left _c(30)
    margin-right _c(30)
    padding-top _c(30)
    padding-bottom _c(30)
    display flex
    justify-content space-between
    .o_t_r
      margin-right _c(35)
  .t_header
    padding-bottom 0
  .t_b
    border-bottom 1px solid $border-color
</style>