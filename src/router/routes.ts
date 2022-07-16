import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/HomePage.vue'), name: 'home_page' },
      { path: 'about', component: () => import('src/pages/AboutPage.vue'), name: 'about_page' },
      { path: 'projects', component: () => import('src/pages/ProjectsPage.vue'), name: 'projects_page' },
      { path: 'contact', component: () => import('src/pages/ContactPage.vue'), name: 'contact_page' },
    ],
  },
  // Always leave this as last
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/NotFoundPage.vue'),
  },
];

export default routes;
