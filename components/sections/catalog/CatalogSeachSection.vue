<template>
	<div class="container">
		<div class="flex flex-col justify-center lg:py-12 py-5 w-full">
			<!-- Верхний уровень -->
			<div class="flex items-center justify-between flex-wrap lg:flex-nowrap w-full mb-4 gap-2">
				<div class="flex justify-between items-center gap-2 lg:w-auto w-full">
					<StandartSelect :options="locationOptions" />
					<FilterButton
						class="flex lg:hidden"
						@click="toggleFilters"
						:class="{ 'bg-primary': isFiltersVisible }"
					>
						<span class="hidden sm:inline text-sm">Фильтры</span>
					</FilterButton>
				</div>
				<div class="flex items-center gap-4 grow">
					<input
						type="text"
						placeholder="Поиск"
						class="grow border border-[#D2DBF5D] rounded-sm px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
					/>
					<button type="submit" class="flex sm:hidden text-primary">
						<SearchFormIcon />
					</button>
					<StandartButton type="submit" class="hidden sm:flex">
						<span class="text-sm font-semibold">Показать объекты</span>
					</StandartButton>
				</div>
			</div>

			<!-- Нижний уровень -->
			<div v-if="!isFiltersVisible" class="hidden lg:flex justify-between items-center gap-5">
				<div class="flex items-center gap-2">
					<TagButton
						v-for="(tag, index) in tags"
						:key="index"
						:class="[
							'transition duration-200',
							activeTagIndexes.includes(index)
								? 'bg-primary text-white hover:bg-dark transition duration-200'
								: 'bg-dark text-white hover:bg-primary transition duration-200'
						]"
						@click="toggleTag(index)"
					>
						{{ tag }}
					</TagButton>
				</div>
				<FilterButton @click="isFiltersVisible = true">
					<span class="text-sm">Фильтры</span>
				</FilterButton>
			</div>

			<!-- Фильтры -->
			<ObjectFilters
				v-if="isFiltersVisible"
				v-model="filters"
				:config="filtersConfig"
				@close="toggleFilters"
				context="catalog"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import TagButton from '@/components/ui/TagButton.vue'
import StandartSelect from '@/components/ui/StandartSelect.vue'
import FilterButton from '@/components/ui/FilterButton.vue'
import StandartButton from '@/components/ui/StandartButton.vue'
import { SearchFormIcon } from '@/components/icons/icons'
import ObjectFilters from '@/components/common/ObjectFilters.vue'

const isFiltersVisible = ref(false)
const activeTagIndexes = ref([])

const tags = ['Вилла', 'до 400000 $', 'от 500 м²', '3+ спальни', '2 санузла']
const locationOptions = ['Italy, Sardinia', 'Spain, Barcelona', 'France, Paris']

const toggleTag = (index) => {
	const currentIndex = activeTagIndexes.value.indexOf(index)
	if (currentIndex === -1) {
		activeTagIndexes.value.push(index)
	} else {
		activeTagIndexes.value.splice(currentIndex, 1)
	}
}

const toggleFilters = () => {
	isFiltersVisible.value = !isFiltersVisible.value
}

const filtersConfig = {
	propertyTypeSection: {
		title: 'Тип недвижимости',
		options: [
			{ value: 'all', label: 'Все' },
			{ value: 'apartments', label: 'Апартаменты' },
			{ value: 'houses', label: 'Дома' },
			{ value: 'villas', label: 'Виллы' },
			{ value: 'bungalows', label: 'Бунгало' },
			{ value: 'townhouses', label: 'Таунхаус' },
			{ value: 'country-house', label: 'Деревенский дом' },
			{ value: 'mansion', label: 'Особняк' },
			{ value: 'farm', label: 'Ферма' },
			{ value: 'apartment', label: 'Квартира' }
		]
	},
	priceSection: {
		title: 'Стоимость',
		minPlaceholder: 'Мин: 10 000 $',
		maxPlaceholder: 'Макс: 1 000 000 000 $'
	},
	areaSection: {
		title: 'Площадь',
		minPlaceholder: 'Мин. м2',
		maxPlaceholder: 'Макс. м2'
	},
	roomsSection: {
		bedroomsLabel: 'Спальни',
		bathroomsLabel: 'Ванны',
		bedrooms: { min: 0, max: 10 },
		bathrooms: { min: 0, max: 10 }
	},
	amenitiesSection: {
		title: 'Удобства',
		options: [
			{ id: 'playground', label: 'Детская площадка' },
			{ id: 'pool', label: 'Бассейн' },
			{ id: 'barbecue', label: 'Зона барбекю' },
			{ id: 'parking', label: 'Стоянка' },
			{ id: 'security', label: 'Безопасность' },
			{ id: 'jacuzzi', label: 'Джакузи' },
			{ id: 'park', label: 'Парк' },
			{ id: 'smart-home', label: 'Умный дом' }
		]
	},
	buttons: {
		clear: 'Очистить',
		apply: 'Применить'
	}
}

const filters = ref({
	propertyType: 'all',
	price: { min: '', max: '' },
	area: { min: '', max: '' },
	rooms: { bedrooms: 1, bathrooms: 1 },
	amenities: {}
})
</script>

<style scoped>
/* Добавляем стили для backdrop на мобильных устройствах */
@media (max-width: 1280px) {
	.fixed {
		backdrop-filter: blur(4px);
		background-color: rgba(255, 255, 255, 0.9);
	}
}
</style>
