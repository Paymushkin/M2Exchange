<template>
  <label class="flex items-center">
    <input type="radio" :value="value" :name="name" class="hidden" 
           @change="$emit('update:modelValue', value)" />
    <span :class="{'bg-[#1C2D6A] text-white': modelValue === value, 'button-default': modelValue !== value}" 
          class="button">
      <slot></slot>
    </span>
  </label>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  value: String,
  name: String,
  modelValue: String
});
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 75px;
  height: 50px;
  padding: 0 1rem; /* px-4 */
  border: 1px solid #ECEDF3;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.button-default {
  background-color: #F2F4FD;
  color: #656565;
}

.button:hover {
  background-color: #1C2D6A;
  color: white;
}
</style> 