<template>
  <div class="flex items-center justify-between">
    <span class="text-[#202020] xl:text-lg text-sm">{{ label }}</span>
    <div class="flex items-center gap-2">
      <UButton
        @click="decrease"
        class="custom-counter-button"
        variant="solid"
      >
        <UIcon name="i-heroicons-minus" />
      </UButton>
      <span class="custom-counter-value">
        {{ modelValue }}
      </span>
      <UButton
        @click="increase"
        class="custom-counter-button"
        variant="solid"
      >
        <UIcon name="i-heroicons-plus" />
      </UButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: Infinity
  }
});

const emit = defineEmits(['update:modelValue']);

const decrease = () => {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1);
  }
};

const increase = () => {
  if (props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue + 1);
  }
};
</script> 