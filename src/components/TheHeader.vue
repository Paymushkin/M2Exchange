<template>
  <header class="w-full bg-primary-light rounded-b-[36px] relative z-40">
    <div class="container mx-auto px-4">
      <nav class="flex items-center py-5">
        <!-- Левая часть с лого -->
        <TheLogo class="mr-[115px]" />

        <!-- Центральная часть с навигацией -->
        <TheNavigation />

        <!-- Правая часть с иконками -->
        <TheHeaderActions class="ml-auto" />
      </nav>
    </div>
  </header>
</template>

<script setup>
import TheLogo from './TheLogo.vue'
import TheNavigation from './TheNavigation.vue'
import TheHeaderActions from './TheHeaderActions.vue'
</script> 