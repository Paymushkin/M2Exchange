<template>
  <div class="flex flex-col items-center justify-center max-w-[970px] h-full">
    <h2 class="custom-title mb-6 text-center">Дополнительная информация об объекте</h2>
    
    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col gap-4 max-w-[480px]">
        <div class="flex items-center justify-between">
          <span class="text-[#202020] text-lg">Спальни</span>
          <div class="flex items-center gap-2">
            <UButton
              @click="bedrooms = Math.max(bedroomsConfig.min, bedrooms - 1)"
              class="custom-counter-button"
              variant="solid"
            >
              <UIcon name="i-heroicons-minus" />
            </UButton>
            <span class="custom-counter-value">
              {{ bedrooms }}
            </span>
            <UButton
              @click="bedrooms++"
              class="custom-counter-button"
              variant="solid"
            >
              <UIcon name="i-heroicons-plus" />
            </UButton>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-[#202020] text-lg">Ванны</span>
          <div class="flex items-center gap-2">
            <UButton
              @click="bathrooms = Math.max(bathroomsConfig.min, bathrooms - 1)"
              class="custom-counter-button"
              variant="solid"
            >
              <UIcon name="i-heroicons-minus" />
            </UButton>
            <span class="custom-counter-value">
              {{ bathrooms }}
            </span>
            <UButton
              @click="bathrooms++"
              class="custom-counter-button"
              variant="solid"
            >
              <UIcon name="i-heroicons-plus" />
            </UButton>
          </div>
        </div>
      </div>


      <div class="flex flex-col gap-4 max-w-[650px]">
        <h3 class="text-[#202020] text-xl font-medium">Комфорт</h3>
        <div class="flex flex-wrap gap-3">
          <CheckboxButton
            v-for="comfort in comfortItems"
            :key="comfort.id"
            v-model="selectedComforts[comfort.id - 1]"
          >
            {{ comfort.label }}
          </CheckboxButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CheckboxButton from '../ui/CheckboxButton.vue'

const bedroomsConfig = {
  min: 0,
  defaultValue: 3
}

const bathroomsConfig = {
  min: 0,
  defaultValue: 2
}

const bedrooms = ref(bedroomsConfig.defaultValue)
const bathrooms = ref(bathroomsConfig.defaultValue)

// Инициализируем массив с 8 элементами false
const selectedComforts = ref(new Array(8).fill(false))

const comfortItems = [
  { id: 1, label: 'Детская площадка' },
  { id: 2, label: 'Бассейн' },
  { id: 3, label: 'Зона барбекю' },
  { id: 4, label: 'Стоянка' },
  { id: 5, label: 'Безопасность' },
  { id: 6, label: 'Джакузи' },
  { id: 7, label: 'Парк' },
  { id: 8, label: 'Умный дом' }
]
</script>

<style>
.custom-title {
  color: #202020;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
}

.custom-counter-button {
  width: 42px !important;
  height: 42px !important;
  min-height: unset !important;
  padding: 0 !important;
  border-radius: 9999px !important;
  background-color: #4169E1 !important;
  color: white !important;
  font-size: 16px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border: none !important;
}

.custom-counter-value {
  width: 42px;
  height: 42px;
  border-radius: 9999px;
  background: transparent;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #E9E8E8;
  color: #202020;
  font-weight: 500;
}

.custom-radio-button {
  padding: 14px 24px !important;
  border-radius: 100px !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  background-color: #E9ECFF !important;
  color: #656565 !important;
  border: none !important;
  white-space: nowrap !important;
}

.custom-radio-button[data-variant='solid'] {
  background-color: #1C2D6A !important;
  color: #ffffff !important;
}

.custom-radio-button:hover {
  opacity: 0.9;
}
</style>
