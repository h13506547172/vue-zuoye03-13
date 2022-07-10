import Vue from 'vue'
import App from './App.vue'
import '@/assets/mobile/flexible'
import '@/assets/styles/reset.css'
import router from "@/router/index";
Vue.config.productionTip = false
//按需引入组件
import { NavBar, Tabbar, TabbarItem, Cell, CellGroup, Image as VanImage,Col, Row, Icon, Search,List,Toast } from 'vant';
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List);
Vue.use(Toast);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
