import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由注册
const routes = [
  {
    path: '',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard', // 非嵌套路由必须包含前导斜杠字符
    name: 'dashboard',
    component: () => import('../views/dashboard'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('../views/document'),
    meta: {
      title: '文档DOC'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

