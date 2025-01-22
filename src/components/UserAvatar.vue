<template>
  <div class="relative">
    <router-link 
      :to="isAuthenticated ? '/account' : '/auth'" 
      class="block"
    >
      <img 
        :src="isAuthenticated ? userAvatar : defaultAvatar" 
        :alt="isAuthenticated ? 'User avatar' : 'Default avatar'"
        class="min-w-[46px] h-[46px] aspect-square rounded-full object-cover"
      />
    </router-link>
    
    <!-- Счетчик уведомлений -->
    <div 
      v-if="notificationsCount > 0"
      class="absolute top-0 right-0 w-[14px] h-[14px] bg-[#FE8A71] rounded-full flex items-center justify-center"
    >
      <span class="text-white text-[10px] leading-none">{{ notificationsCount }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import defaultAvatar from '../assets/images/default-avatar.svg'
import userAvatar from '../assets/images/avatar.png'

const isAuthenticated = ref(true) // В реальном приложении это значение будет приходить из хранилища или пропсов
const notificationsCount = ref(3) // Количество уведомлений
</script>