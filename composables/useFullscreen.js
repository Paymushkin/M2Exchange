import { ref, onMounted, onUnmounted } from 'vue'

export function useFullscreen(breakpoint = 1024) {
    const isFullscreen = ref(false)

    const updateFullscreen = () => {
        isFullscreen.value = window.innerWidth < breakpoint
    }

    // Проверяем, что мы на клиенте, а не на сервере
    if (typeof window !== 'undefined') {
        isFullscreen.value = window.innerWidth < breakpoint
    }

    onMounted(() => {
        window.addEventListener('resize', updateFullscreen)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', updateFullscreen)
    })

    return {
        isFullscreen
    }
}
