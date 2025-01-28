<template>
  <button @click="$emit('click')" class="flex items-center gap-2 bg-white hover:bg-[#6284FF] px-[8px] py-[6px] rounded-[40px] min-w-[179px] duration-300 transition-colors text-[#171652] hover:text-white">
    <div class="w-[44px] h-[44px] rounded-full bg-[#060565] flex items-center justify-center">
      <RefreshIcon />
    </div>
    <span>Обменять</span>
  </button>
</template>

<script setup>
import { RefreshIcon } from '@/components/icons/icons.js'
</script> 