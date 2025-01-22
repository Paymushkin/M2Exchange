<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex flex-grow flex-col">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '~/src/components/TheHeader.vue'
import TheFooter from '~/src/components/TheFooter.vue'
</script> 