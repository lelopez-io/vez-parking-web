<template>
  <div id="app">
    <Header />
    <div id="view-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  max-width: 100% !important;
  overflow-x: hidden !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

//this accounts for the header having a fixed position
#view-container {
  max-width: 1032px;
  margin: 50px auto 0;
}
</style>
