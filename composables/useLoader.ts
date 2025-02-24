import { ref } from 'vue'

// Создаем синглтон для глобального состояния загрузки
const isLoading = ref(true)

export const useLoader = () => {
    const startLoading = () => {
        isLoading.value = true
    }

    const stopLoading = () => {
        isLoading.value = false
    }

    return {
        isLoading,
        startLoading,
        stopLoading
    }
}
