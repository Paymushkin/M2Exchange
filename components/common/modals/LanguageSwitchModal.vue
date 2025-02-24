<template>
	<div
		class="flex flex-col sm:flex-row justify-center items-center bg-white sm:rounded-sm pt-10 pb-4 px-6 sm:h-auto h-screen"
	>
		<!-- Содержимое модального окна -->
		<div class="flex flex-col gap-6 max-w-full w-[350px]">
			<button
				@click="modalStore.closeLanguageModal"
				class="absolute top-4 right-4 hover:opacity-50 transition-opacity duration-300"
			>
				<CloseIcon class="w-8 h-8" />
			</button>
			<h3 class="text-2xl text-center font-medium text-dark mb-2">Выберите язык</h3>
			<div class="border rounded-md p-2 pr-5 mb-5">
			<select v-model="selectedLanguage" class="w-full">
				<option v-for="(lang, index) in languages" :key="index" :value="lang.code">
					{{ lang.name }}
				</option>
			</select>
			</div>
		</div>
	</div>
</template>

<script setup>
import { CloseIcon} from '@/components/icons/icons'
import { useModalStore } from '@/stores/modalStore'
import { ref, computed } from 'vue'

const modalStore = useModalStore()

const languages = [
	{ code: 'ru', name: 'Русский' },
	{ code: 'en', name: 'English' },
	{ code: 'fr', name: 'Français' },
	{ code: 'ar', name: 'العربية' }
]

const selectedLanguage = ref('ru') // По умолчанию русский

const currentLanguageName = computed(() => {
	const currentLang = languages.find(lang => lang.code === selectedLanguage.value)
	return currentLang ? currentLang.name : ''
})
</script>

<style scoped>
/* Ваши стили */
</style>
