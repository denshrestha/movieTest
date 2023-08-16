
const routes =  [
  { path: '/', name: 'Dashboard', component: () => import('../pages/Dashboard.vue') },
  { 
    path: '/movies',
    component: () => import('../pages/Movies/index.vue'),
    children: [
      {
        path: '',
        name: 'Movies',
        component: () => import('../pages/Movies/Movies.vue'),
      },
      {
        path: ':id',
        name: 'Movie details',
        component: () => import('../pages/Movies/Movie.vue')
      },
      {
        path: 'create',
        name: 'Add new movie',
        component: () => import('../pages/Movies/Create.vue')
      }
    ]
  }
]

export default routes;