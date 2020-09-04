# Vue EveryDay

### productionTip
* 设置false以阻止vue在启动时生成生产提示
* Vue.config.productionTip = false

## 全局API

### Vue.extend(options)
* 使用基础Vue构造器，创建一个子类，参数是一个包含组件选项的对象。
  data选项时特例，需要注意在Vue.extend()中必须是函数。
  date: function() { return {} }

### Vue.nextTick([callback, context])
* 在下次DOM更新循环结束之后执行延迟回调，在修改数据之后立即调用该方法，获取更新后的DOM。

### Vue.set(target, propertyName/index, value)
* 向响应式对象中添加一个属性，并确保这个新属性也是响应式的，且触发视图更新。
  必须用于向响应式对象上添加属性，因为Vue无法探测普通的新增属性。
  this.$set(this.addFormDialog, 'punitId', row.punitId)

### Vue.directive(id, [definition])
* 注册或获取全局指令
* 注册全局自定义指令 v-focus
  Vue.directive('focus', {
    inserted: function(el) {
      el.focus()
    }
  })
* 注册局部指令
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  }
  
### Vue.filter(id, [definition])
* 过滤器可以用在两个地方：双花括号插值和v-bind表达式。过滤器应该被添加到js表达式的尾部，
  由管道"|"符号指示。
  {{ message | capitalize }}
  <div v-bind:id="rawId | formatId"></div>
* 本地过滤器
  filters: {
    capitalize: function(value) {
      ...
    }
  }
* 全局定义过滤器
  Vue.filter('capitalize', function(value) {
    ...
  })
  new Vue({
    ...
  })
* 过滤器函数总接收表达式的值作为第一个参数，capitalize函数将接收message作为第一个参数
  {{ message | filterA('arg1', arg2) }} filterA接收三个参数

## 选项 / 数据

### data
* Vue实例的数据对象，推荐在创建实例之前，就声明所有的根级响应式属性。
* 当一个组件被定义，data必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。
  通过提供data函数，每次创建一个新实例后，我们能够调用data函数，从而返回初始数据的一个全新副本数据对象。

### props
* 可以是数组或对象，用于接收来自父组件的数据。对象允许配置高级选项，如类型检测，自定义验证和设置默认值。
  age: {
    type: Number,
    default: 0,
    required: true,
    validator: function(value) {
      return value > 0
    }
  }

### watch
* watch: {
    a: function(val, old) {
      console.log(val, old)
    },
    b: 'someMethod',
    <!-- 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深 -->
    c: {
      handler: function(val, old) {},
      deep: true
    },
    d: {
      handler: function(val, old) {},
      immediate: true
    },
    <!-- 侦听对象e的name属性 -->
    'e.name': function(val, old) {}
  }

### 全局配置errorHandler
```
Vue.config.errorHandler = function(err, vm, info) {
  // Handler error
}
```

## Vue CLI
### HTML和静态资源
#### 插值
* <%= VALUE %> 用来做不转义插值
* <%- VALUE %> 用来做HTML转义插值
* <% expression %> 用来描述JavaScript流程控制
* 常用 <link ref="icon" href="<%= BASE_URL %>favicon.ico">

#### Preload
* 用来指定页面加载后很快会被用到的资源，所以在页面加载过程中，希望在浏览器加载之前尽早preload。
  默认情况下，一个Vue CLI应用会为所有初始化渲染需要的文件自动生成preload提示。

#### Prefetch
* 用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。
  默认情况下，一个Vue CLI应用会为所有作为async chunk生成的JavaScript文件自动生成prefetch提示。
* 移除 prefetch 插件
` config.plugins.delete('prefetch') `
* 当 prefetch 插件被禁用时，可以通过 webpack 的内联注释手动选定要提前获取的代码区块，webpack 的运行时
  会在父级区块被加载后注入 prefetch 链接。
` import(/* webpackPrefetch: true */ 'xxx.vue') `
* Prefetch 链接将会消耗带宽。如果你的应用很大且有很多 async chunk，而用户主要使用的是对带宽较敏感的移动端，
  那么你可能需要关掉 prefetch 链接并手动选择要提前获取的代码区块。

#### 不生成index 
* 在vue.config.js中配置
```
chainWebpack: config => {
  config.plugins.delete('html')
  config.plugins.delete('preload')
  config.plugins.delete('prefetch')
}
```

#### chainWebpack 调整内联文件大小限制
```
chainWebpack: config => {
  config.module
    .rule('images')
      .use('url-loader')
        .loader('url-loader')
        .tap(option => Object.assign(option, { limit: 10240 })
}
```

#### public 文件夹
* 任何放置在public文件夹的资源都会被简单的复制，不经过webpack，需要通过绝对路径来引用。

