const user = {
  state: {
    username: 'Ben',
    sex: 'fale',
    age: '14'
  },
  // 只能同步
  mutations: {
    CHANGE_USER_AGE: (state, age) => {
      state.age = age;
    }
  },
  // 支持异步
  actions: {
    changeUserAge({ commit }, age) {
      commit('CHANGE_USER_AGE', age);
    }
  }
}

export default user