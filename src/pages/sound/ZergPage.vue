<template>
  <div>
    <h1 class="page-title">Page Zerg</h1>
    <AudioList faction="Zerg" />
  </div>
</template>

<script>
import AudioList from '@/components/audio/AudioList.vue';
export default {
  components: {
    AudioList
  }
};
</script>
