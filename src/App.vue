<template>
  <div id="app">
    <div class="page-container">
      <MainMenu />
      <div class="content">
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    MainMenu
  }
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1; /* Prend tout l'espace restant */
}
</style>
