import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component:() => import('@/views/logInPage.vue')
  },
  {
    path: '/loginAdmin',
    name: 'loginAdmin',
    component:() => import('@/views/logInAdmin.vue')
  },
  {
    path: '/pos',
    name: 'pos',
    component:() => import('@/views/PosPage.vue')
  },
  {
    path: '/config',
    name: 'config',
    component: () => import('@/views/ConfigPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterPage.vue')
  },{
    path: '/recharge',
    name: 'recharge',
    component: () => import('@/views/RechargePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
