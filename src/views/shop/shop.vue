<template>
  <div class="containt">
    <!--头部 start-->
    <Goback navtitle="商城" :navimgsrc="navimgsrc" :callback="cart"></Goback>
    <!--头部 end-->
    <!--生熟肉 start-->
    <div class="weui-flex top_tap">
      <div class="weui-flex__item" v-tap="{methods:skip, url: '/shop/Raw'}">
        <div class="s_shen">
          <img src="./images/shen.png">
        </div>
        <div class="s_title">生食</div>
      </div>
      <div class="weui-flex__item" v-tap="{methods:skip, url: '/shop/Cooked'}">
        <div class="s_shen">
          <img src="./images/shu.png">
        </div>
        <div class="s_title">熟食</div>
      </div>
    </div>
    <!--生熟肉 end-->
    <!--导航 start-->
    <div class="weui-flex">
      <div class="weui-flex__item">
        <div class="s_nav">价格</div>
      </div>
      <div class="weui-flex__item">
        <div class="s_nav">销量优先</div>
      </div>
      <div class="weui-flex__item">
        <div class="s_nav">评价等级</div>
      </div>
      <div class="weui-flex__item" v-tap="{methods:screentap}">
        <div class="s_nav screen">筛选</div>
      </div>
    </div>
    <div class="scrwrapper" v-show="screenflag">
      <div class="screensel">
        <div class="elonline"></div>
        <router-link to="/shop/Raw">生肉</router-link>
        <div class="elonline"></div>
        <router-link to="/shop/Cooked">卤味</router-link>
        <div class="elonline"></div>
        <router-link to="/shop/Cooked">猪蹄</router-link>
        <div class="elonline"></div>
        <router-link to="/shop/Cooked">排骨</router-link>
      </div>
    </div>
    <!--导航 end-->
    <!--banner start-->
    <div class="mui-slider banner">
      <div class="mui-slider-group mui-slider-loop">
        <div class="mui-slider-item mui-slider-item-duplicate">
          <router-link to="/index/Activity"><img src="./images/ad-1.png" /></router-link>
        </div>
        <div class="mui-slider-item">
          <router-link to="/index/Activity"><img src="./images/ad-1.png" /></router-link>
        </div>
        <div class="mui-slider-item">
          <router-link to="/index/Activity"><img src="./images/ad-1.png" /></router-link>
        </div>
        <div class="mui-slider-item mui-slider-item-duplicate">
          <router-link to="/index/Activity"><img src="./images/ad-1.png" /></router-link>
        </div>
      </div>
    </div>
    <!--banner end-->
    <!--热销产品 start-->
    <div class="rxcp">热销产品</div>
    <div class="weui-grids">
      <div  class="weui-grid" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="weui-grid__icon">
          <img src="./images/ad-1.png">
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
          <img src="./images/ad-1.png">
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
          <img src="./images/ad-1.png">
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
      <div  class="weui-grid" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="weui-grid__icon">
          <img src="./images/ad-1.png">
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
      <div  class="weui-grid" v-tap="{methods: skip, url:'/shop/Details'}">
        <div class="weui-grid__icon">
          <img src="./images/ad-1.png">
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
    
    <!--底部nav start-->
    <tab></tab>
    <!--底部nav end-->
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from '@/components/tab/tab'
  import Goback from '@/components/topnav/Gobacknav'
  export default {
    components: {
      Tab,
      Goback
    },
    data() {
      return {
        navimgsrc: require('./images/gwc.png'),
        screenflag: false //筛选弹出层状态
      }
    },
    methods: {
      cart() {
        this.$router.push('/shop/Cart')
      },
      // 跳转
      skip(e){
        this.$router.push(e.url)
      },
      screentap(){
        this.screenflag =!this.screenflag
      }
    },
    mounted() {
      var gallery = mui('.mui-slider');
      gallery.slider({
        interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
      });
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
@import '~@/common/stylus/shops';
.top_tap
  background #cdcdcd
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
.s_nav
  text-align center
  padding-top _c(20)
  padding-bottom _c(20)
  font-size $font-size-18
.screen
  background url('./images/youxiabiao.png') right bottom no-repeat
  background-position 80% 88%
  background-size _c(14) _c(14)
.scrwrapper
  position relative
  .screensel
    position absolute
    right 0
    top 0
    z-index 99
    animation screencss 0.3s linear;
    a
      width _c(200)
      color black
      display block
      text-align center
      background white
      padding _c(10)
@keyframes screencss {
  0% { opacity: 0; }
  50% { opacity: 0.5;}
  100% { opacity: 1;}
}
</style>