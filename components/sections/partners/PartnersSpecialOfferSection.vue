<template>
	<section class="py-20">
			<!-- Верхний блок -->
			<div class="flex justify-between items-start mb-10">
				<!-- Левая часть с заголовком и описанием -->
				<div class="flex flex-col items-start">
					<h2 class="text-[55px] leading-[1.2] font-medium text-dark mb-6">
						Уникальные предложения
					</h2>
					<p class="text-[#41495E] text-lg">
						Доступ к эксклюзивным объектам со всего мира
					</p>
				</div>

				<!-- Правая часть с табами -->
				<div class="flex p-3 border border-[#D6D6D6] rounded-full">
					<button
						v-for="tab in tabs"
						:key="tab.id"
						@click="activeTab = tab.id"
						:class="[
							'px-6 py-2 rounded-full text-lg transition-all duration-300',
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
			<div class="flex flex-wrap gap-8 justify-between">
				<template v-for="item in filteredItems" :key="item.id">
					<NuxtLink to="/" class="offer-card flex flex-col gap-8 mr-10 relative rounded-t-lg overflow-hidden">
							<img
								:src="item.image"
							:alt="item.title"
							class="w-full h-[445px] object-cover rounded-b-lg"
						/>

						<CustomCornerArrowIcon class="absolute top-[-1px] right-[-1px]"/>

						<div class="flex flex-col gap-4">
							<h3 class="text-3xl font-medium truncate">{{ item.title }}</h3>
							<p class="text-lg text-[#41495D] truncate">{{ item.address }}</p>
							<div class="flex justify-between items-center">
								<div class="flex items-end gap-2">
									<span class="text-3xl font-medium">${{ item.price }}</span>
									<span class="text-lg text-[#41495D] line-through">${{ item.oldPrice }}</span>
								</div>
							</div>
						</div>
					</NuxtLink>
				</template>
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
	transition: scale 0.3s ease-in-out;
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
