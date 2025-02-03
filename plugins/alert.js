import AlertContainer from '@/components/common/AlertContainer.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('AlertContainer', AlertContainer)
})
