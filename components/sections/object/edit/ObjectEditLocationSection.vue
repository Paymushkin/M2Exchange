<template>
	<section>
		<h1 class="text-2xl font-bold text-dark mb-4">Где находится объект?</h1>
		<div class="flex gap-4">
			<div class="flex items-center xl:w-[420px] w-full border border-[#ECEDF3] rounded-[40px] py-2 xl:px-5 px-2">
				<LocationIcon class="mr-2 w-10 h-10" />
				<select class="w-full mr-2 xl:text-base text-sm cursor-pointer">
					<option value="location1">Italy, Sardinia</option>
					<option value="location2">Spain, Barcelona</option>
					<option value="location3">France, Paris</option>
				</select>
			</div>
			<RoundedStandartButton class="shrink-0">
				Показать на карте
			</RoundedStandartButton>
		</div>
	</section>
</template>

<script setup>
import { LocationIcon } from '@/components/icons/icons.js'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

const props = defineProps({
	object: Object
})
</script>
