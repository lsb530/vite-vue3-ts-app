import { createRouter, createWebHashHistory, Router } from 'vue-router'
import routes from './routes'

export type RouteParams<TState = any> = Record<string, TState>

export type RouteCallback<TState = any> = (params: RouteParams<TState>) => Router | Promise<Router>

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createWebHashHistory(),
})

export default router
