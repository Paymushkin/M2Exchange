<template>
	<div class="min-h-screen flex flex-col">
		<TheHeader />
		<main class="flex flex-grow flex-col">
			<slot />
		</main>
		<UModal :fullscreen="isFullscreen" v-model="modalStore.isExchangeFormSliderModalOpen"
			:transition="false"
			:overlay-transition="false"
		>
			<ExchangeFormSliderModal :fromModal="true" :closeModal="modalStore.closeExchangeFormSliderModal" />
		</UModal>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import { useModalStore } from '@/stores/modalStore'
import ExchangeFormSliderModal from '~/components/common/modals/ExchangeFormSliderModal.vue'
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
