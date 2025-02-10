<template>
	<div class="flex flex-col gap-6 max-w-[345px] w-full">
		<h2 class="flex items-center gap-2 text-dark font-semibold">
			<span class="text-sm">Выйти</span>
			<LogoutIcon />
		</h2>
		<p class="text-dark text-sm">При выходе из аккаунта для доступа вам потребуется логин и пароль указанные при регистрации.</p>
		<RoundedStandartButton>
			<span class="text-sm">Продолжить</span>
		</RoundedStandartButton>
	</div>
</template>

<script setup>
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'
import { LogoutIcon } from '@/components/icons/icons'
</script>
