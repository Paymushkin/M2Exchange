<template>
  <li 
    class="relative w-[350px] bg-white rounded-[60px] p-6 shadow-[0px_14.143px_53.036px_rgba(80,85,136,0.06)]"
    :class="{ 'favorite-object': isFavorite(card.id) }"
  >
    <img :src="card.image" :alt="card.title" class="w-full h-auto rounded-lg mb-3" />
    <div 
      class="absolute top-12 right-12 flex items-center justify-center rounded-full icon-heart cursor-pointer"
      :class="{ 'is-favorite': isFavorite(card.id) }"
      @click="toggleFavorite(card.id)"
    >
      <HeartIcon class="h-6" />
    </div>
    <div class="flex items-center mb-3 gap-2 justify-between text-[24px]">
      <p class="font-semibold">{{ card.title }}</p>
      <p class="text-primary-lighter font-semibold">${{ card.price }}</p>
    </div>
    <div class="flex items-center mb-3">
      <LocationIcon />
      <span class="ml-1 text-[18px]">{{ card.location }}</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="flex items-center grow mt-2">
        <SquareIcon />
        <span class="ml-1">{{ card.area }}m²</span>
      </div>
      <div class="flex items-center grow mt-2">
        <BedIcon />
        <span class="ml-1">{{ card.beds }}</span>
      </div>
      <div class="flex items-center grow mt-2">
        <BathIcon />
        <span class="ml-1">{{ card.baths }}</span>
      </div>
    </div>
  </li>
</template>

<script setup>
import { useFavorites } from '~/composables/useFavorites'
import HeartIcon from '../../icons/HeartIcon.vue'
import LocationIcon from '../../icons/LocationIcon.vue'
import SquareIcon from '../../icons/SquareIcon.vue'
import BedIcon from '../../icons/BedIcon.vue'
import BathIcon from '../../icons/BathIcon.vue'

const props = defineProps({
  card: {
    type: Object,
    required: true,
  }
})

const { toggleFavorite, isFavorite } = useFavorites()
</script>

<style scoped>
.icon-heart {
  width: 50px;
  aspect-ratio: 1 / 1;
  background-color: rgba(255, 255, 255, 0.50);
  transition: all 0.3s ease;
}

.icon-heart.is-favorite {
  background-color: #4460F6;
}

.icon-heart.is-favorite :deep(svg path) {
  fill: #4460F6;
  stroke: white;
}

.favorite-object {
  box-shadow: 0px 14px 53px rgba(68, 96, 246, 0.1);
}
</style> 