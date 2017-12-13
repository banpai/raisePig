<template>
  <div class="contain">
    <div class="h"></div>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/Index" replace>
        <span class="tab-icon icon1"></span>
        <span class="tab-link">首页</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/Myassets" replace>
        <span class="tab-icon icon2"></span>
        <span class="tab-link">我的资产</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/shop" replace>
        <span class="tab-icon icon3"></span>
        <span class="tab-link">猪肉商城</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/my" replace>
        <span class="tab-icon icon4"></span>
        <span class="tab-link">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.contain
  .h
    height 44px
  .tab
    background #fff
    display: flex
    height: 48px
    font-size: $font-size-12
    position fixed
    bottom 0
    width 100%
    border-top 1px solid $color-bottom-cg
    z-index 99
    .tab-icon
      display block
      margin 0 auto
      margin-top 6px
      width 24px
      height 24px
      background-repeat no-repeat
      background-size contain
    .icon1
      background-image url('./images/index.png')
    .icon2
      background-image url('./images/assets.png')  
    .icon3
      background-image url('./images/shop.png')
    .icon4
      background-image url('./images/my1.png')  
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-bottom-cg
        .icon1
          background-image url('./images/index1.png')
        .icon2
          background-image url('./images/assets1.png')
        .icon3
          background-image url('./images/shop1.png')
        .icon4
          background-image url('./images/my.png')
</style>