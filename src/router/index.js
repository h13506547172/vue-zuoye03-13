import Vue from 'vue';
import VueRouter from 'vue-router';
import MyIndex from '@/views/MyIndex';
import MyNews from '@/views/MyNews';
import MySports from '@/views/MySport';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: MyIndex,
  },
  {
    path: '/news',
    component: MyNews,
  },
  {
    path: '/index',
    component: MyIndex,
  },
  {
    path: '/sports',
    component: MySports,
  },
];

const router = new VueRouter({ routes: routes });
export default router;
