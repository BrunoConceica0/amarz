import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
  },
  getters: {},
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item);
    },
    REMOVE_ITEM(state, item) {
      state.items.splice(item, 1);
    },
  },
  actions: {},
  modules: {},
});
