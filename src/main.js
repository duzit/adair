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

Vue.config.productionTip = false
// 完整引用element-ui
Vue.use(ElementUI, {
  size: 'mini'
})

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

new Vue({
  vueName: 'Vue',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
