import Vue from 'vue'
// 1.引入路由
import VueRouter from 'vue-router'


// 2.注册路由中间件
Vue.use(VueRouter);

// 3.引入组件对象
import Home from '../components/tabbar/Home';
import Rember from '../components/tabbar/Rember';
import Shopcar from '../components/tabbar/Shopcar';
import Search from '../components/tabbar/Search';
import NewsList from '../components/news/NewsList';
import NewsInfo from '../components/news/NewsInfo';
import PhotoList from '../components/photos/PhotoList';
import PhotoInfo from '../components/photos/PhotoInfo';

// 4.实例化路由对象
export default new VueRouter({
  // 5.配置路由规则
  routes: [
    // tabbar路由配置
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/rember', component: Rember },
    { path: '/shopcar', component: Shopcar },
    { path: '/search', component: Search },
    // 新闻资讯路由配置
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newslist/newsInfo/:id', component: NewsInfo },
    // 图片分享路由配置
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/photoinfo/:id', component: PhotoInfo }
  ]
})