import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Cursos_Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/painel',
    name: '/Painel',
    component: () => import('../views/Painel.vue')
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: () => import('../views/Cursos_Home.vue')
  },
  {
    path: '/novo',
    name:'Novo Curso',
  component: () => import('../views/Novo_Curso.vue')
  }
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
