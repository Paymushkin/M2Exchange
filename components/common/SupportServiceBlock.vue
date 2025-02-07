<template>
	<div class="flex flex-col items-start gap-3 rounded-lg bg-background-light py-3 px-4 sm:py-7 sm:px-8 max-w-[584px] mb-5 sm:mb-0">
		<h4 class="text-dark text-lg font-semibold">Служба поддержки</h4>
		<p class="text-sm">Если вы не нашли решение, напишите в службу поддержки - мы ответим в течение суток (постараемся быстрее).</p>
		<AskTheQuestionButton />
	</div>
</template>

<script setup>
import AskTheQuestionButton from '@/components/ui/AskTheQuestionButton.vue';
</script>
