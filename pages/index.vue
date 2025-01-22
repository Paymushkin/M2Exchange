<template>
  <HeroSection />
  <RecommendationsSection />
  <ExchangeInfoSection />
  <ExchangeProcess />
  <div class="container">
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
</script>

<style scoped>
/* Стили для страницы */
</style> 