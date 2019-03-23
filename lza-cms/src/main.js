import Vue from 'vue'
import App from './App'

// 引入axios
import axios from 'axios';
Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://127.0.0.1:5000/';

// 引入moment.js文件修改时间格式
import moment from 'moment';
Vue.use(moment);

// 定义一个全局过滤器
Vue.filter('dateFmg', (date, str = "YYYY-MM-DD HH:mm:ss") => {
  return moment(date).format(str)
})

// 按需引入vant
import { NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Card, Button, Tab, Tabs,Lazyload } from 'vant';
Vue.use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Card)
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Lazyload)

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
