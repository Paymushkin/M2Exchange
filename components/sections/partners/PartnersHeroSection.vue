<template>
	<div class="flex justify-center p-10 gap-6">

		<div class="flex flex-col items-start justify-center grow max-w-[57%] bg-background-light rounded-2xl pt-[36px] px-[54px] pb-[72px]">
			<div class="flex items-center justify-between mb-[68px] w-full">
					<span class="text-dark-secondary lg:text-3xl tracking-[12px] uppercase">
						exchange
					</span>
				<span class="text-[#41495E] text-lg text-left mr-10">Новый подход<br>к работе</span>
			</div>
			<h1 class="text-dark text-[88px] leading-[115px] text-left mb-[50px]">
				Unique offer<br>
				for<div class="relative text-dark-primary h1-decor"></div>agencies
			</h1>

			<p class="text-dark text-lg text-left font-light max-w-[715px] mb-[85px]">
				Наш уникальный сервис предлагает агентствам недвижимости возможность расширить свои возможности и получить уникальные инструменты работы.
			</p>

			<ArrowButton to="/">
				Присоединиться
			</ArrowButton>
		</div>

		<div class="flex flex-col items-center justify-center gap-6 max-w-[40%]">

			<div class="flex flex-col grow bg-background-light rounded-2xl pt-[48px] px-7 pb-4">
				<h2 class="text-[#41495E] text-3xl mb-5">
					Недвижимоть со всего мира в одном приложение
				</h2>
				<div class="flex items-center gap-1">
					<NuxtLink to="/">
						<AppleStoreIcon class="hover:bg-black bg-[#060565] rounded-[8px] transition-colors duration-300"/>
					</NuxtLink>
					<NuxtLink to="/">
						<PlayMarketIcon class="hover:bg-black bg-[#060565] rounded-[8px] transition-colors duration-300" />
					</NuxtLink>
				</div>
				<div class="relative flex items-center justify-center gap-[123px] mt-auto animate-cards-container">
					<div id="real-estate-1" class="flex items-center justify-center bg-[#6A85F7] rounded-full px-[30px] h-[60px]">
						<span class="text-lg">
							Real estate
						</span>
					</div>
					<div id="real-estate-2" class="absolute flex items-center justify-center bg-[#6A85F7] rounded-full px-[30px] h-[60px] rotated-item animate-card">
						<span class="text-lg">
							house property
						</span>
					</div>
					<div id="real-estate-3" class="flex items-center justify-center bg-[#6A85F7] rounded-full px-[30px] h-[60px]">
						<span class="text-lg">
							Apartment
						</span>
					</div>
				</div>
			</div>

			<div class="flex flex-col items-start grow w-full bg-[#6A85F7] rounded-2xl py-10 px-8">
				<img src="@/assets/images/avatars-group.png" alt="Partners" class="max-w-[250px] object-cover mb-[65px]">
				<p class="text-white text-xl">
					<b>1000+</b> покупателей<br>
					ищут новое жилье прямо сейчас
				</p>
			</div>

		</div>
	</div>
</template>

<script setup>
import { Arrow45degIcon, AppleStoreIcon, PlayMarketIcon } from '@/components/icons/icons'
import ArrowButton from '@/components/ui/ArrowButton.vue'
</script>

<style scoped>
.h1-decor {
	display: inline-block;
	width: 215px;
	height: 100px;
	background: url('@/assets/images/h1-decor.png') no-repeat center center;
	background-size: contain;
	transform: scale(1.2) translateY(20px);
}

.rotated-item {
	transform: rotate(-18deg);
	top: -43px;
	left: calc(50% - 67px);
}

@keyframes cards-container {
	0% {
		gap: 0;
	}
	100% {
		gap: 123px;
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

.animate-cards-container {
	animation: cards-container 1.5s ease-out forwards;
}

.animate-card {
	animation: card 1.5s ease-out forwards;
}

</style>
