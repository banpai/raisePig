import * as types from '../mutation-types'

// initial state
const state = {
    title: null,
    debug: process.env.NODE_ENV !== 'production',
    err_msg: '页面出错了~'
}

// getters
const getters = {
    
}

// actions
const actions = {
    
}

// mutations
let mutations = {}

//mutations[types.SET_TITLE] = function (state, r) {
//    state.title = r
//}

export default {
    state,
    getters,
    actions,
    mutations
}
