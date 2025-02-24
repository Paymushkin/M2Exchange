<template>
	<div class="min-h-screen flex flex-col bg-gray-100">
		<TheHeader />
		<main class="flex flex-grow flex-col">
			<slot />
		</main>
		<TheFooter />
		<UModal
			:fullscreen="isFullscreen"
			:overlay-transition="false"
			:transition="false"
			v-model="modalStore.isExchangeFormSliderModalOpen">
			<ExchangeFormSliderModal
				:fromModal="true"
				:role="role"
				:closeModal="modalStore.closeExchangeFormSliderModal"
			/>
		</UModal>

		<UModal
			:fullscreen="isFullscreen"
			:overlay-transition="false"
			:transition="false"
			v-model="modalStore.messagerAndNotificationModal.isVisible">
			<MessagerAndNotificationModal :type="modalStore.messagerAndNotificationModal.type" @close="modalStore.closeMessagerAndNotificationModal" />
		</UModal>

		<UModal
			v-model="modalStore.isLanguageModalOpen"
			:fullscreen="isFullscreen"
			:transition="false"
			:overlay-transition="false"
			:ui="{
				container: 'sm:w-[350px] w-full mx-auto',
      }"
		>
			<LanguageSwitchModal @close="modalStore.closeLanguageModal" />
		</UModal>

		<AlertContainer />
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { useModalStore } from '@/stores/modalStore'
import ExchangeFormSliderModal from '@/components/common/modals/ExchangeFormSliderModal.vue'
import MessagerAndNotificationModal from '@/components/common/modals/MessagerAndNotificationModal.vue'
import LanguageSwitchModal from '@/components/common/modals/LanguageSwitchModal.vue'
import AlertContainer from '@/components/common/AlertContainer.vue'
import { useFullscreen } from '@/composables/useFullscreen'

const { isFullscreen } = useFullscreen()

const modalStore = useModalStore()

const role = ref(2)

</script>

<style scoped>
/* Ваши стили */
</style>
