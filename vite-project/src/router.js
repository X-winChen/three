
import { createRouter, createWebHistory } from 'vue-router';
import MobilePage from './components/mobile/MobilePage.vue';
import PCPage from './components/pc/PCPage.vue';
 
const routes = [
  {
    path: '/',
    component: window.innerWidth < 768 ? MobilePage : PCPage
  }
];
 
const router = createRouter({
  history: createWebHistory(),
  routes
});
 
export default router;