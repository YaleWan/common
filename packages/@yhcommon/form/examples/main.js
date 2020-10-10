import Vue from "vue";
import App from "./App.vue";
import elem from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import form from "../src/index";

Vue.config.productionTip = false;
Vue.use(elem);
Vue.use(form);

new Vue({
  render: h => h(App)
}).$mount("#app");
