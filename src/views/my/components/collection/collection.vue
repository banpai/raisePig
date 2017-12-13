<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="我的收藏" :callback="edit" fanhuifalg="true" text="编辑"></Goback>
    <!--头部 end-->
    <!--列表 start-->
    <div class="weui-flex weui-cells weui-cells_checkbox col_all" v-show="editFlag">
      <label class="weui-cell__hd gou" for="id_all">
              <input type="checkbox" class="weui-check" name="zf" id="id_all" v-model="radio_all">
              <i class="weui-icon-checked"></i>
            </label>
      <div class="weui-flex__item col_font">全部</div>
    </div>
    <div class="elonline"></div>
    <div class="col_ul">
      <div v-for="(item, index) in list" class="weui-flex col_li elonline">
        <div class="col_li_circle weui-cells weui-cells_checkbox" v-show="editFlag">
          <!-- <label v-bind:for="'id_c_' + index" v-bind:class="item.flag?'col_circle col_circle_bg':'col_circle'"></label>
                <input type="checkbox" name="collection" v-bind:id="'id_c_' + index" class="col_input" v-model="item.flag" /> -->
          <label class="weui-cell__hd gou" v-bind:for="'id_c_' + index">
                <input type="checkbox" class="weui-check" name="zf" v-bind:id="'id_c_' + index" v-model="item.flag">
                <i class="weui-icon-checked"></i>
              </label>
        </div>
        <div class="col_img">
          <img v-bind:src="item.pic?item.pic:require('./images/pig.jpg')" class="col_img_j">
        </div>
        <div class="col_txt">
          <div class="col_txt_up" v-text="item.content"></div>
          <div class="col_txt_down">￥<span v-text="item.money"></span></div>
        </div>
      </div>
    </div>
    <!--列表 end-->
    <!--底部按钮 start-->
    <div class="b_btn" v-show="editFlag">
      <div class="b_left b_btn_li" v-tap="{methods: sure}">确定</div>
      <div class="b_btn_li" v-tap="{methods: c_delete}">删除</div>
    </div>
    <!--底部按钮 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 我的收藏
   * @event 
   */
  import Goback from '@/components/topnav/Gobacknav'
  import {
    mapMutations
  } from 'vuex'
  import {
    getPostData
  } from '@/api/api.js'
  export default {
    components: {
      Goback
    },
    data() {
      return {
        editFlag: false,
        list: [],
        radio_all: false,
        checkedArray: []
      }
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      skip() {
        this.err_msg('测试出错哈哈哈')
      },
      // 点击编辑
      edit() {
        this.editFlag = !this.editFlag
      },
      // 初始化数据
      init() {
        getPostData('getListData', {}).then(r => {
          this.list = r.list
        })
      },
      // 点击确定
      sure() {
        mui.toast('开发中……！', {
          duration: 'short',
          type: 'div'
        })
      },
      // 点击删除
      c_delete() {
        mui.toast('开发中……！', {
          duration: 'short',
          type: 'div'
        })
      }
    },
    // 组件被激活时加载
    activated() {
      this.init()
    },
    // 监听属性
    watch: {
      // 监听全选input的值做回调
      radio_all(r) {
        if (r) {
          for (let index of this.list.keys()) {
            this.list[index].flag = true
          }
        } else {
          for (let index of this.list.keys()) {
            this.list[index].flag = false
          }
        }
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.col_input
  display none
.col_circle_bg
  background $color-bottom-cg
  border 1px solid $color-bottom-cg !important
.col_all
  border-top 1px solid #ffffff
  padding-bottom _c(35)
  margin-top _c(35)
  // border-bottom 1px solid $color-bg
  position relative
  .col_circle
    width _c(25)
    height _c(25)
    border 1px solid #000
    border-radius 50%
    margin-left _c(15)
    padding-bottom _c(35)
    margin-top _c(35)
    display block
  .col_input
    &:checked + label
      background $color-bg
  .col_font
    font-size $font-size-18
    line-height _c(60)
.col_ul
  // border 1px solid #000000
  .col_li
    // border-bottom 1px solid $color-bg
    display: flex;
    flex-wrap:nowrap;
    .col_li_circle
      // border 1px solid #000
      width _c(200)
      border-left 0
      margin-top 0
      .weui-icon-checked
        line-height _c(100)
        // border 1px solid
        margin-top _c(45)
      .col_circle
        width _c(25)
        height _c(25)
        border 1px solid #000
        border-radius 50%
        margin-left _c(15)
        margin-bottom _c(35)
        margin-top _c(0)
        display block
    .col_img
      width 180px
      height 65px
      display block
      margin-top _c(30)
      margin-left _c(30)
      margin-bottom _c(30)
      .col_img_j
        width 100%
        height 100%
    .col_txt
      overflow hidden
      padding-left _c(15)
      padding-right _c(30)
      .col_txt_up
        padding-right _C(30)
        padding-left _C(30)
        margin-top _c(30)
        font-size $font-size-15
        line-height $font-size-15
        height _c(58)
        overflow hidden
        word-wrap break-word
        display block
        text-overflow ellipsis
        // white-space: nowrap;
        word-break: break-all;
      .col_txt_down
        margin-top _c(30)
        color red
        font-size $font-size-18
// 底部按钮
btn_height = _c(98)
.b_btn
  height btn_height
  position fixed
  bottom 0
  display: flex;
  flex-wrap:nowrap;
  width 100%
  .b_btn_li
    width 50%
    text-align center
    height btn_height
    line-height btn_height
    background $color-bottom-cg
    color #ffffff
    font-size cgrem(18)
  .b_left
    border-right 1px solid #ffffff
.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before
  color $color-bottom-cg
.gou
  width _c(60)
  height 100%
  display inline-block
  margin-right _c(30)
  margin-left _c(30)
.weui-cells:after, .weui-cells:before
  border: 0
</style>