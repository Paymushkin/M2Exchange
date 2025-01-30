<template>
	<header class="w-full bg-background-light lg:rounded-b-[36px] z-40 sticky top-0">
		<div class="container mx-auto">
			<nav class="flex items-center gap-5 py-5 h-[84px]">
				<TheLogo />

				<TheNavigation @open-modal="isOpen = true" />

				<TheHeaderActions />
			</nav>
		</div>
	</header>
</template>

<script setup>
import TheLogo from '@/components/common/TheLogo.vue'
import TheNavigation from '@/components/common/TheNavigation.vue'
import TheHeaderActions from '@/components/TheHeaderActions.vue'
</script>
