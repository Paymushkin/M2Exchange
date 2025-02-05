import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
	// Состояния
	const isObjectOptionModalOpen = ref(false)
	const isExchangeModalOpen = ref(false)
	const isContactsModalOpen = ref(false)
	const isExchangeFormSliderModalOpen = ref(false)
	// Методы для ObjectOptionModal
	const openObjectOptionModal = () => {
		isObjectOptionModalOpen.value = true
	}

	const closeObjectOptionModal = () => {
		isObjectOptionModalOpen.value = false
	}

	// Методы для ExchangeModal
	const openExchangeModal = () => {
		isExchangeModalOpen.value = true
	}

	const closeExchangeModal = () => {
		isExchangeModalOpen.value = false
	}

	// Методы для ContactsModal
	const openContactsModal = () => {
		isContactsModalOpen.value = true
	}

	const closeContactsModal = () => {
		isContactsModalOpen.value = false
	}

	const openExchangeFormSliderModal = () => {
		isExchangeFormSliderModalOpen.value = true
	}

	const closeExchangeFormSliderModal = () => {
		isExchangeFormSliderModalOpen.value = false
	}

	return {
		// Состояния
		isObjectOptionModalOpen,
		isExchangeModalOpen,
		isContactsModalOpen,
		isExchangeFormSliderModalOpen,
		// Методы
		openObjectOptionModal,
		closeObjectOptionModal,
		openExchangeModal,
		closeExchangeModal,
		openContactsModal,
		closeContactsModal,
		openExchangeFormSliderModal,
		closeExchangeFormSliderModal
	}
})
