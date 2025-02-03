<template>
  <NuxtLink :to="to">
    <AppleStoreIcon class="hover:bg-black bg-[#060565] 2xl:h-full max-h-[40px] sm:max-w-auto max-w-[120px] p-[2px] rounded-[8px] transition-colors duration-300"/>
  </NuxtLink>
</template>

<script setup>
import { AppleStoreIcon } from '@/components/icons/icons'

defineProps({
  to: {
    type: String,
    default: '/'
  }
})
</script>
