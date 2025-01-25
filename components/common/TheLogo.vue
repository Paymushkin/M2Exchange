<template>
  <NuxtLink
    to="/" 
    :class="{ 'cursor-pointer': $route.path !== '/', 'cursor-default': $route.path === '/' }"
    @click.prevent="$route.path === '/' ? null : navigateToHome()"
  >
    <LogoIcon />
  </NuxtLink>
</template> 

<script setup>
import LogoIcon from '@/components/icons/LogoIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHome = () => {
  if (window.location.pathname !== '/') {
    router.push('/')
  }
}
</script> 