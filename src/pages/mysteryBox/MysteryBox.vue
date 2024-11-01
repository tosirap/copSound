<template>
  <div class="video-search-page">
    <h1 class="page-title">Mystery Box</h1>
    <input
      v-model="searchTerm"
      @input="searchVideo"
      placeholder="Entrez un mot-clé..."
      class="video-search-input"
    />
    <div v-if="video" class="video-container">
      <VideoItem :title="video.title" :url="video.url" />
    </div>
    <p v-else-if="searchTerm && !video" class="no-video-message">Rien, nada</p>
  </div>
</template>

<script>
import { mysteryBox } from './mysteryBox.ts';
import VideoItem from '@/components/video/VideoItem.vue';

export default {
  name: 'VideoSearchPage',
  components: {
    VideoItem,
  },
  data() {
    return {
      searchTerm: '',
      video: null,
    };
  },
  methods: {
    searchVideo() {
      const searchKey = this.searchTerm.trim().toLowerCase();
      this.video = mysteryBox[searchKey] || null;
    },
  },
};
</script>

<style scoped>
.video-search-page {
  text-align: center;
}

.video-search-input {
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.no-video-message {
  color: #666;
  font-style: italic;
}
</style>
