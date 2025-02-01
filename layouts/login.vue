<template>
	<div class="min-h-screen flex flex-col">
		<TheHeader />
		<main class="flex flex-grow flex-col">
			<slot />
		</main>
		<UModal :fullscreen="isFullscreen" v-model="modalStore.isOpen">
			<ExchangeFormSlider :fromModal="true" :closeModal="modalStore.closeModal" />
		</UModal>
	</div>
</template>

<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { useModalStore } from '@/stores/modalStore'
import ExchangeFormSlider from '@/components/common/ExchangeFormSlider.vue'
import ObjectExchangeRequest from '@/components/common/ObjectExchangeRequest.vue'
import { ref, onMounted, onUnmounted } from 'vue'

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
