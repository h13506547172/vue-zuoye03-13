import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/Layout/index';
import Home from '@/views/home/index';
import Search from '@/views/Search/index';

Vue.use(VueRouter);
//路由规则
const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: '/layout/home',
        component: Home,
    //通过this.$route.meta.title来动态控制navbar的标题
        meta: { title: '首页' ,num: 0}
      },
      {
        path: '/layout/search',
        component: Search,
    //tabbar刷新页面问题，把num给active
        meta: { title: '搜索页', num: 1}
      },
    ],
  },
];
const router = new VueRouter({ routes });
export default router;
