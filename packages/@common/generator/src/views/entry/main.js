import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import Element from "element-ui";
import "normalize.css/normalize.css";

Vue.config.productionTip = false;
Vue.use(Element);
import "@/icons";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
