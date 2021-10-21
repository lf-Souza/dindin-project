import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/control',
    name: '/Control',
    component: () => import('../pages/Control.vue')
  },
  {
    path: '/course/:id',
    name: 'Course',
    component: () => import('../pages/Course.vue')
  },
  {
    path: '/register',
    name:'Register',
  component: () => import('../pages/Register.vue')
  },
  {
    path: '/error',
    name:'Error',
  component: () => import('../pages/Error.vue')
  }
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
