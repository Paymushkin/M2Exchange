<template>
  <div class="sticky flex justify-end bottom-10 w-full right-6 z-50">
      <SupportChat
        v-if="isChatOpen"
        @close-chat="isChatOpen = false"
      />


      <SendButton
        v-if="!isChatOpen"
        @open-chat="isChatOpen = true"
      />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SupportChat from './SupportChat.vue'
import SendButton from './SendButton.vue'

const isChatOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
