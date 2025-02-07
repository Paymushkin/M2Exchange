<template>
	<form
		:class="[
			'flex items-center bg-white rounded-[60px] border-divider-light border flex-1 transition-all duration-300 hover:shadow-[0px_0px_0px_1px_#4460F6] hover:border-transparent',
			size === 'large' ? 'max-w-[460px] 2xl:py-5 py-3 2xl:pr-10 pr-5' : 'max-w-[600px] py-2 pr-4'
		]"
	>
		<div class="flex items-center flex-1">
			<SearchFormIcon class="text-primary ml-2 mr-3 h-6 xl:h-auto" />
			<div class="hidden lg:block w-[1px] h-[32px] bg-[#7974E7]"></div>
			<input
				type="text"
				:placeholder="placeholder"
				class="flex-1 lg:px-4 max-w-full outline-none text-sm text-dark"
				:class="{ 'lg:max-w-[260px] max-w-full xl:text-xl text-lg': size === 'large' }"
			/>
		</div>
		<button
			type="submit"
			class="hidden lg:block text-dark-deep rounded-[8px] 2xl:text-xl xl:text-lg text-sm transition-colors hover:text-primary"
			:class="{ '2xl:text-2xl xl:text-xl text-lg': size === 'large' }"
		>
			Найти
		</button>
	</form>
</template>

<script setup>
import { SearchFormIcon } from '@/components/icons/icons'

defineProps({
	placeholder: {
		type: String,
		default: 'Поиск'
	},
	size: {
		type: String,
		default: 'large',
		validator: (value) => ['large', 'small'].includes(value)
	}
})
</script>
