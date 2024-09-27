import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import SoundPage from './pages/SoundPage.vue';
import ImagePage from './pages/ImagePage.vue';
import VideoPage from './pages/VideoPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/sounds', component: SoundPage },
  { path: '/images', component: ImagePage },
  { path: '/videos', component: VideoPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;