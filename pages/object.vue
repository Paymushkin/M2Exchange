<template>
	<NuxtLayout name="object">
		<div class="container py-10">
			<!-- Хлебные крошки -->
			<Breadcrumbs class="mb-2" :breadcrumbs="breadcrumbs" />
			<ObjectSection />
		</div>
	</NuxtLayout>
</template>

<script setup>
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
import ObjectSection from '~/components/sections/object/ObjectSection.vue'

definePageMeta({
	layout: 'object'
})
// Пример данных для хлебных крошек
const breadcrumbs = [
	{
		name: 'Все объекты',
		path: '/catalog'
	},
	{
		name: 'Испания',
		path: '/catalog/spain'
	},
	{
		name: 'Виллы',
		path: '/catalog/spain/villas'
	}
]
</script>
