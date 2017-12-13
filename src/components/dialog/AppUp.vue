<template>
    <div class="mui-backdrop appupwrapper" v-tap="{methods: _isShow, name:'Appupflag'}">
        <div class="appcontent">
            <span class="mui-icon mui-icon-closeempty"></span>
            <p class="apptitle">用户注册协议</p>
        </div>
    </div>
</template>
<script>
/**@author gumiao
 * @description app用户协议
 * @event
 *                
 */
export default {
  props:['Appupflag'],
  methods:{
        // 传值给父组件
        _isShow(e){
          this.$emit("chAppupflag",!this[e.name])
        },
  }
}
</script>
<style lang="stylus" scoped>
    .appupwrapper
        top 44px !important
        z-index 98 !important
        background rgba(0,0,0,0.7) !important
    .appcontent
        position fixed
        left 8%
        top 16%
        background white
        width 84%
        height 73%
        padding 4%
        .mui-icon-closeempty
            position absolute
            top 3%
            right 3%
        .apptitle
            text-align center
            display block
</style>
