<template>
  <div class="flex flex-col gap-6 w-full">
    <!-- Вкладки тарифов -->
    <div class="flex items-center sm:mb-3">
      <button
        @click="activeTariffTab = 'connect'"
        :class="[
          'sm:h-[50px] h-8 xl:px-6 px-2 xl:py-2 py-1 transition-colors sm:border-b-4 border-b-2 xl:text-base sm:text-sm text-xs',
          activeTariffTab === 'connect' ? 'border-dark text-[#000B45] font-semibold' : 'border-[#F4F5F9]'
        ]"
      >
        Подключить тариф
      </button>
      <button
        @click="activeTariffTab = 'active'"
        :class="[
          'sm:h-[50px] h-8 xl:px-6 px-2 xl:py-2 py-1 transition-colors sm:border-b-4 border-b-2 xl:text-base sm:text-sm text-xs',
          activeTariffTab === 'active' ? 'border-dark text-[#000B45] font-semibold' : 'border-[#F4F5F9]'
        ]"
      >
        Активные
      </button>
    </div>

    <!-- Карточки тарифов -->
    <div v-if="activeTariffTab === 'connect'" class="flex flex-wrap 2xl:gap-10 gap-5">
      <!-- Доступ к контактам -->
      <TariffCard
        title="Доступ к контактам"
        description="Подключите тариф и начните общение с владельцами недвижимости для выгодного обмена"
        :options="contactTariffs"
        v-model="selectedContactTariff"
        name="contact-tariff"
      />

      <!-- Запрос на обмен -->
      <TariffCard
        title="Запрос на обмен"
        description="Подключите тариф и сообщайте владельцу, что вы заинтересованы в обмене."
        :options="requestTariffs"
        v-model="selectedRequestTariff"
        name="request-tariff"
      />
    </div>

    <!-- Активные тарифы -->
    <div v-else class="flex flex-wrap 2xl:gap-10 gap-5">
      <!-- Если нет активных тарифов -->
      <p v-if="!currentContactTariff && !currentRequestTariff" class="text-dark text-lg text-center">
        У вас нет активных тарифов
      </p>

      <!-- Карточка активного тарифа доступа к контактам -->
      <ActiveTariffCard
        v-if="currentContactTariff"
        title="Доступ к контактам"
        :tariff="currentContactTariff"
        type="contact"
      />

      <!-- Карточка активного тарифа запросов на обмен -->
      <ActiveTariffCard
        v-if="currentRequestTariff"
        title="Запрос на обмен"
        :tariff="currentRequestTariff"
        type="request"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TariffCard from '@/components/sections/account/payment/TariffCard.vue'
import ActiveTariffCard from '@/components/sections/account/payment/ActiveTariffCard.vue'

const activeTariffTab = ref('connect')
const selectedContactTariff = ref('ten')
const selectedRequestTariff = ref('ten')

const currentContactTariff = {
  value: 'ten',
  label: '10 объектов',
  price: 7,
  remaining: 6
}

const currentRequestTariff = {
  value: 'unlimited',
  label: 'Безлимит на месяц',
  price: 18,
  remaining: 25
}

const contactTariffs = [
  { value: 'single', label: 'Разовый доступ', price: 1 },
  { value: 'ten', label: '10 объектов', price: 7 },
  { value: 'unlimited', label: 'Безлимит на месяц', price: 15 }
]

const requestTariffs = [
  { value: 'single', label: 'Разовый запрос', price: 2 },
  { value: 'ten', label: '10 запросов', price: 7 },
  { value: 'unlimited', label: 'Безлимит на месяц', price: 18 }
]
</script>
