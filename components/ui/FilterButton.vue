<template>
	<button
		class="flex items-center gap-2 bg-primary text-white rounded-sm px-2 h-[50px] hover:bg-[#4169E1] transition duration-200"
	>
		<FilterIcon />
		<slot></slot>
	</button>
</template>

<script setup>
import { FilterIcon } from '@/components/icons/icons'
</script>
