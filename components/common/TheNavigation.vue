<template>
  <div 
    class="hidden sm:flex items-center gap-5 lg:gap-8"
    :class="{ 'hidden': searchStore.isSearchOpen }"
  >
    <HeaderExchangeButton @click="modalStore.openModal" class="hidden xl:flex" />
    
    <NuxtLink 
      v-for="item in navigationItems" 
      :key="item.text"
      :to="item.href" 
      class="text-sm text-primary-darker hover:text-primary-hover"
    >
      {{ item.text }}
    </NuxtLink>
  </div>
</template>

<script setup>

import HeaderExchangeButton from '@/components/ui/HeaderExchangeButton.vue';
import { useModalStore } from '@/stores/modalStore';
import { useSearchStore } from '@/stores/searchStore';

const searchStore = useSearchStore();
const modalStore = useModalStore();

const navigationItems = [
  { text: 'О сервисе', href: '/about' },
  { text: 'Партнерам', href: '/partners' },
  { text: 'Объекты', href: '/objects' },
  { text: 'Информация', href: '/info' }
];
</script> 