<template>
  <div class="video-item">
    <h2>{{ title }}</h2>
    <iframe
      :src="videoUrl"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      width="560"
      height="315"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    videoUrl() {
      // Convertit l'URL YouTube normale en URL d'intégration
      return this.url.replace('watch?v=', 'embed/');
    },
  },
};
</script>

<style scoped>
.video-item {
  margin-bottom: 20px;
}
</style>
