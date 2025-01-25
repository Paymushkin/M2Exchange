<template>
  <header class="w-full bg-primary-light rounded-b-[36px] z-40 sticky top-0">
    <div class="container mx-auto px-4">
      <nav class="flex items-center py-5">
        
        <TheLogo class="mr-[115px]" />

        <TheNavigation @open-modal="isOpen = true" />

        <TheHeaderActions class="ml-auto" />
      </nav>
    </div>
  </header>

  <UModal v-model="isOpen">
    <Slider :fromModal="true" :closeModal="() => { isOpen = false }" />
  </UModal>
</template>

<script setup>
import { ref } from 'vue'

import TheLogo from '@/components/common/TheLogo.vue'
import TheNavigation from '@/components/common/TheNavigation.vue'
import TheHeaderActions from '@/components/TheHeaderActions.vue'
import Slider from '@/components/Slider.vue'

const isOpen = ref(false)
</script> 