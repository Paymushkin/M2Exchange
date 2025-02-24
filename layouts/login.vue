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
			<ExchangeFormSliderModal
				:fromModal="true"
				:closeModal="modalStore.closeExchangeFormSliderModal"
				:role="role"
			/>
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
import { useModalStore } from '@/stores/modalStore'
import ExchangeFormSliderModal from '~/components/common/modals/ExchangeFormSliderModal.vue'
import LanguageSwitchModal from '@/components/common/modals/LanguageSwitchModal.vue'
import AlertContainer from '@/components/common/AlertContainer.vue'
import { useFullscreen } from '@/composables/useFullscreen'

const { isFullscreen } = useFullscreen()

const modalStore = useModalStore()

const role = ref(1)
</script>

