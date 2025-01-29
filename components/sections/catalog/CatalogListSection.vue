<template>
  <section>
    <div class="container">
        <ul class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-10">
            <ObjectCard 
                v-for="card in cards" 
                :key="card.id" 
                :card="card"
                :is-wide="true"
            />
        </ul>

        <StandartBanner class="mb-10"/>

        <ul class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-10">
            <ObjectCard 
                v-for="card in cards" 
                :key="card.id" 
                :card="card"
                :is-wide="true"
            />
        </ul>

        <div class="flex justify-center mb-20">
            <StandartButton>
                <span class="text-sm font-semibold">Показать больше объектов</span>
            </StandartButton>
        </div>
    </div>
  </section>
</template>

<script setup>
import ObjectCard from '@/components/common/ObjectCard.vue'
import StandartBanner from '@/components/common/StandartBanner.vue'
import StandartButton from '@/components/ui/StandartButton.vue'

const cards = [
  {
    id: 1,
    image: new URL('@/assets/images/objects/object-6.png', import.meta.url).href,
    title: ' Apartment Apartment Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6',
    description: 'Двухэтажная вилла с бассейном на берегу моря',
    type: 'Вилла'
  },
  {
    id: 2,
    image: new URL('@/assets/images/objects/object-7.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6',
    description: 'Двухэтажная вилла с бассейном на берегу моря',
    type: 'Вилла'
  },
  {
    id: 3,
    image: new URL('@/assets/images/objects/object-6.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6',
        description: 'Двухэтажная вилла с бассейном на берегу моря',
    type: 'Вилла'
  },
  {
    id: 4,
    image: new URL('@/assets/images/objects/object-7.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6',
    description: 'Двухэтажная вилла с бассейном на берегу моря',
    type: 'Вилла'
  },
  {
    id: 5,
    image: new URL('@/assets/images/objects/object-6.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6',
    description: 'Двухэтажная вилла с бассейном на берегу моря',
    type: 'Вилла'
  },
  {
    id: 6,
    image: new URL('@/assets/images/objects/object-7.png', import.meta.url).href,
    title: 'Apartment',
    price: '267000',
    location: 'Playa Arenal-Bol',
    area: '600',
    beds: '2',
    baths: '6',
    description: 'Двухэтажная вилла с бассейном на берегу моря',
    type: 'Вилла'
  },
]
</script>
