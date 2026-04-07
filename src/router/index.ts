import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import MainView from '@/views/MainView.vue'
import PortfolioCategoryView from '@/views/portfolio/PortfolioCategoryView.vue'
import PortfolioDetailView from '@/views/portfolio/PortfolioDetailView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'main', component: MainView },
  {
    path: '/:category',
    name: 'portfolio-category',
    component: PortfolioCategoryView,
  },
  {
    path: '/:category/:slug',
    name: 'portfolio-detail',
    component: PortfolioDetailView,
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

export default router