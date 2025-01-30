<template>
	<NuxtLayout>
		<CatalogSearchSection />
		<template v-if="objects.length">
			<CatalogListSection />
		</template>
		<template v-else>
			<CatalogEmptyListSection class="mb-10" />
			<CatalogRecommendationsSection class="mb-20" />
		</template>
	</NuxtLayout>
</template>

<script setup>
import CatalogSearchSection from '@/components/sections/catalog/CatalogSeachSection.vue'
import CatalogListSection from '@/components/sections/catalog/CatalogListSection.vue'
import CatalogEmptyListSection from '@/components/sections/catalog/CatalogEmptyListSection.vue'
import CatalogRecommendationsSection from '@/components/sections/catalog/CatalogRecommendationsSection.vue'
const objects = ref([])
</script>
