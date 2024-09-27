<template>
  <div id="app">
    <MainMenu />
    <router-view />
    <Footer />
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

