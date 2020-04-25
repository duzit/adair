import Vue from 'vue'
import App from './App.vue'
// 安装后引用 npm i element-ui -S
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 路由
import router from './router/router'
// 全局样式
import './styles/index.scss'

Vue.config.productionTip = false
// 完整引用element-ui
Vue.use(ElementUI)

new Vue({
  vueName: 'Vue',
  router,
  render: h => h(App),
}).$mount('#app')
