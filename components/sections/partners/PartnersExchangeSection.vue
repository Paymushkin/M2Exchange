<template>
	<section>
		<div class="flex flex-col items-center justify-center">
			<LogoIcon class="2xl:mb-4 mb-2"/>
			<p class="2xl:text-4xl sm:text-2xl text-base text-center 2xl:mb-7 mb-5">
				Ведущие агентства недвижимости<br>
				выбирают
				<span class="text-primary">крупнейший сервис международного </span>
				<br>
				обмена недвижимостью
			</p>
			<div class="flex items-center justify-center sm:gap-5 gap-3">
				<img
					src="@/assets/images/decor-2.png"
					alt="Partners Exchange"
					loading="lazy"
					placeholder="blur"
					class="2xl:max-w-[210px] lg:max-w-[180px] sm:max-w-[150px] max-w-[100px] object-cover">
				<Globe2Icon class="2xl:w-auto lg:w-10 sm:w-8 w-6" />
				<img
					src="@/assets/images/decor-3.png"
					 alt="Partners Exchange"
					loading="lazy"
					placeholder="blur" class="2xl:max-w-[210px] lg:max-w-[180px] sm:max-w-[150px] max-w-[100px] object-cover">
			</div>
		</div>
	</section>
</template>

<script setup>
import { Globe2Icon, LogoIcon } from '@/components/icons/icons'
</script>
