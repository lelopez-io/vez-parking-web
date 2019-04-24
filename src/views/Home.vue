<template>
  <div class="home">
    <Hero />
    <ScanQR />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import ScanQR from '@/components/ScanQR.vue'

export default {
  name: 'home',
  components: {
    Hero,
    ScanQR
  }
}
</script>

<style lang="scss" scoped></style>
