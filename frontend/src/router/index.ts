// filepath: /home/user/proj/rapid_dev/FastAPI-Vue-template/frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Registration from '@/views/Registration.vue';
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/registration', component: Registration },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;