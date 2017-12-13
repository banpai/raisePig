// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as directives from './directives'
import Axios from './utils/axios'
import vueTap from 'v-tap' // 引入插件
// 引入touch组件
var VueTouch = require('vue-touch')

Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(vueTap, Axios)
// import VueAwesomeSwiper from 'vue-awesome-swiper' //swiper轮播


Vue.config.productionTip = false;
// Vue.use(vueTap, Axios, VueAwesomeSwiper); // 全局注册



// register global utility directives.
Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key]);
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})