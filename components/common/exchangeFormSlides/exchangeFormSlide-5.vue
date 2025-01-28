<template>
  <div class="flex flex-col items-center justify-center max-w-[970px] h-full">
    <h2 class="slide-custom__title mb-6 text-center">Дополнительная информация об объекте</h2>
    
    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col gap-4 max-w-[480px]">
        <div class="flex items-center justify-between">
          <span class="text-[#202020] xl:text-lg text-base">Спальни</span>
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
          <span class="text-[#202020] xl:text-lg text-base">Ванны</span>
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
        <h3 class="text-[#202020] xl:text-xl text-base font-medium">Комфорт</h3>
        <div class="flex flex-wrap xl:gap-3 gap-2">
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
import CheckboxButton from '@/components/ui/CheckboxButton.vue'

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