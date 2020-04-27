## Vue
------
### vm.$watch(expOrFn, callback, [options])
#### 参数
* { string | Function } expOrFn
* { Function | Object } callback
* { Object } [options]
   * { boolean } deep
   * { boolean } immediate 
#### 返回值 { Function } unwatch
#### 选项
* deep 为了发现对象内部值的变化，可以在选项参数中指定 deep: true。注意监听数组的变更不需要这么做。
* immediate 将立即以表达式的当前值触发回调 触发一次  
  注意在带有 immediate 选项时，你不能在第一次回调时取消侦听给定的 property。

### data
* Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化
* 以 _ 或 $ 开头的属性不会被 Vue 实例代理，因为它们可能和 Vue 内置的属性、API 方法冲突   
  可以使用例如 vm.$data._property 的方式访问这些属性。
#### 响应式原理
* 当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，   
  并使用 Object.defineProperty 把这些属性全部转为 getter/setter。Object.defineProperty   
  是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。  
  这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在属性被访问和修改时通知变更。 
* ![data](./imgs/data.png '原理图')

### Vue.use(plugin)
* 通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成
```js
Vue.use(plugin)
new Vue({})
```
* 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件
* 如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。  
  install 方法调用时，会将 Vue 作为参数传入
```js
// main.js
import mixplugin from './mixin';
Vue.use(mixplugin);

// mixin.js
export default {
  install: function () {
    Vue.mixin(mainMixin);
  }
}
```

### router-link
* 默认渲染成有链接的 <a> 标签，可以通过配置 tag 属性生成别的标签。
* 相比 <a href="...">   
   1. history 和 hash 模式下表现一致
   2. history 模式下，router-link 会守卫点击事件，不会重新加载页面
   3. history 模式下使用 base 选项后，所有的 to 属性都不需要写基路径了
