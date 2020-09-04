## 小记录的整理

### git回退到某个版本
* git log命令查看所有的历史版本，获取某个历史版本的id，例如139dcfaa558e3276b30b6b2e5cbbb9c00bbdca96
* git reset --hard 139dcfaa558e3276b30b6b2e5cbbb9c00bbdca96
* git push -f -u origin master

### 禁用Chrome浏览器默认保存密码提示
* 大部分浏览器是根据表单域的type='password'判断密码域的，使用'动态设置密码域'方法解决
```js
el-input( 
  v-model="facInitForm.dbPassword", 
  placeholder="请输入密码", 
  :type="inputType", 
  @focus="inputType = 'password'", 
  autocomplete="off")
```
 
### 数组遍历 判断条件成立即终止遍历 for of使用break
```js
  for (const child of item.children) {
    if (this.getUserMenus(child.code)) {
      item.href = child.href
      break
    }
  }
```

### 设置指定行隐藏显示
```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3; // 行数
-webkit-box-orient: vertical;
```

### vue.config.js配置
* devServer 
```
devServer: {
  port: 9001, // 启动端口号，默认8080
  proxy: 'http://localhost:4000', // 将任何未知请求代理到
}
```
* 使用chainWebpack独立打包单个组件
```
chainWebpack: config => {
  config
    .entry('app')
    .clear()
    .end()
    .entry('app')
    .add('./src/views/xxx.entry.js') // xxx.entry.js 注册某组件
    .end()
}
```

### http-server
* 全局安装 npm i -g serve
* 启动 serve 在dist目录下
* 点击项目文件夹

### 字体颜色渐变
```
.description {
  font-size: 18px;
  font-weight: bold;
  background:linear-gradient(0deg,rgba(8,167,249,1) 0%, rgba(183,245,253,1) 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
```


### 打包后的chunk-vendors.xxx.js文件中含有es6语法
* android低版本加载es6语法失败，使用babel-loader转义后依然存在es6

```
module: {
  rules: [{
    test: /\.js$/,
    // loader: 'babel-loader',
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    },
    exclude: /node_modules/
  }]
}
```

* 使用 transpileDependencies 包含 @pillarjs 后依然存在es6，可以是其他依赖中还是会有es6的写法，
  排查后发现代码中有单独引用element-ui组件，
  `import ElDialog from 'element-ui/packages/dialog'`
  最后加上 element-ui/src
  `transpileDependencies: ['@pillarjs', 'element-ui/src'],`

* transpileDependencies，默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
  如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。

### h5页面调用
* 引用dsbridge.js
* 注册回调方法

```
dsBridge.register('submit', () => {
  return this.updateOrderStatus()
})
```

* 在回调函数中调用app接口

```
let toastData = "{\n" +
"    \"app_key\":\"UNICLOUD\",\n" +
"    \"version\":\"1.0.1\",\n" +
"    \"data\":{\n" +
"        \"tips\":\"校验格式有误\"\n" +
"    }\n" +
"}\n";
dsBridge.call("UIApi.toast", toastData, function(info) {

})
```

* h5页面容器设置，项目代码中设置了html，body的最小宽度1400px，
  会影响h5页面的宽度，判断如果窗口宽度小于500px时不设置html和
  body的最小宽度。如果项目没有html和body的最小宽度或其他设置，
  h5页面设置宽高100%即可。

```
@media screen and (min-width: 500px) {
  html,
  body {
    min-width: 1400px;
  }
}
```

* vant版本影响组件使用，项目instal vant版本是最新的，表单组件
  使用的是低版本，代码逻辑取值会报错，回退低版本解决。

### require.context
* require.context(directory, useSubdirectories = false, regExp = /^\.\//)
  directory: 要搜索的文件夹目录
  Boolean: 是否搜索子目录
  regExp: 匹配文件的正则表达式
* require.context("./test", false, /\.test\.js$/);
 （创建了）一个包含了 test 文件夹（不包含子目录）下面的、所有文件名以 `.test.js` 结尾的、能被 require 请求到的文件的上下文。

### 懒加载
* const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
* const Foo = () => import('./Foo.vue') import返回Promise()对象
```
const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```

### element.scrollInfoView() 让当前元素滚动到浏览器窗口的可视区域内
#### 参数
> alignToTop Boolean
  true 元素的顶部将和其所在滚动区的可视区域的顶端对齐
  false 元素的底端将和其所在滚动区的可视区域的底端对齐
> scrollInfoViewOptions 包含以下属性的对象
  behavior 定义动画过渡的效果
    auto smooth
  block 定义垂直方向的对齐
    start center end nearest
  inline 定义水平方向的对齐
    start center end nearest

### 本地使用monaco-editor遇到的问题
> vue.config.js添加配置

```
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  transpileDependencies: ['@pillarjs'],
  chainWebpack: config => {
    config
      .plugin('monaco-editor')
      .use(CopyWebpackPlugin, [['node_modules/monaco-editor/min/']]);
  },
};
```

> 引用monaco-editor目录地址

```
Vue.use(MonacoEditor, {
  url: `${location.origin}/vs`
})
```

### 拖拽 改变顺序
> https://github.com/SortableJS/Vue.Draggable

### flex-shrink
> flex-shrink 属性只能是一个 <number>，不为负值，值越大，收缩越大。
> 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，
  其收缩的大小是依据 flex-shrink 的值。

### 根据当前节点的id，查询出所有父级节点
```
export function getParent(data2, nodeId2) {
  let arrRes = [];
  if (data2.length == 0) {
    if (!!nodeId2) {
      arrRes.unshift(data2)
    }
    return arrRes;
  }
  let rev = (data, nodeId) => {
    for (var i = 0, length = data.length; i < length; i++) {
      let node = data[i];
      if (node.id == nodeId) {
        arrRes.unshift(node)
        rev(data2, node.parent_id);
        break;
      } else {
        if (!!node.children) {
          rev(node.children, nodeId);
        }
      }
    }
    return arrRes;
  };
  arrRes = rev(data2, nodeId2);
  return arrRes;
}
```

### window.history 
> history.back() 浏览器后退功能相同
> history.forward() 浏览器向前功能相同
> history.go(n) 接收一个整数作为参数，移动到该整数指定的页面
  go(1) == forward()
  go(-1) == back()
  go(0) 刷新当前页面

### el-autocomplete
```
<el-autocomplete
    v-model="state4"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入内容"
    @select="((item)=>{handleSelect(item, index)})"
    // 写个闭包就可以了，index表示第几个组件
></el-autocomplete>
```

### vue 如何获取拉回数据后图片的高度
```
<img
  :src="userInfo.profilePicture"
  alt
  class="img-picture"
  v-if="userInfo.profilePicture"
  ref="myImg"
  @load="imageFn"
>
 imageFn() {
  console.log(this.$refs.myImg.offsetHeight);
  console.log(this.$refs.myImg.offsetWidth);
 },
```

### 如何设置body背景色，height:100%,不生效
```
同时设置html，body的高度
html,body{
  height:100%；
} 
或
body{
  height: 100vh; // 代表占屏幕100%
}
```

### 设置input 文本框的 placeholder 的颜色
```
input::-webkit-input-placeholder{
  color:rgba(144,147,153,1);
}
```

### hasOwnProperty 
* 返回一个布尔值，指示对象自身是否具有指定的属性
```
let object = {
  name: ''
}
object.hasOwnProperty('name') // true
object.hasOwnProperty('code') // false
```

### 指定安装element-ui版本
* npm i element-ui@2.6.3

### 本地起生产环境 serve 
* npm i -g serve 全局安装  
  启动命令 serve  在dist目录启动

### 审查项目的 webpack 配置
* vue inspect --mode production > production.js  
* vue inspect > output.js

### npm 查看和设置源
* npm config get registry
* npm config set registry http://10.0.53.132/artifactory/api/npm/npm/

### filter() 创建一个新数组，
```
let newArray = arr.filter(callback(element, index, array), thisArg)
callback 
  用来测试数组中的每个元素的函数，返回true标识通过测试，并保留该元素。false则不保留
  element 当前正在处理的元素
  index 索引
  array 调用了filter的数组本身
thisArg
  执行callback时，用于this的值
```

### 紫光云npm源配置
* http://10.0.53.147/pages/viewpage.action?pageId=8127733

### 新增菜单 路由 
* baseConfig\src\views\layout\components\Sidebar\index.vue  routerMap
* baseConfig\src\permission.js  pathFnMap

### 左侧菜单完全显示
* 问题现象：菜单展开过多时不能完全显示展开的菜单
```
.el-scrollbar__wrap {
  height: calc(100% - 60px)
}
```
