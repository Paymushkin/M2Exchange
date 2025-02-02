<template>
  <div class="flex flex-col gap-4 mt-8">
    <SocialAuthButton
      v-for="button in socialButtons"
      :key="button.text"
      :icon="button.icon"
      :text="button.text"
    />
  </div>
</template>

<script setup>
import { GoogleLoginIcon, AppleLoginIcon, FacebookLoginIcon } from '@/components/icons/icons'
import SocialAuthButton from '@/components/ui/SocialAuthButton.vue'

const socialButtons = [
  {
    icon: GoogleLoginIcon,
    text: 'Войти с Google'
  },
  {
    icon: AppleLoginIcon,
    text: 'Войти с Apple'
  },
  {
    icon: FacebookLoginIcon,
    text: 'Войти с Facebook'
  }
]
</script>
