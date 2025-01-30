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
			<div
				v-if="isFiltersVisible"
				class="sm:relative fixed inset-0 z-50 bg-white xl:bg-transparent"
			>
				<div
					class="relative flex flex-col sm:justify-center xl:gap-10 gap-4 lg:border border-[#E4EBFB] rounded-lg p-5 pt-14 xl:p-12 w-full h-full xl:h-auto overflow-y-auto"
				>
					<!-- Кнопка закрытия для мобильных -->
					<button
						@click="toggleFilters"
						class="xl:hidden absolute top-3 right-3 p-2 hover:opacity-70 transition-opacity"
					>
						<CloseIcon />
					</button>

					<!-- Кнопка закрытия для десктопа -->
					<button
						@click="toggleFilters"
						class="xl:flex hidden absolute top-6 right-6 p-2 hover:opacity-70 transition-opacity"
					>
						<ChevronDownIcon />
					</button>

					<!-- Блок выбора типа объекта -->
					<div class="flex flex-wrap max-w-[600px] xl:gap-4 gap-2">
						<RadioButton
							v-for="button in buttons"
							:key="button.value"
							v-model="selectedType"
							:value="button.value"
						>
							{{ button.label }}
						</RadioButton>
					</div>

					<!-- Блоки с инпутами -->
					<div class="flex xl:gap-20 gap-4 flex-wrap">
						<!-- Блок стоимости -->
						<div class="flex flex-col xl:gap-4 gap-2">
							<h3 class="text-[#171652] xl:text-xl text-sm font-semibold">Стоимость</h3>
							<div class="flex gap-4">
								<div class="relative">
									<input
										type="number"
										v-model="minPrice"
										placeholder="Мин: 10 000 $"
										class="xl:w-[200px] w-[100%] border text-sm xl:text-base border-[#D2DBF5] rounded-sm lg:px-4 px-2 lg:py-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
									/>
								</div>
								<div class="relative">
									<input
										type="number"
										v-model="maxPrice"
										placeholder="Макс: 1 000 000 000 $"
										class="xl:w-[200px] w-[100%] border text-sm xl:text-base border-[#D2DBF5] rounded-sm lg:px-4 px-2 lg:py-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
									/>
								</div>
							</div>
						</div>

						<!-- Блок площади -->
						<div class="flex flex-col xl:gap-4 gap-2">
							<h3 class="text-[#171652] xl:text-xl text-sm font-semibold">Площадь</h3>
							<div class="flex gap-4">
								<div class="relative">
									<input
										type="number"
										v-model="minArea"
										placeholder="Мин. м2"
										class="xl:w-[200px] w-[100%] border text-sm xl:text-base border-[#D2DBF5] rounded-sm lg:px-4 px-2 lg:py-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
									/>
								</div>
								<div class="relative">
									<input
										type="number"
										v-model="maxArea"
										placeholder="Макс. м2"
										class="xl:w-[200px] w-[100%] border text-sm xl:text-base border-[#D2DBF5] rounded-sm lg:px-4 px-2 lg:py-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
									/>
								</div>
							</div>
						</div>
					</div>

					<!-- Блок спальни и ванны -->
					<div class="flex xl:gap-[120px] gap-4 flex-wrap">
						<CounterControl
							class="w-[400px]"
							v-model="bedrooms"
							label="Спальни"
							:min="bedroomsConfig.min"
							:max="bedroomsConfig.max"
						/>

						<CounterControl
							class="w-[400px]"
							v-model="bathrooms"
							label="Ванны"
							:min="bathroomsConfig.min"
							:max="bathroomsConfig.max"
						/>
					</div>

					<!-- Блок кнопок -->
					<div class="flex justify-center items-center gap-4 mt-4">
						<button
							@click="clearFilters"
							class="border border-[#D2DBF5] lg:text-base text-sm lg:px-8 px-4 lg:py-3 py-2 text-[#171652] rounded-sm hover:bg-gray-50 transition duration-200"
						>
							Очистить
						</button>
						<button
							@click="applyFilters"
							class="bg-[#6284FF] lg:text-base text-sm lg:px-8 px-4 lg:py-3 py-2 text-white rounded-sm hover:bg-[#4169E1] transition duration-200"
						>
							Применить
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import TagButton from '@/components/ui/TagButton.vue'
import StandartSelect from '@/components/ui/StandartSelect.vue'
import RadioButton from '@/components/ui/RadioButton.vue'
import CounterControl from '@/components/ui/CounterControl.vue'
import FilterButton from '@/components/ui/FilterButton.vue'
import StandartButton from '@/components/ui/StandartButton.vue'
import { FilterIcon, ChevronDownIcon, SearchFormIcon, CloseIcon } from '@/components/icons/icons'
import { Transition } from 'vue'

// Состояние для управления видимостью фильтров
const isFiltersVisible = ref(false)

const bedroomsConfig = {
	min: 0,
	max: 10
}

const bathroomsConfig = {
	min: 0,
	max: 10
}

const bedrooms = ref(1)
const bathrooms = ref(1)

const selectedType = ref('all')

const buttons = [
	{ value: 'all', label: 'Все' },
	{ value: 'apartments', label: 'Апартаменты' },
	{ value: 'houses', label: 'Дома' },
	{ value: 'villas', label: 'Виллы' },
	{ value: 'bungalows', label: 'Бунгало' },
	{ value: 'townhouses', label: 'Таунхаус' },
	{ value: 'country-house', label: 'Деревенский дом' },
	{ value: 'mansion', label: 'Особняк' },
	{ value: 'farm', label: 'Ферма' },
	{ value: 'apartment', label: 'Квартира' },
	{ value: 'duplex', label: 'Двухквартирный дом' }
]

// Массив тегов
const tags = ['Вилла', 'до 400000 $', 'от 500 м²', '3+ спальни', '2 санузла']

// Массив опций для выпадающего списка
const locationOptions = ['Italy, Sardinia', 'Spain, Barcelona', 'France, Paris']

// Добавляем состояния для инпутов
const minPrice = ref('')
const maxPrice = ref('')
const minArea = ref('')
const maxArea = ref('')

// Состояние для отслеживания активных тегов
const activeTagIndexes = ref([])

// Функция для переключения состояния тега
const toggleTag = (index) => {
	const currentIndex = activeTagIndexes.value.indexOf(index)
	if (currentIndex === -1) {
		// Если тег не активен, добавляем его
		activeTagIndexes.value.push(index)
	} else {
		// Если тег активен, удаляем его
		activeTagIndexes.value.splice(currentIndex, 1)
	}
}

// Функция очистки фильтров
const clearFilters = () => {
	selectedType.value = 'all'
	minPrice.value = ''
	maxPrice.value = ''
	minArea.value = ''
	maxArea.value = ''
	bedrooms.value = 1
	bathrooms.value = 1
}

// Функция применения фильтров
const applyFilters = () => {
	isFiltersVisible.value = false
}

// Функция для переключения состояния фильтров
const toggleFilters = () => {
	isFiltersVisible.value = !isFiltersVisible.value
}
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
