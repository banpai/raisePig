<template>
<div>
  <header class="mui-bar mui-bar-nav">
    <h1 class="mui-title">{{navtitle}}</h1>
  </header>
  <div class="mui-content">
    <img src="../common/assets/logo.png">
    <div class="title">
      routes
    </div>
    <div class="mui-card" style="margin-bottom: 35px;">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="item in list">
          <router-link class="mui-navigate-right" :to="{ name: item.name }">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <Tab></Tab>
</div>
</template>

<script>
  import router from '@/router'
  import Tab from '@/components/tab/tab'

  export default {
    components: {
      Tab
    },
    data() {
      return {
        list: [],
        navtitle: '首页标题'    // 导航栏标题
      }
    },
    mounted () {
      console.log(this.$route.name);
    },
    created() {
      this.list = router.options.routes.filter(t => t.name !== this.$route.name)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .mui-content
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
</style>
