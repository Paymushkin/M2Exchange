<template>
	<div class="flex flex-col bg-white rounded-sm p-8 max-w-[580px] w-full">
		<!-- Основной список действий -->
		<ul v-if="!showDeleteConfirmation" class="flex flex-col">
			<li>
				<button
					class="flex justify-center items-center w-full py-4 hover:text-[#4460F6] transition-colors duration-300"
					@click="handleShare"
				>
					Поделиться
				</button>
			</li>
			<UDivider />

			<li>
				<button
					class="flex justify-center items-center w-full py-4 hover:text-[#4460F6] transition-colors duration-300"
					@click="handleUnpublish"
				>
					Снять с публикации
				</button>
			</li>
			<UDivider />

			<li>
				<NuxtLink
					to="/objects/object/edit?id=1"
					class="flex justify-center items-center w-full py-4 hover:text-[#4460F6] transition-colors duration-300"
					@click="emit('close')"
				>
					Редактировать объект
				</NuxtLink>
			</li>
			<UDivider />

			<li>
				<button
					class="flex justify-center items-center w-full py-4 hover:text-[#4460F6] transition-colors duration-300"
					@click="showDeleteConfirmation = true"
				>
					Удалить
				</button>
			</li>
		</ul>

		<!-- Блок подтверждения удаления -->
		<div v-else class="flex flex-col items-center">
			<h3 class="text-[#41495E] text-2xl font-medium text-center mb-8">
				Вы уверенны, что хотите<br>удалить объект?
			</h3>

			<button
				class="w-[250px] h-[70px] py-4 px-6 mb-4 bg-[#4460F6] text-white rounded-full hover:bg-[#2341D7] transition-colors duration-300"
				@click="handleDelete"
			>
				Удалить
			</button>

			<button
					@click="showDeleteConfirmation = false"
					class="flex items-center gap-2 border border-[#E9E8E8] rounded-full px-4 py-2 text-sm text-[#41495E] hover:text-[#4460F6] transition-colors"
					>
					<ArrowIcon class="w-5 h-5" />
					<span>назад</span>
				</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useAlertStore } from '@/stores/alertStore'
import { ArrowIcon } from '@/components/icons/icons'

const emit = defineEmits(['close'])
const alertStore = useAlertStore()
const showDeleteConfirmation = ref(false)

const handleUnpublish = () => {
	emit('close')
	alertStore.showUnpublishMessage()
}

const handleDelete = () => {
	emit('close')
	alertStore.showDeleteMessage()
}

const handleShare = () => {
	emit('close')
	alertStore.showShareMessage()
}

</script>
