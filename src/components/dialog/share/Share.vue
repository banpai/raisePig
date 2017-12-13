<template>
  <div class="contain">
    <div class="weui-skin_android" id="androidActionsheet" style="opacity: 1;" v-show="visible">
      <div class="weui-mask" v-tap="{methods: tap}"></div>
      <div class="weui-actionsheet">
        <div class="weui-actionsheet__menu">
          <div class="shareTitle">分享至</div>
          <div class="weui-flex shareMenu">
            <div class="weui-flex__item" v-tap="{methods: share, name: 'wechat'}">
              <div class="placeholder shareIcon">
                <img src="./images/wechat.png">
              </div>
              <div class="shareItem">微信</div>
            </div>
            <div class="weui-flex__item" v-tap="{methods: share, name: 'friendsCircle'}">
              <div class="placeholder shareIcon">
                <img src="./images/friendsCircle.png">
              </div>
              <div class="shareItem">朋友圈</div>
            </div>
            <div class="weui-flex__item" v-tap="{methods: share, name: 'QQ'}">
              <div class="placeholder shareIcon">
                <img src="./images/QQ.png">
              </div>
              <div class="shareItem">QQ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.shareTitle
  padding-top _c(25)
  padding-left _c(30)
  font-size $font-size-16
  color #000000
.shareMenu
  width _c(450)
  margin _c(35) auto
  text-align center
  padding-bottom _c(35)
  .shareIcon
    width _c(48)
    height _c(48)
    margin 0 auto
    img
      width 100%
      height 100%
  .shareItem
    font-size $font-size-16
    color #000000
    margin-top _c(15)
</style>