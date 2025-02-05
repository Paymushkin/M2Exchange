<template>
	<div class="flex flex-col items-start gap-4">
		<label class="text-lg text-dark font-medium">Название объявления</label>
		<input type="text" class="xl:text-4xl lg:text-3xl text-lg text-dark font-bold border border-[#D2DBF5] rounded-lg py-2 lg:px-8 px-4 max-w-full" :value="object.title" />
	</div>
</template>

<script setup>
const props = defineProps({
	object: Object
})
</script>

<style scoped>
input {
	field-sizing: content;
}
</style>
