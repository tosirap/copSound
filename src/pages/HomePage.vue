<template>
  <div class="home-page">
    <h1>Welcome to the Cop Sound</h1>
    <audio autoplay loop>
      <source src="@/assets/homepage/hell-divers-2-music.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
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
