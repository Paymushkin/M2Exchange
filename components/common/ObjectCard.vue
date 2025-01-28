<template>
  <li 
    class="relative bg-white xl:rounded-2xl rounded-lg xl:p-5 sm:p-3 p-2 object-item"
    :class="{ 'favorite-object': isFavorite(card.id) }"
  >
    <img :src="card.image" :alt="card.title" class="w-full h-auto xl:rounded-xl rounded-md mb-3" />
    <div 
      class="flex items-center justify-center rounded-full icon-heart cursor-pointer"
      :class="{ 'is-favorite': isFavorite(card.id) }"
      @click="toggleFavorite(card.id)"
    >
      <HeartIcon class="h-6" />
    </div>
    <div class="flex items-center flex-wrap lg:mb-3 mb-2 gap-2 justify-between xl:text-xl lg:text-lg sm:text-sm text-xs">
      <p class="font-semibold truncate">{{ card.title }}</p>
      <p class="text-secondary font-semibold truncate">${{ card.price }}</p>
    </div>
    <div class="flex items-center mb-1 lg:mb-3">
      <LocationIcon />
      <span class="ml-1 xl:text-base text-xs truncate">{{ card.location }}</span>
    </div>
    <div class="flex justify-between gap-2">
      <div class="flex items-center gap-1">
        <SquareIcon class="w-4 lg:w-auto" />
        <span class="lg:text-base sm:text-sm text-[10px]">{{ card.area }}m²</span>
      </div>
      <div class="flex items-center gap-1">
        <BedIcon class="w-5 lg:w-auto" />
        <span class="lg:text-base sm:text-sm text-[10px]">{{ card.beds }}</span>
      </div>
      <div class="flex items-center gap-1">
        <BathIcon class="w-5 lg:w-auto" />
        <span class="lg:text-base sm:text-sm text-[10px]">{{ card.baths }}</span>
      </div>
    </div>
  </li>
</template>

<script setup>
import { useFavorites } from '@/composables/useFavorites'
import { 
  HeartIcon, 
  LocationIcon, 
  SquareIcon, 
  BedIcon, 
  BathIcon 
} from '@/components/icons/icons.js'

const props = defineProps({
  card: {
    type: Object,
    required: true,
  }
})

const { toggleFavorite, isFavorite } = useFavorites()
</script>

<style scoped>

.object-item {
  flex: 0 0 auto;
  max-width: 340px;
  box-shadow: 0px 6px 15px 0px rgba(80, 85, 136, 0.06);

  @media (max-width: 1280px) {
    max-width: 280px;
  }

  @media (max-width: 1024px) {
    max-width: 250px;
  }

  @media (max-width: 640px) {
    max-width: 200px;
  }
}

.icon-heart {
  position: absolute;
  top: 48px;
  right: 48px;
  width: 50px;
  aspect-ratio: 1 / 1;
  background-color: rgba(255, 255, 255, 0.50);
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    top: 30px;
    right: 30px;
    width: 40px;
  }

  @media (max-width: 640px) {
    top: 24px;
    right: 24px;
    width: 30px;
  }
}

.icon-heart svg {
  @media (max-width: 640px) {
    width: 15px;
  }
}

.icon-heart.is-favorite {
  background-color: #4460F6;
}

.icon-heart.is-favorite :deep(svg path) {
  fill: #4460F6;
  stroke: white;
}
</style> 