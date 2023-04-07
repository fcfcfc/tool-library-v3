export default [
    {
        path: '/testRouterView',
        redirect: '/testRouterView/testRouterViewPage1',
        children: [
            {
                path: 'testRouterViewPage1',
                name: 'testRouterViewPage1',
                component: () => import('@/views/testRouterView/TestRouterViewPage1.vue')
            },
            {
                path: 'testRouterViewPage2',
                name: 'testRouterViewPage2',
                component: () => import('@/views/testRouterView/TestRouterViewPage2.vue')
            }
        ]
    }
]