const user = {
  state: {
    username: 'Ben',
    sex: 'fale',
    age: '14'
  },
  // 只能同步
  mutations: {
    CHANGE_USER_USERNAME: (state, username) => {
      state.username = username;
    }
  },
  // 支持异步
  actions: {
    changeUserUsername({ commit }, username) {
      commit('CHANGE_USER_USERNAME', username);
    }
  }
}

export default user