<template>
  <NuxtLink
    to="/" 
    class="flex items-center space-x-2"
    :class="{ 'cursor-pointer': $route.path !== '/', 'cursor-default': $route.path === '/' }"
    @click.prevent="$route.path === '/' ? null : navigateToHome()"
  >
    <LogoIcon />
  </NuxtLink>
</template> 

<script setup>
import LogoIcon from './icons/LogoIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHome = () => {
  if (window.location.pathname !== '/') {
    router.push('/')
  }
}
</script> 