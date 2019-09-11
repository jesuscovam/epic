import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    valor1: 0,
    valor2: "",
    valor3: ""
  },
  mutations: {
    add1(state, payload) {
      state.valor1 = payload.valor1;
    },
    add2(state, payload) {
      state.valor2 = payload.valor2;
    },
    add3(state, payload) {
      state.valor3 = payload.valor3;
    }
  },
  actions: {
    addValues({ commit }, payload) {
      commit("add1", payload);
      commit("add2", payload);
      commit("add3", payload);
    }
  }
});
