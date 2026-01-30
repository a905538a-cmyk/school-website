<script setup>
import HeroSlider from '../components/HeroSlider.vue'
import NewsSection from '../components/NewsSection.vue'
import QuickLinks from '../components/QuickLinks.vue'
import CampusLife from '../components/CampusLife.vue'
import StatsSection from '../components/StatsSection.vue'
</script>

<template>
  <div class="home">
    <HeroSlider />
    <QuickLinks />
    <NewsSection />
    <StatsSection />
    <CampusLife />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
