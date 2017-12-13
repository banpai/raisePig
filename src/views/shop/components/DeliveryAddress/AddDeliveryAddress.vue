<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="添加收货地址" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--收获地址 start-->
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd xx1">
          <input class="weui-input" type="text" placeholder="收货人">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd xx1">
          <input class="weui-input" type="text" placeholder="手机号码">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd xx1">
          <input class="weui-input" type="text" placeholder="所在省份">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd xx1">
          <input class="weui-input" type="text" placeholder="所在城市">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd txt_wenb">
          <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
          <div class="weui-textarea-counter"><span>0</span>/200</div>
        </div>
      </div>
    </div>
    <!--收货地址 end-->
    <!--底部按钮 start-->
    <div class="btn_bottom" v-tap="{methods: back}">保存</div>
    <!--底部按钮 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 选择收货地址
   * @event
   */
  import Goback from '@/components/topnav/Gobacknav'
  import {
    getPostData
  } from '@/api/api.js'
  import {
    mapMutations
  } from 'vuex'
  export default {
    components: {
      Goback
    },
    data() {
      return {}
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      // 跳转地址
      skip(e) {
        this.$router.push(e.url)
      },
      // 显示弹层
      tanCen(e) {
        this[e.name] = true
      },
      // 返回上一页
      back() {
        this.$router.back()
      }
    },
    mounted() {}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.weui-cells:after, .weui-cells:before, .weui-cell:before
  border 0
  height 0
.btn_bottom
  height _c(98)
  text-align center
  width 100%
  position fixed
  bottom 0
  line-height _c(98)
  background $color-bottom-cg
  font-size $font-size-18
  color #ffffff
input[type=color], input[type=date], input[type=datetime-local], input[type=datetime], input[type=email], input[type=month], input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], input[type=week], select
  border 1px solid $border-color
  border-radius 0
.txt_wenb
  border 1px solid $border-color
.xx1
  height 40px
.weui-cell
  padding _c(50)
  padding-top _c(30)
  padding-bottom _c(10)
.weui-cells
  margin-top 0
</style>