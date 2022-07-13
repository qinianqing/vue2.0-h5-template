import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import modules from "./store";
Vue.use(Vuex);
const persist = new VuexPersistence({
  storage: window.sessionStorage,
});
const plugins = [persist.plugin];
export default new Vuex.Store({
  modules,
  plugins,
});
