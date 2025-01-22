<template>
  <button 
    class="flex items-center gap-3 bg-primary text-white rounded-[60px] py-4 px-8 hover:bg-primary-dark transition-colors"
    :class="{ 'w-[282px]': isWide }"
  >
    <SearchIconBackground />
    <span class="text-[25px] leading-[34px]">
      <slot>Обменять</slot>
    </span>
  </button>
</template>

<script setup>
import SearchIconBackground from '../icons/SearchIconBackground.vue'
defineProps({
  isWide: {
    type: Boolean,
    default: false
  }
})
</script> 