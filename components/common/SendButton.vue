<template>
	<button
		class="flex items-center justify-center gap-3 sm:min-h-[50px] bg-[#4460F6] hover:rounded-lg rounded-full hover:pl-5 py-3 pr-3 group transition-all duration-300"
		@click="$emit('open-chat')"
	>
		<span class="w-0 overflow-hidden whitespace-nowrap group-hover:w-auto transition-all duration-300 text-white font-semibold">
			Задать вопрос в чате
		</span>
		<div class="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#ffffff]">
			<SendButtonIcon />
		</div>
	</button>
</template>

<script setup>
import { SendButtonIcon } from '@/components/icons/icons'

defineEmits(['open-chat'])
</script>
