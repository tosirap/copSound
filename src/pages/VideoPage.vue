<template>
  <div>
    <h1>Video Page</h1>
    <div class="video-list">
      <VideoItem
        v-for="(video, index) in videos"
        :key="index"
        :title="video.title"
        :url="video.url"
      />
    </div>
  </div>
</template>

<script>
import VideoItem from '../components/video/VideoItem.vue';  // Assure-toi d'importer le bon fichier
import { videoLinks } from '../components/video/videoLinks.ts'; // Importe les liens vidéo

export default {
  name: 'VideoList',
  components: {
    VideoItem
  },
  data() {
    return {
      videos: videoLinks
    };
  }
};
</script>

<style scoped>
.video-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
