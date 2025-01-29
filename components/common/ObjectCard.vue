<template>
  <li 
    class="shadow-card relative bg-white xl:rounded-2xl rounded-lg xl:p-6 p-3 hover:scale-105 transition-all duration-300"
    :class="[{ 'favorite-object': isFavorite(card.id) }, isWide ? 'object-item-wide' : 'object-item']"
  >
      <img :src="card.image" :alt="card.title" class="w-full h-auto rounded-md mb-3" />
      <div 
        class="flex items-center justify-center rounded-full icon-heart cursor-pointer"
        :class="{ 'is-favorite': isFavorite(card.id) }"
        @click="toggleFavorite(card.id)"
      >
        <HeartIcon class="h-6" />
      </div>
      <span v-if="isWide" class="card-label bg-white color-dark rounded-xl px-2 py-1 text-xs font-bold">{{ card.type }}</span>
      <NuxtLink :to="`/object/${card.id}`">
      <div class="flex flex-col xl:gap-3 gap-2">
        <div class="flex items-center flex-wrap gap-2 justify-between xl:text-xl lg:text-lg sm:text-sm text-xs">
          <p class="font-semibold truncate hover:text-primary">{{ card.title }}</p>
          <p class="text-secondary font-semibold truncate">${{ card.price }}</p>
        </div>
        <div class="flex items-center">
          <LocationIcon />
          <span class="ml-1 xl:text-base text-xs truncate">{{ card.location }}</span>
        </div>
        <div class="flex xl:gap-8 lg:gap-5 gap-2">
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
        <div v-if="isWide" class="flex justify-between gap-2">
          <span class="lg:text-sm text-xs truncate">{{ card.description }}</span>
        </div>
      </div>
    </NuxtLink>
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
  },
  isWide: {
    type: Boolean,
    default: false
  }
})

const { toggleFavorite, isFavorite } = useFavorites()
</script>

<style scoped>

.shadow-card {
  box-shadow: 0px 8px 30px 0px rgba(80, 85, 136, 0.06);
}

.object-item {
  flex: 0 0 auto;
  max-width: 340px;

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

.object-item-wide {
  width: 100%;
}

.object-item-wide img {
  max-height: 271px;
  object-fit: cover;
}

.card-label {
  position: absolute;
  top: 48px;
  left: 48px;
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