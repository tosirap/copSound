<template>
    <nav>
      <ul class="menu-bar">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sounds">Sounds</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "MenuBar"
  };
  </script>
  
  <style>
  .menu-bar {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #333;
  }
  
  .menu-bar li {
    color: white;
  }
  
  .menu-bar a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }
  
  .menu-bar a:hover {
    background-color: #555;
    border-radius: 5px;
  }
  </style>
  