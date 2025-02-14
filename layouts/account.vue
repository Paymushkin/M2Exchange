<template>
	<div class="min-h-screen flex flex-col bg-gray-100">
		<TheHeader />
		<main class="flex flex-grow flex-col">
			<slot />
		</main>
		<TheFooter />
		<UModal
			:fullscreen="isFullscreen"
			v-model="modalStore.isExchangeFormSliderModalOpen"
			:transition="false"
			transition-enter="duration-300 ease-out"
			transition-leave="duration-200 ease-in"
			:overlay-transition="false"
			overlay-enter="duration-300 ease-out"
			overlay-leave="duration-200 ease-in"
		>
			<ExchangeFormSliderModal
				:fromModal="true"
				:closeModal="modalStore.closeExchangeFormSliderModal"
			/>
		</UModal>

		<UModal
			:fullscreen="isFullscreen"
			v-model="modalStore.messagerAndNotificationModal.isVisible"
			:transition="false"
			transition-enter="duration-300 ease-out"
			transition-leave="duration-200 ease-in"
			:overlay-transition="false"
			overlay-enter="duration-300 ease-out"
			overlay-leave="duration-200 ease-in"
		>
			<MessagerAndNotificationModal :type="modalStore.messagerAndNotificationModal.type" @close="modalStore.closeMessagerAndNotificationModal" />
		</UModal>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { useModalStore } from '@/stores/modalStore'
import ExchangeFormSliderModal from '~/components/common/modals/ExchangeFormSliderModal.vue'
import ObjectExchangeRequest from '@/components/common/modals/ObjectExchangeRequestModal.vue'
import MessagerAndNotificationModal from '@/components/common/modals/MessagerAndNotificationModal.vue'
import AlertContainer from '@/components/common/AlertContainer.vue'

const modalStore = useModalStore()
const isFullscreen = ref(window.innerWidth < 1024)

const updateFullscreen = () => {
	isFullscreen.value = window.innerWidth < 1024
}

onMounted(() => {
	window.addEventListener('resize', updateFullscreen)
})

onUnmounted(() => {
	window.removeEventListener('resize', updateFullscreen)
})
</script>

<style scoped>
/* Ваши стили */
</style>
