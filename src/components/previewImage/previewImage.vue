<template>
  <div class="contain">
    <div class="weui-gallery custom-classname weui-animate-fade-in" style="display: block;" v-tap="{methods: tap}" v-show="visible">
      <span class="weui-gallery__img" v-bind:style="'backgroundImage:url('+src+')'"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      src: String,
      visible: Boolean
    },
    methods: {
      tap() {
        this.$emit('update:visible', false)
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/stylus/variable';
.weui-gallery__img {
  height: 100%;
}
</style>