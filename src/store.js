import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    korogus: 0
  },
  mutations: {
    'CickKorogu': function (state) {
      state.korogus++;
    }
  },
  actions: {}
});
