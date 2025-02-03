<template>
  <div class="flex flex-col gap-10 justify-center items-center">
    <div class="flex flex-col gap-2 justify-center">
      <label
        v-for="option in paymentOptions"
        :key="option.id"
        class="relative flex items-center justify-between gap-4 px-4 py-1 h-[50px] bg-[#F8F9FF] rounded-2xl cursor-pointer group"
        :class="{ 'border-2 border-black': modelValue === option.id }"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-6 h-6 rounded-full border-2 border-[#4460F6] flex items-center justify-center"
            :class="{ 'bg-[#4460F6]': modelValue === option.id }"
          >
            <div
              v-if="modelValue === option.id"
              class="w-2 h-2 rounded-full bg-white"
            />
          </div>
          <span class="text-dark text-bold">{{ option.label }}</span>
        </div>
        <span class="text-dark text-2xl font-bold">{{ option.price }}$</span>
        <input
          type="radio"
          :name="option.id"
          :value="option.id"
          :checked="modelValue === option.id"
          @change="$emit('update:modelValue', $event.target.value)"
          class="absolute opacity-0"
        />
      </label>
    </div>
    <RoundedStandartButton
      type="button"
      class="mb-5 w-[400px] max-w-full min-h-[50px]"
      @click.prevent="$emit('submit')"
    >
      <span class="text-lg">
        К оплате {{ modelValue ? paymentOptions.find(o => o.id === modelValue)?.price : '0' }}$
      </span>
    </RoundedStandartButton>
  </div>
</template>

<script setup>
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  paymentOptions: {
    type: Array,
    required: true,
    default: () => [
      { id: 'single', label: 'Разовый доступ', price: '1' },
      { id: 'pack', label: '10 объектов', price: '7' },
      { id: 'unlimited', label: 'Безлимит на месяц', price: '15' }
    ]
  }
})

defineEmits(['update:modelValue', 'submit'])
</script>
