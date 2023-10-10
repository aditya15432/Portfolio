import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ResumeView',
      component: ()=> import('../views/ResumeView.vue')
    },
    
  ]
})

export default router
