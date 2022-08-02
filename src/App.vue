<script>
export default {
  name: "App"
};
</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  font-family: sans-serif;
  height: -webkit-fill-available;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
}
.app {
  height: 100%;
}
</style>
