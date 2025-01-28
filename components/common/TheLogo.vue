<template>
  <NuxtLink
    to="/"
    class="2xl:mr-[95px] xl:mr-auto"
    :class="{ 'cursor-pointer': $route.path !== '/', 'cursor-default': $route.path === '/' }"
    @click.prevent="$route.path === '/' ? null : navigateToHome()"
  >
    <div class="block sm:hidden xl:block">
      <LogoIcon />
    </div>
    <div class="hidden sm:block xl:hidden">
      <LogoMiniIcon />
    </div>
  </NuxtLink>
</template> 

<script setup>
import { LogoIcon, LogoMiniIcon } from '@/components/icons/icons.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHome = () => {
  if (window.location.pathname !== '/') {
    router.push('/')
  }
}
</script> 