import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Registration from '@/views/Registration.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';
import Logout from '@/views/Logout.vue';
import Items from '@/views/Items.vue';
import CreateItem from '@/views/CreateItem.vue';
import ViewItem from '@/views/ViewItem.vue';
import * as constants from '@/router/routes';

const routes = [
  { path: constants.HOME_ROUTE, name: 'Home', component: Home },
  { path: constants.PROFILE_ROUTE, name: 'Profile', component: Profile },
  { path: constants.REGISTRATION_ROUTE, name: 'Registration', component: Registration },
  { path: constants.LOGIN_ROUTE, name: 'Login', component: Login },
  { path: constants.LOGOUT_ROUTE, name: 'Logout', component: Logout },
  { path: constants.ITEMS_ROUTE, name: 'Items', component: Items },
  { path: constants.ITEM_CREATE_ROUTE, name: 'CreateItem', component: CreateItem },
  { path: constants.ITEM_VIEW_ROUTE, name: 'ViewItem', component: ViewItem, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;