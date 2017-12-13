<template>
  <div class="mui-content">
    <!--头部 start-->
    <Goback 
      navtitle="商品详情" 
      fanhuifalg="true" 
      :navimgsrc="shareStar"  
      :navimgsrc2="shareImg" 
      :callback2="shareFun"
      :callback="star"
    >
    </Goback>
    <!--头部 end-->
    <!--banner start-->
    <div class="mui-slider banner">
      <div class="mui-slider-group">
        <div class="mui-slider-item">
          <a href="#"><img src="./../../images/ad-1.png" /></a>
        </div>
        <div class="mui-slider-item">
          <a href="#"><img src="./../../images/ad-1.png" /></a>
        </div>
        <div class="mui-slider-item">
          <a href="#"><img src="./../../images/ad-1.png" /></a>
        </div>
        <div class="mui-slider-item">
          <a href="#"><img src="./../../images/ad-1.png" /></a>
        </div>
      </div>
    </div>
    <!--banner end-->
    <!--介绍评论 start-->
    <div class="d_details">
      <div class="weui-flex d_head">
        <div class="weui-flex__item d_head_1">
          如果你无法简单的表达你的想法，如果你无法简单的表达你的想法，如果你无法简单的表达你的想法，
        </div>
        <div class="d_head_2">
          销量：2000
        </div>
      </div>
      <div class="weui-flex d_head d_head2">
        <div class="weui-flex__item d_head_1">
          <div class="d_head2_1t">市场价：￥1000</div>
          <div class="d_head2_2t">会员价：￥900</div>
        </div>
        <div class="d_head_2 d_head2_2">
          <div class="d_head_btn" v-tap="{methods:skip, url:'/shop/Order'}">立即抢购</div>
        </div>
      </div>
      <!--评论 start-->
      <div class="elonline"></div>
      <div class="elonline d_value weui-flex" v-tap="{methods: skip, url:'/shop/comment'}">
        <div class="d_star">
          <div class="weui-flex">
            <div class="weui-flex__item d_star_item">
              <div class="d_star_1">
                <img src="./../../images/star_1.png">
              </div>
            </div>
            <div class="weui-flex__item d_star_item">
              <div class="d_star_1">
                <img src="./../../images/star_1.png">
              </div>
            </div>
            <div class="weui-flex__item d_star_item">
              <div class="d_star_1">
                <img src="./../../images/star_1.png">
              </div>
            </div>
            <div class="weui-flex__item d_star_item">
              <div class="d_star_1">
                <img src="./../../images/star_1.png">
              </div>
            </div>
            <div class="weui-flex__item d_star_item">
              <div class="d_star_1">
                <img src="./../../images/star_2.png">
              </div>
            </div>
          </div>
        </div>
        <div class="weui-flex__item d_f">4.8分</div>
        <div class="d_peoples">690人评价</div>
        <div class="d_icon">
          <div class="icon_go">
            <img src="./../../../../common/assets/go.png">
          </div>
        </div>
      </div>
      <!--评论 end-->
      <!--评论内容 start-->
      <div class="elonline d_p">
        <div class="weui-flex d_p_top">
          <div class="d_p_img">
            <img src="./../../../../common/assets/head.jpg">
          </div>
          <div class="weui-flex__item">ZERO</div>
          <div class="d_p_date">2017-11-11</div>
        </div>
        <div class="d_p_txt">
          如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果
        </div>
      </div>
      <!--评论内容 end-->
      <div class="elonline d_allbtn" v-tap="{methods: skip, url:'/shop/comment'}">
        查看全部评论
      </div>
    </div>
    <!--介绍评论 end-->
    <!--热销产品 start-->
    <div class="rxcp">猜你喜欢</div>
    <div class="weui-grids">
      <div class="weui-grid" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="weui-grid__icon">
          <img src="./../../images/ad-1.png">
        </div>
        <p class="weui-grid__label">如果你无法简洁的表达你的想法</p>
        <div class="weui-flex">
          <div class="weui-flex__item">
            <div class="scj">市场价:</div>
            <div class="ss_red">￥900</div>
          </div>
          <div class="weui-flex__item">
            <div class="s_btn">
              <div>会员购买</div>
              <div class="s_red">￥899</div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-grid" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="weui-grid__icon">
          <img src="./../../images/ad-1.png">
        </div>
        <p class="weui-grid__label">如果你无法简洁的表达你的想法</p>
        <div class="weui-flex">
          <div class="weui-flex__item">
            <div class="scj">市场价:</div>
            <div class="ss_red">￥900</div>
          </div>
          <div class="weui-flex__item">
            <div class="s_btn">
              <div>会员购买</div>
              <div class="s_red">￥899</div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-grid" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="weui-grid__icon">
          <img src="./../../images/ad-1.png">
        </div>
        <p class="weui-grid__label">如果你无法简洁的表达你的想法</p>
        <div class="weui-flex">
          <div class="weui-flex__item">
            <div class="scj">市场价:</div>
            <div class="ss_red">￥900</div>
          </div>
          <div class="weui-flex__item">
            <div class="s_btn">
              <div>会员购买</div>
              <div class="s_red">￥899</div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-grid" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="weui-grid__icon">
          <img src="./../../images/ad-1.png">
        </div>
        <p class="weui-grid__label">如果你无法简洁的表达你的想法</p>
        <div class="weui-flex">
          <div class="weui-flex__item">
            <div class="scj">市场价:</div>
            <div class="ss_red">￥900</div>
          </div>
          <div class="weui-flex__item">
            <div class="s_btn">
              <div>会员购买</div>
              <div class="s_red">￥899</div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-grid" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="weui-grid__icon">
          <img src="./../../images/ad-1.png">
        </div>
        <p class="weui-grid__label">如果你无法简洁的表达你的想法</p>
        <div class="weui-flex">
          <div class="weui-flex__item">
            <div class="scj">市场价:</div>
            <div class="ss_red">￥900</div>
          </div>
          <div class="weui-flex__item">
            <div class="s_btn">
              <div>会员购买</div>
              <div class="s_red">￥899</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--热销产品 end-->
    <!--分享 start-->
    <Share :visible.sync="shareFlag"></Share>
    <!--分享 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  /**@author 半拍
   * @description 商品详情
   * @event 
   */
  import Goback from '@/components/topnav/Gobacknav'
  import Share from '@/components/dialog/share/Share'
  import weui from 'weui.js'
  import {
    getPostData
  } from '@/api/api.js'
  import {
    mapMutations
  } from 'vuex'
  export default {
    components: {
      Goback,
      Share
    },
    data() {
      return {
        tuWen: '',
        shareFlag: false,
        shareImg: require('./images/share.png'),
        shareStar: require('./images/star2.png'),
        starFlag: false
      }
    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
      // 跳转
      skip(e) {
        this.$router.push(e.url)
      },
      // 点击分享
      shareFun() {
        this.shareFlag = true
      },
      // 点击收藏
      star() {
        if(!this.starFlag){
          this.starFlag = true
          this.shareStar = require('./images/star1.png')
          weui.toast('收藏成功', 3000)
        }else{
          weui.toast('已收藏', 3000)
        }
      }
    },
    mounted() {
      var gallery = mui('.mui-slider');
      gallery.slider({
        interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
      });
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
@import '~@/common/stylus/shops';
.sharIcon
  width _c(40)
  height _c(42)
  float right 
  margin-top 12px
  img 
    width 100%
    height 100%
.d_details
  // border 1px solid #000000
  .d_head
    height _c(68)
    overflow hidden
    padding-left _c(20)
    padding-right _c(20)
    margin-top _c(15)
    margin-bottom _c(20)
    .d_head_1
      line-height _c(35)
      font-size $font-size-16
      margin-right _c(95)
    .d_head_2
      line-height _c(68)
      font-size $font-size-16
  .d_head2
    height _c(75)
    font-size $font-size-16
    .d_head2_1t
      height _c(30)
      line-height _c(30)
    .d_head2_2t
      margin-top _c(15)
      height _c(30)
      line-height _c(30) 
      color red
    .d_head2_2
      border 1px solid
      margin-right _c(22)
      height _c(60)
      color $color-bottom-cg
      border-radius 5px
      line-height _c(60)
      width _c(200)
      text-align center
      font-size $font-size-18
  .d_value
    height _c(63)
    line-height _c(63)
    font-size $font-size-16
    .d_star
      width _c(210)
      height _c(63)
      margin-left _c(20)
      .d_star_item
        text-align center
        .d_star_1
          margin 0 auto
          height _c(32)
          width _c(32)
          margin-top _c(14)
          position relative
          img
            position absolute
            top 0
            left 0
            width 100%
            height 100%
  .d_f
    color red
    margin-left _c(13)
  .d_peoples
    margin-right _c(15)
  .d_icon
    margin-right _c(20)
    margin-right _c(15)
    .icon_go
      width _c(16)
      height _c(28)
      margin-top _c(2)
      img 
        width 100%
        height 100%
.d_allbtn
  text-align center
  padding-top _c(25)
  padding-bottom _c(25)
  font-size $font-size-18
</style>