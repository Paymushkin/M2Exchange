<template>
	<div class="mb-6">
		<div class="flex items-center gap-7">
			<label class="block text-left xl:text-base text-sm font-semibold text-[#001062]">{{
				label
			}}</label>
			<div
				class="xl:text-sm text-xs font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] xl:px-4 xl:py-2 px-2 py-1"
			>
				{{ value }} {{ unit }}
			</div>
		</div>
		<vue-slider
			v-model="value"
			:min="min"
			:max="max"
			:step="step"
			class="xl:my-4 my-2 custom-range"
		/>
		<div class="flex justify-between">
			<span class="xl:text-lg text-sm font-semibold text-[#001062]">{{ min }} {{ unit }}</span>
			<span class="xl:text-lg text-sm font-semibold text-[#001062]">{{ max }} {{ unit }}</span>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	label: String,
	value: Number,
	min: Number,
	max: Number,
	step: Number,
	unit: String
})
</script>

<style scoped>
.custom-range {
	--u-range-thumb-background: #4169e1;
	--u-range-thumb-border-color: #4169e1;
	--u-range-track-background: #e5e7eb;
	--u-range-track-active-background: #4169e1;
	--u-range-thumb-size: 20px;
	--u-range-track-height: 6px;
}

.custom-range .u-range-thumb {
	border-radius: 50%;
	cursor: pointer;
}

.custom-range .u-range-track {
	border-radius: 3px;
}
</style>
