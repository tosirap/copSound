import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProtossPage from './pages/sound/ProtossPage.vue';
import ZergPage from './pages/sound/ZergPage.vue';
import TerranPage from './pages/sound/TerranPage.vue';
import MemePage from './pages/sound/MemePage.vue';

import ImagePage from './pages/ImagePage.vue';

import VideoRandom from './pages/video/VideoRandom.vue';
import VideoYoda from './pages/video/VideoYoda.vue';
import VideoPrecheur from './pages/video/VideoPrecheur.vue';


const routes = [
  { path: '/', component: HomePage },
  /** SOUND */
  { path: '/sound/protoss', component: ProtossPage },
  { path: '/sound/zerg', component: ZergPage },
  { path: '/sound/terran', component: TerranPage },
  { path: '/sound/meme', component: MemePage },


  /** Images */

  { path: '/images', component: ImagePage },
  /** VIDEOS */

  { path: '/video/random', component: VideoRandom },
  { path: '/video/yoda', component: VideoYoda },
  { path: '/video/precheur', component: VideoPrecheur },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;