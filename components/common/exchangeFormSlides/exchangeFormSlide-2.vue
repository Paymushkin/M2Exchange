<template>
	<div class="flex flex-col justify-center h-full">
		<h2 class="slide-custom__title xl:mb-6 mb-3">Где находится объект?</h2>
		<p class="slide-custom__description xl:text-base text-sm xl:mb-[40px] mb-5">
			Введите адрес или выберите зону на карте
		</p>

		<div
			class="flex items-center xl:w-[480px] w-full border border-[#ECEDF3] rounded-[40px] xl:py-4 py-2 xl:px-5 px-2"
		>
			<LocationIcon class="mr-2" />
			<select class="mr-2 xl:text-base text-sm cursor-pointer">
				<option value="location1">Italy, Sardinia</option>
				<option value="location2">Spain, Barcelona</option>
				<option value="location3">France, Paris</option>
			</select>
			<button
				class="flex items-center ml-auto bg-dark text-white text-[12px] xl:px-5 px-3 xl:py-3 py-2 rounded-full hover:bg-blue-700 transition"
			>
				<MapIcon class="mr-2" />
				Карта
			</button>
		</div>
	</div>
</template>

<script setup>
import { LocationIcon } from '@/components/icons/icons.js'
import { MapIcon } from '@/components/icons/icons.js'
</script>
