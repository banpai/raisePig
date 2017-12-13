<template>
  <div class="containt">
    <!--头部 start-->
    <Goback navtitle="生食" fanhuifalg="true"></Goback>
    <!--头部 end-->
    <!--猪肉部位点击 start-->
    <div class="pig weui-flex">
      <div class="p_img" v-tap="{methods: changePic, name: 'headFlag'}">
        <img v-show="pic.headFlag" src="./../../images/bw/head.png">
        <img v-show="!pic.headFlag" src="./../../images/bw/head_2.png">
      </div>
      <div class="p_img" v-tap="{methods: changePic, name: 'handFlag'}">
        <img v-show="pic.handFlag" src="./../../images/bw/hand.png">
        <img v-show="!pic.handFlag" src="./../../images/bw/hand_2.png">
      </div>
      <div class="middle">
        <div class="p_img" v-tap="{methods: changePic, name: 'waietFlag'}">
          <img v-show="pic.waietFlag" src="./../../images/bw/waiet.png">
          <img v-show="!pic.waietFlag" src="./../../images/bw/waiet_2.png">
        </div>
        <div class="p_img duzi" v-tap="{methods: changePic, name: 'tripeFlag'}">
          <img v-show="pic.tripeFlag" src="./../../images/bw/tripe.png">
          <img v-show="!pic.tripeFlag" src="./../../images/bw/tripe_2.png">
        </div>
      </div>
      <div class="p_img" v-tap="{methods: changePic, name: 'legFlag'}">
        <img v-show="pic.legFlag" src="./../../images/bw/leg.png">
        <img v-show="!pic.legFlag" src="./../../images/bw/leg_2.png">
      </div>
    </div>
    <!--猪肉部位点击 end-->
    <!--中部 start-->
    <div class="r_mid">
      <div v-bind:class="pic.headFlag?'weui-flex r_li':'weui-flex r_li r_bg'">
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_3.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
       <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_4.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
       <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_5.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_6.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
      </div>
      <div v-bind:class="pic.handFlag?'weui-flex r_li':'weui-flex r_li r_bg'">
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_7.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
       <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_15.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
       <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_9.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_10.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
      </div>
      <div v-bind:class="pic.waietFlag?'weui-flex r_li':'weui-flex r_li r_bg'">
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_11.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
       <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_12.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
       <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_13.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_14.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
      </div>
      <div v-bind:class="pic.tripeFlag?'weui-flex r_li':'weui-flex r_li r_bg'">
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_15.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
       <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_16.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
       <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_13.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_14.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
      </div>
      <div v-bind:class="pic.legFlag?'weui-flex r_li':'weui-flex r_li r_bg'">
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_3.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
       <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_4.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
       <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_5.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
        <div class="weui-flex__item" v-tap="{methods: skip}">
          <div class="r_img">
            <img src="./../../images/rac/raw_6.png">
          </div>
          <div class="r_txt">前蹄膀</div>
        </div>
      </div>
    </div>
    <!--中部 end-->
    <div style="height: 30px;"></div>
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
        pic: {
          headFlag: false,
          handFlag: true,
          waietFlag: true,
          tripeFlag: true,
          legFlag: true
        }
      }
    },
    methods: {
      // 更改部位
      changePic(e) {
        for (var v in this.pic) {
          this.pic[v] = true;
        }
        this.pic[e.name] = false
      },
      skip(){
         this.$router.push('/shop/Details')
      }
    },
    mounted() {}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.pig
  height _c(365)
  padding-left _c(15)
  padding-right _c(15)
  padding-bottom _c(15)
  padding-top _c(20)
  .p_img
    // border 1px solid red
    img 
      width 100%
  .middle
    // border 1px solid #000
    overflow hidden
    .duzi
      height _c(100)
      img
        height 100%
.r_mid
  
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
</style>