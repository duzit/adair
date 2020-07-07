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
    path: '/javascript', // 非嵌套路由必须包含前导斜杠字符
    name: 'javascript',
    component: () => import('../views/modules/javascript'),
    meta: {
      title: 'JavaScript'
    }
  },
  {
    path: '/html', // 非嵌套路由必须包含前导斜杠字符
    name: 'html',
    component: () => import('../views/modules/html'),
    meta: {
      title: 'HTML'
    }
  },
  {
    path: '/css', // 非嵌套路由必须包含前导斜杠字符
    name: 'css',
    component: () => import('../views/modules/css'),
    meta: {
      title: 'CSS'
    }
  },
  {
    path: '/vue', // 非嵌套路由必须包含前导斜杠字符
    name: 'vue',
    component: () => import('../views/modules/vue'),
    meta: {
      title: 'Vue'
    }
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('../views/document'),
    meta: {
      title: '文档DOC'
    }
  },
  {
    path: '/modules',
    name: 'modules',
    component: () => import('../views/modules')
  },
  {
    path: '/es6',
    name: 'es6',
    component: () => import('../views/modules/es6.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

