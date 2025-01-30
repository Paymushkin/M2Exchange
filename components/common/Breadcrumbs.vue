<template>
	<nav class="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
		<ul class="flex items-center gap-2">
			<li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center gap-2">
				<NuxtLink
					v-if="index !== breadcrumbs.length - 1"
					:to="crumb.path"
					class="text-gray-400 hover:text-accent-blue transition-colors duration-200"
				>
					{{ crumb.name }} >
				</NuxtLink>
				<span v-else class="text-dark">
					{{ crumb.name }}
				</span>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { ArrowIcon } from '@/components/icons/icons'

const props = defineProps({
	breadcrumbs: {
		type: Array,
		required: true,
		default: () => []
	}
})
</script>
