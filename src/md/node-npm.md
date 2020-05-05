## node npm 
---
### node 模块安装
* 如果指定—save参数，那么此模块将会被添加到package.json文件中的dependencies依赖列表中，  
  然后通过npm install命令即可自动安装依赖列表中所列出的所有模块。

### 本地启node服务
* npm run build 打包生成的文件目录下，启动bash，然后node server.js。  
  访问目录http://localhost:8070/gyyt/suzhou#/或者本地ip，http://10.0.0.42:8070/gyyt/suzhou#/，  
  需要注意的是在prod.env.js中的ip改为可访问的后台ip。

### 本地起生产环境 serve 
* npm i -g serve 全局安装  
  启动命令 serve  在dist目录启动

### node部署代理转发
* 安装http-proxy-middleware   
  npm install --save-dev http-proxy-middleware
* 在server.js中引用
```js
const proxy = require('http-proxy-middleware');
let options = {
  target: 'http://172.19.18.158:83', // target host 代理指向的路径
  changeOrigin: true,               // needed for virtual hosted sites
  ws: true,                         // proxy websockets
  pathRewrite: { // 重写
    "^/file": '/mapJson/', // 所有带file前缀的请求url 均重写为/mapJson
  }
};
// create the proxy (without context)
let exampleProxy = proxy(options);
app.use('/file', exampleProxy); // 使用 所有带file前缀的请求url使用代理
```
* 在其他文件中请求
```js
let api = window.location.origin + '/file/' + local.get('map-json'); // 带‘/file’前缀 
axios.get(api).then(…)
```
