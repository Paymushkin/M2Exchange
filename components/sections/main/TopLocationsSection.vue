<template>
  <section>
    <div class="container custom-container-2">
      <div class="flex justify-between items-center xl:gap-[400px] gap-5 mb-10">
        <h2 class="2xl:text-[42px] lg:4xl text-2xl leading-[1.2] font-bold text-primary-darker">Топ локации</h2>
        <div class="flex xl:gap-4 gap-2 items-center cursor-pointer  lg:pr-0">
          <span class="2xl:text-2xl xl:text-xl sm:text-base text-xs text-primary">Смотреть все</span>
          <SeeAllIcon />
        </div>
      </div>

      <form>
        <div 
            class="flex xl:gap-10 pb-5 gap-4 overflow-x-auto scrollbar-hide">
          <label 
            v-for="location in locations" 
            :key="location.value" 
            :class="[
              'flex items-center rounded-[80px] xl:py-4 py-2 xl:pr-8 pr-4 xl:pl-4 pl-2 transition-colors cursor-pointer',
              selectedLocation === location.value ? 'bg-secondary' : 'bg-background-light'
            ]"
          >
            <input 
              class="hidden" 
              type="radio" 
              name="location" 
              :value="location.value" 
              v-model="selectedLocation" 
            />
            <div class="flex items-center xl:gap-4 gap-2">
              <div 
                class="location-image" 
                :style="{ backgroundImage: `url(${location.image})` }"
              ></div>
              <span 
                :class="[
                  'xl:text-xl text-xs font-medium',
                  selectedLocation === location.value ? 'text-white' : 'text-primary-darker'
                ]"
              >
                {{ location.label }}
              </span>
            </div>
          </label>
        </div>

        <div class="cards-container">
          <ul 
            ref="scrollContainer"
            class="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-7 gap-2 pb-10">
            <ObjectCard 
              v-for="card in cards" 
              :key="card.id" 
              :card="card"
            />
          </ul>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import spain from '@/assets/images/locations/spain.png';
import cyprus from '@/assets/images/locations/cyprus.png';
import { SeeAllIcon } from '@/components/icons/icons.js'
import ObjectCard from '@/components/common/ObjectCard.vue'

const selectedLocation = ref('Spain'); // Устанавливаем значение по умолчанию

// Массив объектов для локаций
const locations = [
  { value: 'Spain', label: 'Испания', image: spain },
  { value: 'Canada', label: 'Канада', image: spain },
  { value: 'Cyprus', label: 'Кипр', image: cyprus },
  { value: 'Other', label: 'Другие', image: cyprus },
  { value: 'Spain2', label: 'Испания', image: spain },
  { value: 'Canada2', label: 'Канада', image: spain },
  { value: 'Cyprus2', label: 'Кипр', image: cyprus },
  { value: 'Other2', label: 'Другие', image: cyprus }
];

const cards = [
  {
    id: 1,
    image: new URL('@/assets/images/objects/object-1.png', import.meta.url).href,
    title: ' Apartment Apartment Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 2,
    image: new URL('@/assets/images/objects/object-2.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 3,
    image: new URL('@/assets/images/objects/object-3.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 4,
    image: new URL('@/assets/images/objects/object-4.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 5,
    image: new URL('@/assets/images/objects/object-5.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
    {
    id: 6,
    image: new URL('@/assets/images/objects/object-1.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 7,
    image: new URL('@/assets/images/objects/object-2.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 8,
    image: new URL('@/assets/images/objects/object-3.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 9,
    image: new URL('@/assets/images/objects/object-4.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6'
  },
  {
    id: 10,
    image: new URL('@/assets/images/objects/object-5.png', import.meta.url).href,
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

.location-image  {
  width: 90px;
  height: 90px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1280px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
  }
}

</style>