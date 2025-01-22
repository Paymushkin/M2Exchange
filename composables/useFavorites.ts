import { ref } from 'vue'

export function useFavorites() {
  const favorites = ref<number[]>([])

  const toggleFavorite = (id: number) => {
    const index = favorites.value.indexOf(id)
    if (index === -1) {
      favorites.value.push(id)
    } else {
      favorites.value.splice(index, 1)
    }
  }

  const isFavorite = (id: number): boolean => {
    return favorites.value.includes(id)
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite
  }
} 