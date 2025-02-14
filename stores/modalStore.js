import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
	// Состояния
	const isObjectOptionModalOpen = ref(false)
	const isExchangeModalOpen = ref(false)
	const isContactsModalOpen = ref(false)
	const isExchangeFormSliderModalOpen = ref(false)
	const messagerAndNotificationModal = ref({
		isVisible: false,
		type: 'messages'
	})

	// Методы для MessagerAndNotificationModal
	const openMessagerAndNotificationModal = (type) => {
		messagerAndNotificationModal.value.isVisible = true
		messagerAndNotificationModal.value.type = type
	}

	const closeMessagerAndNotificationModal = () => {
		messagerAndNotificationModal.value.isVisible = false
	}

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

	// Методы для ExchangeFormSliderModal
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
		messagerAndNotificationModal,
		// Методы
		openObjectOptionModal,
		closeObjectOptionModal,
		openExchangeModal,
		closeExchangeModal,
		openContactsModal,
		closeContactsModal,
		openExchangeFormSliderModal,
		closeExchangeFormSliderModal,
		openMessagerAndNotificationModal,
		closeMessagerAndNotificationModal
	}
})
