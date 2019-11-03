import Vue from 'vue'
import VueRouter from 'vue-router'
import Report from '../views/Report.vue'
import Data from '../views/Data.vue'
import Paper from '../views/Paper.vue'
import Teacher from '../views/Teacher.vue'
import Entry from '../views/Entry.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/',
    name: 'entry',
    component: Entry
  },
  {
    path: '/paper',
    name: 'paper',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Paper
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
