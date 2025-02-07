<template>
	<label class="inline-flex items-center cursor-pointer">
		<input
			type="checkbox"
			:checked="modelValue"
			class="hidden"
			@change="$emit('update:modelValue', $event.target.checked)"
		/>
		<div
			class="flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors duration-200"
			:class="[
				modelValue
					? 'bg-primary text-white border-primary'
					: 'bg-white text-dark border-[#B4CEFF] hover:bg-gray-50'
			]"
		>
			<slot />
		</div>
	</label>
</template>

<script setup>
defineProps({
	modelValue: {
		type: Boolean,
		default: false
	}
})

defineEmits(['update:modelValue'])
</script>

<style>
.custom-checkbox-button {
	font-size: 16px;
	font-weight: 500;
	padding: 8px 24px;
	min-height: 50px;
	height: 50px;
	border: none;
	outline: none;
	border-radius: 40px;
	background-color: #f2f4fd;
	color: #656565;
	box-shadow: none;

	@media (max-width: 640px) {
		font-size: 12px;
		padding: 6px 12px;
		min-height: 40px;
		height: 40px;
	}
}

.custom-checkbox-button.selected,
.custom-checkbox-button.selected:hover,
.custom-checkbox-button:hover {
	background-color: #1c2d6a;
	color: #ffffff;
}
</style>
