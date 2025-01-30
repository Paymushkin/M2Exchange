<template>
	<div class="flex items-center justify-center group">
		<NuxtLink
			:to="to"
			class="flex items-center justify-center bg-transparent text-2xl p-2 h-[75px] w-[330px] rounded-full border-2 border-primary text-dark-primary hover:bg-primary hover:text-white transition-all duration-300"
		>
			<slot></slot>
		</NuxtLink>
		<Arrow45degIcon
			class="transform group-hover:rotate-45 transition-transform duration-300"
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
