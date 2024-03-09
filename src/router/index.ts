import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routeSettings: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'TodoList',
    // 動的importの方が良いかも
    component: () => import('@/views/TodoList.vue')
  },
  {
    path: '/new',
    name: 'TodoCreate',
    // 動的importの方が良いかも
    component: () => import('@/views/TodoCreate.vue')
  },
  {
    path: '/:id',
    name: 'TodoDetail',
    // 動的importの方が良いかも
    component: () => {
      import('@/views/TodoDetail.vue')
    },
    props: (routes) => {
      const idNum = Number(routes.params.id);
      return { id: idNum }
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings
})

export default router
