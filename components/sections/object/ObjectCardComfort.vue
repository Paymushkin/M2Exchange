<template>
	<!-- Описание -->
	<div class="flex flex-col lg:flex-row gap-10 w-full">
		<div class="flex flex-col gap-6 lg:w-1/2 w-full">
			<h2 class="text-dark lg:text-4xl sm:text-2xl text-xl font-bold">Удобства</h2>
			<div class="flex items-center flex-wrap gap-x-2 gap-y-4">
				<TagButton v-for="item in object.comfort" :key="item.id">
					<span>{{ item }}</span>
				</TagButton>
			</div>
		</div>
		<div v-if="object.wishes" class="flex flex-col gap-6 lg:w-1/2 w-full">
			<h2 class="text-dark lg:text-4xl sm:text-2xl text-xl font-bold">Пожелания к обмену</h2>
			<div class="flex items-start gap-3 border-[#D2DBF5] border rounded-lg p-4">
				<HandIcon class="shrink-0" />
				<p class="text-dark font-medium"> {{ object?.wishes }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import TagButton from '@/components/ui/TagButton.vue'
import { HandIcon } from '@/components/icons/icons'

const props = defineProps({
	object: Object
})
</script>
