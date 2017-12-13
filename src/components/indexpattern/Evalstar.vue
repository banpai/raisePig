<template>
  <div id="shoplist">
    <div class="startit">
      <p>{{name}}</p>
    </div>
    <p class="all" v-tap="{methods:callback}">
      <input type="radio" :name="Classname" value="1" v-model="Inputdata" :disabled="disabledInput=='false'?false:true"/>
      <span></span>
      <input type="radio" :name="Classname" value="2" v-model="Inputdata" :disabled="disabledInput=='false'?false:true"/>
      <span></span>
      <input type="radio" :name="Classname" value="3" v-model="Inputdata" :disabled="disabledInput=='false'?false:true"/>
      <span></span>
      <input type="radio" :name="Classname" value="4" v-model="Inputdata" :disabled="disabledInput=='false'?false:true"/>
      <span></span>
      <input type="radio" :name="Classname" value="5" v-model="Inputdata" :disabled="disabledInput=='false'?false:true"/>
      <span></span>
    </p>
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
  import {
    mapMutations
  } from 'vuex'
  export default {
    name: 'shoplist',
    data() {
      return {
        Inputdata: this.inputdata, //评价星级
        disabledInput: this.disabledInputs, //input能否被点击状态
        Classname:this.className  //input的name
      }
    },
    props: ['name','callback','inputdata','disabledInputs','className'],
    components: {

    },
    methods: {
      ...mapMutations({
        err_msg: 'err_msg'
      }),
    },
    activated(){
      // console.log(this.Classname)
    }
  }
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
    p
      margin 0
      padding 0
      font-size $font-size-15
    #shoplist
      width 100%
      padding _c(30) _c(30)
      padding-bottom 0
      display flex
      flex-direction row
      justify-content space-between
    .startit
      width 50%
    .all
      width 43%
      margin-top _c(7)
    .all>input
      opacity:0
      position:absolute
      width _c(32)
      height _c(32)
      margin:0
    .all>span
      width _c(32)
      height _c(32)
      background url('../../common/assets/star1.png') left  top no-repeat
      background-size 100% 100%
      display block
      float left
      margin-right _c(20)
    
    .all>input:checked~span
       background url('../../common/assets/star2.png') left  top no-repeat
       background-size 100% 100%
    .all>input:checked+span
       background url('../../common/assets/star1.png') left  top no-repeat
       background-size 100% 100%
</style>