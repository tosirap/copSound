<template>
  <div>
    <h1 class="page-title">Bassem 69200</h1>
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

    <PaginationPage
      :currentPage="currentPage"
      :totalPages="totalPages"
      @prev="prevPage"
      @next="nextPage"
    />
  </div>
</template>

<script>
import VideoItem from '../../components/video/VideoItem.vue'; // Assure-toi d'importer le bon fichier
import { videoLinks } from '../../components/video/videoBassemLinks.ts'; // Importe les liens vidéo
import PaginationPage from '../../components/common/PaginationPage.vue'; // Import du composant Pagination
import videoPaginationMixin from '../../components/common/paginationMixin.js'; // Import du mixin

export default {
  name: 'VideoList',
  components: {
    VideoItem,
    PaginationPage
  },
  mixins: [videoPaginationMixin], // Utilisation du mixin pour la pagination
  data() {
    return {
      videos: videoLinks,
      currentPage: 1,
      itemsPerPage: 9 // Nombre de vidéos à afficher par page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.videos.length / this.itemsPerPage);
    },
    paginatedVideos() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.videos.slice(start, start + this.itemsPerPage);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
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
