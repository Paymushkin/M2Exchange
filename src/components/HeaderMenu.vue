<template>
  <div 
    v-show="isOpen"
    class="absolute top-[calc(100%+25px)] right-0 w-[232px] bg-white rounded-[26px] shadow-lg px-[10px] pt-[36px] pb-[12px] transition-all duration-300 z-50"
  >
    <nav class="flex flex-col gap-4">
      <template v-for="(item, index) in menuItems" :key="item.path">
        <router-link 
          :to="item.path"
          class="flex items-center gap-3 hover:text-primary transition-colors group"
          @click="closeMenu"
        >
          <component :is="item.icon" class="w-5 h-5 text-primary group-hover:text-primary" />
          <span class="text-dark group-hover:text-primary text-[13px] leading-[20px]">{{ item.name }}</span>
        </router-link>
        <div 
          v-if="index === 2 || index === 5" 
          class="h-[1px] bg-gray-divider"
        />
      </template>
    </nav>
  </div>
</template>

<script setup>
import ProfileIcon from '../icons/ProfileIcon.vue'
import NotificationIcon from '../icons/NotificationIcon.vue'
import MessageIcon from '../icons/MessageIcon.vue'
import MyObjectsIcon from '../icons/MyObjectsIcon.vue'
import AddObjectIcon from '../icons/AddObjectIcon.vue'
import FavoritesIcon from '../icons/FavoritesIcon.vue'
import HelpIcon from '../icons/HelpIcon.vue'
import ContactIcon from '../icons/ContactIcon.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const menuItems = [
  { 
    name: 'Аккаунт',
    path: '/account',
    icon: ProfileIcon
  },
  { 
    name: 'Уведомления',
    path: '/notifications',
    icon: NotificationIcon
  },
  { 
    name: 'Сообщения',
    path: '/messages',
    icon: MessageIcon
  },
  { 
    name: 'Мои объекты',
    path: '/my-objects',
    icon: MyObjectsIcon
  },
  { 
    name: 'Разместить объект',
    path: '/add-object',
    icon: AddObjectIcon
  },
  { 
    name: 'Избранные объекты',
    path: '/favorites',
    icon: FavoritesIcon
  },
  { 
    name: 'Помощь',
    path: '/help',
    icon: HelpIcon
  },
  { 
    name: 'Связаться с нами',
    path: '/contact',
    icon: ContactIcon
  }
]

const closeMenu = () => {
  emit('close')
}
</script> 