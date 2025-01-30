<template>
	<div class="flex flex-col gap-4 mb-10">
		<h2 class="text-dark lg:text-4xl sm:text-2xl text-xl font-bold">Объект на карте</h2>
		<div class="flex items-center flex-wrap gap-3">
			<LocatorIcon />
			<span v-html="object.location" class="text=[#53587A] text-sm font-medium"></span>
		</div>

		<ObjectMap :location="object.location" :coordinates="object.coordinates" class="mb-7" />
	</div>
</template>

<script setup>
import ObjectMap from '@/components/sections/object/ObjectMap.vue'
import TagButton from '@/components/ui/TagButton.vue'
import { LocatorIcon } from '@/components/icons/icons'

const props = defineProps({
	object: Object
})
</script>
