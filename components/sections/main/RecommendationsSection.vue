<template>
  <section class="relative pl-[80px] pr-6 py-6 mb-20">
    <!-- Фоновый блок -->
    <div class="absolute inset-0 object-shape"></div>
    
    <h2 class="text-[42px] leading-[50px] font-bold text-left mb-6 text-dark">Рекомендуемые объекты</h2>
    
    <div class="cards-container">
      <ul 
        ref="scrollContainer"
        class="flex space-x-4 overflow-x-auto scrollbar-hide scroll-grab"
        @mousedown="startDragging"
        @mousemove="drag"
        @mouseup="stopDragging"
        @mouseleave="stopDragging"
      >
        <ObjectCard 
          v-for="card in cards" 
          :key="card.id" 
          :card="card"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import ObjectCard from './ObjectCard.vue'
import { useDragScroll } from '~/composables/useDragScroll'

const { scrollContainer, startDragging, stopDragging, drag } = useDragScroll()

const cards = [
  {
    id: 1,
    image: '/images/objects/object-1.png',
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 2,
    image: '/images/objects/object-2.png',
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 3,
    image: '/images/objects/object-3.png',
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 4,
    image: '/images/objects/object-4.png',
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 5,
    image: '/images/objects/object-5.png',
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  }
]
</script>

<style scoped>
.cards-container {
  overflow: hidden;
  padding-bottom: 20px; /* Компенсация скрытой прокрутки */
  margin-bottom: -20px; /* Компенсация отступа */
}
.object-shape {
  width: 65%;
  max-height: 530px;
  aspect-ratio: 1252 / 530;
  background-color: #EFF3FF;
  border-radius: 0 100px 100px 0;
  z-index: -1;
}
</style>

