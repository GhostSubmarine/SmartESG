import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/main/index.vue')
    },
    {
      path: '/enterpriseEnd',
      name: 'enterpriseEnd',
      component: () => import('@/pages/solution/enterpriseEnd/index.vue'),
      meta: {
        title: 'ESG企业端解决⽅案'
      }
    },
    {
      path: '/investor',
      name: 'investor',
      component: () => import('@/pages/solution/investor/index.vue'),
      meta: {
        title: 'ESG投资⼈解决⽅案'
      }
    },
    {
      path: '/comprehensiveRating',
      name: 'comprehensiveRating',
      component: () => import('@/pages/solution/comprehensiveRating/index.vue'),
      meta: {
        title: '评级综合解决⽅案'
      }
    },
    {
      path: '/carbonAndClimate',
      name: 'carbonAndClimate',
      component: () => import('@/pages/solution/carbonAndClimate/index.vue'),
      meta: {
        title: '碳与⽓候解决⽅案'
      }
    },
    {
      path: '/stage',
      name: 'stage',
      component: () => import('@/pages/stage/index.vue')
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import('@/pages/aboutUs/index.vue')
    }
  ]
})

export default router
