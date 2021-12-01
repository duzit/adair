const list = {
  state: {
    users: ['lee', 'lina', 'ben'],
    icons: [1, 2, 3],
  },
  getters: {
    filterIcons: (state) => {
      return state.icons.filter(i => i > 1)
    }
  },
  mutations: {
    SET_USERS_LIST: (state, list) => {
      state.users = list;
    },
    SET_ICONS_LIST: (state, list) => {
      state.icons = list;
    }
  },
  actions: {
    setUserList(opt, list) {
      console.log(opt, 'opt');
      /**
       * opt 包含如下：
       * commit ƒ boundCommit(type, payload, options)
       * dispatch ƒ boundDispatch(type, payload)
       * getters
       * rootGetters
       * rootState // 根state 包含modules
       * state // 本 modules state
       */
      opt.commit('SET_USERS_LIST', list);
    }
  }
}

export default list;