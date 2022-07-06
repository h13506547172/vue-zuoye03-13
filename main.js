import Vue from 'vue'
import App from './App.vue'
// import axios from "axios";
// axios.defaults.baseURL = 'http://123.57.109.30:3006'
// Vue.prototype.$axios = axios

Vue.config.productionTip = false
import { Field ,Cell, CellGroup} from 'vant';

Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
//测试封装的请求
// import { getBookApi } from "./api/index";
// async function fn() {
//   const res = await getBookApi({
//     bookname : '红楼梦'
//   })
//   console.log(res);
// }
// fn()
new Vue({
  render: h => h(App),
}).$mount('#app')
