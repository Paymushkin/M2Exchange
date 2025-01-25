<template>
  <NuxtLink 
    :to="to" 
    :class="[
      'px-8 py-4 text-xs font-medium rounded-[100px] transition-colors shadow-custom',
      variant === 'primary' 
        ? 'bg-primary text-white hover:bg-[#001FCC]' 
        : 'border border-[#B4CEFF] text-primary-darker hover:bg-[#F5F7FF]'
    ]"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    default: '/'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  }
})
</script>

<style scoped>
.shadow-custom {
  box-shadow: 11.282px 11.282px 45.13px 0px rgba(68, 96, 246, 0.10);
}
</style>