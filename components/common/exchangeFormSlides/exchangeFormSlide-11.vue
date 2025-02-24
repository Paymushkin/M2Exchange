<template>
	<div class="flex flex-col justify-center h-full w-[500px] max-w-full">
		<h2 class="slide-custom__title xl:mb-6 mb-3">Данные о компании</h2>
		<p class="slide-custom__description xl:text-base text-sm md:mb-10 mb-5">
			Загрузите документы о регистрации компании, данные ИП/ООО или иные документы подтверждающие деятельность компании
		</p>
		<div class="relative">
			<input
				type="file"
				class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
				@change="handleFileUpload"
				multiple
			/>
			<div class="relative flex justify-center items-center rounded-lg border-2 border-dashed border-[#ADB1D3] bg-background-light p-4 h-[150px]">
				<h3 class="text-dark text-center">Загрузите документы</h3>
				<PlusIcon class="w-5 h-5 absolute top-5 left-5" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { PlusIcon } from '@/components/icons/icons.js'

const handleFileUpload = (event) => {
	console.log(event.target.files)
}
</script>

