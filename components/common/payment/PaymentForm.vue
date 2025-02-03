<template>
  <div class="flex flex-col items-center">
    <h3 class="text-2xl text-center font-medium text-dark mb-6">
      Добавьте карту для оплаты
    </h3>

    <p class="text-base text-center text-dark mb-4">
      Это безопасно, вы всегда сможете удалить или изменить карту в<br>вашем личном кабинете в разделе
      <NuxtLink to="/" class="underline">
        Оплата
      </NuxtLink>
    </p>

    <iframe src="" frameborder="1" width="100%" height="300px"></iframe>

    <RoundedStandartButton
      type="button"
      class="mb-5 w-[400px] max-w-full min-h-[50px]"
      @click.prevent="$emit('submit')"
    >
      <span class="text-lg">К оплате {{ amount }}$</span>
    </RoundedStandartButton>
  </div>
</template>

<script setup>
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

defineProps({
  amount: {
    type: [String, Number],
    required: true
  }
})

defineEmits(['submit'])
</script>
