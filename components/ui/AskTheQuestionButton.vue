<template>
	<button class="flex items-center gap-4 bg-white rounded-sm h-[52px] py-2 px-3 border-2 border-[#E9E8E8] hover:bg-[#4460F7] hover:text-white transition-colors duration-300">
		<span>Задать вопрос</span>
		<MessagerIcon />
	</button>
</template>

<script setup>
import { MessagerIcon } from '@/components/icons/icons.js';
</script>

