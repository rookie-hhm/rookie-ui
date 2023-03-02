import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('../demo/HelloWorld.vue')
    },
    {
      path: '/table-demo-1',
      component: () => import('../demo/table-demo-1.vue')
    },
    {
      path: '/table-demo-2',
      component: () => import('../demo/table-demo-2.vue')
    },
    {
      path: '/table-demo-3',
      component: () => import('../demo/table-demo-3.vue')
    },
    {
      path: '/form-demo-1',
      component: () => import('../demo/form-demo-1.vue')
    },
    {
      path: '/form-demo-2',
      component: () => import('../demo/form-demo-2.vue')
    },
    {
      path: '/form-demo-3',
      component: () => import('../demo/form-demo-3.vue')
    },
    {
      path: '/form-demo-4',
      component: () => import('../demo/form-demo-4.vue')
    },
    {
      path: '/form-demo-5',
      component: () => import('../demo/form-demo-5.vue')
    },
    {
      path: '/select-demo-1',
      component: () => import('../demo/select-demo-1.vue')
    },
    {
      path: '/select-demo-2',
      component: () => import('../demo/select-demo-2.vue')
    }
  ]
})

export default router