import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import Element from "element-ui";
import "normalize.css/normalize.css";
import form from "@yhcommon/form";
console.log(form);

Vue.config.productionTip = false;
Vue.use(Element).use(form);
import "@/icons";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
