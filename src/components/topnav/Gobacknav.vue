<template>
  <div class="header">
    <div class="_h"></div>
    <header class="mui-bar mui-bar-nav">
      <div class="fanhuia">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" v-show="fanhuifalg">{{fanhui?fanhui:'返回'}}</a>
      </div>
      <div class="fanhuih1">
        <h1 class="mui-title">{{navtitle?navtitle:'登陆页面'}}</h1>
      </div>
      <div class="fanhuiimg">
        <div class="topblock" v-tap={methods:callback} v-show="navimgsrc">
         <img :src="navimgsrc" v-show="navimgsrc">
        </div>
        <div class="topblock2" v-tap={methods:callback2} v-show="navimgsrc2">
          <img :src="navimgsrc2" v-show="navimgsrc2">
        </div>
        <div class="topblocktxt" v-tap={methods:callback} v-show="text">
          <div v-text="text" v-show="text"></div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  /**@author gumiao
   * @description
   * @event
   * @field 
   *   fanhui  返回图标名称
   *   navtitle 导航栏标题
   *   navimgsrc 1   
   */
  export default {
    data() {
      return {}
    },
    props: ['fanhui', 'fanhuifalg', 'navtitle', 'navimgsrc', 'callback', 'text', 'navimgsrc2', 'callback2'],
    methods: {
      back() {
        this.$router.go(-1)
      }
    },
    mounted() {
      
    },
    activated() {
      // 路由名称
      var rpath = this.$route.name;
      let path = this.$route.path
      // 解除向右滑动返回事件
      document.removeEventListener('touchmove',window.backall);
      // 绑定向右滑动返回事件
      document.addEventListener('touchmove',window.backall);
      if(rpath == '首页'){
        // 首页 解除向右滑动返回事件
        document.removeEventListener('touchmove',window.backall)
      }
      if(rpath == '我的资产'){
        // 首页 解除向右滑动返回事件
        document.removeEventListener('touchmove',window.backall)
      }
      if(rpath == '个人中心'){
        // 首页 解除向右滑动返回事件
        document.removeEventListener('touchmove',window.backall)
      }
      if(rpath == '猪肉商城' || rpath == '猪肉商城-熟食'){
        // 首页 解除向右滑动返回事件
        document.removeEventListener('touchmove',window.backall)
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
  ._h
    height 44px
  .mui-bar
    background $color-bottom-cg
  header
    display flex
    flex-direction row
    justify-content space-between
    box-shadow none 
    a
      width _c(150)
      height 44px;
      line-height 27px;
      font-size $font-size-16 !important 
      color #ffffff
  .fanhuih1
    width 50%
  .mui-title
    color #ffffff
    font-size $font-size-18
    width: 150px;
    margin: 0 auto;
  .fanhuiimg
    width 40%
  .topblock,.topblock2
    height _c(88)
    width _c(80)
    font-size _c(34)
    float right
    margin-right _c(6)
    color #ffffff
    line-height _c(88)
    z-index 999
    img
      width _c(42)
      height _c(42)
      margin-top _c(26)
      float right
  .topblocktxt
    height _c(88)
    width _c(140)
    font-size $font-size-16
    float right
    color #ffffff
    line-height _c(88)
    text-align right 
</style>
