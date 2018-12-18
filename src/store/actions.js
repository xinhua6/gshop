// 通过mutation间接跟新state的多个方法对象
import {reqAddress,resCategories,reqShops} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS} from './mutation-types'
import state from './state';

export default {
    // 异步获取地址
    async getAddress({commit,stte}) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        commit(RECEIVE_ADDRESS, {address:result.data})
    },

    // 异步获取分类列表
    async getCategories({commit}) {
        const result = await reqCategories()
        commit(RECEIVE_CATEGORIES, {categories:result.data})
    },

    // 异步获取商家列表
    async getShops({commit,state}) {
        const {latitude, longitude} = state
        const result = await reShops({latitude, longitude})
        commit(RECEIVE_SHOPS, {shops:result.data})
    },
}