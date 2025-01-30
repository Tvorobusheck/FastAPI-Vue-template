// filepath: /home/user/proj/rapid_dev/FastAPI-Vue-template/frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Registration from '@/views/Registration.vue';
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Logout from '@/views/Logout.vue';
import * as constants from '@/router/routes'

const routes = [
  { path: constants.HOME_ROUTE, component: Home },
  { path: constants.PROFILE_ROUTE, component: Profile },
  { path: constants.REGISTRATION_ROUTE, component: Registration },
  { path: constants.LOGIN_ROUTE, component: Login },
  { path: constants.LOGOUT_ROUTE, component: Logout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;