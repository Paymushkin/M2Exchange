<template>
	 <div class="flex flex-col justify-center items-center h-full w-[385px] max-w-full">
    <h2 class="slide-custom__title xl:mb-8 mb-4">Данные представителя</h2>
	<div class="flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<label class="text-[#1A1D5D] font-semibold">ФИО представителя</label>
			<input
				required
				type="text"
				v-model="formData.name"
				class="w-full px-4 py-3 rounded-full border border-[#E5E7F0] focus:outline-none focus:border-[#1A1D5D]"
				placeholder="Игорь Игорев"
			/>
		</div>

		<div class="flex flex-col gap-2">
			<label class="text-[#1A1D5D] font-semibold">Почта</label>
			<input
				required
				type="email"
				v-model="formData.email"
				class="w-full px-4 py-3 rounded-full border border-[#E5E7F0] focus:outline-none focus:border-[#1A1D5D]"
				placeholder="egotegor@gmail.com"
			/>
		</div>

		<div class="flex flex-col gap-2">
			<label class="text-[#1A1D5D] font-semibold">Телефон</label>
			<input
				required
				type="tel"
				v-model="formData.phone"
				class="w-full px-4 py-3 rounded-full border border-[#E5E7F0] focus:outline-none focus:border-[#1A1D5D]"
				placeholder="+7"
			/>
		</div>
	</div>
</div>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
	name: '',
	email: '',
	phone: ''
})
</script>

<style scoped>
input::placeholder {
	color: #1A1D5D;
	opacity: 0.5;
}
</style>

