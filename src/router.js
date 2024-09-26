import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import SoundPage from './pages/SoundPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/sounds', component: SoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;