import Vue from 'vue'
// 1.引入路由
import VueRouter from 'vue-router'
// 引入axios
import axios from 'axios';
Vue.prototype.$http = axios;

// 全局引入mintui
import { NavBar,Tabbar, TabbarItem ,Swipe, SwipeItem} from 'vant';
Vue.use(NavBar)
   .use(Tabbar)
   .use(TabbarItem)
   .use(Swipe)
   .use(SwipeItem)

// 2.注册路由中间件
Vue.use(VueRouter);

// 3.引入组件对象
import Home from '../components/Home';
import Rember from '../components/Rember';
import Shopcar from '../components/Shopcar';
import Search from '../components/Search';

// 4.实例化路由对象
export default new VueRouter({
  // 5.配置路由规则
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/rember', component: Rember },
    { path: '/shopcar', component: Shopcar },
    { path: '/search', component: Search },
  ]
})