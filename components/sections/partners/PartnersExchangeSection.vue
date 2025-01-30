<template>
		<div class="flex flex-col items-center justify-center">
			<LogoIcon />
			<p class="text-4xl text-center mb-7">
				Ведущие агентства недвижимости<br>
				выбирают
				<span class="text-primary">крупнейший сервис международного </span>
				<br>
				обмена недвижимостью
			</p>
			<div class="flex items-center justify-center gap-5">
				<img src="@/assets/images/decor-2.png" alt="Partners Exchange" class="max-w-[210px] object-cover">
				<Globe2Icon />
				<img src="@/assets/images/decor-3.png" alt="Partners Exchange" class="max-w-[210px] object-cover">
			</div>
		</div>
</template>

<script setup>
import { Globe2Icon, LogoIcon } from '@/components/icons/icons'
</script>
