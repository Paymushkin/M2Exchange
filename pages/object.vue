<template>
	<NuxtLayout>
		<div class="container py-10">
			<!-- Хлебные крошки -->
			<Breadcrumbs class="mb-2" :breadcrumbs="breadcrumbs" />
			<ObjectTopSection />
		</div>
	</NuxtLayout>
</template>

<script setup>
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
import ObjectTopSection from '~/components/sections/object/ObjectSection.vue'
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
