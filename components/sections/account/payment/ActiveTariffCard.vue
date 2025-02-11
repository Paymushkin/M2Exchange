<template>
  <div class="flex flex-col grow items-center bg-white rounded-md px-4 py-5 border border-[#E6E6E6] xl:max-w-[350px] max-w-[300px] w-full">
    <h3 class="xl:text-lg text-base text-center text-medium mb-3">{{ title }}</h3>

    <div class="flex items-center justify-between mb-5 xl:py-3 xl:px-4 py-2 px-3 w-full bg-[#F0F3FE] text-dark rounded-full">
      <div class="flex items-center gap-3">
        <div class="xl:w-6 xl:h-6 w-4 h-4 rounded-full border-2 border-[#4460F6] flex items-center justify-center">
          <div class="xl:w-2 xl:h-2 w-1.5 h-1.5 rounded-full bg-[#4460F6]"></div>
        </div>
        <span class="2xl:text-base xl:text-sm text-xs">{{ tariff.label }}</span>
      </div>
      <span class="2xl:text-xl xl:text-lg text-base font-semibold">{{ tariff.price }} $</span>
    </div>

    <p class="grow text-center text-dark mb-6 w-[243px] mx-auto xl:text-base text-sm">
      <span v-if="tariff.value === 'unlimited' && type === 'request'">
        У вас осталось <span class="font-medium">безлимитное</span> количество запросов на <span class="font-semibold"> {{ tariff.remaining }} дней</span>
      </span>
      <span v-else-if="type === 'contact'">
        У вас остался доступ к <span class="font-semibold"> {{ tariff.remaining }}</span> контактам
      </span>
      <span v-else>
        У вас осталось <span class="font-semibold"> {{ tariff.remaining }} запросов</span>
      </span>
    </p>

    <RoundedStandartButton class="w-[220px] max-w-full mt-2">
      <span class="xl:text-lg text-sm">Подключить еще</span>
    </RoundedStandartButton>
  </div>
</template>

<script setup>
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  tariff: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['contact', 'request'].includes(value)
  }
})
</script>
