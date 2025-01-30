<template>
	<div class="flex flex-col items-center justify-center w-[480px] max-w-full h-full">
		<h2 class="slide-custom__title mb-6 text-left">Назовите объявление и опишите жилье</h2>
		<p class="slide-custom__description text-base mb-6">
			Поделитесь основными сведениями, например где оно находится, что окружает, какой ремонт и год
			постройки.
		</p>
		<div class="flex flex-col w-full h-full">
			<h3 class="mb-3 text-left text-[#252B5C] font-semibold">Введите название</h3>
			<input
				type="text"
				v-model="title"
				placeholder="Вилла с видом на море"
				class="mb-6 border-[2px] border-[#E9ECFF] xl:rounded-lg rounded-sm xl:px-5 px-2 xl:py-3 py-2 xl:text-sm text-xs outline-none placeholder:text-[#828282]"
			/>

			<h3 class="mb-3 text-left text-[#252B5C] font-semibold">Опишите объект</h3>
			<textarea
				rows="5"
				cols="50"
				v-model="description"
				placeholder="Дом с дизайнерским ремонтом для большой семьи"
				class="border-[2px] border-[#E9ECFF] xl:rounded-lg rounded-sm xl:px-5 px-2 xl:py-3 py-2 xl:text-sm text-xs outline-none resize-none placeholder:text-[#828282]"
			></textarea>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const description = ref('')
</script>

<style>
.input-field {
	width: 100%;
	padding: 12px;
	border: 1px solid #e9ecff;
	border-radius: 40px;
	font-size: 16px;
	outline: none;
}

.input-field:focus {
	border-color: #889bff;
}

.textarea-field:focus {
	border-color: #889bff;
}
</style>
