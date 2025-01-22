// filepath: /home/user/proj/rapid_dev/FastAPI-Vue-template/frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Registration from '@/views/Registration.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/registration', component: Registration },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;