<template>
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-text">
          <p>&copy; 2024 CopSound. All rights reserved.</p>
          <p>Made with ❤️ by PA</p>
        </div>
        <div class="footer-image"></div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "SiteFooter"
  };
  </script>
  
  <style scoped>
  .site-footer {
    background-color: rgba(0, 0, 0, 0.6); /* Background couleur */
    padding: 5px;
    color: white;
    height: 300px; /* Ajuste la hauteur si nécessaire */
    width: 100%; /* Prendre toute la largeur */
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between; /* Espace entre le texte et l'image */
    align-items: center; /* Aligne verticalement au centre */
    height: 100%;
  }
  
  .footer-text {
    text-align: center; /* Le texte est aligné au centre */
    padding: 10%;
  }
  
  .footer-image {
    flex: 1;
    background-image: url('@/assets/footer/footer-baniere.PNG'); /* Chemin vers ton image */
    background-size: contain; /* Assure que l'image reste entière */
    background-repeat: no-repeat; /* Pas de répétition */
    background-position: center; /* Centre l'image */
    height: 100%; /* Ajuste la hauteur si nécessaire */
  }
  </style>
  