// vuex最核心的管理对象store
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutation from './mutation'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutation,
    actions,
    getters
})