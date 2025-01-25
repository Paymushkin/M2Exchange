<template>
  <HeroSection />
  <RecommendationsSection />
  <ExchangeInfoSection />
  <TopLocations />
  <ExchangeProcess />
  <div class="container mb-[200px]">
    <div class="py-12 bg-[#EFF3FF] rounded-[80px]">
    <Slider />
    </div>
  </div>

</template>

<script setup>
import HeroSection from '~/components/sections/main/HeroSection.vue'
import RecommendationsSection from '~/components/sections/main/RecommendationsSection.vue'
import ExchangeInfoSection from '~/components/sections/main/ExchangeInfoSection.vue'
import ExchangeProcess from '~/components/sections/main/ExchangeProcess.vue'
import Slider from '~/components/Slider.vue'
import TopLocations from '~/components/sections/main/TopLocations.vue'

</script>

<style scoped>
/* Стили для страницы */
</style> 