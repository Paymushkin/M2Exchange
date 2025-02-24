<template>
	<div class="flex flex-col items-center justify-center w-[700px] max-w-full h-full">
		<div class="flex items-center justify-center w-[150px] h-[150px] bg-[#E9ECFF] rounded-full mb-4 lg:mb-8">
			<CheckIcon />
		</div>
		<h2 class="custom-title mb-10 text-primary-darker text-center font-semibold">
			<span v-if="role === 1">
				Почти все готово,
				<br>
				теперь расскажите
				<br>
				про ваше жилье мечты
			</span>
			<span v-if="role === 2">
				Все получилось!
			</span>
			<span v-if="role === 3">
				Почти все готово,
				<br>
				письмо для подтверждения регистрации и инструкция будут направлены на почту в течение 2х часов
			</span>

		</h2>
		<div v-if="role === 1" class="flex flex-col items-center justify-center gap-4">
			<NuxtLink to="/">
				<RoundedStandartButton>
					<span class="md:text-base text-sm">Подобрать варианты обмена</span>
				</RoundedStandartButton>
			</NuxtLink>
		</div>
		<div v-if="role === 2" class="flex items-center justify-center gap-4">
			<StandartLinkButton to="/" variant="primary">
				<span class="md:text-base text-sm">Подобрать варианты обмена</span>
			</StandartLinkButton>

			<StandartLinkButton to="/" variant="secondary">
				<span class="md:text-base text-sm">Просмотреть мое объявление</span>
			</StandartLinkButton>
		</div>
		<div v-if="role === 3" class="flex flex-col items-center justify-center gap-4">
			<RoundedStandartButton>
				<span class="md:text-base text-sm">Вернутся на сайт</span>
			</RoundedStandartButton>
			<NuxtLink to="/" class="text-sm text-center font-medium hover:text-primary transition-colors duration-300">
				<span class="md:text-base text-sm">Скачать приложение</span>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
import { CheckIcon } from '@/components/icons/icons.js'
import StandartLinkButton from '~/components/ui/StandartLinkButton.vue'
import RoundedStandartButton from '~/components/ui/RoundedStandartButton.vue'
const props = defineProps(['role'])
</script>

<style scoped>
.shadow-custom {
	box-shadow: 11.282px 11.282px 45.13px 0px rgba(68, 96, 246, 0.1);
}
</style>
