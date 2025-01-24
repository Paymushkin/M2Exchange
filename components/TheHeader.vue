<template>
  <header class="w-full bg-primary-light rounded-b-[36px] z-40 sticky top-0">
    <div class="container mx-auto px-4">
      <nav class="flex items-center py-5">
        <!-- Левая часть с лого -->
        <TheLogo class="mr-[115px]" />

        <!-- Центральная часть с навигацией -->
        <TheNavigation @open-modal="isOpen = true" />

        <!-- Правая часть с иконками -->
        <TheHeaderActions class="ml-auto" />
      </nav>
    </div>
  </header>

  <UModal v-model="isOpen" width="w-full max-w-[800px]">
    <UCard>
      <Slider />
    </UCard>
  </UModal>
</template>

<script setup>
import TheLogo from './TheLogo.vue'
import TheNavigation from './TheNavigation.vue'
import TheHeaderActions from './TheHeaderActions.vue'
import Slider from './Slider.vue'
import { ref } from 'vue'

const isOpen = ref(false)
</script> 