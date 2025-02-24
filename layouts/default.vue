<template>
	<div class="min-h-screen max-w-[100vw] flex flex-col overflow-x-hidden">
		<TheHeader />
		<main class="flex flex-grow flex-col">
			<LoaderLogo v-if="isLoading" />
			<slot v-else />
		</main>
		<TheFooter />
		<UModal
			:fullscreen="isFullscreen"
			v-model="modalStore.isExchangeFormSliderModalOpen"
			:transition="false"
			:overlay-transition="false">
			<ExchangeFormSliderModal
				:fromModal="true"
				:closeModal="modalStore.closeExchangeFormSliderModal"
				:role="role"
			/>
		</UModal>

		<UModal
			v-model="modalStore.isExchangeModalOpen"
			:transition="false"
			:overlay-transition="false"
		>
			<ObjectExchangeRequest @close="modalStore.closeExchangeModal" />
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
import { ref, onMounted } from 'vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { useModalStore } from '@/stores/modalStore'
import ExchangeFormSliderModal from '@/components/common/modals/ExchangeFormSliderModal.vue'
import LanguageSwitchModal from '@/components/common/modals/LanguageSwitchModal.vue'
import ObjectExchangeRequest from '@/components/common/modals/ObjectExchangeRequestModal.vue'
import AlertContainer from '@/components/common/AlertContainer.vue'
import { useFullscreen } from '@/composables/useFullscreen'
import LoaderLogo from '@/components/LoaderLogo.vue'
import { useRouter } from 'vue-router'

const { isFullscreen } = useFullscreen()

const modalStore = useModalStore()

const role = ref(1)

const isLoading = ref(true)

onMounted(() => {
	// Можно добавить проверку загрузки необходимых данных
	setTimeout(() => {
		isLoading.value = false
	}, 2000)
})

// Опционально: показывать лоадер при переходах между страницами
const router = useRouter()
router.beforeEach(() => {
	isLoading.value = true
})
router.afterEach(() => {
	isLoading.value = false
})
</script>

<style scoped>
/* Ваши стили */
</style>
