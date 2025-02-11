<template>
  <div class="flex flex-col grow bg-white rounded-md px-4 py-5 border border-[#E6E6E6] xl:max-w-[350px] max-w-[300px] w-full">
    <h3 class="xl:text-lg text-base text-center text-medium mb-3">{{ title }}</h3>
    <p class="text-dark mb-6 text-center xl:text-sm text-xs">{{ description }}</p>

    <div class="flex flex-col items-center gap-4 mt-auto">
      <label
        v-for="option in options"
        :key="option.value"
        class="flex items-center justify-between xl:py-3 xl:px-4 py-2 px-3 w-full bg-[#F0F3FE] text-dark rounded-full cursor-pointer"
        :class="{'!bg-[#4460F6] text-white': modelValue === option.value}"
      >
        <div class="flex items-center gap-3">
          <input
            type="radio"
            :value="option.value"
            :name="name"
            v-model="localValue"
            class="hidden"
          >
          <div class="xl:w-6 xl:h-6 w-4 h-4 rounded-full border-2 flex items-center justify-center"
            :class="[
              modelValue === option.value
                ? 'border-white bg-transparent'
                : 'border-[#4460F6] bg-transparent'
            ]"
          >
            <div
              v-if="modelValue === option.value"
              class="xl:w-2 xl:h-2 w-1.5 h-1.5 rounded-full bg-white"
            ></div>
          </div>
          <span class="xl:text-base text-xs font-semibold">{{ option.label }}</span>
        </div>
        <span class="2xl:text-2xl xl:text-xl text-base font-semibold">{{ option.price }} $</span>
      </label>

      <RoundedStandartButton class="w-[200px] max-w-full mt-2">
        <span class="xl:text-lg text-sm">Подключить</span>
      </RoundedStandartButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
