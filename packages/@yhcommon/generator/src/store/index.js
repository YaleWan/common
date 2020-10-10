import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import drawer from "./modules/drawer";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    drawer
  },
  getters
});

export default store;
