<template>
	<NuxtLayout name="account">
		<div class="container">
			<section class="sm:py-12 py-4">
			<div id="account-page" class="flex sm:gap-3 sm:min-h-[calc(100vh-180px)] min-h-[calc(100vh-120px)]">
				<!-- Боковая навигация -->
				<nav class="flex flex-col w-auto xl:w-[282px] md:w-[220px] shrink-0 bg-white lg:py-10 py-4 xl:px-7 md :px-3 px-1 lg:rounded-lg rounded-sm sm:border-none border-r border-r-[#E9E8E8]">
				<!-- Секция Настройки -->
				<div class="md:mb-8">
					<h2 class="text-sm text-dark font-semibold mb-4 hidden md:block">Настройки</h2>
					<ul class="sm:space-y-2">
						<li v-for="item in settingsMenu" :key="item.id">
							<button
								class="flex items-center gap-2"
								:class="{ 'font-semibold': activeSection === item.id }"
								@click="setActiveSection(item.id)"
							>
								<component
									:is="item.icon"
									:class="['w-8 h-8 md:rounded-full rounded-sm p-2',
										{ 'bg-[#F0F3FE]': activeSection === item.id }]"
								/>
								<span class="text-dark hover:text-primary transition-colors text-xs hidden md:block">
									{{ item.title }}
								</span>
							</button>
						</li>
					</ul>
				</div>

				<!-- Секция Обмен -->
				<div>
					<h2 class="text-sm text-dark font-semibold mb-4 hidden md:block">Обмен</h2>
					<ul class="sm:space-y-2">
						<li>
							<button
								class="flex items-center gap-2"
								@click="modalStore.openMessagerAndNotificationModal('messages')"
							>
								<MessagerIcon class='w-8 h-8 md:rounded-full rounded-sm p-2' />
								<span class="text-dark hover:text-primary transition-colors text-xs hidden md:block">
									Сообщения
								</span>
							</button>
						</li>

						<li>
							<button
								class="flex items-center gap-2"
								@click="modalStore.openMessagerAndNotificationModal('notifications')"
							>
								<BellIcon class='w-8 h-8 md:rounded-full rounded-sm p-2' />
								<span class="text-dark hover:text-primary transition-colors text-xs hidden md:block">
									Уведомления
								</span>
							</button>
						</li>

						<li>
							<button
								class="flex items-center gap-2"
								@click="modalStore.openExchangeFormSliderModal"
							>
								<AddObjectIcon class='w-8 h-8 md:rounded-full rounded-sm p-2' />
								<span class="text-dark hover:text-primary transition-colors text-xs hidden md:block">
									Разместить объект
								</span>
							</button>
						</li>

						<li v-for="item in exchangeMenu" :key="item.id">
							<button
								class="flex items-center gap-2"
								:class="{ 'font-semibold': activeSection === item.id }"
								@click="setActiveSection(item.id)"
							>
								<component
									:is="item.icon"
									:class="['w-8 h-8 md:rounded-full rounded-sm p-2',
										{ 'bg-[#F0F3FE]': activeSection === item.id }]"
								/>
								<span class="text-dark hover:text-primary transition-colors text-xs hidden md:block">
									{{ item.title }}
								</span>
							</button>
						</li>
					</ul>
				</div>

				<UDivider class="my-2" />

				<!-- Секция Дополнительно -->
				<div class="mb-8">
					<ul class="sm:space-y-2">
						<li v-for="item in additionalMenu" :key="item.id">
							<button
								class="flex items-center gap-2"
								:class="{ 'font-semibold': activeSection === item.id }"
								@click="setActiveSection(item.id)"
							>
								<component
									:is="item.icon"
									:class="['w-8 h-8 md:rounded-full rounded-sm p-2',
										{ 'bg-[#F0F3FE]': activeSection === item.id }]"
								/>
								<span class="text-dark hover:text-primary transition-colors text-xs hidden md:block">
									{{ item.title }}
								</span>
							</button>
						</li>
					</ul>
				</div>

				<!-- Нижний блок -->
				<div class="mt-auto">
					<div class="flex flex-col md:flex-row justify-between items-center md:gap-2">
						<button @click="setActiveSection('logout')" class="flex items-center gap-2">
							<div class="hidden md:flex items-center gap-2 rounded-full border border-[#E9E8E8] py-3 pr-5 pl-3 cursor-pointer hover:opacity-50 transition-opacity">
								<div class="flex items-center gap-2">
									<component :is="ArrowIcon"/>
									<span class="text-[#62648B] font-medium text-xs">Выйти</span>
								</div>
							</div>
							<div class="md:hidden flex items-center gap-2">
								<component :is="LogoutIcon" :class="['w-8 h-8 md:rounded-full rounded-sm p-2', { 'bg-[#F0F3FE]': activeSection === 'logout'}]" />
							</div>
						</button>

						<button @click="setActiveSection('delete-profile')" class="flex items-center gap-2">
							<span class="text-[#AAB4CD] font-medium text-[10px] hidden md:block cursor-pointer hover:text-dark transition-colors">
								Удалить профиль
							</span>

							<div class="md:hidden flex items-center gap-2">
								<component :is="DeleteProfileIcon" :class="['w-8 h-8 md:rounded-full rounded-sm p-2', { 'bg-[#F0F3FE]': activeSection === 'delete-profile'}]" />
							</div>
						</button>
					</div>
				</div>

			</nav>

			<!-- Основной контент -->
			<main class="relative flex-grow bg-white lg:py-10 py-4 2xl:px-[100px] sm:px-5 px-3 lg:rounded-lg rounded-sm max-w-full">
					<div class="bg-shape"></div>
					<component :is="currentSection" class="relative z-10" />
				</main>
			</div>
			</section>
		</div>
	</NuxtLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import PersonalInfoSection from '@/components/sections/account/PersonalInfoSection.vue';
import SecuritySection from '@/components/sections/account/SecuritySection.vue'
import NotificationsAccessSection from '@/components/sections/account/NotificationsAccessSection.vue'
import PaymentSection from '@/components/sections/account/PaymentSection.vue'
import MyObjectsSection from '@/components/sections/account/MyObjectsSection.vue'
import FavoritesSection from '@/components/sections/account/FavoritesSection.vue'
import HelpSection from '@/components/sections/account/HelpSection.vue'
import LogoutSection from '@/components/sections/account/LogoutSection.vue'
import DeleteProfileSection from '@/components/sections/account/DeleteProfileSection.vue'
import { useModalStore } from '@/stores/modalStore'

import {
	AddObjectIcon,
	BellIcon,
	DeleteProfileIcon,
	FavoriteIcon,
	HelpIcon,
	LoginIcon,
	LogoutIcon,
	MessagerIcon,
	ObjectsIcon,
	PaymentIcon,
	ProfileIcon,
	PushIcon } from '~/components/icons/account/icons.js'

import { ArrowIcon } from '~/components/icons/icons.js'

const modalStore = useModalStore()


definePageMeta({
	layout: 'account'
})

// Меню настроек
const settingsMenu = [
	{ id: 'personal', title: 'Личная информация', icon: ProfileIcon },
	{ id: 'security', title: 'Вход и безопасность', icon: LoginIcon },
	{ id: 'notifications-access', title: 'Допуск уведомлений', icon: PushIcon },
	{ id: 'payment', title: 'Платежи', icon: PaymentIcon },
]

// Меню обмена
const exchangeMenu = [
	// { id: 'messages', title: 'Сообщения', icon: MessagerIcon },
	// { id: 'notifications', title: 'Уведомления', icon: BellIcon },
	{ id: 'my-objects', title: 'Мои объекты', icon: ObjectsIcon },
	// { id: 'post-object', title: 'Разместить объект', icon: AddObjectIcon },
	{ id: 'favorites', title: 'Избранные объекты', icon: FavoriteIcon },
]

const additionalMenu = [
	{ id: 'help', title: 'Помощь', icon: HelpIcon },
	// { id: 'support', title: 'Связаться с нами', icon: SupportIcon },
]

const activeSection = ref('')

const setActiveSection = (sectionId) => {
	activeSection.value = sectionId
	// Убираем обновление URL полностью
}

onMounted(() => {
	// Установка активной секции из хэша URL только при начальной загрузке
	const hash = window.location.hash.slice(1)
	if (hash) {
		activeSection.value = hash
	} else {
		activeSection.value = 'personal'
	}
})


// Объект с маппингом id секций на компоненты
const sectionComponents = {
	personal: PersonalInfoSection,
	security: SecuritySection,
	'notifications-access': NotificationsAccessSection,
	payment: PaymentSection,
	// messages: MessagesSection,
	// notifications: NotificationsSection,
	'my-objects': MyObjectsSection,
	// 'post-object': PostObjectSection,
	favorites: FavoritesSection,
	help: HelpSection,
	'logout': LogoutSection,
	'delete-profile': DeleteProfileSection,
	// support: SupportSection
}

// Вычисляемое свойство для определения текущей секции
const currentSection = computed(() => {
	return sectionComponents[activeSection.value] || PersonalInfoSection
})
</script>

<style scoped>
.bg-shape {
	border-radius: 596px;
	background: linear-gradient(241deg, rgba(67, 107, 255, 0.14) 18.95%, rgba(24, 174, 255, 0.14) 122.67%);
	filter: blur(140px);
	position: absolute;
	bottom: 0;
	right: 20%;
	width: 596px;
	height: 596px;

	@media (max-width: 768px) {
		right: 0;
		width: 300px;
		height: 300px;
	}
}
</style>
