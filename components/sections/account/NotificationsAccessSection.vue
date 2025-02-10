<template>
	<div class="flex flex-col gap-6 max-w-[345px] w-full">
		<h2 class="text-dark font-semibold">Уведомления</h2>

		<!-- Переключатель типа уведомлений -->
		<div class="flex items-center sm:gap-4 gap-2">
			<button
				@click="activeType = 'site'"
				:class="[
					'sm:h-[50px] h-[40px] border border-[#E1E1E1] grow sm:px-6 px-2 sm:py-2 py-1 rounded-full transition-colors sm:text-sm text-xs w-1/2',
					activeType === 'site' ? 'bg-[#4460F6] text-white' : 'bg-white text-dark-primary'
				]"
			>
				На сайте
			</button>
			<button
				@click="activeType = 'email'"
				:class="[
					'sm:h-[50px] h-[40px] border border-[#E1E1E1] grow sm:px-6 px-2 sm:py-2 py-1 rounded-full transition-colors sm:text-sm text-xs w-1/2',
					activeType === 'email' ? 'bg-[#4460F6] text-white' : 'bg-white text-dark-primary'
				]"
			>
				Email
			</button>
		</div>

		<!-- Настройки уведомлений -->
		<div class="flex flex-col gap-4">
			<!-- Новые объекты -->
			<div class="flex flex-col gap-1">
				<h3 class="text-sm font-medium mb-4 text-[#8C8B8B]">Новые объекты</h3>
				<div class="flex items-start justify-between gap-2">
					<div class="flex flex-col gap-2">
						<div class="text-xs font-medium">Получать уведомления по новым объектам</div>
						<div class="text-xs text-[#8C8B8B]">Информация о новых объектах на основе ваших поисков</div>
					</div>
					<label class="relative inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							v-model="newObjectsNotification"
							class="sr-only peer"
						>
						<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4460F6]"></div>
					</label>
				</div>
			</div>

			<!-- Изменения в объектах -->
			<div class="flex flex-col gap-1">
				<div class="flex items-start justify-between gap-2">
					<div class="flex flex-col gap-2">
						<div class="text-xs font-medium">Изменения в объектах из списка избранных</div>
						<div class="text-xs text-[#8C8B8B]">Мы пришлем вам уведомление о изменениях в объектах</div>
					</div>
					<label class="relative inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							v-model="changesNotification"
							class="sr-only peer"
						>
						<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4460F6]"></div>
					</label>
				</div>
			</div>

			<!-- Личные -->
			<div class="mt-4">
				<h3 class="text-sm font-medium mb-4 text-[#8C8B8B]">Личные</h3>

				<!-- Избранное -->
				<div class="flex flex-col gap-1 mb-4">
					<div class="flex items-start justify-between gap-2">
						<div class="flex flex-col gap-2">
							<div class="text-xs font-medium">Избранное</div>
							<div class="text-xs text-[#8C8B8B]">Пришлем вам уведомление, если ваш объект добавят в избранное</div>
						</div>
						<label class="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								v-model="favoritesNotification"
								class="sr-only peer"
							>
							<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4460F6]"></div>
						</label>
					</div>
				</div>

				<!-- Персональные предложения -->
				<div class="flex flex-col gap-1">
					<div class="flex items-start justify-between gap-2">
						<div class="flex flex-col gap-2">
							<div class="text-xs font-medium">Персональные предложения</div>
							<div class="text-xs text-[#8C8B8B]">Специальные предложения для вас</div>
						</div>
						<label class="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								v-model="personalNotification"
								class="sr-only peer"
							>
							<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4460F6]"></div>
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const activeType = ref('site')

const siteNotifications = reactive({
	newObjects: false,
	changes: false,
	favorites: false,
	personal: false
})

const emailNotifications = reactive({
	newObjects: false,
	changes: false,
	favorites: false,
	personal: false
})

// Вычисляемые свойства для каждого типа уведомлений
const newObjectsNotification = computed({
	get: () => activeType.value === 'site' ? siteNotifications.newObjects : emailNotifications.newObjects,
	set: (value) => {
		if (activeType.value === 'site') {
			siteNotifications.newObjects = value
		} else {
			emailNotifications.newObjects = value
		}
	}
})

const changesNotification = computed({
	get: () => activeType.value === 'site' ? siteNotifications.changes : emailNotifications.changes,
	set: (value) => {
		if (activeType.value === 'site') {
			siteNotifications.changes = value
		} else {
			emailNotifications.changes = value
		}
	}
})

const favoritesNotification = computed({
	get: () => activeType.value === 'site' ? siteNotifications.favorites : emailNotifications.favorites,
	set: (value) => {
		if (activeType.value === 'site') {
			siteNotifications.favorites = value
		} else {
			emailNotifications.favorites = value
		}
	}
})

const personalNotification = computed({
	get: () => activeType.value === 'site' ? siteNotifications.personal : emailNotifications.personal,
	set: (value) => {
		if (activeType.value === 'site') {
			siteNotifications.personal = value
		} else {
			emailNotifications.personal = value
		}
	}
})
</script>
