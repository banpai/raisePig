import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import router from './../router'
import global from './modules/global'
import user from './modules/user'

//[vuex] already installed. Vue.use(Vuex) should be called only once.
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        global,
        user,
    },
    strict: debug,
    plugins: [],
    mutations: {
        err_msg(modules, err_msg) {
            if (modules.global.err_msg) {
                modules.global.err_msg = err_msg
                router.push('/error')
            }
        }
    }
})