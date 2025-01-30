import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
	state: () => ({
		isOpen: false,
		isExchangeModalOpen: false
	}),

	actions: {
		openModal() {
			this.isOpen = true
		},
		closeModal() {
			this.isOpen = false
		},
		openExchangeModal() {
			this.isExchangeModalOpen = true
		},
		closeExchangeModal() {
			this.isExchangeModalOpen = false
		}
	}
})
