 import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAlertStore } from './alertStore'

export const useFavoriteStore = defineStore('favorite', () => {
  const favorites = ref(new Set())
  const alertStore = useAlertStore()

  const toggleFavorite = (objectId) => {
    if (favorites.value.has(objectId)) {
      favorites.value.delete(objectId)
      alertStore.showFavoriteMessage('Удалено из избранного', 'Объект удален из списка избранного')
    } else {
      favorites.value.add(objectId)
      alertStore.showFavoriteMessage('Добавлено в избранное', 'Объект добавлен в список избранного')
    }
  }

  const isFavorite = (objectId) => {
    return favorites.value.has(objectId)
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite
  }
})
