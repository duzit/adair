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

