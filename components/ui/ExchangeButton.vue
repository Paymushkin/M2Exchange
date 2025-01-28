<template>
  <button 
    class="flex items-center gap-3 lg:w-auto bg-primary text-white rounded-[60px] 2xl:py-4 py-2 2xl:px-8 px-4 hover:bg-primary-dark transition-colors"
    :class="{ 'w-[282px]': isWide }"
  >
    <SearchBackgroundIcon />
    <span class="2xl:text-xl text-lg leading-[1.2]">
      <slot>Обменять</slot>
    </span>
  </button>
</template>

<script setup>
import { SearchBackgroundIcon } from '@/components/icons/icons.js'
defineProps({
  isWide: {
    type: Boolean,
    default: false
  }
})
</script> 