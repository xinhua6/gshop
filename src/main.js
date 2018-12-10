// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引用路由
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  // 将路由注入到跟实例中
  router
})
