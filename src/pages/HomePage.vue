<template>
  <div class="home-page" @click="playAudio">
    <h1 class="page-title">Welcome to the Cop Sound</h1>
    <audio ref="audioElement" loop>
      <source src="@/assets/homepage/hell-divers-2-music.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    playAudio() {
      const audio = this.$refs.audioElement;
      if (audio) {
        audio.play().catch(error => {
          console.error("Erreur lors de la lecture de l'audio : ", error);
        });
      }
    }
  }
};
</script>

<style scoped>
.home-page {
  height: 100vh;
  background-image: url('@/assets/homepage/diogrando.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

h1 {
  font-size: 3rem;
}
</style>
