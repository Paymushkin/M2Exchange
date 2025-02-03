<template>
	<div
		class="flex flex-col sm:flex-row justify-center items-center bg-white rounded-sm pt-10 pb-4 px-6 sm:h-auto h-screen"
	>
		<!-- Содержимое модального окна -->
		<div class="flex flex-col gap-6">
			<button
				@click="modalStore.closeExchangeModal"
				class="absolute top-4 right-4 hover:opacity-50 transition-opacity duration-300"
			>
				<CloseIcon class="w-8 h-8" />
			</button>
			<!-- Основная форма -->
			<div v-if="!showPaymentForm && !showSuccessMessage">
				<div class="flex flex-col justify-between items-center mb-6">
					<h3 class="text-2xl text-center font-medium text-dark mb-6">
						Отправить запрос на обмен
					</h3>
					<p class="text-base text-center text-dark mb-6">
						Сообщите владельцу, что вы заинтересованы в обмене.<br>Уведомление будет отправлено автоматически через встроенный чат.
					</p>

					<!-- Форма опции оплаты -->
					<PaymentOptionsForm
						v-model="selectedOption"
						:payment-options="paymentOptions"
						@submit="handlePaymentClick"
					/>

					<p class="text-dark text-center">Выбранный тариф активируется сразу после оплаты.<br>Вы сможете мгновенно связаться с владельцем</p>
				</div>
			</div>

			<!-- Форма оплаты -->
			<PaymentForm
				v-else-if="showPaymentForm"
				:amount="selectedOption ? paymentOptions.find(o => o.id === selectedOption)?.price : '0'"
				@submit="handlePaymentSubmit"
			/>

			<!-- Сообщение об успешной отправке -->
			<PaymentSuccessMessage v-else />

		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { CloseIcon } from '@/components/icons/icons'
import { useModalStore } from '@/stores/modalStore'
import PaymentForm from '@/components/common/payment/PaymentForm.vue'
import PaymentOptionsForm from '@/components/common/payment/PaymentOptionsForm.vue'
import PaymentSuccessMessage from '@/components/common/payment/PaymentSuccessMessage.vue'

const modalStore = useModalStore()

const paymentOptions = [
	{ id: 'single', label: 'Разовый доступ', price: '1' },
	{ id: 'pack', label: '10 объектов', price: '7' },
	{ id: 'unlimited', label: 'Безлимит на месяц', price: '15' }
]

const selectedOption = ref('pack')
const showPaymentForm = ref(false)
const showSuccessMessage = ref(false)

const handlePaymentClick = () => {
	showPaymentForm.value = true
}

const handlePaymentSubmit = () => {
	showPaymentForm.value = false
	showSuccessMessage.value = true
}
</script>

<style scoped>
label:hover {
	border: 2px solid #4460F6;
}
</style>
