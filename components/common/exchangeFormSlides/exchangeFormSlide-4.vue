<template>
	<div class="flex flex-col items-center justify-center w-[970px] max-w-full h-full">
		<h2 class="slide-custom__title mb-6 text-center">Стоимость и площадь объекта</h2>
		<p class="slide-custom__description text-base mb-6 text-center">
			Укажите цену и площадь вашей недвижимости
		</p>

		<div class="w-[750px] max-w-full">
			<div class="mb-6">
				<div class="flex items-center gap-7 mb-10 sm:mb-5">
					<label class="block text-left xl:text-base text-sm font-semibold text-[#001062]"
						>Стоимость</label
					>
					<div class="hidden sm:flex items-center gap-2">
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
				<div class="flex items-center gap-7 mb-10 sm:mb-5">
					<label class="block text-left xl:text-base text-sm font-semibold text-[#001062]"
						>Площадь</label
					>
					<div
						class="hidden sm:block xl:text-sm text-xs font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] xl:px-4 xl:py-2 px-2 py-1"
					>
						до {{ area[0] }} м²
					</div>
					<div
						class="hidden sm:block xl:text-sm text-xs font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] xl:px-4 xl:py-2 px-2 py-1"
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

			<div v-if="role === 2" class="mt-6">
				<div class="flex items-center sm:gap-7 gap-2 mb-10 sm:mb-5">
					<label class=" block text-left xl:text-base text-sm font-semibold text-[#001062]">Сколько вы готовы доплатить?</label>
					<span class="hidden sm:block bg-secondary text-white rounded-[30px] xl:px-4 xl:py-2 px-2 py-1 xl:text-sm text-xs font-semibold">{{ formatPrice(surchargeValue) }} $</span>
				</div>

				<Slider
					v-model="surchargeValue"
					:min="surchargeConfig.min"
					:max="surchargeConfig.max"
					:step="surchargeConfig.step"
					class="custom-slider"
				/>

				<div class="flex justify-between mt-2">
					<span class="text-[#202020] xl:text-base text-sm">0</span>
					<span class="text-[#202020] xl:text-base text-sm">1000000 $</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Slider from '@vueform/slider'

const props = defineProps({
	role: {
		type: Number,
		required: true
	}
})

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

const surchargeConfig = {
	min: 0,
	max: 1000000,
	step: 1000,
	defaultValue: 370000
}

const price = ref(priceConfig.defaultValue)
const area = ref(areaConfig.defaultValue)
const surchargeValue = ref(surchargeConfig.defaultValue)

const formatPrice = (price) => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "")
}
</script>

<style scoped>
.custom-slider {
	--slider-connect-bg: #4169e1;
	--slider-handle-ring-color: #3b82f630;
	--slider-tooltip-bg: #4169e1;
	--slider-tooltip-color: white;
	--slider-tooltip-font-size: 10px;

	@media (min-width: 640px) {
		--slider-tooltip-bg: transparent;
		--slider-tooltip-color: transparent;
	}
}
</style>

<style src="@vueform/slider/themes/default.css"></style>
