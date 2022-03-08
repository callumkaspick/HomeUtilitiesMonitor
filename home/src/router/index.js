import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AppView from '../views/AppView.vue'
import TroubleLoggingIn from '../views/TroubleLoggingIn.vue'
import SettingsView from '../views/SettingsView.vue'
import WaterView from '../views/WaterView.vue'
import ElectricView from '../views/ElectricView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/app',
    name: 'app',
    component: AppView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/troubleLoggingIn',
    name: 'troubleLoggingIn',
    component: TroubleLoggingIn
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/water',
    name: 'water',
    component: WaterView
  },
  {
    path: '/electric',
    name: 'electric',
    component: ElectricView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
