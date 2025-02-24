<template>
	<div id="payment" class="flex flex-col items-start xl:gap-7 sm:gap-4 gap-2 w-full">
		<!-- Главный переключатель -->
		<TabSwitcher
			v-model="activeMainTab"
			:tabs="[
				{ value: 'tariffs', label: 'Тарифы' },
				{ value: 'payment', label: 'Оплата', bgClass: 'bg-[#F4F5F9] text-dark-primary' }
			]"
		/>

		<!-- Блок тарифов -->
		<TariffsSection v-if="activeMainTab === 'tariffs'" />

		<!-- Блок оплаты -->
		<div v-else class="flex flex-col gap-6">
			<!-- Существующие карты -->
			<div class="flex flex-col gap-4">
				<h3 class="xl:text-xl text-dark font-medium">Выберите с какой карты оплатить</h3>
				<p class="text-dark xl:text-base sm:text-sm text-xs max-w-[650px]">Это безопасно, вы всегда сможете удалить или изменить карту в вашем личном кабинете в разделе <NuxtLink to="/" class="underline hover:text-primary transition-colors">Оплата</NuxtLink></p>

				<div class="flex flex-wrap gap-3">
					<ExistingCard
						v-for="card in savedCards"
						:key="card.id"
						:card="card"
						v-model="selectedCard"
						@delete="deleteCard(card.id)"
					/>

					<!-- Добавить новую карту -->
					<div v-if="!showNewCardForm" class="payment-card payment-card-new" @click="showNewCardForm = true">
						<div class="flex justify-center items-center gap-2 border border-[#D9E3FF] rounded-sm px-4 py-2 sm:text-base text-sm">
							<PlusIcon class="w-5 h-5" />
							<span>Добавить новую карту</span>
						</div>
					</div>

					<!-- Форма добавления новой карты -->
					<NewCardForm
						v-else
						@close="showNewCardForm = false"
					/>
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
import { PlusIcon } from '@/components/icons/icons'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'
import ExistingCard from '@/components/sections/account/payment/ExistingCard.vue'
import NewCardForm from '@/components/sections/account/payment/NewCardForm.vue'
import TariffsSection from '@/components/sections/account/payment/TariffsSection.vue'
import TabSwitcher from '@/components/ui/TabSwitcher.vue'

const activeMainTab = ref('tariffs')
const selectedCard = ref(null)
const showNewCardForm = ref(false)

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

const deleteCard = (cardId) => {
	savedCards.value = savedCards.value.filter(card => card.id !== cardId)
	if (selectedCard.value === cardId) {
		selectedCard.value = null
	}
}
</script>
