<template>
	<section>
			<!-- Верхний блок -->
			<div class="flex flex-col lg:flex-row justify-between 2xl:items-start lg:items-end items-start 2xl:mb-10 xl:mb-8 mb-6">
				<!-- Левая часть с заголовком и описанием -->
				<div class="flex flex-col items-start">
					<h2 class="2xl:text-[55px] xl:text-5xl lg:text-4xl text-2xl 2xl:leading-[1.2] font-medium text-dark 2xl:mb-6 xl:mb-4 mb-2">
						Уникальные предложения
					</h2>
					<p class="text-[#41495E] sm:text-lg text-base lg:mb-0 mb-4">
						Доступ к эксклюзивным объектам со всего мира
					</p>
				</div>

				<!-- Правая часть с табами -->
				<div class="flex  justify-between sm:w-auto w-full 2xl:p-3 p-2 border border-[#D6D6D6] rounded-full">
					<button
						v-for="tab in tabs"
						:key="tab.id"
						@click="activeTab = tab.id"
						:class="[
							'2xl:px-6 2xl:py-2 sm:px-4 px-2.5 py-1 rounded-full 2xl:text-lg sm:text-base text-sm transition-all duration-300',
							activeTab === tab.id
								? 'bg-[#6284FF] text-black'
								: 'bg-transparent text-dark-primary'
						]"
					>
						{{ tab.name }}
					</button>
				</div>
			</div>

			<!-- Нижний блок с карточками -->
			<div class="flex flex-wrap 2xl:gap-8 gap-6 justify-between">
				<NuxtLink
					v-for="item in filteredItems"
					:key="item.id"
					to="/"
					class="offer-card flex flex-col lg:gap-8 gap-4 2xl:mr-10 mr-0 relative rounded-t-[25px] overflow-hidden"
				>
					<img
						:src="item.image"
						:alt="item.title"
						loading="lazy"
						placeholder="blur"
						class="w-full 2xl:h-[445px] lg:h-[300px] h-[200px] object-cover rounded-[30px]"
					/>

					<CustomCornerArrowIcon class="absolute top-[-1px] right-[-1px] 2xl:w-[138px] w-[69px] 2xl:h-[152px] h-[76px] "/>

					<div class="flex flex-col sm:gap-4 gap-2">
						<h3 class="2xl:text-3xl sm:text-2xl text-xl font-medium truncate">{{ item.title }}</h3>
						<p class="2xl:text-lg sm:text-base text-sm text-[#41495D] truncate">{{ item.address }}</p>
						<div class="flex justify-between items-center">
							<div class="flex items-end gap-2">
								<span class="2xl:text-3xl sm:text-2xl text-xl font-medium">${{ item.price }}</span>
								<span class="2xl:text-lg sm:text-base text-sm text-[#41495D] line-through">${{ item.oldPrice }}</span>
							</div>
						</div>
					</div>
				</NuxtLink>
			</div>
	</section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowIcon, CustomCornerArrowIcon } from '@/components/icons/icons'
import object1 from '@/assets/images/partners/object-1.png'
import object2 from '@/assets/images/partners/object-2.png'
import object3 from '@/assets/images/partners/object-3.png'
import object4 from '@/assets/images/partners/object-4.png'

const activeTab = ref('house')

const tabs = [
	{ id: 'house', name: 'House' },
	{ id: 'real-estate', name: 'Real estate' },
	{ id: 'apartment', name: 'Apartment' }
]

const items = [
	{
		id: 1,
		type: 'house',
		title: 'Babakansirna house',
		address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
		price: '943.65',
		oldPrice: '999.000',
		image: object1
	},
	{
		id: 2,
		type: 'house',
		title: 'Pelangi house',
		address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
		price: '943.65',
		oldPrice: '999.000',
		image: object2
	},
	{
		id: 3,
		type: 'house',
		title: 'Real Estate',
		address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
		price: '943.65',
		oldPrice: '999.000',
		image: object3
	},
	{
		id: 4,
		type: 'house',
		title: 'Property house',
		address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
		price: '943.65',
		oldPrice: '999.000',
		image: object4
	},
		{
		id: 11,
		type: 'real-estate',
		title: 'Babakansirna house',
		address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
		price: '943.65',
		oldPrice: '999.000',
		image: object1
	},
	{
		id: 12,
		type: 'real-estate',
		title: 'Pelangi house',
		address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
		price: '943.65',
		oldPrice: '999.000',
		image: object2
	},
	{
		id: 21,
		type: 'apartment',
		title: 'Real Estate',
		address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
		price: '943.65',
		oldPrice: '999.000',
		image: object3
	},
	{
		id: 22,
		type: 'apartment',
		title: 'Property house',
		address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
		price: '943.65',
		oldPrice: '999.000',
		image: object4
	}
]

const filteredItems = computed(() => {
	return items.filter(item => item.type === activeTab.value)
})
</script>

<style scoped>
.offer-card {
	width: 36%;
	transition: scale 0.3s ease-in-out;

	@media (max-width: 1536px) {
		width: 40%;
	}

	@media (max-width: 640px) {
		width: 100%;
	}
}

.offer-card:nth-child(3n + 1) {
	width: 51%;

	@media (max-width: 1536px) {
		width: 55%;
	}

	@media (max-width: 640px) {
		width: 100%;
	}
}

.offer-card:hover {
	scale: 1.01;
}

.offer-card img{
	aspect-ratio: 612/445;
}
.offer-card:nth-child(3n + 1) img {
	aspect-ratio: 870/445;
}
</style>

<style>
.offer-card svg g > * {
	transition: all 0.3s ease-in-out;
}

.offer-card:hover svg g rect {
	fill: #3b82f6;
}

.offer-card:hover svg g path {
	fill: white;
}

</style>
