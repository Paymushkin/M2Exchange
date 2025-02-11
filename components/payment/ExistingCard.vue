<template>
  <label
    class="payment-card"
    :class="{'border-[#4460F6] bg-[#F0F3FE]': modelValue === card.id}"
  >
    <input
      type="radio"
      :value="card.id"
      :checked="modelValue === card.id"
      @input="$emit('update:modelValue', card.id)"
      class="hidden"
    >
    <div class="flex items-center gap-2 mb-5">
      <div class="xl:w-6 xl:h-6 w-4 h-4 rounded-full border-2 flex items-center justify-center"
        :class="[
          modelValue === card.id
            ? 'border-[#4460F6] bg-transparent'
            : 'border-[#4460F6] bg-transparent'
        ]"
      >
        <div
          v-if="modelValue === card.id"
          class="xl:w-2 xl:h-2 w-1.5 h-1.5 rounded-full bg-[#4460F6]"
        ></div>
      </div>

      <component
        :is="getCardIcon(card.type)"
        v-if="getCardIcon(card.type)"
        class="w-10 h-6"
      />

      <button class="ml-auto" @click.prevent="$emit('delete')">
        <CardDeleteIcon />
      </button>
    </div>

    <div class="flex flex-col mb-7">
      <span class="text-sm font-semibold border border-[#D9E3FF] rounded-sm px-4 py-2 mb-3">{{ card.number }}</span>
      <div class="flex justify-between gap-2">
        <div class="flex flex-col">
          <span class="text-[#9CA3C5] text-[10px]">CVC/CVV</span>
          <span class="border border-[#D9E3FF] text-sm rounded-sm px-4 py-2 w-20">***</span>
        </div>
        <div class="flex flex-col">
          <span class="text-[#9CA3C5] text-[10px]">Срок действия:</span>
          <span class="border border-[#D9E3FF] text-sm rounded-sm px-4 py-2 w-20">{{ card.expiry }}</span>
        </div>
      </div>
    </div>
  </label>
</template>

<script setup>
import { CardDeleteIcon, MasterCardIcon, VisaCardIcon, MirCardIcon } from '@/components/icons/icons'

const props = defineProps({
  card: {
    type: Object,
    required: true
  },
  modelValue: {
    type: [Number, null],
    default: null
  }
})

defineEmits(['update:modelValue', 'delete'])

const getCardIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'visa':
      return VisaCardIcon
    case 'mastercard':
      return MasterCardIcon
    case 'mir':
      return MirCardIcon
    default:
      return null
  }
}
</script>
