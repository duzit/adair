# adair
练习

### 引用element ui
* 安装 npm i element-ui -S
* main.js引用   
  import ElementUI from 'element-ui'  
  Vue.use(ElementUI)  

### 引用路由
* 在router.js中定义路由，导出router实例
* 在main.js中引入 import Router from './router/router'

### 全局样式
* main.js中import './styles'


## 问题记录
* 项目启动路由跳转 dashboard ，但是不加载 dashboard 内容  
  Non-nested routes must include a leading slash character.   
  非嵌套路由必须包含前导斜杠字符
```js
{
  path: '/dashboard', // 非嵌套路由必须包含前导斜杠字符
  name: 'dashboard',
  component: () => import('../views/dashboard')
}
```
