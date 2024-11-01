<template>
  <div>
    <h1 class="page-title">Precheur</h1>

    <!-- Utilisation du composant Pagination -->
    <PaginationPage
      :currentPage="currentPage"
      :totalPages="totalPages"
      @prev="prevPage"
      @next="nextPage"
    />

    <div class="video-list">
      <VideoItem
        v-for="(video, index) in paginatedVideos"
        :key="index"
        :title="video.title"
        :url="video.url"
      />
    </div>

    <!-- Réutilisation du composant Pagination -->
    <PaginationPage
      :currentPage="currentPage"
      :totalPages="totalPages"
      @prev="prevPage"
      @next="nextPage"
    />
  </div>
</template>

<script>
import VideoItem from '../../components/video/VideoItem.vue';
import PaginationPage from '../../components/common/PaginationPage.vue'; // Import du composant Pagination
import videoPaginationMixin from '../../components/common/paginationMixin.js'; // Import du mixin
import { videoPrecheurLinks } from '../../components/video/videoPrecheurLinks.ts'; // Importe les liens vidéo

export default {
  name: 'VideoList',
  components: {
    VideoItem,
    PaginationPage, // Enregistre le composant Pagination
  },
  mixins: [videoPaginationMixin], // Utilisation du mixin pour la pagination
  data() {
    return {
      videos: videoPrecheurLinks,
    };
  },
};
</script>

<style scoped>
.video-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

</style>
