import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import list from './modules/list';
import getters from './getters.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: 'adair',
    age: 12,
  },
  modules: {
    user,
    list
  },
  getters,
  mutations: {
    CHANGE_STORE: (state, info) => {
      state.name = info.name;
      state.age = info.age;
    },
  },
  actions: {
    changeStoreInfo({ commit }, info) {
      commit('CHANGE_STORE', info);
    },
  },
});

export default store;
