import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/academic', name: 'Academic', component: () => import('../views/Academic.vue') },
  { path: '/academic/:dept', name: 'AcademicDept', component: () => import('../views/Academic.vue') },
  { path: '/admin', name: 'Admin', component: () => import('../views/Admin.vue') },
  { path: '/admin/:unit', name: 'AdminUnit', component: () => import('../views/Admin.vue') },
  { path: '/admissions', name: 'Admissions', component: () => import('../views/Admissions.vue') },
  { path: '/news', name: 'News', component: () => import('../views/News.vue') },
  { path: '/news/:id', name: 'NewsDetail', component: () => import('../views/News.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
