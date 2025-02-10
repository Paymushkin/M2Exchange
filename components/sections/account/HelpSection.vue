<template>
	<div class="flex flex-col gap-6 max-w-[345px] w-full">
		<h2 class="text-dark font-semibold">Обратная связь</h2>

		<div class="flex flex-col gap-4">
			<!-- Ответы на частые вопросы -->
			<NuxtLink to="/support" class="flex items-center justify-between p-3 rounded-sm border border-[#E9E8E8] cursor-pointer">
				<span class="text-sm">Ответы на частые вопросы</span>
				<div class="flex items-center justify-center w-10 h-10 bg-[#4460F6] rounded-full">
					<Help2Icon />
				</div>
			</NuxtLink>

			<!-- Написать нам -->
			<div class="flex items-center justify-between p-3 rounded-sm border border-[#E9E8E8] cursor-pointer">
				<span class="text-sm">Написать нам</span>
				<div class="flex items-center justify-center w-10 h-10 bg-[#4460F6] rounded-full">
					<Messager2Icon />
				</div>
			</div>

			<!-- Онлайн-чат -->
			<div class="flex items-center justify-between p-3 rounded-sm border border-[#E9E8E8] cursor-pointer">
				<span class="text-sm">Онлайн-чат</span>
				<div class="flex items-center justify-center w-10 h-10 bg-[#4460F6] rounded-full">
					<Chat2Icon />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Chat2Icon, Help2Icon, Messager2Icon } from '@/components/icons/icons'
</script>
