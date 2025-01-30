<template>
	<div class="flex flex-col items-center justify-center w-[970px] max-w-full h-full">
		<h2 class="slide-custom__title mb-6 text-center">Стоимость и площадь объекта</h2>
		<p class="slide-custom__description text-base mb-6 text-center">
			Укажите цену и площадь вашей недвижимости
		</p>

		<div class="w-[750px] max-w-full">
			<div class="mb-6">
				<div class="flex items-center gap-7 mb-5">
					<label class="block text-left xl:text-base text-sm font-semibold text-[#001062]"
						>Стоимость</label
					>
					<div class="flex items-center gap-2">
						<div
							class="xl:text-sm text-xs font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] xl:px-4 xl:py-2 px-2 py-1"
						>
							от {{ price[0] }} €
						</div>
						<div
							class="xl:text-sm text-xs font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] xl:px-4 xl:py-2 px-2 py-1"
						>
							до {{ price[1] }} €
						</div>
					</div>
				</div>
				<Slider
					v-model="price"
					:min="priceConfig.min"
					:max="priceConfig.max"
					:step="priceConfig.step"
					range
					:tooltip="false"
					class="xl:my-4 my-2 custom-slider"
				/>
				<div class="flex justify-between">
					<span class="xl:text-lg text-sm font-semibold text-[#001062]"
						>{{ priceConfig.min }} €</span
					>
					<span class="xl:text-lg text-sm font-semibold text-[#001062]"
						>{{ priceConfig.max }} €</span
					>
				</div>
			</div>

			<div>
				<div class="flex items-center gap-7 mb-5">
					<label class="block text-left xl:text-base text-sm font-semibold text-[#001062]"
						>Площадь</label
					>
					<div
						class="xl:text-sm text-xs font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] xl:px-4 xl:py-2 px-2 py-1"
					>
						до {{ area[0] }} м²
					</div>
					<div
						class="xl:text-sm text-xs font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] xl:px-4 xl:py-2 px-2 py-1"
					>
						от {{ area[1] }} м²
					</div>
				</div>
				<Slider
					v-model="area"
					:min="areaConfig.min"
					:max="areaConfig.max"
					:step="areaConfig.step"
					range
					:tooltip="false"
					class="xl:my-4 my-2 custom-slider"
				/>
				<div class="flex justify-between">
					<span class="xl:text-lg text-sm font-semibold text-[#001062]"
						>{{ areaConfig.min }} м²</span
					>
					<span class="xl:text-lg text-sm font-semibold text-[#001062]"
						>{{ areaConfig.max }} м²</span
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Slider from '@vueform/slider'

const priceConfig = {
	min: 0,
	max: 1000000,
	step: 10000,
	defaultValue: [300000, 800000]
}

const areaConfig = {
	min: 0,
	max: 300000,
	step: 10,
	defaultValue: [30000, 150000]
}

const price = ref(priceConfig.defaultValue)
const area = ref(areaConfig.defaultValue)
</script>

<style scoped>
.custom-slider {
	--slider-connect-bg: #4169e1;
	--slider-tooltip-bg: transparent;
	--slider-tooltip-color: transparent;
	--slider-handle-ring-color: #3b82f630;
}
</style>

<style src="@vueform/slider/themes/default.css"></style>
