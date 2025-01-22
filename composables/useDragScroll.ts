import { ref } from 'vue'

export function useDragScroll() {
  const scrollContainer = ref<HTMLElement | null>(null)
  const isDragging = ref(false)
  const startX = ref(0)
  const scrollLeft = ref(0)

  const startDragging = (e: MouseEvent) => {
    if (!scrollContainer.value) return
    
    isDragging.value = true
    startX.value = e.pageX - scrollContainer.value.offsetLeft
    scrollLeft.value = scrollContainer.value.scrollLeft
  }

  const stopDragging = () => {
    isDragging.value = false
  }

  const drag = (e: MouseEvent) => {
    if (!isDragging.value || !scrollContainer.value) return
    
    e.preventDefault()
    const x = e.pageX - scrollContainer.value.offsetLeft
    const walk = (x - startX.value) * 2
    scrollContainer.value.scrollLeft = scrollLeft.value - walk
  }

  return {
    scrollContainer,
    startDragging,
    stopDragging,
    drag
  }
} 