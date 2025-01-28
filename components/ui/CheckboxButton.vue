<template>
  <UButton
    :class="['custom-checkbox-button', { 'selected': modelValue }]"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <slot />
  </UButton>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style>
.custom-checkbox-button {
  font-size: 16px;
  font-weight: 500;
  padding: 8px 24px;
  min-height: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 40px;
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

.custom-checkbox-button.selected,
.custom-checkbox-button.selected:hover,
.custom-checkbox-button:hover {
  background-color: #1C2D6A;
  color: #ffffff;
}

</style> 