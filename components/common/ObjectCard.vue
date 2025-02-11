<template>
	<li
		class="shadow-card relative bg-white xl:rounded-2xl rounded-lg xl:p-6 p-3 hover:scale-105 transition-all duration-300"
		:class="[
			{ 'favorite-object': favoriteStore.isFavorite(card.id) },
			isWide ? 'object-item-wide' : 'object-item'
		]"
	>
		<img
			:src="card.image"
			:alt="card.title"
			loading="lazy"
			placeholder="blur"
			class="w-full h-auto rounded-md mb-3"
		/>
		<div
			class="absolute flex justify-center gap-2 card-top-info"
			v-if="type !== 'account'"
			:class="{ 'is-favorite': favoriteStore.isFavorite(card.id) }"
			@click="handleFavoriteClick"
		>
			<div
				v-if="isWide"
				class="flex items-center justify-center card-label bg-white color-dark rounded-xl px-2 text-xs font-bold"
				>{{ card.type }}
			</div>
			<div class="icon-heart rounded-full cursor-pointer flex items-center justify-center"
				@click="handleFavoriteClick"
			>
				<HeartIcon :class="{ 'fill-[#FF7E56] stroke-[#FF7E56]': favoriteStore.isFavorite(card.id) }"/>
			</div>
		</div>
		<div v-if="type === 'account'" class="flex items-center justify-center px-3 py-1 bg-[#E9ECFF] text-primary rounded-xl text-xs font-bold card-status">
			<span v-if="status === 'actual'">Активен</span>
			<span v-if="status === 'history'">Завершен</span>
		</div>

		<NuxtLink v-if="isWide" to="/object" class="absolute xl:top-[25px] xl:right-[25px] top-[12px] right-[12px] custom-arrow-icon">
			<CustomCornerArrowIcon class="w-full h-full"/>
		</NuxtLink>

		<NuxtLink :to="`/objects/object?id=${card.id}`">
			<div class="flex flex-col xl:gap-3 gap-2">
				<div
					class="flex items-center flex-wrap gap-2 justify-between xl:text-xl lg:text-lg sm:text-sm text-xs"
				>
					<p class="font-semibold truncate hover:text-primary">{{ card.title }}</p>
					<p class="text-secondary font-semibold truncate">${{ card.price }}</p>
				</div>
				<div class="flex items-center">
					<LocationIcon />
					<span class="ml-1 xl:text-base text-xs truncate">{{ card.location }}</span>
				</div>
				<div class="flex xl:gap-8 lg:gap-5 gap-2">
					<div class="flex items-center gap-1">
						<SquareIcon class="w-4 lg:w-auto" />
						<span class="lg:text-base sm:text-sm text-[10px]">{{ card.area }}m²</span>
					</div>
					<div class="flex items-center gap-1">
						<BedIcon class="w-5 lg:w-auto" />
						<span class="lg:text-base sm:text-sm text-[10px]">{{ card.beds }}</span>
					</div>
					<div class="flex items-center gap-1">
						<BathIcon class="w-5 lg:w-auto" />
						<span class="lg:text-base sm:text-sm text-[10px]">{{ card.baths }}</span>
					</div>
				</div>
				<div v-if="isWide" class="flex justify-between gap-2">
					<span class="lg:text-sm text-xs truncate">{{ card.description }}</span>
				</div>
			</div>
		</NuxtLink>
	</li>
</template>

<script setup>
import { useFavoriteStore } from '@/stores/favoriteStore'
import { HeartIcon, LocationIcon, SquareIcon, BedIcon, BathIcon, CustomCornerArrowIcon } from '@/components/icons/icons.js'

const props = defineProps({
	card: {
		type: Object,
		required: true
	},
	isWide: {
		type: Boolean,
		default: false
	},
	type: {
		type: String,
		default: 'catalog'
	},
	status: {
		type: String,
		default: 'actual'
	}
})

const favoriteStore = useFavoriteStore()

const handleFavoriteClick = () => {
	favoriteStore.toggleFavorite(props.card.id)
}
</script>

<style scoped>
.shadow-card {
	box-shadow: 0px 8px 30px 0px rgba(80, 85, 136, 0.06);
}

.object-item {
	flex: 0 0 auto;
	max-width: 340px;

	@media (max-width: 1280px) {
		max-width: 280px;
	}

	@media (max-width: 1024px) {
		max-width: 250px;
	}

	@media (max-width: 640px) {
		max-width: 200px;
	}
}

.object-item-wide {
	width: 100%;
}

.object-item-wide img {
	max-height: 271px;
	object-fit: cover;
}

.object-item .card-top-info {
	top: 40px;
	right: 50px;

	@media (max-width: 1280px) {
		top: 30px;
		right: 30px;
	}
}

.object-item-wide .card-top-info {
	top: 40px;
	left: 40px;

	@media (max-width: 1280px) {
		left: 30px;
		top: 30px;
	}
}

.icon-heart {
	background: rgba(255, 255, 255, 0.9);
	transition: all 0.3s ease;
}

.object-item .icon-heart {
	width: 40px;
	height: 40px;
}

.object-item-wide .icon-heart {
	width: 24px;
	height: 24px;
}

.object-item-wide .icon-heart svg {
	height: 12px;
}

.icon-heart:hover {
	background: #3d62ff80;
}

.icon-heart:hover svg {
	stroke: white;
}

.is-favorite .icon-heart {
	background: #3D62FF;
}

.icon-heart.is-favorite svg {
	stroke: white;
}

.custom-arrow-icon {
	width: 100px;
	border-top-right-radius: 12px;
	aspect-ratio: 138/152;

	@media (max-width: 1280px) {
		width: 80px;
	}
}

.card-status {
	position: absolute;
	top: 40px;
	right: 50px;

	@media (max-width: 1280px) {
		top: 30px;
		right: 30px;
	}
}

</style>
