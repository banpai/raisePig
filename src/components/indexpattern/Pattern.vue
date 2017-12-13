<template>
    <div class="pattern">
        <ul>
            <li v-for="(item,index) in patitems">
                <router-link :to=item.linkto>
                    <img :src="item.imgsrc" alt="">
                    <p>{{item.name}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
/**@author gumiao
 * @description 首页banner下的功能区域
 * @event
 * @field 
 *   
 *          
 */
export default {
  name: '',
  data(){
      return{
        patitems:[
          {name:'签到',imgsrc:require('../../common/assets/sign.png'),linkto:'/index/Attendance'},
          {name:'项目介绍 ',imgsrc:require('../../common/assets/project.png'),linkto:'/index/Project'},
          {name:'公司+农户',imgsrc:require('../../common/assets/company.png'),linkto:'/index/Household'},
          {name:'人人推广',imgsrc:require('../../common/assets/extension.png'),linkto:'/index/Recommend'},
          {name:'猪厂直播',imgsrc:require('../../common/assets/live.png'),linkto:'/index/Farmlive'},
          {name:'润农食品',imgsrc:require('../../common/assets/foods.png'),linkto:'/index/Foods'},
          {name:'关于我们',imgsrc:require('../../common/assets/about.png'),linkto:'/my/aboutUS'},
          {name:'客服服务',imgsrc:require('../../common/assets/customer.png'),linkto:'/index/Custservice'}
        ]
      }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
.pattern
    padding cgrem(10) cgrem(26)
    ul
        margin 0
        padding 0
        display flex
        flex-direction row
        justify-content space-between
        flex-wrap wrap
        li
            width cgrem(80)
            height cgrem(80)
            list-style none
            a
                display block
                img
                    width cgrem(50) 
                    height cgrem(50) 
                    margin 0 auto
                    display block
                p
                    width 100%
                    text-align center
                    color #000000
                    font-size $font-size-15 
        
</style>
