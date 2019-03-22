import Vue from 'vue'
import App from './App'

// 引入路由模块
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: c => c(App),
  // 6.挂载路由
  router
})
