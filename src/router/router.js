import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由注册
const routes = [
  {
    path: 'document',
    name: 'document',
    component: () => import('../views/document'),
    meta: {
      title: '文档DOC'
    }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router

