<template>
	<section>
		<div class="container">
			<h2 class="text-dark lg:text-4xl sm:text-2xl text-xl font-bold mb-2">Вам может понравиться</h2>
			<div class="cards-container">
				<ul
					ref="scrollContainer"
					class="flex xl:gap-4 gap-2 overflow-x-auto pb-5 scrollbar-hide scroll-grab"
					@mousedown="startDragging"
					@mousemove="drag"
					@mouseup="stopDragging"
					@mouseleave="stopDragging">

					<ObjectCard v-for="card in cards" :key="card.id" :card="card" :is-wide="true" />

				</ul>
			</div>
		</div>
	</section>
</template>


<script setup>
import ObjectCard from '@/components/common/ObjectCard.vue'
import StandartBanner from '@/components/common/StandartBanner.vue'
import StandartButton from '@/components/ui/StandartButton.vue'
import { useDragScroll } from '@/composables/useDragScroll'

const { scrollContainer, startDragging, stopDragging, drag } = useDragScroll()

const cards = [
	{
		id: 1,
		image: new URL('@/assets/images/objects/object-6.png', import.meta.url).href,
		title: ' Apartment',
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
]
</script>
