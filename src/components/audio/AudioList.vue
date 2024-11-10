<template>
  <div class="audio-list">
    <h2 class="faction-title">{{ faction }}</h2>
    
    <div v-for="(files, category) in categorizedFiles" :key="category" class="category">
      <h3 class="category-title">{{ category }}</h3>
      <div class="audio-container">
        <div v-for="file in files" :key="file.name" class="audio-item">
          <span class="audio-name">{{ file.name }}</span>
          <audio :src="file.path" controls class="audio-player"></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioList',
  props: {
    faction: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      audioFiles: []
    };
  },
  computed: {
    categorizedFiles() {
      return this.audioFiles.reduce((acc, file) => {
        if (!acc[file.category]) {
          acc[file.category] = [];
        }
        acc[file.category].push(file);
        return acc;
      }, {});
    }
  },
  async created() {
    // Charger dynamiquement la liste en fonction de la faction
    if (this.faction === 'Zerg') {
      const { default: zergList } = await import('./zergFiles.ts');
      this.audioFiles = zergList;
    } else if (this.faction === 'Terran') {
      const { default: terranList } = await import('./terranFiles.ts');
      this.audioFiles = terranList;
    } else if (this.faction === 'Protoss') {
      const { default: protossList } = await import('./protossFiles.ts');
      this.audioFiles = protossList;
    } else if (this.faction === 'Surpise') {
      const { default: surpriseList } = await import('./surpriseFiles.ts');
      this.audioFiles = surpriseList;
    }
  }
};
</script>

<style scoped>
/* Style général pour le conteneur de la liste audio */
.audio-list {
  width: 100%;
  padding: 20px;
}

/* Style du titre de la faction */
.faction-title {
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Style des catégories */
.category {
  margin-bottom: 30px;
}

/* Titre des catégories */
.category-title {
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
}

/* Barre fine sur le titre de chaque catégorie */
.category-title::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ccc;
  position: absolute;
  top: -5px; /* Ajuste la position de la barre */
  left: 0;
}

/* Conteneur pour les fichiers audio (flexible) */
.audio-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px; /* Espacement entre les éléments */
}

/* Élément audio (avec le nom et le lecteur) */
.audio-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%; /* Par défaut, chaque élément prend 30% de la largeur */
  text-align: center;
}

/* Style du nom de l'audio */
.audio-name {
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1em;
  color: #333;
}

/* Style du lecteur audio */
.audio-player {
  width: 100%;
  max-width: 200px; /* Limite la taille du lecteur */
}

/* Media queries pour les petits écrans */
@media (max-width: 768px) {
  /* Sur tablettes et petits écrans, on ajuste les éléments à 50% de la largeur */
  .audio-item {
    width: 45%;
  }
}

@media (max-width: 480px) {
  /* Sur les petits écrans (smartphones), on les empile en une seule colonne */
  .audio-item {
    width: 90%;
  }

  .audio-name {
    font-size: 0.9em; /* Réduire la taille du texte */
  }

  .audio-player {
    max-width: 150px; /* Réduire la taille du lecteur */
  }
}
</style>
