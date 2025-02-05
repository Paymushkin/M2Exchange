<template>
	<div class="min-h-screen flex flex-col">
		<TheHeader />
		<main class="flex flex-grow flex-col">
			<slot />
		</main>
		<TheFooter />

		<UModal :fullscreen="isFullscreen" v-model="modalStore.isExchangeFormSliderModalOpen">
			<ExchangeFormSliderModal :fromModal="true" :closeModal="modalStore.closeExchangeFormSliderModal" />
		</UModal>

		<UModal :fullscreen="isFullscreen" v-model="modalStore.isExchangeModalOpen"
			:ui="{
				container: 'max-w-[820px] w-full mx-auto',
			}"
		>
			<ObjectExchangeRequestModal @close="modalStore.closeExchangeModal" />
		</UModal>

		<UModal :fullscreen="isFullscreen" v-model="modalStore.isContactsModalOpen"
			:ui="{
				container: 'max-w-[820px] w-full mx-auto',
			}"
		>
			<ObjectContactsRequestModal @close="modalStore.closeContactsModal" />
		</UModal>

		<UModal v-model="modalStore.isObjectOptionModalOpen"
		    :ui="{
					container: 'max-w-[580px] w-full mx-auto',
        }"
		>
			<ObjectOptionModal @close="modalStore.closeObjectOptionModal" />
		</UModal>

		<AlertContainer />
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { useModalStore } from '@/stores/modalStore'
import ExchangeFormSliderModal from '~/components/common/modals/ExchangeFormSliderModal.vue'
import ObjectExchangeRequestModal from '@/components/common/modals/ObjectExchangeRequestModal.vue'
import ObjectContactsRequestModal from '@/components/common/modals/ObjectContactsRequestModal.vue'
import ObjectOptionModal from '@/components/common/modals/ObjectOptionModal.vue'

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
