<template>
  <div class="contain">
    <div class="weui-skin_android" id="androidActionsheet" style="opacity: 1;" v-show="visible">
      <div class="weui-mask" v-tap="{methods: tap}"></div>
      <div class="weui-actionsheet">
        <div class="weui-actionsheet__menu">
          <div class="peisong elonline">配送方式</div>
          <div class="peisong weui-flex weui-cells weui-cells_checkbox elonline">
            <div class="weui-flex__item">顺丰冷运</div>
            <div>卖家包邮</div>
            <label class="weui-cell__hd gou" for="Indexshunf">
              <input type="radio" class="weui-check" name="peis" id="Indexshunf">
              <i class="weui-icon-checked"></i>
            </label>
          </div>
          <div class="peisong elonline weui-flex weui-cells weui-cells_checkbox">
            <div class="weui-flex__item">门店自提</div>
            <label class="weui-cell__hd gou" for="Indexmen">
              <input type="radio" class="weui-check" name="peis" id="Indexmen">
              <i class="weui-icon-checked"></i>             
            </label>
          </div>
          <div class="con">
            <div class="con_txt">什么什么什么门店</div>
            <div class="con_txt">地址：如果你无法表达你的想法</div>
            <div class="con_txt">电话：12345678901</div>
          </div>
          <div class="he"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 显示配送方式的弹出层
   */
  export default {
    data() {
      return {
        name: '',
        number: ''
      }
    },
    props: {
      visible: Boolean
    },
    methods: {
      // 点击隐藏弹出层
      tap() {
        this.$emit('update:visible', false)
      },
      // 点击分享
      share() {
        mui.toast('开发中……！', {
          duration: 'short',
          type: 'div'
        })
      },
      // 更新到父组件
      updateValue: function() {
        // 通过 input 事件带出数值
        this.$emit('input', this.nickname)
        this.tap()
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.he
  height _c(30)
.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before
  color $color-bottom-cg
.gou
  width _c(60)
  height 100%
  display inline-block
  margin-top _c(-5)
.peisong
  padding _c(30)
  font-size $font-size-16
  line-height $font-size-16
  padding-left 0
  margin-left _c(30)
  padding-right 0
  margin-right _c(30)
  margin-top 0
.weui-cells:before
  border 0
  height 0
.con
  text-align center
  margin-top _c(80)
  margin-bottom _c(80)
  .con_txt
    font-size $font-size-14
    line-height $font-size-14
    margin-top _c(30)
</style>