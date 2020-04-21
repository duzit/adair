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

