<template>
    <div>
      <h1 class="page-title">Mystery Box</h1>
      <input
        v-model="searchTerm"
        @input="searchVideo"
        placeholder="Entrez un mot-clé..."
        class="video-search-input"
      />
      <div v-if="video">
        <VideoItem :title="video.title" :url="video.url" />
      </div>
      <p v-else-if="searchTerm && !video">Rien, nada</p>
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
        this.video = mysteryBox[this.searchTerm.toLowerCase()] || null;
      },
    },
  };
  </script>
  
<style scoped>
.video-search-input {
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  position: relative;
  z-index: 10;
}

</style>
  