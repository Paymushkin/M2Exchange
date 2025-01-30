<template>
	<section class="relative xl:mb-20 mb-5">
		<!-- Фоновый блок -->
		<div class="hidden lg:block absolute inset-0 bg-background-blue object-shape"></div>

		<div class="container custom-container mx-auto">
			<h2
				class="2xl:text-[42px] lg:4xl text-2xl leading-[1.2]] font-bold text-left 2xl:mb-12 xl:mb-8 mb-5 pt-10 text-dark"
			>
				Рекомендуемые объекты
			</h2>

			<div class="cards-container">
				<ul
					ref="scrollContainer"
					class="flex xl:gap-4 gap-2 overflow-x-auto pb-5 scrollbar-hide scroll-grab"
					@mousedown="startDragging"
					@mousemove="drag"
					@mouseup="stopDragging"
					@mouseleave="stopDragging"
				>
					<ObjectCard v-for="card in cards" :key="card.id" :card="card" />
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup>
import ObjectCard from '@/components/common/ObjectCard.vue'
import { useDragScroll } from '@/composables/useDragScroll'

const { scrollContainer, startDragging, stopDragging, drag } = useDragScroll()

const cards = [
	{
		id: 1,
		image: new URL('@/assets/images/objects/object-1.png', import.meta.url).href,
		title: ' Apartment',
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
	}
]
</script>

<style scoped>
.object-shape {
	width: 65%;
	max-height: 530px;
	aspect-ratio: 1252 / 530;
	border-radius: 0 100px 100px 0;
	z-index: -1;
}
</style>
