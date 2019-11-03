import Vue from 'vue'
import VueRouter from 'vue-router'
import Report from '../views/Report.vue'
import Data from '../views/Data.vue'
import Paper from '../views/Paper.vue'
import Teacher from '../views/Teacher.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/data',
    name: 'data',
    component: Data
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: Teacher
  },
  {
    path: '/report',
    name: 'report',
    component: Report
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/paper',
    name: 'paper',
    component: Paper
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
