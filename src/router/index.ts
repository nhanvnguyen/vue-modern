import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import featureRoutes from '@/features'

const baseRoutes: Array<RouteRecordRaw> = []

const routes: Array<RouteRecordRaw> = [
  ...baseRoutes,
  ...featureRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
