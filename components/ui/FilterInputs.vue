<template>
  <div class="flex gap-20 mt-8">
    <!-- Блок стоимости -->
    <div class="flex flex-col gap-4">
      <h3 class="text-[#171652] text-xl font-semibold">{{ priceLabel }}</h3>
      <div class="flex gap-4">
        <div class="relative">
          <input 
            type="text" 
            v-model="modelValue.minPrice"
            :placeholder="minPricePlaceholder"
            class="w-[200px] border border-[#D2DBF5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
          />
        </div>
        <div class="relative">
          <input 
            type="text" 
            v-model="modelValue.maxPrice"
            :placeholder="maxPricePlaceholder"
            class="w-[200px] border border-[#D2DBF5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
          />
        </div>
      </div>
    </div>

    <!-- Блок площади -->
    <div class="flex flex-col gap-4">
      <h3 class="text-[#171652] text-xl font-semibold">{{ areaLabel }}</h3>
      <div class="flex gap-4">
        <div class="relative">
          <input 
            type="text" 
            v-model="modelValue.minArea"
            :placeholder="minAreaPlaceholder"
            class="w-[200px] border border-[#D2DBF5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
          />
        </div>
        <div class="relative">
          <input 
            type="text" 
            v-model="modelValue.maxArea"
            :placeholder="maxAreaPlaceholder"
            class="w-[200px] border border-[#D2DBF5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  priceLabel: {
    type: String,
    default: 'Стоимость'
  },
  areaLabel: {
    type: String,
    default: 'Площадь'
  },
  minPricePlaceholder: {
    type: String,
    default: 'Мин: 10 000 $'
  },
  maxPricePlaceholder: {
    type: String,
    default: 'Макс: 1 000 000 000 $'
  },
  minAreaPlaceholder: {
    type: String,
    default: 'Мин. м2'
  },
  maxAreaPlaceholder: {
    type: String,
    default: 'Макс. м2'
  }
});

defineEmits(['update:modelValue']);
</script> 