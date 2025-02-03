import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const showUnpublishAlert = ref(false)
  const showDeleteAlert = ref(false)
  const showShareAlert = ref(false)
  const favoriteAlertData = ref({ title: '', description: '' })
  const showFavoriteAlert = ref(false)

  const showUnpublishMessage = () => {
    showUnpublishAlert.value = true
    setTimeout(() => {
      showUnpublishAlert.value = false
    }, 3000)
  }

  const showDeleteMessage = () => {
    showDeleteAlert.value = true
    setTimeout(() => {
      showDeleteAlert.value = false
    }, 3000)
  }

  const showShareMessage = () => {
    showShareAlert.value = true
    setTimeout(() => {
      showShareAlert.value = false
    }, 3000)
  }

  const showFavoriteMessage = (title, description) => {
    favoriteAlertData.value = { title, description }
    showFavoriteAlert.value = true
    setTimeout(() => {
      showFavoriteAlert.value = false
    }, 3000)
  }

  return {
    showUnpublishAlert,
    showDeleteAlert,
    showShareAlert,
    showUnpublishMessage,
    showDeleteMessage,
    showShareMessage,
    showFavoriteAlert,
    favoriteAlertData,
    showFavoriteMessage
  }
})
