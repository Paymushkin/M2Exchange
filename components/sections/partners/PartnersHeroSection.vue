<template>
	<section class="flex flex-col lg:flex-row justify-center gap-6">

		<div class="flex flex-col items-start justify-center grow 2xl:max-w-[57%] lg:max-w-[50%] max-w-full bg-background-light 2xl:rounded-2xl rounded-xl 2xl:pt-[36px] pt-6 2xl:px-[54px] px-[32px] 2xl:pb-[72px] lg:pb-[48px] pb-6">
			<div class="flex items-center justify-between xl:mb-[68px] mb-5 w-full">
					<span class="text-dark-secondary 2xl:text-3xl lg:text-2xl text-sm lg:tracking-[12px] tracking-[8px] uppercase">
						exchange
					</span>
				<span class="text-[#41495E] 2xl:text-lg sm:text-base text-xs text-left 2xl:mr-10 xl:mr-5 mr-0">Новый подход<br>к работе</span>
			</div>
			<h1 class="text-dark 2xl:text-[88px] sm:text-5xl text-4xl 2xl:leading-[1.2] text-left sm:mb-[50px] mb-5">
				Unique offer<br>
				for<div class="relative text-dark-primary h1-decor"></div>agencies
			</h1>

			<p class="text-dark 2xl:text-lg text-base text-left font-light max-w-[715px] xl:mb-[85px] mb-8">
				Наш уникальный сервис предлагает агентствам недвижимости возможность расширить свои возможности и получить уникальные инструменты работы.
			</p>

			<ArrowButton to="/">
				Присоединиться
			</ArrowButton>
		</div>

		<div class="flex flex-col lg:items-center items-stretch justify-center gap-6 2xl:max-w-[40%] lg:max-w-[50%] max-w-full">

			<div class="flex flex-col grow items-start bg-background-light 2xl:rounded-2xl rounded-xl 2xl:pt-[48px] pt-[32px] 2xl:px-7 px-5 pb-4">
				<h2 class="text-[#41495E] 2xl:text-3xl sm:text-xl text-base 2xl:mb-5 mb-3">
					Недвижимоть со всего мира в одном приложение
				</h2>
				<div class="flex items-center gap-1 lg:mb-0 mb-12">
					<NuxtLink to="/">
						<AppleStoreIcon class="hover:bg-black bg-[#060565] 2xl:h-full max-h-[40px] sm:max-w-auto max-w-[120px] p-[2px] rounded-[8px] transition-colors duration-300"/>
					</NuxtLink>
					<NuxtLink to="/">
						<PlayMarketIcon class="hover:bg-black bg-[#060565] 2xl:h-full max-h-[40px] sm:max-w-auto max-w-[120px] p-[2px] rounded-[8px] transition-colors duration-300" />
					</NuxtLink>
				</div>
				<div class="relative flex items-center self-end gap-0 mt-auto animate-cards-container">
					<div class="flex items-center justify-center bg-[#6A85F7] rounded-full sm:px-[30px] px-4 2xl:h-[60px] h-[40px]">
						<span class="text-sm 2xl:text-base">
							Real estate
						</span>
					</div>
					<div class="absolute flex items-center justify-center bg-[#6A85F7] rounded-full sm:px-[30px] px-4 2xl:h-[60px] h-[40px] rotated-item animate-card">
						<span class="text-sm 2xl:text-base">
							house property
						</span>
					</div>
					<div class="flex items-center justify-center bg-[#6A85F7] rounded-full sm:px-[30px] px-4 2xl:h-[60px] h-[40px]">
						<span class="text-sm 2xl:text-base">
							Apartment
						</span>
					</div>
				</div>
			</div>

			<div class="flex flex-col items-start grow w-full bg-[#6A85F7] 2xl:rounded-2xl rounded-xl 2xl:py-10 py-8 2xl:px-8 px-6">
				<img
					src="@/assets/images/avatars-group.png"
					alt="Partners"
					loading="lazy"
					placeholder="blur"
					class="2xl:max-w-[250px] sm:max-w-[200px] max-w-[150px] object-cover 2xl:mb-[65px] sm:mb-[40px] mb-5"
				/>
				<p class="text-white 2xl:text-xl sm:text-lg text-base">
					<b>1000+</b> покупателей<br>
					ищут новое жилье прямо сейчас
				</p>
			</div>

		</div>

	</section>
</template>

<script setup>
import { Arrow45degIcon, AppleStoreIcon, PlayMarketIcon } from '@/components/icons/icons'
import ArrowButton from '@/components/ui/ArrowButton.vue'
</script>

<style scoped>
.h1-decor {
	display: inline-block;
	margin: 0 10px;
	width: 235px;
	aspect-ratio: 2.35/1;
	background: url('@/assets/images/h1-decor.png') no-repeat center center;
	background-size: contain;
	transform: translateY(25%);

	@media (max-width: 1536px) {
		width: 200px;
	}

	@media (max-width: 1440px) {
		width: 150px;
	}

	@media (max-width: 640px) {
		width: 100px;
	}
}

.rotated-item {
	transform: rotate(-18deg);
	top: -43px;
	left: calc(50% - 67px);

	@media (max-width: 1536px) {
		transform: rotate(-14deg);
	}
}

@keyframes cards-container {
	0% {
		gap: 0;
	}
	100% {
		gap: 123px;
	}
}

@keyframes cards-container2 {
	0% {
		gap: 0;
	}
	100% {
		gap: 50px;
	}
}

@keyframes card {
	0% {
		transform: translateY(-100%);
		opacity: 0;
	}
	50% {
		transform: translateY(-100%);
		opacity: 0;
	}
	100% {
		transform: translateY(0) rotate(-18deg);
		opacity: 1;
	}
}

@keyframes card2 {
	0% {
		transform: translateY(-100%);
		opacity: 0;
	}
	50% {
		transform: translateY(-100%);
		opacity: 0;
	}
	100% {
		transform: translateY(12px) rotate(-8deg);
		opacity: 1;
	}
}

.animate-cards-container {
	animation: cards-container 1.5s ease-out forwards;

	@media (max-width: 576px) {
		animation: cards-container2 1.5s ease-out forwards;
	}
}

.animate-card {
	animation: card 1.5s ease-out forwards;

	@media (max-width: 1536px) {
		animation: card2 1.5s ease-out forwards;
	}
}

</style>
