<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="提现" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--顶部nav start-->
    <div class="weui-navbar">
      <!-- <div v-tap="{methods: navTap, id: 0}" v-bind:class="id==0?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        提现到银行卡
      </div> -->
      <div v-tap="{methods: navTap, id: 1}" v-bind:class="id==1?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        提现到支付宝
      </div>
      <div v-tap="{methods: navTap, id: 2}" v-bind:class="id==2?'weui-navbar__item weui-bar__item_on':'weui-navbar__item'">
        提现到微信
      </div>
    </div>
    <div style="height: 47px;"></div>
    <!--顶部nav end-->
    <!--提现选择 start-->
    <!-- <div class="txxz">
      <div class="weui-flex">
        <div class="weui-flex__item">
          <div class="tit">中国银行</div>
        </div>
        <div>
          <div class="t_img">
            <img src="./../images/go.png">
          </div>
        </div>
      </div>
    </div>
    <div class="elonline"></div> -->
    <!--提现选择 end-->
    <!--提现金额 start-->
    <div class="weui-flex money">
      <div>
        <div class="money_fu">￥</div>
      </div>
      <div class="weui-flex__item">
        <input class="weui-input money_input" type="text" placeholder="可提现金额:500">
      </div>
      <div>
        <div class="money_all">全部提现</div>
      </div>
    </div>
    <!--提现金额 end-->
    <div class="money_btn weui-btn_loading">
      <i class="weui-loading"></i>确认提现
    </div>

    <!--底部图文 start-->
    <div class="tip_footer">
      <elFooter></elFooter>
    </div>
    <!--底部图文 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 提现
   * @event 
   */
  import elFooter from '@/components/indexpattern/Footer'
  import Goback from '@/components/topnav/Gobacknav'
  import {
    mapMutations
  } from 'vuex'
  import {
    getPostData
  } from '@/api/api.js'
  export default {
    components: {
      Goback,
      elFooter
    },
    data() {
      return {
        id: 1,
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
.txxz
  clear both
  &:active
    background: $color-bottom-cg
    color #ffffff
  .tit
    margin-top _c(25)
    margin-left _c(60)
    margin-bottom _c(25)
    font-size $font-size-16
  .t_img
    margin-top _c(25)
    margin-right _c(35)
    width _c(16)
    height _c(28)
    img 
      width 100%
      height 100%
.money
   margin-top _c(102)
  .money_fu
    margin-left _c(30)
    font-size $font-size-20
    color #000000
  .money_input
    border 0
    margin-top _c(5)
    margin-left _c(23)
    padding-bottom 0
    padding-top 0
    margin-bottom 0
    line-height 0
    height auto
    font-size $font-size-16
  .money_all
    margin-right _c(40)
    color $color-bottom-cg
    font-size $font-size-16
.money_btn
  text-align center
  padding-top _c(35)
  padding-bottom _c(35)
  background $color-bottom-cg
  color #ffffff
  margin-top _c(100)
  font-size $font-size-16
</style>