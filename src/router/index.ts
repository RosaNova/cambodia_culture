import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NationalFoodView from '@/views/NationalFoodView.vue'
import CultureView from '@/views/CultureView.vue'
import Economy_View from '@/views/Economy_View.vue'
import Safety_LivingView from '@/views/Safety_LivingView.vue'
import Language from '@/views/Language.vue'
import Future_TechnologyView from '@/views/Future_TechnologyView.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   {
    path: '/culture',
    name: 'Culture & Tradition',
    component:  CultureView
  },
   {
    path: '/nationalFood',
    name: 'National Food',
    component: NationalFoodView
  },
  {
    path: '/safety',
    name: 'Safety & Living',
    component: Safety_LivingView
  },
  {
    path: '/economy',
    name: 'Economy & Opportunity',
    component:  Economy_View
  },
    {
    path: '/technology',
    name: 'Technology & Future',
    component: Future_TechnologyView
  },
   {
    path: '/language',
    name: 'Language',
    component: Language
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router