import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueCryptojs from 'vue-cryptojs'

Vue.use(VueCryptojs)
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
    path: '/cadastrar',
    name: 'Cadastrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastarCliente.vue')
  },
  {
    path: '/entrar',
    name: 'Entrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/certificado',
    name: 'Certificado',
    component: () => import(/* webpackChunkName: "about" */ '../views/Certificado.vue')
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cliente.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
