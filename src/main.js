import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./stores";
import axios from 'axios'//全局独可以访问不需要一个个添加

Vue.prototype.axios=axios;//可直接使用this引用axios

//全局过滤器
Vue.filter('setWH',(url,arg)=>{
  return  url.replace(/w\.h/,arg);//replace(/w\.h/,arg);(被替换参数，替换参数）
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
