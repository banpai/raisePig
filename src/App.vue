<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      var offWidth = window.screen.width / 30; //这里用宽度30表示1rem取得的px
      document.getElementsByTagName("html")[0].style.fontSize = offWidth + 'px';
    }
  }
</script>

<style scoped lang="stylus">

</style>
