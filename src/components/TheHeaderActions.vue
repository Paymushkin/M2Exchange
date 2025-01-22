<template>
  <div class="flex items-center gap-5">
    <div class="flex items-center gap-2">
      <button 
      v-for="(action, index) in actions" 
      :key="index"
      class="text-gray-600 hover:text-gray-900"
      >
        <component :is="action.icon" />
      </button>
    </div>
    <!-- Кнопка входа с меню и аватаром -->
    <div class="relative">
      <div class="flex justify-between items-center gap-[22px] py-[6px] pl-[22px] pr-[12px] bg-white rounded-[40px] w-[115px]">
        <MenuButton :is-open="isMenuOpen" @toggle="toggleMenu" />
        <UserAvatar />
      </div>
      <HeaderMenu 
        :is-open="isMenuOpen" 
        @close="closeMenu"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FavoriteIcon, SearchIcon, GlobeIcon } from '../icons/index'
import MenuButton from './MenuButton.vue'
import UserAvatar from './UserAvatar.vue'
import HeaderMenu from './HeaderMenu.vue'

const actions = [
  { icon: FavoriteIcon },
  { icon: SearchIcon },
  { icon: GlobeIcon }
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script> 