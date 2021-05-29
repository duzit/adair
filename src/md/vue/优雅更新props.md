## 优雅更新props

### 一般做法

```js
// child.vue
export default {
  props: {
    title: String
  },
  methods: {
    changeTitle() {
      this.$emit('change-title', 'hello')
    }
  }
}

// parent.vue
<child :title="title" @change-title="changeTitle" ></child>
export default {
  data() {
    return {
      title: 'title'
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    }
  }
}
```

### 优雅做法

* 只需要在绑定属性上添加 .sync，在子组件内部就可以触发 update:属性名 来更新 prop

```js
// parent.vue
<child :title.sync="title" ></child>

// child.vue
export default {
  props: {
    title: String
  },
  methods: {
    changeTitle() {
      this.$emit('update:title', 'hello')
    }
  }
}
```
