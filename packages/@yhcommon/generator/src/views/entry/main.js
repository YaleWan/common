import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import Element from "element-ui";
import "normalize.css/normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import form from "@yhcommon/form";

Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(form);
import "@/icons";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
