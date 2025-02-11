<template>
	<div id="payment" class="flex flex-col items-start xl:gap-7 gap-4 w-full">
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
		<div v-if="activeMainTab === 'tariffs'" class="flex flex-col gap-6 w-full">

			<!-- Вкладки тарифов -->
			<div class="flex items-center mb-3">
				<button
					@click="activeTariffTab = 'connect'"
					:class="[
						'h-[50px] xl:px-6 px-2 xl:py-2 py-1 transition-colors border-b-4 xl:text-base text-sm',
						activeTariffTab === 'connect' ? 'border-dark text-[#000B45] font-semibold' : 'border-[#F4F5F9]'
					]"
				>
					Подключить тариф
				</button>
				<button
					@click="activeTariffTab = 'active'"
					:class="[
						'h-[50px] xl:px-6 px-2 xl:py-2 py-1 transition-colors border-b-4 xl:text-base text-sm',
						activeTariffTab === 'active' ? 'border-dark text-[#000B45] font-semibold' : 'border-[#F4F5F9]'
					]"
				>
					Активные
				</button>
			</div>

			<!-- Карточки тарифов -->
			<div v-if="activeTariffTab === 'connect'" class="flex flex-wrap 2xl:gap-10 gap-5">
				<!-- Доступ к контактам -->
				<div class="flex flex-col grow bg-white rounded-md px-4 py-5 border border-[#E6E6E6] xl:max-w-[350px] max-w-[300px] w-full">
					<h3 class="xl:text-lg text-base text-center text-medium mb-3">Доступ к контактам</h3>
					<p class="text-dark mb-6 text-center xl:text-sm text-xs">Подключите тариф и начните общение с владельцами недвижимости для выгодного обмена</p>

					<div class="flex flex-col items-center gap-4 mt-auto">
						<label
							v-for="option in contactTariffs"
							:key="option.value"
							class="flex items-center justify-between xl:py-3 xl:px-4 py-2 px-3 w-full bg-[#F0F3FE] text-dark rounded-full cursor-pointer"
							:class="{'!bg-[#4460F6] text-white': selectedContactTariff === option.value}"
						>
							<div class="flex items-center gap-3">
								<input
									type="radio"
									:value="option.value"
									v-model="selectedContactTariff"
									class="hidden"
								>
								<div class="xl:w-6 xl:h-6 w-4 h-4 rounded-full border-2 flex items-center justify-center"
									:class="[
										selectedContactTariff === option.value
											? 'border-white bg-transparent'
											: 'border-[#4460F6] bg-transparent'
									]"
								>
									<div
										v-if="selectedContactTariff === option.value"
										class="xl:w-2 xl:h-2 w-1.5 h-1.5 rounded-full bg-white"
									></div>
								</div>
								<span class="xl:text-base text-xs font-semibold">{{ option.label }}</span>
							</div>
							<span class="2xl:text-2xl xl:text-xl text-base font-semibold">{{ option.price }} $</span>
						</label>
						<RoundedStandartButton class="w-[200px] max-w-full mt-2">
							<span class="xl:text-lg text-sm">Подключить</span>
						</RoundedStandartButton>
					</div>
				</div>

				<!-- Запрос на обмен -->
				<div class="flex flex-col grow bg-white rounded-md px-4 py-5 border border-[#E6E6E6] xl:max-w-[350px] max-w-[300px] w-full">
					<h3 class="xl:text-lg text-base text-center text-medium mb-3">Запрос на обмен</h3>
					<p class="text-dark mb-5 text-center xl:text-sm text-xs">Подключите тариф и сообщайте владельцу, что вы заинтересованы в обмене.</p>

					<div class="flex flex-col gap-4 items-center mt-auto">
						<label
							v-for="option in requestTariffs"
							:key="option.value"
							class="flex items-center justify-between xl:py-3 xl:px-4 py-2 px-3 w-full bg-[#F0F3FE] text-dark rounded-full cursor-pointer"
							:class="{'!bg-[#4460F6] text-white': selectedRequestTariff === option.value}"
						>
							<div class="flex items-center gap-3">
								<input
									type="radio"
									:value="option.value"
									v-model="selectedRequestTariff"
									class="hidden"
								>
								<div class="xl:w-6 xl:h-6 w-4 h-4 rounded-full border-2 flex items-center justify-center"
									:class="[
										selectedRequestTariff === option.value
											? 'border-white bg-transparent'
											: 'border-[#4460F6] bg-transparent'
									]"
								>
									<div
										v-if="selectedRequestTariff === option.value"
										class="xl:w-2 xl:h-2 w-1.5 h-1.5 rounded-full bg-white"
									></div>
								</div>
								<span class="xl:text-base text-xs font-semibold">{{ option.label }}</span>
							</div>
							<span class="2xl:text-2xl xl:text-xl text-base font-semibold">{{ option.price }} $</span>
						</label>

						<RoundedStandartButton class="w-[200px] max-w-full mt-2">
							<span class="xl:text-lg text-sm">Подключить</span>
						</RoundedStandartButton>
					</div>
				</div>
			</div>

			<!-- Активные тарифы -->
			<div v-else class="flex flex-wrap 2xl:gap-10 gap-5">
				<!-- Если нет активных тарифов -->
				<p v-if="!currentContactTariff && !currentRequestTariff" class="text-dark text-lg text-center">
					У вас нет активных тарифов
				</p>

				<!-- Карточка активного тарифа доступа к контактам -->
				<div v-if="currentContactTariff" class="flex flex-col grow items-center bg-white rounded-md px-4 py-5 border border-[#E6E6E6] xl:max-w-[350px] max-w-[300px] w-full">
					<h3 class="xl:text-lg text-base text-center text-medium mb-3">Доступ к контактам</h3>

					<div class="flex items-center justify-between mb-5 xl:py-3 xl:px-4 py-2 px-3 w-full bg-[#F0F3FE] text-dark rounded-full">
						<div class="flex items-center gap-3">
							<div class="xl:w-6 xl:h-6 w-4 h-4 rounded-full border-2 border-[#4460F6] flex items-center justify-center">
								<div class="xl:w-2 xl:h-2 w-1.5 h-1.5 rounded-full bg-[#4460F6]"></div>
							</div>
							<span class="2xl:text-base xl:text-sm text-xs">{{ currentContactTariff.label }}</span>
						</div>
						<span class="2xl:text-xl xl:text-lg text-base font-semibold">{{ currentContactTariff.price }} $</span>
					</div>

					<p class="grow text-center text-dark mb-6 w-[243px] mx-auto xl:text-base text-sm">
						У вас остался доступ к <span class="font-semibold"> {{ currentContactTariff.remaining }}</span> контактам
					</p>

					<RoundedStandartButton class="w-[220px] max-w-full mt-2">
						<span class="xl:text-lg text-sm">Подключить еще</span>
					</RoundedStandartButton>
				</div>

				<!-- Карточка активного тарифа запросов на обмен -->
				<div v-if="currentRequestTariff" class="flex flex-col grow items-center bg-white rounded-md px-4 py-5 border border-[#E6E6E6] xl:max-w-[350px] max-w-[300px] w-full">
					<h3 class="xl:text-lg text-base text-center text-medium mb-3">Запрос на обмен</h3>

					<div class="flex items-center justify-between mb-5 xl:py-3 xl:px-4 py-2 px-3 w-full bg-[#F0F3FE] text-dark rounded-full">
						<div class="flex items-center gap-3">
							<div class="xl:w-6 xl:h-6 w-4 h-4 rounded-full border-2 border-[#4460F6] flex items-center justify-center">
								<div class="xl:w-2 xl:h-2 w-1.5 h-1.5 rounded-full bg-[#4460F6]"></div>
							</div>
							<span class="2xl:text-base xl:text-sm text-xs">{{ currentRequestTariff.label }}</span>
						</div>
						<span class="2xl:text-xl xl:text-lg text-base font-semibold">{{ currentRequestTariff.price }} $</span>
					</div>

					<p class="grow text-center text-dark mb-6 w-[243px] mx-auto xl:text-base text-sm">
						<span v-if="currentRequestTariff.value === 'unlimited'">
							У вас осталось <span class="font-medium">безлимитное</span> количество запросов на <span class="font-semibold"> {{ currentRequestTariff.remaining }} дней</span>
						</span>
						<span v-else>
							У вас осталось <span class="font-semibold"> {{ currentRequestTariff.remaining }} запросов</span>
						</span>
					</p>

					<RoundedStandartButton class="w-[220px] max-w-full mt-2">
						<span class="xl:text-lg text-sm">Подключить еще</span>
					</RoundedStandartButton>
				</div>
			</div>
		</div>

		<!-- Блок оплаты -->
		<div v-else class="flex flex-col gap-6">
			<!-- Существующие карты -->
			<div class="flex flex-col gap-4">
				<h3 class="xl:text-xl text-dark font-medium">Выберите с какой карты оплатить</h3>
				<p class="text-dark xl:text-base text-sm max-w-[650px]">Это безопасно, вы всегда сможете удалить или изменить карту в вашем личном кабинете в разделе <NuxtLink to="/" class="underline hover:text-primary transition-colors">Оплата</NuxtLink></p>

				<div class="flex flex-wrap gap-3">
					<label
						v-for="card in savedCards"
						:key="card.id"
						class="payment-card"
						:class="{'border-[#4460F6] bg-[#F0F3FE]': selectedCard === card.id}"
					>
						<input
							type="radio"
							v-model="selectedCard"
							:value="card.id"
							class="hidden"
						>
						<div class="flex items-center gap-2 mb-5">
							<div class="xl:w-6 xl:h-6 w-4 h-4 rounded-full border-2 flex items-center justify-center"
								:class="[
									selectedCard === card.id
										? 'border-[#4460F6] bg-transparent'
										: 'border-[#4460F6] bg-transparent'
								]"
							>
								<div
									v-if="selectedCard === card.id"
									class="xl:w-2 xl:h-2 w-1.5 h-1.5 rounded-full bg-[#4460F6]"
								></div>
							</div>

							<component
								:is="getCardIcon(card.type)"
								v-if="getCardIcon(card.type)"
								class="w-10 h-6"
							/>

							<button class="ml-auto">
								<CardDeleteIcon />
							</button>

						</div>

						<div class="flex flex-col mb-7">
							<span class="text-sm font-semibold border border-[#D9E3FF] rounded-sm px-4 py-2 mb-3">{{ card.number }}</span>
							<div class="flex justify-between gap-2">
								<div class="flex flex-col">
									<span class="text-[#9CA3C5] text-[10px]">CVC/CVV</span>
									<span class="border border-[#D9E3FF] text-sm rounded-sm px-4 py-2 w-20">***</span>
								</div>
								<div class="flex flex-col">
									<span class="text-[#9CA3C5] text-[10px]">Срок действия:</span>
									<span class="border border-[#D9E3FF] text-sm rounded-sm px-4 py-2 w-20">{{ card.expiry }}</span>
								</div>
							</div>
						</div>
					</label>

					<!-- Добавить новую карту -->
					<div v-if="!showNewCardForm" class="payment-card payment-card-new" @click="showNewCardForm = true">
						<div class="flex justify-center items-center gap-2 border border-[#D9E3FF] rounded-sm px-4 py-2">
							<PlusIcon class="w-5 h-5" />
							<span>Добавить новую карту</span>
						</div>
					</div>

					<!-- Форма добавления новой карты -->
					<div v-else class="payment-card">
						<div class="flex items-center justify-between mb-4">
							<h4 class="text-sm font-medium">Новая карта</h4>
							<button @click="showNewCardForm = false" class="text-gray-500 hover:text-gray-700">
								<span class="text-xl">&times;</span>
							</button>
						</div>

						<form class="flex flex-col">
							<input type="text" class="text-sm font-semibold border border-[#D9E3FF] rounded-sm px-4 py-2 mb-3" placeholder="Номер карты">

							<div class="flex justify-between gap-2">
								<div class="flex flex-col">
									<label class="text-[#9CA3C5] text-[10px]">CVC/CVV</label>
									<input type="password" class="border border-[#D9E3FF] text-sm rounded-sm px-4 py-2 w-20" placeholder="***">
								</div>
								<div class="flex flex-col">
									<label class="text-[#9CA3C5] text-[10px]">Срок действия</label>
									<input type="text" class="border border-[#D9E3FF] text-sm rounded-sm px-4 py-2 w-20" placeholder="ММ/ГГ">
								</div>
							</div>
						</form>
					</div>

				</div>
			</div>

			<RoundedStandartButton class="w-[220px] max-w-full mt-2">
				<span class="xl:text-lg text-sm">К оплате 7 $ </span>
			</RoundedStandartButton>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import { PlusIcon, CardDeleteIcon, MasterCardIcon, VisaCardIcon, MirCardIcon } from '@/components/icons/icons'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

const activeMainTab = ref('tariffs')
const activeTariffTab = ref('connect')
const selectedContactTariff = ref('ten')
const selectedRequestTariff = ref('ten')
const selectedCard = ref(null)
const showNewCardForm = ref(false)

// const currentContactTariff = ref(null)
// const currentRequestTariff = ref(null)

const currentContactTariff = {
	value: 'ten',
	label: '10 объектов',
	price: 7,
	remaining: 6
}

const currentRequestTariff = {
	value: 'unlimited',
	label: 'Безлимит на месяц',
	price: 18,
	remaining: 25
}

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

const getCardIcon = (type) => {
	switch (type.toLowerCase()) {
		case 'visa':
			return VisaCardIcon
		case 'mastercard':
			return MasterCardIcon
		case 'mir':
			return MirCardIcon
		default:
			return null
	}
}

const savedCards = ref([
	{
		id: 1,
		number: '**** **** **** 4242',
		type: 'visa',
		expiry: '12/25',
	},
	{
		id: 2,
		number: '**** **** **** 5555',
		type: 'mastercard',
		expiry: '08/24',
	},
	{
		id: 3,
		number: '**** **** **** 6666',
		type: 'mir',
		expiry: '08/24',
	}
])
</script>

<style scoped>
.payment-card {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 12px;
	width: 100%;
	max-width: 350px;
	height: 202px;
	background-color: white;
	border-radius: 16px;
	box-shadow: 0px 18px 80px 0px rgba(0, 0, 0, 0.08), 0px 4.021px 17.869px 0px rgba(0, 0, 0, 0.05), 0px 1.197px 5.32px 0px rgba(0, 0, 0, 0.03);
}

.payment-card-new {
	justify-content: center;
}

/* Новые стили */
.payment-card button:hover {
	opacity: 0.7;
	transition: opacity 0.2s ease;
}

.payment-card-new:hover {
	background-color: #F0F3FE;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

/* Стили для выбранной карты */
.payment-card[class*="border-[#4460F6]"] {
	border: 2px solid #4460F6;
	background-color: #F0F3FE;
}
</style>
