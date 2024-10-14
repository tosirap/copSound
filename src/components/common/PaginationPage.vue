<!-- components/Pagination.vue -->
<template>
  <div class="pagination">
    <Button
      label="Précédent"
      @click="$emit('prev')"
      :disabled="currentPage === 1"
      icon="pi pi-chevron-left"
      class="p-button-secondary"
    />
    <span class="pageNumber">Page {{ currentPage }} sur {{ totalPages }}</span>
    <Button
      label="Suivant"
      @click="$emit('next')"
      :disabled="currentPage === totalPages"
      icon="pi pi-chevron-right"
      class="p-button-secondary"
    />
  </div>
</template>

<script>
import Button from 'primevue/button'; // Importation de PrimeVue Button

export default {
  name: 'PaginationPage',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.pageNumber {
  padding: 20px;
}
</style>
