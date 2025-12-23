import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   {
    path: '/culture',
    name: 'Culture & Tradition',
    component: HomeView
  },
   {
    path: '/nationFood',
    name: 'National Food',
    component: HomeView
  },
  {
    path: '/safety',
    name: 'Safety & Living',
    component: HomeView
  },
  {
    path: '/economy',
    name: 'Economy & Opportunity',
    component: HomeView
  },
    {
    path: '/technology',
    name: 'Technology & Future',
    component: HomeView
  },
   {
    path: '/language',
    name: 'Language',
    component: HomeView
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router