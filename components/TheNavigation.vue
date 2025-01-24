<template>
  <div class="hidden md:flex items-center space-x-8">
    <ExchangeButton @click="$emit('open-modal')" />
    <a 
      v-for="item in navigationItems" 
      :key="item.text"
      :href="item.href" 
      class="text-[#171652] hover:text-[#171652]/80"
    >
      {{ item.text }}
    </a>
  </div>
</template>

<script setup>
import ExchangeButton from './ui/ExchangeButton.vue'

defineEmits(['open-modal'])

const navigationItems = [
  { text: 'О сервисе', href: '#' },
  { text: 'Партнерам', href: '#' },
  { text: 'Объекты', href: '#' },
  { text: 'Информация', href: '#' }
]
</script> 