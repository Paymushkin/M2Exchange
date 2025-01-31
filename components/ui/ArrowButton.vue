<template>
	<div class="flex items-center justify-center group">
		<NuxtLink
			:to="to"
			class="flex items-center justify-center bg-transparent 2xl:text-2xl sm:text-xl text-base p-2 2xl:h-[75px] h-[50px] 2xl:w-[330px] sm:w-[250px] w-[200px] rounded-full border-2 border-primary text-dark-primary hover:bg-primary hover:text-white transition-all duration-300"
		>
			<slot></slot>
		</NuxtLink>
		<Arrow45degIcon
			class="transform group-hover:rotate-45 transition-transform duration-300 2xl:w-auto w-[50px]"
		/>
	</div>
</template>

<script setup>
import { Arrow45degIcon } from '@/components/icons/icons'

defineProps({
	to: {
		type: String,
		default: '/'
	}
})
</script>
