import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/home/home.vue')
    },
    {
      path:'/home',
      name:'home',
      component: ()=>import('../views/home/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/message',
      name:'message',
      component:() => import('../views/message/message.vue')
    },
    {
      path:'/favor',
      name:'favor',
      component:() => import('../views/favor/favor.vue')
    },
    {
      path:'/order',
      name:'order',
      component:() => import('../views/order/order.vue')
    }
  ]
})

export default router
