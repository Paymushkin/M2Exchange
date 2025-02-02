<template>
  <button class="relative flex items-center justify-center gap-3 w-full py-4 px-6 bg-white border border-[#E9E8E8] rounded-full hover:bg-gray-50 transition-colors">
    <component :is="icon" class="absolute left-6 w-6 h-6" />
    <span class="text-dark">{{ text }}</span>
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: Object,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>
