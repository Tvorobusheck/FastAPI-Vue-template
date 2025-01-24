// filepath: /home/user/proj/rapid_dev/FastAPI-Vue-template/frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Registration from '@/views/Registration.vue';
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Logout from '@/views/Logout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/registration', component: Registration },
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;