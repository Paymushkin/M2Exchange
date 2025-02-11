<template>
	<li class="relative border border-[#E9E8E8] rounded-sm w-full sm:w-[190px] min-h-[190px] bg-white cursor-pointer hover:border-primary hover:shadow-md transition-all duration-300">
		<div v-if="!isOptionsOpen && !isEditMode" class="flex flex-col items-start justify-between px-4 pt-7 pb-4 h-full">
			<button class="absolute top-3 right-3"
				@click="isOptionsOpen = true"
			>
				<OptionsIcon class="w-5 h-5" />
			</button>
			<h4 class="grow mb-2 max-w-[123px]">{{ item.title }}</h4>
			<p class="text-[#8C8B8B] text-sm mb-3">{{ item.count }}  Locations</p>
			<button class="w-10 h-10 bg-accent rounded-full cursor-pointer flex items-center justify-center">
				<Heart3Icon class="w-6 h-6" />
			</button>
		</div>

		<div v-if="isOptionsOpen && !isEditMode" class="flex justify-stretch items-center w-full h-full">
			<ul class="flex flex-col grow text-dark text-xs divide-y divide-[#EBEBEB] px-4">
				<li class="text-center cursor-pointer py-3" @click="isOptionsOpen = false">Назад</li>
				<li class="text-center cursor-pointer py-3" >Выбрать</li>
				<li class="text-center cursor-pointer py-3" @click="editFavorite">Редактировать подборку</li>
				<li class="text-center cursor-pointer py-3" @click="deleteFavorite">Удалить подборку</li>
			</ul>
		</div>

		<div v-if="isEditMode" class="flex flex-col justify-stretch items-start w-full h-full p-3">
			<h4 class="text-dark text-sm font-semibold text-left">Изменить</h4>
			<input
				v-model="editedTitle"
				type="text"
				class="w-full border border-[#EBEBEB] rounded-sm text-sm p-2"
				placeholder="Название"
			/>
			<button @click="deleteFavorite" class="text-accent text-xs text-left">Удалить подборку</button>
			<button
				@click="saveChanges"
				class="rounded-full cursor-pointer flex items-center justify-center bg-secondary text-white px-4 py-2 h-10 w-full text-sm"
			>
				Готово
			</button>
		</div>

	</li>
</template>

<script setup>
import { Heart3Icon, OptionsIcon } from '@/components/icons/icons'

const props = defineProps({
	item: {
		type: Object,
		required: true
	}
})

const isOptionsOpen = ref(false)
const isEditMode = ref(false)
const editedTitle = ref('')

const emit = defineEmits(['update-title'])

const editFavorite = () => {
	editedTitle.value = props.item.title
	isEditMode.value = true
	isOptionsOpen.value = false
}

const saveChanges = () => {
	emit('update-title', editedTitle.value)
	isEditMode.value = false
}

const deleteFavorite = () => {
	console.log('deleteFavorite')
}

</script>
