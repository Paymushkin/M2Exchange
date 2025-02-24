<template>
	<div class="flex grow items-end gap-5 relative ml-auto">
		<!-- Основные действия -->
		<div
			class="flex items-center gap-5 ml-auto transition-all duration-300"
			:class="{ hidden: searchStore.isSearchOpen }"
		>
			<div class="hidden lg:flex items-center gap-2">
				<NuxtLink to="/" class="text-gray-600 hover:text-gray-900">
					<FavoriteIcon />
				</NuxtLink>
				<button
					id="search-button"
					class="text-gray-600 hover:text-gray-900"
					@click="searchStore.toggleSearch"
				>
					<SearchIcon />
				</button>
				<button class="text-gray-600 hover:text-gray-900">
					<GlobeIcon @click="modalStore.openLanguageModal" />
				</button>
			</div>
			<!-- Кнопка входа с меню и аватаром -->
			<div class="relative">
				<div
					class="flex justify-between items-center gap-[22px] py-[6px] pl-[22px] pr-[12px] bg-white rounded-[40px] w-[115px]"
				>
					<MenuButton :is-open="isMenuOpen" @toggle="toggleMenu" />
					<UserAvatar />
				</div>
				<HeaderMenu :is-open="isMenuOpen" @close="closeMenu" />
			</div>
		</div>

		<!-- Поисковая строка -->
		<form
			v-if="searchStore.isSearchOpen"
			class="search-container ml-auto grow max-w-[600px] transition-all duration-300 transform"
			@submit.prevent="handleSearchSubmit"
		>
			<div class="flex items-center bg-white rounded-[40px] px-4 py-1 w-full">
				<input
					type="text"
					placeholder="Поиск..."
					class="w-full outline-none px-2"
					v-model="searchQuery"
				/>
				<button type="submit" class="ml-2 text-gray-600 hover:text-gray-900">
					<SearchMiniIcon />
				</button>
				<button @click="searchStore.closeSearch" class="ml-2 text-gray-600 hover:text-gray-900">
					<CloseIcon />
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import {
	FavoriteIcon,
	SearchIcon,
	SearchMiniIcon,
	GlobeIcon,
	CloseIcon
} from '@/components/icons/icons.js'
import MenuButton from '@/components/ui/MenuButton.vue'
import UserAvatar from '@/components/common/TheUserAvatar.vue'
import HeaderMenu from '@/components/ui/HeaderMenu.vue'
import { useSearchStore } from '@/stores/searchStore'
import { useModalStore } from '@/stores/modalStore'

const searchStore = useSearchStore()
const modalStore = useModalStore()

const isMenuOpen = ref(false)
const searchQuery = ref('')

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
	isMenuOpen.value = false
}

const handleSearchSubmit = () => {
	// Логика обработки поиска
	console.log('Поиск:', searchQuery.value)
	searchStore.closeSearch()
}
</script>

<style scoped>
.search-container {
	transition:
		transform 0.3s ease,
		opacity 0.3s ease;
}
</style>
