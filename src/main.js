import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "./store";

// 全局引入按需引入UI库 vant
import "@/plugins/vant";
// 引入全局样式
import "@/styles/index.scss";
// 设置 js中可以访问 $cdn
// 引入cdn
import { $cdn } from "@/config";
Vue.prototype.$cdn = $cdn;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
