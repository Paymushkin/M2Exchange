<template>
	<div id="my-objects" class="flex flex-col items-start xl:gap-7 gap-4 w-full">
		<h2 class="text-dark font-semibold">Мои объекты</h2>
		<!-- Главный переключатель -->
		<TabSwitcher
			v-model="activeMainTab"
			:tabs="[
				{ value: 'actual', label: 'Активные' },
				{ value: 'history', label: 'Завершенные' }
			]"
		/>

		<div v-if="activeMainTab === 'actual'">
			<ul class="flex flex-wrap gap-4">
				<ObjectCard v-for="card in actualCards" :key="card.id" :card="card" :type="'account'" :status="'actual'" />
			</ul>
			<div v-if="!actualCards.length" class="flex flex-col items-center gap-4">
				<h3 class="text-dark font-semibold">У вас нет размещенных объетов</h3>
				<RoundedStandartButton>
					<span>Добавить объект на обмен</span>
				</RoundedStandartButton>
			</div>
		</div>

		<div v-if="activeMainTab === 'history'">
			<ul class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
				<ObjectCard v-for="card in historyCards" :key="card.id" :card="card" :type="'account'" :status="'history'" />
			</ul>
			<div v-if="!historyCards.length" class="flex flex-col items-center gap-4">
				<h3 class="text-dark font-semibold">У вас нет завершенных объетов</h3>
			</div>
		</div>


	</div>
</template>

<script setup>
import TabSwitcher from '@/components/ui/TabSwitcher.vue'
import ObjectCard from '@/components/common/ObjectCard.vue'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

const activeMainTab = ref('actual')

let cards = [
	{
		id: 1,
		image: new URL('@/assets/images/objects/object-1.png', import.meta.url).href,
		title: ' Apartment',
		price: '267000',
		location: 'Playa Arenal-Bol',
		area: '600',
		beds: '2',
		baths: '6',
		status: 'actual'
	},
	{
		id: 2,
		image: new URL('@/assets/images/objects/object-2.png', import.meta.url).href,
		title: 'Apartment',
		price: '267000',
		location: 'Playa Arenal-Bol',
		area: '600',
		beds: '2',
		baths: '6',
		status: 'actual'
	},
	{
		id: 3,
		image: new URL('@/assets/images/objects/object-3.png', import.meta.url).href,
		title: 'Apartment',
		price: '267000',
		location: 'Playa Arenal-Bol',
		area: '600',
		beds: '2',
		baths: '6',
		status: 'history'
	},
	{
		id: 4,
		image: new URL('@/assets/images/objects/object-4.png', import.meta.url).href,
		title: 'Apartment',
		price: '267000',
		location: 'Playa Arenal-Bol',
		area: '600',
		beds: '2',
		baths: '6',
		status: 'history'
	},
	{
		id: 5,
		image: new URL('@/assets/images/objects/object-5.png', import.meta.url).href,
		title: 'Apartment',
		price: '267000',
		location: 'Playa Arenal-Bol',
		area: '600',
		beds: '2',
		baths: '6',
		status: 'history'
	}
]

const actualCards = computed(() => {
	return cards.filter(card => card.status === 'actual')
})

const historyCards = computed(() => {
	return cards.filter(card => card.status === 'history')
})

// cards.length = 0
</script>

