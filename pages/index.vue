<template>
  <NuxtLayout>
    <HeroSection />
    <RecommendationsSection />
    <StoriesSection />
    <ExchangeInfoSection />
    <TopLocationsSection />
    <ExchangeProcessSection />
    <div class="container slider-container xl:mb-[200px]">
      <div class="2xl:py-12 xl:py-5 pt-[1px] xl:px-5 px-0 bg-background-blue xl:rounded-[80px]">
        <ExchangeFormSlider />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import HeroSection from '@/components/sections/main/HeroSection.vue'
import RecommendationsSection from '@/components/sections/main/RecommendationsSection.vue'
import StoriesSection from '@/components/sections/main/StoriesSection.vue'
import TopLocationsSection from '~/components/sections/main/TopLocationsSection.vue'
import ExchangeInfoSection from '@/components/sections/main/ExchangeInfoSection.vue'
import ExchangeProcessSection from '~/components/sections/main/ExchangeProcessSection.vue'
import ExchangeFormSlider from '@/components/common/ExchangeFormSlider.vue'

</script>

<style scoped>
/* Стили для страницы */
</style> 