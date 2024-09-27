import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProtossPage from './pages/sound/ProtossPage.vue';
import ZergPage from './pages/sound/ZergPage.vue';
import TerranPage from './pages/sound/TerranPage.vue';
import MemePage from './pages/sound/MemePage.vue';

import ImagePage from './pages/ImagePage.vue';
import VideoPage from './pages/VideoPage.vue';

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

  { path: '/videos', component: VideoPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;