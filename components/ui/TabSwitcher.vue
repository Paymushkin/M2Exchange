<template>
  <div class="flex items-center bg-[#F0F3FE] rounded-full">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      @click="$emit('update:modelValue', tab.value)"
      :class="[
        'h-[50px] px-6 py-2 rounded-full transition-colors text-sm',
        modelValue === tab.value
          ? 'bg-dark text-white'
          : tab.bgClass || 'bg-transparent text-dark-primary'
      ]"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  tabs: {
    type: Array,
    required: true,
    validator: (tabs) => tabs.every(tab =>
      typeof tab.value === 'string' &&
      typeof tab.label === 'string'
    )
  }
})

defineEmits(['update:modelValue'])
</script>
