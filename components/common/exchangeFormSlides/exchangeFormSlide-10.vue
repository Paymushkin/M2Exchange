<template>
	<div class="flex flex-col justify-center h-full w-[500px] max-w-full">
		<h2 class="slide-custom__title xl:mb-6 mb-3">Добавьте комментарий к обмену</h2>
		<p class="slide-custom__description xl:text-base text-sm xl:mb-[40px] mb-5">Опишите важные для вас нюансы, такие как они наличие моря, природы,  транспортной доступности, типа отопления и иные критерии.
		</p>
		<div>
			<h3 class="font-semibold text-dark mb-3">Пожелания к обмену</h3>
			<div class="flex items-start gap-4 border border-background-light sm:rounded-lg rounded-sm xl:p-8 p-4">
				<HandIcon class="hidden sm:block w-7 h-7" />
				<textarea
					rows="10"
					cols="50"
					class="xl:text-base text-sm resize-none grow placeholder:text-[#828282]"
					placeholder="Ищу обмен домом на аналогичное жилье в другой стране. Предпочтительно спокойный, уютный район с развитой инфраструктурой, недалеко от природы или моря."></textarea>
			</div>
		</div>
	</div>
</template>

<script setup>
import { HandIcon } from '@/components/icons/icons.js'
</script>

