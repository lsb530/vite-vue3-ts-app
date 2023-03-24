import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '/HelloWorld',
        component: () => import('@/components/HelloWorld.vue'),
        props: { msg: 'Vite + Vue' },
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/NotFound.vue'),
  },
]

export default routes
