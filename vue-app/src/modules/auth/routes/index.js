const routes = [
    {
        path: '/',
        name: 'login',
        meta: {auth: false},
        component: () => import('../pages/')
    }
]

export default routes