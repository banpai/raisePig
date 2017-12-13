<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="账单明细" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--账单列表 start-->
    <ul>
      <li>
        <div class="weui-cell">
          <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
            <img src="./../../../../../common/assets/head.jpg" style="width: 50px;display: block">
          </div>
          <div class="weui-cell__bd">
            <p>小肥猪第100期</p>
            <p>10头</p>
          </div>
          <div class="weui-cell__ft">+100.00</div>
        </div>
        <div class="elonline"></div>
      </li>
    </ul>
    <!--账单列表 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 发表评论
   * @event 
   */
  import Vue from 'vue'
  import Axios from 'axios'
  import router from '@/router'
  import Goback from '@/components/topnav/Gobacknav'
  import {
    getPostData
  } from '@/api/api.js'
  import {
    mapMutations
  } from 'vuex'
  export default {
    name: '',
    data() {
      return {
        reclist: [], //接受邀请成员列表
      }
    },
    components: {
      Goback,
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
    },
    activated() {
      var params = {
      }
      // getPostData('getRecListData', params).then(r => {
      //   this.reclist = r.list
      // })
    }
  }
</script>
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
  p
    margin 0
    padding 0
    text-align center
    font-size $font-size-15
  li
    list-style-type none
  .yonline
    width _c(2)
    height _c(102)
    margin-top _c(50)
    background white
  .invite
    display flex
    flex-direction row
    justify-content center
    flex-wrap wrap
    background $color-bottom-cg
    color white
    width 100%
    height _c(200)
    .invitebot
      width 100%
      display flex
      flex-wrap nowrap
      .invitebotlt,.invitebotrt
        width 50%
        p:nth-child(1)
          font-size $font-size-18
          margin-bottom _c(10)
          margin-top _c(60)
  .weui-cell
    padding _c(30)
    color #000000
    .weui-cell__hd
      width _c(100) 
      height _c(100)
      border-radius 50%
      border _c(5) solid #f6f9f9
      overflow hidden
      img
        width 100% !important
    .weui-cell__bd
      margin-left _c(45)
      p
        text-align left
      p:nth-child(1)
        margin-bottom _c(15)
    .weui-cell__ft
      font-size $font-size-20
      color #000000
</style>