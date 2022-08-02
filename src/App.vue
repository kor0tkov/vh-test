<script>
export default {
  name: 'App',
}
</script>

<template>
  <div class="app">
    <header class="header">HEADER GOES HERE</header>
    <main class="gallery">
      <div v-for="item in 16" :key="item" class="gallery__img" />
    </main>
    <footer class="footer">FOOTER GOES HERE</footer>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  font-family: sans-serif;
  height: -webkit-fill-available;
}
#app {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: -webkit-fill-available;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #4f7aff;
  border-bottom: 1px solid black;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #4f7aff;
  border-top: 1px solid black;
}
.gallery {
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 2px;
  background-color: black;
}
.gallery__img {
  width: calc(100% / 3 - 4px);
  height: calc(100vw / 3 - 4px);
  margin: 2px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://i.gaw.to/vehicles/photos/08/28/082870_2017_ferrari_488.jpg');
}
</style>
