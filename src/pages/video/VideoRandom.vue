<template>
  <div>
    <h1>Video Page</h1>
    <div class="pagination">
      <Button
        label="Précédent"
        @click="prevPage"
        :disabled="currentPage === 1"
        icon="pi pi-chevron-left"
        class="p-button-secondary"
      />
      <span class="pageNumber">Page {{ currentPage }} sur {{ totalPages }}</span>
      <Button
        label="Suivant"
        @click="nextPage"
        :disabled="currentPage === totalPages"
        icon="pi pi-chevron-right"
        class="p-button-secondary"
      />
    </div>

    <div class="video-list">
      <VideoItem
        v-for="(video, index) in paginatedVideos"
        :key="index"
        :title="video.title"
        :url="video.url"
      />
    </div>

    <div class="pagination">
      <Button
        label="Précédent"
        @click="prevPage"
        :disabled="currentPage === 1"
        icon="pi pi-chevron-left"
        class="p-button-secondary"
      />
      <span class="pageNumber">Page {{ currentPage }} sur {{ totalPages }}</span>
      <Button
        label="Suivant"
        @click="nextPage"
        :disabled="currentPage === totalPages"
        icon="pi pi-chevron-right"
        class="p-button-secondary"
      />
    </div>
  </div>
</template>

<script>
import VideoItem from '../../components/video/VideoItem.vue'; // Assure-toi d'importer le bon fichier
import { videoLinks } from '../../components/video/videoLinks.ts'; // Importe les liens vidéo
import Button from 'primevue/button'; // Importation de PrimeVue Button

export default {
  name: 'VideoList',
  components: {
    VideoItem,
    Button // Enregistre le composant Button
  },
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

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.pageNumber{
  padding: 20px;
}
</style>
