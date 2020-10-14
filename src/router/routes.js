const routes = [
  {
    path     : '/',
    component: () => import('layouts/MainLayout'),
    children : [
      { path: '', component: () => import('pages/Index') },
      { path: 'about-me', component: () => import('pages/AboutMe') },

  // Always leave this as last one,
  // but you can also remove it
  {
    path     : '*',
    component: () => import('pages/Error404.vue'),
  },
    ],
  },
];

export default routes;
