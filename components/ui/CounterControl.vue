<template>
	<div class="flex flex-wrap items-center justify-between gap-2 w-full">
		<span class="text-[#202020] xl:text-lg text-sm">{{ label }}</span>
		<div class="flex items-center gap-3 sm:gap-5">
			<div class="flex items-center gap-2" :class="{ 'opacity-50 pointer-events-none': isDisabled }">
				<UButton @click="decrease" class="custom-counter-button" variant="solid" :disabled="isDisabled">
					<UIcon name="i-heroicons-minus" />
				</UButton>
				<span class="custom-counter-value">
					{{ modelValue }}
				</span>
				<UButton @click="increase" class="custom-counter-button" variant="solid" :disabled="isDisabled">
					<UIcon name="i-heroicons-plus" />
				</UButton>
			</div>

			<div v-if="role === 2 && noMatter" class="flex items-center gap-2">
				<div
					class="custom-checkbox cursor-pointer"
					:class="{ 'checked': isDisabled }"
					@click="isDisabled = !isDisabled"
				>
					<div class="inner-circle"></div>
				</div>
				<span class="text-dark text-xs sm:text-sm font-medium max-w-[200px]">{{ noMatter }}</span>
			</div>
		</div>

	</div>
</template>

<script setup>
const props = defineProps({
	modelValue: {
		type: Number,
		required: true
	},
	label: {
		type: String,
		required: true
	},
	min: {
		type: Number,
		default: 0
	},
	max: {
		type: Number,
		default: Infinity
	},
	role: {
		type: Number,
		default: 1
	},
	noMatter: {
		type: String,
		default: ''
	}
})

const isDisabled = ref(false)

const emit = defineEmits(['update:modelValue'])

const decrease = () => {
	if (props.modelValue > props.min) {
		emit('update:modelValue', props.modelValue - 1)
	}
}

const increase = () => {
	if (props.modelValue < props.max) {
		emit('update:modelValue', props.modelValue + 1)
	}
}
</script>

<style scoped>
.custom-checkbox {
	min-width: 42px;
	min-height: 42px;
	border: 2px solid #3D62FF;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;

	@media (max-width: 640px) {
		min-width: 30px;
		min-height: 30px;
	}
}

.custom-checkbox .inner-circle {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: transparent;
	transition: all 0.2s ease;

	@media (max-width: 640px) {
		width: 14px;
		height: 14px;
	}
}

.custom-checkbox.checked .inner-circle {
	background-color: #3D62FF;
}
</style>
