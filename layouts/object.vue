<template>
	<div class="min-h-screen flex flex-col">
		<TheHeader />
		<main class="flex flex-grow flex-col">
			<slot />
		</main>
		<TheFooter />

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

		<UModal :fullscreen="isFullscreen" v-model="modalStore.isExchangeModalOpen"
			:transition="false"
			:overlay-transition="false"
			:ui="{
				container: 'max-w-[820px] w-full mx-auto',
			}"
		>
			<ObjectExchangeRequestModal @close="modalStore.closeExchangeModal" />
		</UModal>

		<UModal :fullscreen="isFullscreen" v-model="modalStore.isContactsModalOpen"
			:transition="false"
			:overlay-transition="false"
			:ui="{
				container: 'max-w-[820px] w-full mx-auto',
			}"
		>
			<ObjectContactsRequestModal @close="modalStore.closeContactsModal" />
		</UModal>

		<UModal v-model="modalStore.isObjectOptionModalOpen"
			:transition="false"
			:overlay-transition="false"
		    :ui="{
					container: 'max-w-[580px] w-full mx-auto',
        }"
		>
			<ObjectOptionModal @close="modalStore.closeObjectOptionModal" />
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
import ExchangeFormSliderModal from '~/components/common/modals/ExchangeFormSliderModal.vue'
import ObjectExchangeRequestModal from '@/components/common/modals/ObjectExchangeRequestModal.vue'
import ObjectContactsRequestModal from '@/components/common/modals/ObjectContactsRequestModal.vue'
import ObjectOptionModal from '@/components/common/modals/ObjectOptionModal.vue'
import LanguageSwitchModal from '@/components/common/modals/LanguageSwitchModal.vue'
import { useFullscreen } from '@/composables/useFullscreen'

const { isFullscreen } = useFullscreen()

const modalStore = useModalStore()

const role = ref(1)
</script>

<style scoped>
/* Ваши стили */
</style>
