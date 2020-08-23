import Vue from 'vue'
import App from './App.vue'
// 安装后引用 npm i element-ui -S
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 路由
import router from './router/router'
// 全局样式
import './styles/index.scss'
// 全局组件
import './components/index.js'
// vuex
import store from './store'

import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'
// 如果开启了typescript 需要额外安装 npm install @types/highlight.js
// 通过 import * as hljs from 'highlight.js' 引入
Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

// 阻止vue在启动时生成生产提示 为true时在控制台会多出提示信息
Vue.config.productionTip = false
// 完整引用element-ui
Vue.use(ElementUI, {
  size: 'mini'
})

// 全局注册过滤器
Vue.filter('toUpString', function(value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

Vue.directive('focus',{
  inserted(el) {
    el.focus()
  }
})

// 获取webpack配置的全局变量
console.log(CONFIG_ENV, 122);
console.log(FLAG, 122);
console.log(calc, 122);

new Vue({
  vueName: 'Vue',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
