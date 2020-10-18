## @hook

### 处理组建内定时器的方法
* 一般操作
```js
export default {
  mounted() {
    this.timer = setInterval(() => { ... }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
```
* @hook操作
```js
export default {
  mounted() {
    const timer = setInterval(() => {...}, 1000);
    this.$once('hook:beforeDestroy', () => { clearInterval(timer) })
  }
}
```

### v-on='hook:xxx'设置loading
```html
<v-chart
  @hook:mounted="loading = false"
  @hook:beforeUpdated="loading = true"
  @hook:updated="loading = false"
  :data="data"
/>
```