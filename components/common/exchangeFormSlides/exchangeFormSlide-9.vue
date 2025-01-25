<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div class="flex items-center justify-center w-[150px] h-[150px] bg-[#E9ECFF] rounded-full mb-2">
      <CheckIcon />
    </div>
    <h2 class="custom-title mb-10 text-primary-darker text-left font-semibold">Все получилось!</h2>
    <div class="flex items-center justify-center gap-4">
      <StandartLinkButton to="/" variant="primary">
        Просмотреть варианты обмена
      </StandartLinkButton>
      
      <StandartLinkButton to="/" variant="secondary">
        Просмотреть мое объявление
      </StandartLinkButton>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@/components/icons/icons.js'
import StandartLinkButton from '~/components/ui/StandartLinkButton.vue'
</script>

<style scoped>
.shadow-custom {
  box-shadow: 11.282px 11.282px 45.13px 0px rgba(68, 96, 246, 0.10);
}
</style>
