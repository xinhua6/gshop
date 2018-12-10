// 导入模块
import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
// 告诉vue使用vueRouter
Vue.use(Router)
// routes是路由的数组，有两部分组成：path和 component，最后由router来管理路由
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
