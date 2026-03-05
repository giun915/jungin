import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MainView from '@/views/MainView.vue'
import PortfolioCategory from '@/views/portfolio/PortfolioCategory.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'main', component: MainView },
  {
    path: '/portfolio/:category(commercial|residential)',
    name: 'portfolio-category',
    component: PortfolioCategory,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router