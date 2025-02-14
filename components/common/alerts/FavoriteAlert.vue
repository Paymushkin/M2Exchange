<template>
  <UAlert
		icon="i-heroicons-heart-16-solid"
    color="primary"
    variant="solid"
    class="bg-[#FB7C61] rounded-sm max-w-[600px]"
  >
    <template #title>
      <span class="sm:text-lg text-sm font-medium">{{ title }}</span>
    </template>
    <template #description>
      <span class="sm:text-base text-xs font-normal">{{ description }}</span>
    </template>
  </UAlert>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
