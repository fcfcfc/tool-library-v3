import {createRouter, createWebHistory} from 'vue-router'
import testRouterView from '@/router/testRouterView'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        }
    ].concat(testRouterView)
})

export default router
