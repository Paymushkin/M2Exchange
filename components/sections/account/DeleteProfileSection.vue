<template>
	<div class="flex flex-col gap-6 max-w-[345px] w-full">
		<h2 class="text-dark font-semibold">Удалить аккаунт</h2>
		<h3 class="text-dark font-semibold">Вы действительно хотите удалить аккаунт?</h3>
		<p class="text-dark text-sm">Нажав кнопку продолжить вы потеряете доступ к вашему аккаунту навсегда, все ваши данные будут удалены. </p>
		<RoundedStandartButton>
			<span class="text-sm">Продолжить</span>
		</RoundedStandartButton>
	</div>
</template>

<script setup>
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'
</script>
