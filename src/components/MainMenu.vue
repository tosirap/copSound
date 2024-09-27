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
          items: [ 
            {
              label: 'Protoss',
              command: () => { this.$router.push('/sound/protoss'); }
            },
            {
              label: 'Zerg',
              command: () => { this.$router.push('/sound/zerg'); }
            },
            {
              label: 'Terran',
              command: () => { this.$router.push('/sound/terran'); }
            },
            {
              label: 'Meme',
              command: () => { this.$router.push('/sound/meme'); }
            }
          ]
        },
        {
          label: 'Images',
          icon: 'pi pi-fw pi-images',
          command: () => { this.$router.push('/images'); }
        },
        {
          label: 'Videos',
          icon: 'pi pi-fw pi-video',
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
