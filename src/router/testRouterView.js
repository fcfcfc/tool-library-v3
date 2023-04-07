export default [
    {
        path: '/testRouterView',
        redirect: '/testRouterView/testRouterViewPage/skyblue',
        children: [
            {
                path: 'testRouterViewPage/:color',
                name: 'testRouterViewPage',
                component: () => import('@/views/TestRouterViewPage.vue')
            }
        ]
    }
]