## troubleshooting

----------

### 项目启动路由跳转 dashboard ，但是不加载 dashboard 内容

* 告警 Non-nested routes must include a leading slash character.
* 原因：非嵌套路由必须包含前导斜杠字符

```js
{
  path: '/dashboard', // 非嵌套路由必须包含前导斜杠字符
  name: 'dashboard',
  component: () => import('../views/dashboard')
}
```

### 全局指令 focus

* 如果在 el-input 上使用 v-focus 是不起作用的，可以使用 autofocus 属性
* 原生 input 上使用 v-focus 是可以的

### 使用 reg.test(str) 方法无效问题

* 如下代码一直返回 false，原因是正则表达式写错了

```js
let str1 = '123'
let reg = /^[a-z0-9]$/g // 匹配单个数字
let reg = /^[a-z0-9]+$/g // 匹配多个数字
reg.test(str1)
```

### 使用 ::before ::after 伪元素要设为块级元素

```css
h3 {
  position: relative;
  margin-bottom: 10px;
  &::before {
    content: '';
    display: inline-block;
    height: 1rem;
    width: 3px;
    background: #409EFF;
    margin-right: 5px;
    position: absolute;
    top: 3px;
    left: -8px;
  }
}
```
