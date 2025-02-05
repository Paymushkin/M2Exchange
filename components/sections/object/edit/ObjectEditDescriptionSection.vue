<template>
	<section>
		<div class="flex flex-col xl:gap-8 gap-4">
			<h2 class="xl:text-4xl lg:text-3xl text-lg font-medium text-dark">Описание объекта</h2>
			<textarea
				class="w-full resize-none xl:text-lg text-sm"
				:value="object.description"
			></textarea>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	object: Object
})
</script>

<style scoped>
textarea {
	field-sizing: content;
}
</style>
