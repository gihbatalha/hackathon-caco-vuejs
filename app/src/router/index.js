import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/exemplo/1',
    name: 'Exemplo 1',
    component: () => import('../views/Exemplo1.vue')
  },
  {
    path: '/exemplo/2',
    name: 'Exemplo 2',
    component: () => import('../views/Exemplo2.vue')
  },
  {
    path: '/exemplo/3',
    name: 'Exemplo 3',
    component: () => import('../views/Exemplo3.vue')
  },
  {
    path: '/exemplo/4',
    name: 'Exemplo 4',
    component: () => import('../views/Exemplo4.vue')
  },
  {
    path: '/exemplo/5',
    name: 'Exemplo 5',
    component: () => import('../views/Exemplo5.vue')
  },
  {
    path: '/exemplo/6',
    name: 'Exemplo 6',
    component: () => import('../views/Exemplo6.vue')
  },
  {
    path: '/exemplo/7',
    name: 'Exemplo 7',
    component: () => import('../views/Exemplo7.vue')
  },
  {
    path: '/exemplo/8',
    name: 'Exemplo 8',
    component: () => import('../views/Exemplo8.vue')
  },
  {
    path: '/exemplo/9',
    name: 'Exemplo 9',
    component: () => import('../views/Exemplo9.vue')
  },
  {
    path: '/exemplo/10',
    name: 'Exemplo 10',
    component: () => import('../views/Exemplo10.vue')
  },
  {
    path: '/exemplo/11',
    name: 'Exemplo 11',
    component: () => import('../views/Exemplo11.vue')
  }
]

const router = new VueRouter({
  routes
});

export default router

