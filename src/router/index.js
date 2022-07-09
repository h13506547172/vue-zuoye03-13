import Vue from 'vue';
import VueRouter from 'vue-router';
import MyIndex from '@/views/MyIndex';
import MyNews from '@/views/MyNews';
import MySports from '@/views/MySport';
import guowai from "@/views/erji/guowai";
import guonei from "@/views/erji/guonei";
//编程式导航重复点击报错解决
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};

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
    children: [{
      path: '/sports/guonei',
      component: guonei,
    },{
      path: '/sports/guowai',
      component: guowai,
    },
    ]
  },
];

const router = new VueRouter({ routes: routes });
export default router;
