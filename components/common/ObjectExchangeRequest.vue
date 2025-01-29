<template>
  <div class="flex flex-col sm:flex-row justify-center items-center bg-white rounded-sm pt-10 pb-4 px-6">
    <!-- Содержимое модального окна -->
    <div class="flex flex-col justify-between items-center mb-6">
        <button @click="modalStore.closeExchangeModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <CloseIcon class="w-6 h-6" />
        </button>
        <h3 class="text-2xl text-center font-medium text-dark mb-6">Нажимая "Отправить" вы оставляете запрос на обмен недвижимости</h3>
        <form>
            <RoundedStandartButton type="submit" class="mb-10 min-w-[200px] min-h-[78px]">
                <span>Отправить</span>
            </RoundedStandartButton>
        </form>
        <NuxtLink to="/">
            <span class="text-dark underline">Настроить параметры обмена</span>
        </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { CloseIcon } from '@/components/icons/icons'
import { useModalStore } from '@/stores/modalStore'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

const modalStore = useModalStore()
</script>