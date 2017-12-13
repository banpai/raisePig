<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback navtitle="购物车" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <div class="weui-cells weui-cells_checkbox">
      <div class="weui-cell weui-check__label" v-for="(item, index) in list">
        <label class="weui-cell__hd" v-bind:for="'s' + index">
            <input type="checkbox" class="weui-check" name="checkbox1" 
            v-bind:id="'s' + index"
            v-model="item.flag">
            <i class="weui-icon-checked"></i>
        </label>
        <div class="weui-cell__bd c_con">
          <div class="weui-flex">
            <div class="c_con_img">
              <img src="./../../images/ad-1.png">
            </div>
            <div class="weui-flex__item">
              <div class="c_con_txt">
                {{item.content}}
              </div>
              <div class="weui-flex c_con_t">
                <div class="c_con_tb">
                  <div class="c_con_reduce" v-tap="{methods:reduce, i:index}">
                    <img src="./images/reduce.png">
                  </div>
                </div>
                <div class="weui-flex__item c_num">{{item.number}}</div>
                <div class="c_con_tb c_con_kk" v-tap="{methods:add, i:index}">
                  <div class="c_con_reduce">
                    <img src="./images/plus.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="c_r_content">
              <div class="c_r_t">￥900</div>
              <div class="c_r_i" v-tap="{methods:delet, i:index}">
                <img src="./images/delete.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 卖猪结算组件 s-->
    <div class="settle weui-cells weui-cells_checkbox">
      <label class="weui-cell__hd gou" for="allIndex">
          <input type="checkbox" class="weui-check" name="checkbox3" 
          id="allIndex"
          v-model="radio_all">
          <i class="weui-icon-checked"></i>
        </label>
      <p>全选</p>
      <p v-tap="{methods:skip, url:'/shop/Order'}">去结算</p>
      <p>共{{counter}}件</p>
      <p>合计：￥{{hjmoney}}</p>
    </div>
    <!-- 卖猪结算组件 e-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 购物车
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
      return {
        list: [],
        counter: '0', //猪只数,
        hjmoney: '0', //总合计默认是0,
        // 全选
        radio_all: false
      }
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      skip(e) {
        this.$router.push(e.url)
      },
      reduce(e) {
        if (this.list[e.i].number > 1) {
          this.list[e.i].number = this.list[e.i].number - 1
        }
      },
      add(e) {
        this.list[e.i].number = this.list[e.i].number + 1
      },
      delet(e) {
        this.list.splice(e.i, 1);
      },
      // 点击消息提醒
      edit() {
        alert('编辑')
      }
    },
    mounted() {
      getPostData('shopCartlist', {}).then(r => {
        this.list = r.list
      })
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
.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before
  color $color-bottom-cg
.weui-cell:before
  left 0
.c_con
  
  .c_con_img
    width _c(180)
    height _c(130)
    margin-right _c(20)
    img
      width 100%
      height 100%
  .c_con_txt
    font-size $font-size-14
    line-height $font-size-14
    margin-right _c(25)
  .c_con_t
    border 1px solid $border-color
    margin-top _c(22)
    width _c(280)
    .c_con_tb
      border-right 1px solid $border-color
      width _c(70)
      .c_con_reduce
        margin 0 auto
        width _c(32)
        height _c(32)
        margin-top _c(5)
        margin-bottom _c(5)
        img
          width 100%
          height 100%
    .c_con_kk
      border 0
      border-left 1px solid $border-color
    .c_num
      text-align center
      line-height _c(45)
.c_r_content
  color red
  font-size $font-size-14
  line-height $font-size-14
  .c_r_t
    margin-top _c(10)
  .c_r_i
    width _c(48)
    height _c(48)
    margin 0 auto
    margin-top _c(30)
    img
      width 100%
      height 100%
.weui-cell
  padding-left _c(30)
  padding-right _c(30)
.settle
  position fixed
  flex-direction row
  justify-content space-between
  left 0
  bottom 0
  width 100%
  .gou
    // border 1px solid
    width _c(60)
    height 100%
    display inline-block
    margin-left _c(30)
    margin-top _c(20)
  p
    display inline-block
    // line-height 43px
    height 100%
    // border 1px solid
    font-size $font-size-16
  p:nth-child(1)
    margin-left _c(0)
    margin-top _c(20)
  p:nth-child(2)
    margin-left _c(0)
  p:nth-child(3)
    width _c(250)
    float right
    line-height _c(86)
    margin 0
    vertical-align middle
    text-align center
    background $color-bottom-cg
    color white
.weui-dialog__ft
  a
    color $color-bottom-cg

</style>