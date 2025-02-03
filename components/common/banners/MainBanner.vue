<template>
	<div
		class="main-banner w-full bg-background-blue rounded-lg lg:pt-[47px] pt-5 lg:px-14 px-5 2xl:h-[335px] xl:h-[300px] sm:h-[250px] h-[450px]"
		:style="{ backgroundImage: `url(${bannerBg})` }"
	>
		<div class="flex flex-col lg:h-full h-auto 2xl:w-[635px] xl:w-[500px] w-[450px] max-w-full">
			<h2 class="2xl:text-3xl xl:text-2xl text-xl text-[#41495E] max-w-[450px] mb-4">Недвижимоть со вмего мира в одном приложение</h2>
			<StoreButtons />
			<AnimatedTags class="lg:mt-auto mt-5" :tags="['Real estate', 'house property', 'Apartment']" />
		</div>
	</div>
</template>

<script setup>
import bannerBg from '@/assets/images/main-banner-bg.png'
import StoreButtons from '@/components/ui/StoreButtons.vue'
import AnimatedTags from '@/components/ui/AnimatedTags.vue'
</script>

<style scoped>
.main-banner {
	background-size: contain;
	background-position: 80% 50%;
	background-repeat: no-repeat;

	@media (max-width: 1536px) {
		background-position: 100% 50%;
	}

	@media (max-width: 1280px) {
		background-position: right bottom;
		background-size: 50%;
	}

	@media (max-width: 640px) {
		background-position: center bottom;
		background-size: contain;
	}

}
</style>
