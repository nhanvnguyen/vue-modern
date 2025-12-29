import type { RouteRecordRaw } from 'vue-router'

import { routes as authRoutes } from './auth'
import { routes as productRoutes } from './product-list'

const featureRoutes: RouteRecordRaw[] = [
  ...authRoutes,
  ...productRoutes
]

export default featureRoutes
