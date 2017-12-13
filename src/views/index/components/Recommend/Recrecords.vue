<template>
  <div>
    <Goback fanhuifalg="true" navtitle="我的推荐记录"></Goback>
    <div class="invite">
        <!-- 邀请码和数据区域 s-->
        <div class="invitebot">
            <div class="invitebotlt">
                <p>10</p>
                <p>已邀请人数</p>
            </div>
            <div class="yonline"></div>
            <div class="invitebotrt">
                <p>100</p>
                <p>推荐总奖金</p>
            </div>
        </div>
        <!-- 邀请码和数据区域 e-->
    </div>
    <!-- 接受邀请成员列表 s-->
    <ul>
      <li v-for="(item,index) in reclist">
        <div class="weui-cell">
            <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                <img src="../../images/toux.png" style="width: 50px;display: block">
            </div>
            <div class="weui-cell__bd">
                <p>{{item.username}}</p>
                <p>{{item.recordtime}}</p>
            </div>
            <div class="weui-cell__ft">￥{{item.money}}</div>
        </div>
        <div class="elonline"></div>
      </li>
    </ul>
    <!-- 接受邀请成员列表 e-->
  </div>
</template>
<script>
/**@author gumiao
* @description 
* @event 
*/
import Vue from 'vue'
import Axios from 'axios'
import router from '@/router'
import Goback from '@/components/topnav/Gobacknav'
import {getPostData} from '@/api/api.js'
import {mapMutations} from 'vuex'
export default {
  name: '',
  data() {
      return {
        reclist:[], //接受邀请成员列表
      }
  },
  components:{
      Goback,
  },
  methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
  },
  activated () {
			var params={
				
      }
      getPostData('getRecListData',params).then(r =>{
        this.reclist = r.list
      })
  }
}
</script>
<style lang="stylus" scoped>
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
    .weui-cell__hd
      width _c(100) 
      height _c(100)
      border-radius 50%
      border _c(5) solid white
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
      color $color-red
</style>