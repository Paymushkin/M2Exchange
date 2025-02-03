<template>
  <div
    ref="tagsContainer"
    class="relative flex items-center self-end gap-0 mt-auto"
    :class="{ 'animate-cards-container': isVisible }"
  >
    <div
      v-for="(tag, index) in tags"
      :key="tag"
      :class="[
        'flex items-center justify-center bg-[#6A85F7] rounded-full sm:px-[30px] px-4 2xl:h-[60px] h-[40px]',
        index === 1 ? ['absolute rotated-item', { 'animate-card': isVisible }] : ''
      ]"
    >
      <span class="text-sm 2xl:text-base">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  tags: {
    type: Array,
    default: () => ['Real estate', 'house property', 'Apartment']
  }
})

const tagsContainer = ref(null)
const isVisible = ref(false)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target) // Отключаем наблюдение после первого появления
      }
    })
  },
  {
    threshold: 0.1 // Элемент считается видимым, когда хотя бы 10% его площади в зоне видимости
  }
)

onMounted(() => {
  if (tagsContainer.value) {
    observer.observe(tagsContainer.value)
  }
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<style scoped>
.rotated-item {
  transform: rotate(-18deg);
  top: -43px;
  left: calc(50% - 67px);

  @media (max-width: 1536px) {
    transform: rotate(-14deg);
  }
}

@keyframes cards-container {
  0% { gap: 0; }
  100% { gap: 123px; }
}

@keyframes cards-container2 {
  0% { gap: 0; }
  100% { gap: 50px; }
}

@keyframes card {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(-18deg);
    opacity: 1;
  }
}

@keyframes card2 {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(12px) rotate(-8deg);
    opacity: 1;
  }
}

.animate-cards-container {
  animation: cards-container 1.5s ease-out forwards;

  @media (max-width: 576px) {
    animation: cards-container2 1.5s ease-out forwards;
  }
}

.animate-card {
  animation: card 1.5s ease-out forwards;

  @media (max-width: 1536px) {
    animation: card2 1.5s ease-out forwards;
  }
}
</style>
