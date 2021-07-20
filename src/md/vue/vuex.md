## Vuex

* 状态管理模式 包含 state view actions 单向数据流

### Vuex vs 全局对象

1. Vuex的状态是响应式的，若store中状态发生变化，那么相应的组件也会得到高效的更新。
2. 不能直接改变store的状态，必须显示地提交。这样方便跟踪每个状态的变化。

### 创建一个store

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: ''
  },
  mutations: {
    someMethods: (state, params) => {
      state.name = params.name;
    }
  },
  actions: {
    changeName({ commit }, params) {
      commit('someMethods', params);
    }
  }
})

// 获取store
let name = store.state.name;
```

### 从根组件注册store

```js
new Vue({
  el: '#app',
  store
})

// 组件中使用store
this.$store.state.name;
this.$store.dispath('changeName', params);
```

```js
parsedObj = new JsonSlurper().parseText(jsonField);
[
  'parsedPath':  parsedObj.path,
  'toJson':  {
    myObj = ['field1':'123','field2':456];
    JsonOutput.toJson(myObj)
    }()
]
```

```js
new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(timestamp).getTime()
```

```json
 {

      "jsonField":"{\"path\":\"/testPath\",\"headers\":{\"h1\":[\"111\"]},\"method\":\"POST\",\"port\":12321,\"host\":\"127.0.0.1\",\"queryString\":\"a=1&b=2\",\"body\":\"[123,\\\"abc\\\",{\\\"a\\\":1,\\\"b\\\":\\\"c\\\"}]\"}"

  }
```

| 姓名 | 年龄 |
| :- | - | 
| 本 | 12 | 
| `lee new Date()` | 12 | 

```json
{
  "parsedPath":"/testPath",
  "toJson":"{\"field1\":\"123\",\"field2\":456}"
}
```