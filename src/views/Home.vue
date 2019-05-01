<template>
  <div class="home">
    <Hero />
    <ScanQR />
    <LearnMore />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import ScanQR from '@/components/ScanQR.vue'
import LearnMore from '@/components/LearnMore.vue'

export default {
  name: 'home',
  components: {
    Hero,
    ScanQR,
    LearnMore
  }
}
</script>

<style lang="scss" scoped></style>
