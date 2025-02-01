<template>
	<NuxtLayout name="login">
		<div class="container py-10">
			<TheLoginSection />
		</div>
	</NuxtLayout>
</template>

<script setup>
import TheLoginSection from '~/components/sections/TheLoginSection.vue'

definePageMeta({
	layout: 'login'
})

</script>
