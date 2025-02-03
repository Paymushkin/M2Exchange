<template>
  <div class="flex items-center gap-1 lg:mb-0 mb-12">
    <AppStoreButton :to="appStoreLink" />
    <PlayMarketButton :to="playMarketLink" />
  </div>
</template>

<script setup>
import AppStoreButton from '@/components/ui/AppStoreButton.vue'
import PlayMarketButton from '@/components/ui/PlayMarketButton.vue'

defineProps({
  appStoreLink: {
    type: String,
    default: '/'
  },
  playMarketLink: {
    type: String,
    default: '/'
  }
})
</script>
