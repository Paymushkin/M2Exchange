<template>
  <UButton
    :variant="modelValue === value ? 'solid' : 'outline'"
    :color="modelValue === value ? 'primary' : 'gray'"
    class="custom-button"
    :class="{ 'custom-button--selected': modelValue === value }"
    @click="$emit('update:modelValue', value)"
  >
    <slot />
  </UButton>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style>
.custom-button {
  font-size: 16px;
  font-weight: 500;
  padding: 8px 24px;
  min-height: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 16px;
  background-color: #F2F4FD;
  color: #656565;
  box-shadow: none;

  @media (max-width: 640px) {
    font-size: 12px;
    padding: 6px 12px;
    min-height: 40px;
    height: 40px;
  }
}

.custom-button--selected,
.custom-button--selected:hover,
.custom-button:hover {
  background-color: #1C2D6A;
  color: #ffffff;
}
</style> 