import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/HomePage.vue'),
        name: 'home_page',
      },
      {
        path: 'about',
        component: () => import('@/pages/AboutPage.vue'),
        name: 'about_page',
      },
      {
        path: 'projects',
        component: () => import('@/pages/ProjectsPage.vue'),
        name: 'projects_page',
      },
      {
        path: 'contact',
        component: () => import('@/pages/ContactPage.vue'),
        name: 'contact_page',
      },
    ],
  },
  // Always leave this as last
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/NotFoundPage.vue'),
  },
];

export default routes;
