<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="个人信息" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--个人信息列表 start-->
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/InformationEdit/changeIcon'}">
     <div class="li_1 li_1_img">头像</div>
     <div class="weui-flex__item li_img">
       <div class="img_head">
         <img src="./../../../../common/assets/head.jpg">
       </div>
     </div>
     <div class="li_2_img li_2_imgs">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
     <div class="pig_li weui-flex elonline" v-tap="{methods:tanCen, name: 'nicknameFlag'}">
     <div class="li_1">昵称</div>
     <div class="weui-flex__item li_t">{{nickname}}</div>
     <div class="li_2_img">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
    <div class="pig_li weui-flex elonline">
     <div class="li_1">已绑定手机</div>
     <div class="li_2">13151297789</div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:tanCen, name: 'realnameFlag'}">
     <div class="li_1">实名认证</div>
     <div class="li_2_img">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
    <div class="pig_li weui-flex elonline" v-tap="{methods:skip, url: '/my/InformationEdit/changePass'}">
     <div class="li_1">密码修改</div>
     <div class="li_2_img">
       <img src="./../../../../common/assets/go.png">
     </div>
    </div>
    <!--个人信息列表 end-->
    <!--更换昵称组件 start-->
    <ChangeNickname :visible.sync="nicknameFlag" v-model="nickname"></ChangeNickname>
    <!--更换昵称组件 end-->
    <!--实名认证 start-->
    <RealName :visible.sync="realnameFlag"></RealName>
    <!--实名认证 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 个人信息编辑
   * @event 
   */
  import Goback from '@/components/topnav/Gobacknav'
  import ChangeNickname from '@/components/dialog/changeNickname'
  import RealName from '@/components/dialog/realName'
  import {
    mapMutations
  } from 'vuex'
  export default {
    components: {
      Goback,
      ChangeNickname,
      RealName
    },
    data() {
      return {
        nicknameFlag: false,
        nickname: 'zero',
        realnameFlag: false
      }
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      // 点击跳转
      skip(e) {
        this.$router.push(e.url)
      },
      // 点击弹层
      tanCen(e){
        this[e.name] = true
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.pig_li
  justify-content space-between
  margin-top _c(30)
  padding-bottom _c(30)
  font-size $font-size-16 
  color #000000
  .li_1
    margin-left _c(30)
  .li_1_img
    line-height _c(100)
  .li_2_imgs
    margin-top _c(35) !important
  .li_img
    text-align right 
    padding-right _c(80)
    .img_head
      border _c(5) solid #f2f5f5
      width _c(100)
      height _c(100)
      float right
      border-radius 50%
      overflow hidden
      img 
        width 100%
        height 100%
  .li_t
    text-align right 
    padding-right _c(60)
  .li_2
    margin-right _c(35)
  .li_2_img
    margin-right _c(35)
    width _c(16)
    height _c(28)
    margin-top _c(2)
    img 
      width 100%
      height 100%
</style>