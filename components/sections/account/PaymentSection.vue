<template>
	<div class="flex flex-col items-start gap-7 w-full">
		<!-- Главный переключатель -->
		<div class="flex items-center bg-[#F0F3FE] rounded-full">
			<button
				@click="activeMainTab = 'tariffs'"
				:class="[
					'h-[50px] px-6 py-2 rounded-full transition-colors text-sm',
					activeMainTab === 'tariffs' ? 'bg-dark text-white' : 'bg-transparent text-dark-primary'
				]"
			>
				Тарифы
			</button>
			<button
				@click="activeMainTab = 'payment'"
				:class="[
					'h-[50px] px-6 py-2 rounded-full transition-colors text-sm',
					activeMainTab === 'payment' ? 'bg-dark text-white' : 'bg-[#F4F5F9] text-dark-primary'
				]"
			>
				Оплата
			</button>
		</div>

		<!-- Блок тарифов -->
		<div v-if="activeMainTab === 'tariffs'" class="flex flex-col gap-6">

			<!-- Вкладки тарифов -->
			<div class="flex items-center mb-3">
				<button
					@click="activeTariffTab = 'connect'"
					:class="[
						'h-[50px] px-6 py-2 transition-colors border-b-4',
						activeTariffTab === 'connect' ? 'border-dark text-[#000B45] font-semibold' : 'border-[#F4F5F9]'
					]"
				>
					Подключить тариф
				</button>
				<button
					@click="activeTariffTab = 'active'"
					:class="[
						'h-[50px] px-6 py-2 transition-colors border-b-4',
						activeTariffTab === 'active' ? 'border-dark text-[#000B45] font-semibold' : 'border-[#F4F5F9]'
					]"
				>
					Активные
				</button>
			</div>

			<!-- Карточки тарифов -->
			<div v-if="activeTariffTab === 'connect'" class="grid md:grid-cols-2 gap-10">
				<!-- Доступ к контактам -->
				<div class="bg-white rounded-md px-4 py-5 border border-[#E6E6E6] max-w-[350px]">
					<h3 class="text-lg text-center text-medium mb-3">Доступ к контактам</h3>
					<p class="text-dark mb-6 text-center text-sm">Подключите тариф и начните общение с владельцами недвижимости для выгодного обмена</p>

					<div class="flex flex-col items-center gap-4">
						<label
							v-for="option in contactTariffs"
							:key="option.value"
							class="flex items-center justify-between py-3 px-4 w-full bg-[#F0F3FE] text-dark rounded-full cursor-pointer"
							:class="{'!bg-[#4460F6] text-white': selectedContactTariff === option.value}"
						>
							<div class="flex items-center gap-3">
								<input
									type="radio"
									:value="option.value"
									v-model="selectedContactTariff"
									class="hidden"
								>
								<div class="w-6 h-6 rounded-full border-2 flex items-center justify-center"
									:class="[
										selectedContactTariff === option.value
											? 'border-white bg-transparent'
											: 'border-[#4460F6] bg-transparent'
									]"
								>
									<div
										v-if="selectedContactTariff === option.value"
										class="w-2 h-2 rounded-full bg-white"
									></div>
								</div>
								<span class="font-semibold">{{ option.label }}</span>
							</div>
							<span class="text-2xl font-semibold">{{ option.price }} $</span>
						</label>
						<RoundedStandartButton class="w-[200px] max-w-full mt-2">
							<span class="text-lg">Подключить</span>
						</RoundedStandartButton>
					</div>
				</div>

				<!-- Запрос на обмен -->
				<div class="bg-white rounded-md px-4 py-5 border border-[#E6E6E6] max-w-[350px]">
					<h3 class="text-lg text-center text-medium mb-3">Запрос на обмен</h3>
					<p class="text-dark mb-5 text-center text-sm">Подключите тариф и сообщайте владельцу, что вы заинтересованы в обмене.</p>

					<div class="flex flex-col gap-4 items-center">
						<label
							v-for="option in requestTariffs"
							:key="option.value"
							class="flex items-center justify-between py-3 px-4 w-full bg-[#F0F3FE] text-dark rounded-full cursor-pointer"
							:class="{'!bg-[#4460F6] text-white': selectedRequestTariff === option.value}"
						>
							<div class="flex items-center gap-3">
								<input
									type="radio"
									:value="option.value"
									v-model="selectedRequestTariff"
									class="hidden"
								>
								<div class="w-6 h-6 rounded-full border-2 flex items-center justify-center"
									:class="[
										selectedRequestTariff === option.value
											? 'border-white bg-transparent'
											: 'border-[#4460F6] bg-transparent'
									]"
								>
									<div
										v-if="selectedRequestTariff === option.value"
										class="w-2 h-2 rounded-full bg-white"
									></div>
								</div>
								<span class="font-semibold">{{ option.label }}</span>
							</div>
							<span class="text-2xl font-semibold">{{ option.price }} $</span>
						</label>

						<RoundedStandartButton class="w-[200px] max-w-full mt-2">
							<span class="text-lg">Подключить</span>
						</RoundedStandartButton>
					</div>
				</div>
			</div>

			<!-- Активные тарифы -->
			<div v-else class="grid md:grid-cols-2 gap-10">
				<!-- Если нет активных тарифов -->
				<p v-if="!currentContactTariff && !currentRequestTariff" class="text-dark text-lg text-center">
					У вас нет активных тарифов
				</p>

				<!-- Карточка активного тарифа доступа к контактам -->
				<div v-if="currentContactTariff" class="flex flex-col items-center bg-white rounded-md px-4 py-5 border border-[#E6E6E6] w-[350px] max-w-full">
					<h3 class="text-lg text-center text-medium mb-3">Доступ к контактам</h3>

					<div class="flex items-center justify-between mb-5 py-3 px-4 w-full bg-[#F0F3FE] text-dark rounded-full">
						<div class="flex items-center gap-3">
							<div class="w-6 h-6 rounded-full border-2 border-[#4460F6] flex items-center justify-center">
								<div class="w-2 h-2 rounded-full bg-[#4460F6]"></div>
							</div>
							<span>{{ currentContactTariff.label }}</span>
						</div>
						<span class="text-xl font-semibold">{{ currentContactTariff.price }} $</span>
					</div>

					<p class="grow text-center text-dark mb-6 w-[243px] mx-auto">
						У вас остался доступ к <span class="font-semibold"> {{ currentContactTariff.remaining }}</span> контактам
					</p>

					<RoundedStandartButton class="w-[200px] max-w-full mt-2">
						Подключить еще
					</RoundedStandartButton>
				</div>

				<!-- Карточка активного тарифа запросов на обмен -->
				<div v-if="currentRequestTariff" class="flex flex-col items-center bg-white rounded-md px-4 py-5 border border-[#E6E6E6] w-[350px] max-w-full">
					<h3 class="text-lg text-center text-medium mb-3">Запрос на обмен</h3>

					<div class="flex items-center justify-between mb-5 py-3 px-4 w-full bg-[#F0F3FE] text-dark rounded-full">
						<div class="flex items-center gap-3">
							<div class="w-6 h-6 rounded-full border-2 border-[#4460F6] flex items-center justify-center">
								<div class="w-2 h-2 rounded-full bg-[#4460F6]"></div>
							</div>
							<span>{{ currentRequestTariff.label }}</span>
						</div>
						<span class="text-xl font-semibold">{{ currentRequestTariff.price }} $</span>
					</div>

					<p class="grow text-center text-dark mb-6 w-[243px] mx-auto">
						<span v-if="currentRequestTariff.value === 'unlimited'">
							У вас осталось <span class="font-medium">безлимитное</span> количество запросов на <span class="font-semibold"> {{ currentRequestTariff.remaining }} дней</span>
						</span>
						<span v-else>
							У вас осталось <span class="font-semibold"> {{ currentRequestTariff.remaining }} запросов</span>
						</span>
					</p>

					<RoundedStandartButton class="w-[200px] max-w-full mt-2">
						Подключить еще
					</RoundedStandartButton>
				</div>
			</div>
		</div>

		<!-- Блок оплаты -->
		<div v-else class="flex flex-col gap-6">
			<!-- Существующие карты -->
			<div class="flex flex-col gap-4">
				<h3 class="text-lg font-medium">Сохраненные карты</h3>
				<div v-if="savedCards.length" class="flex flex-col gap-3">
					<label v-for="card in savedCards" :key="card.id" class="flex items-center gap-4 p-4 border rounded-xl cursor-pointer">
						<input type="radio" v-model="selectedCard" :value="card.id" class="hidden">
						<span>{{ card.number }}</span>
					</label>
				</div>
				<p v-else class="text-gray-500">У вас нет сохраненных карт</p>
			</div>

			<!-- Добавить новую карту -->
			<button class="flex items-center gap-2 text-[#4460F6] font-medium">
				<PlusIcon class="w-5 h-5" />
				<span>Добавить карту</span>
			</button>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import { PlusIcon } from '@/components/icons/icons'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

const activeMainTab = ref('tariffs')
const activeTariffTab = ref('connect')
const selectedContactTariff = ref('ten')
const selectedRequestTariff = ref('ten')
const selectedCard = ref(null)

// Заменяем ref на обычные объекты
// const currentContactTariff = {
// 	value: 'ten',
// 	label: '10 объектов',
// 	price: 7,
// 	remaining: 6
// }

// const currentRequestTariff = {
// 	value: 'unlimited',
// 	label: 'Безлимит на месяц',
// 	price: 18,
// 	remaining: 25
// }

const contactTariffs = [
	{ value: 'single', label: 'Разовый доступ', price: 1 },
	{ value: 'ten', label: '10 объектов', price: 7 },
	{ value: 'unlimited', label: 'Безлимит на месяц', price: 15 }
]

const requestTariffs = [
	{ value: 'single', label: 'Разовый запрос', price: 2 },
	{ value: 'ten', label: '10 запросов', price: 7 },
	{ value: 'unlimited', label: 'Безлимит на месяц', price: 18 }
]

const savedCards = ref([])
</script>
