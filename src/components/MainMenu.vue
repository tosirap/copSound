<template>
  <Menubar :model="items" />
</template>

<script>
import Menubar from 'primevue/menubar';

export default {
  name: "MainMenu",
  components: {
    Menubar
  },
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          command: () => { this.$router.push('/'); }
        },
        {
          label: 'Sounds',
          icon: 'pi pi-fw pi-volume-up',
          command: () => { this.$router.push('/sounds'); }
        },
        {
          label: 'Images',
          icon: 'pi pi-fw pi-info',
          command: () => { this.$router.push('/images'); }
        },
        {
          label: 'Videos',
          icon: 'pi pi-fw pi-info',
          command: () => { this.$router.push('/videos'); }
        }
      ]
    };
  }
};
</script>

<style>
/* Si tu veux ajouter des styles personnalisés, tu peux les ajouter ici */
</style>
