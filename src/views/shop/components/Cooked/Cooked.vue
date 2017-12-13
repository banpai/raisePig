<template>
  <div class="containt">
    <!--头部 start-->
    <Goback navtitle="熟食" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--生熟肉 start-->
    <div class="slider-wrapper">
      <div class="slider-content">
        <slider ref="slider" :autoPlay="autoPlay">
          <div class="s_item">
            <router-link class="s_item_li" :to="{ path: '/shop/Details' }">
              <div class="s_item_liImg">
                <img src="./../../images/shu.png">
              </div>
            </router-link>
            <router-link class="s_item_li" :to="{ path: '/shop/Details' }">
              <div class="s_item_liImg">
                <img src="./../../images/shen.png">
              </div>
            </router-link>
          </div>
          <div class="s_item">
            <router-link class="s_item_li" :to="{ path: '/shop/Details' }">
              <div class="s_item_liImg">
                <img src="./../../images/rac/meat.png">
              </div>
            </router-link>
            <router-link class="s_item_li" :to="{ path: '/shop/Details' }">
              <div class="s_item_liImg">
                <img src="./../../images/rac/meat2.png">
              </div>
            </router-link>
          </div>
          <div class="s_item">
            <router-link class="s_item_li" :to="{ path: '/shop/Details' }">
              <div class="s_item_liImg">
                <img src="./../../images/rac/meat3.png">
              </div>
            </router-link>
            <router-link class="s_item_li" :to="{ path: '/shop/Details' }">
              <div class="s_item_liImg">
                <img src="./../../images/rac/meat4.png">
              </div>
            </router-link>
          </div>
        </slider>
      </div>
    </div>
    <div class="top_tap" style="display: none;" ref="slider">
      <div>
        <div class="slider-item" v-on:tap="skip">
          <div class="s_shen">
            <img src="./../../images/shen.png">
          </div>
          <div class="s_title" v-show="false">名称一</div>
        </div>
        <div class="slider-item" v-on:tap="skip">
          <div class="s_shen">
            <img src="./../../images/shu.png">
          </div>
          <div class="s_title" v-show="false">名称一</div>
        </div>
        <div class="slider-item" v-on:tap="skip">
          <div class="s_shen">
            <img src="./../../images/shu.png">
          </div>
          <div class="s_title" v-show="false">名称一</div>
        </div>
        <div class="slider-item" v-on:tap="skip">
          <div class="s_shen">
            <img src="./../../images/rac/meat.png">
          </div>
          <div class="s_title" v-show="false">名称一</div>
        </div>
        <div class="slider-item" v-on:tap="skip">
          <div class="s_shen">
            <img src="./../../images/rac/meat2.png">
          </div>
          <div class="s_title" v-show="false">名称一</div>
        </div>
        <div class="slider-item" v-on:tap="skip">
          <div class="s_shen">
            <img src="./../../images/rac/meat3.png">
          </div>
          <div class="s_title" v-show="false">名称一</div>
        </div>
        <div class="slider-item" v-on:tap="skip">
          <div class="s_shen">
            <img src="./../../images/rac/meat4.png">
          </div>
          <div class="s_title" v-show="false">名称一</div>
        </div>
      </div>
    </div>
    <!--生熟肉 end-->
    <div class="c_border"></div>
    <!--精选熟食 start-->
    <div class="weui-flex">
      <div class="weui-flex__item rxcp">
        精选猪肉
      </div>
      <div class="weui-flex__item rxcp">
        香辣脆骨
      </div>
      <div class="weui-flex__item rxcp">
        红烧排骨
      </div>
    </div>
    <!--精选熟食 start-->
    <!--中部 start-->
    <div class="r_mid">
      <div class="weui-flex r_li">
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli.png">
          </div>
          <div class="r_txt">肘子</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli_2.png">
          </div>
          <div class="r_txt">脆骨</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli_3.png">
          </div>
          <div class="r_txt">猪蹄</div>
        </div>
      </div>
      <div class="weui-flex r_li">
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli.png">
          </div>
          <div class="r_txt">肘子</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli_2.png">
          </div>
          <div class="r_txt">脆骨</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli_3.png">
          </div>
          <div class="r_txt">猪蹄</div>
        </div>
      </div>
      <div class="weui-flex r_li">
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli.png">
          </div>
          <div class="r_txt">肘子</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli_2.png">
          </div>
          <div class="r_txt">脆骨</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli_3.png">
          </div>
          <div class="r_txt">猪蹄</div>
        </div>
      </div>
      <div class="weui-flex r_li">
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli.png">
          </div>
          <div class="r_txt">肘子</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli_2.png">
          </div>
          <div class="r_txt">脆骨</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/deli_3.png">
          </div>
          <div class="r_txt">猪蹄</div>
        </div>
      </div>
    </div>
    <!--中部 end-->
    <div style="height: 30px;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {
    addClass
  } from '@/common/js/dom'
  import Goback from '@/components/topnav/Gobacknav'
  import Slider from '@/components/slider/slidermenu'
  export default {
    components: {
      Goback,
      Slider
    },
    data() {
      return {
        navimgsrc: require('./../../images/gwc.png'),
        autoPlay: false
      }
    },
    methods: {
      callback() {},
      skip() {
        this.$router.push('/shop/Details')
      },
      // 左滑
      onSwipeLeft() {
        console.log('左滑')
        this.slider.goToPage(3, 0, 0)
      },
      // 右滑
      onSwipeRight() {
        console.log('右滑')
        console.log(this.slider.getCurrentPage().pageX)
        this.slider.goToPage(1, 0, 0)
      },
      // 滚动dom框
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: true,
            threshold: 0.3,
            speed: 400
          }
        })
      }
    },
    mounted() {
      var gallery = mui('.mui-slider');
      gallery.slider({
        interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
      });
      this._initSlider()
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.c_border
  height _c(20)
  background #cdcdcd
.top_tap
  // background #cdcdcd
  position: relative
  overflow: hidden
  border 1px solid #000000
  margin-bottom _c(48)
  height _c(300)
  .slider-item
    float left
    box-sizing: border-box
    overflow: hidden
    text-align: center
    width 50%
  .s_shen
    width _c(276)
    height _c(276)
    margin 0 auto
    margin-top _c(15)
    img 
      width 100%
      height 100%
  .s_title
    text-align center
    margin-top _c(15)
    margin-bottom _c(15)
    font-size $font-size-16
    height $font-size-16
.rxcp
  text-align center
  font-size $font-size-16
  line-height $font-size-16
  padding-bottom _c(20)
  padding-top _c(20)
.r_mid
  border-top 1px solid $border-color
  .r_bg
    background #cdcdcd
  .r_li
    text-align center
    .r_img
      padding-left _c(25)
      padding-right _c(25)
      margin 0 auto
      margin-top _c(25)
      height _c(95)
      img
        max-width 100% 
        max-height _c(95)
    .r_txt
      height _c(60)
      line-height _c(60)
      font-size $font-size-12
.slider-wrapper
  position: relative
  width: 100%
  height: 0
  padding-top: _c(280)
  margin-top _c(40)
  overflow: hidden
  margin-bottom _c(45)
  .slider-content
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    .s_item

      .s_item_li

        width 50%
        float left
        .s_item_liImg

          width _c(280)
          height _c(280)
          margin 0 auto
          img 
            width 100%
            height 100%
</style>