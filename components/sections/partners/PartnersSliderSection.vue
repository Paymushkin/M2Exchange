<template>
		<div class="flex flex-col items-start">
			<div class="text-dark text-2xl px-8 py-2 border border[#D2DBF5] rounded-full mb-[70px]">
				<span>О нас говорят</span>
			</div>
			<UCarousel
					:items="slides"
					arrows
					indicators
					:ui="{
						item: 'w-full'
					}"
				>

					<template #default="{ item }">
						<div class="flex flex-col gap-8">
							<QuoteIcon />
							<p class="text-dark text-[55px] leading-[1.2]">
								{{ item.review }}
							</p>
							<div class="flex items-center gap-2">
								<div class="flex flex-col gap-2">
									<span class="text-[#C2C5CD] text-2xl font-[Aclonica]">
										{{ item.company }}
									</span>
									<div class="flex items-center gap-4 mb-4">
										<img :src="item.avatar" alt="Аватар" class="w-16 h-16 rounded-full" />
										<div class="flex flex-col gap-2">
											<span class="text-2xl">
												{{ item.author }}
											</span>
											<span class="text-[#41495D]">
												{{ item.position }}
											</span>
										</div>
									</div>
									<div class="flex items-center gap-2">
										<template v-for="star in item.rating" :key="star">
											<StarRaitingIcon />
										</template>
									</div>
								</div>
							</div>
						</div>
					</template>

					<template #prev="{ onClick, disabled }">
						<button
							:disabled="disabled"
							@click="() => {
								onClick();
								prevSlide();
							}"
							class="absolute right-[244px] bottom-20"
						>
							<ArrowPrevIcon class="cursor-pointer" />
						</button>
					</template>

					<template #indicator>
						<div class="absolute right-[162px] bottom-[75px]">
							<span class="text-[#41495E] text-lg leading-[79px] slider-counter">
								<b>{{ formatSlideNumber(currentSlideIndex + 1) }}</b>/{{ formatSlideNumber(slides.length) }}
							</span>
						</div>
					</template>

					<template #next="{ onClick, disabled }">
						<button
							:disabled="disabled"
							@click="() => {
								onClick();
								nextSlide();
							}"
							class="absolute right-0 bottom-20"
						>
							<ArrowNextIcon class="cursor-pointer"/>
						</button>
					</template>

				</UCarousel>
		</div>
</template>

<script setup>
import { ref } from 'vue'
import { QuoteIcon, StarRaitingIcon, ArrowPrevIcon, ArrowNextIcon } from '@/components/icons/icons'
import avatarImage from '@/assets/images/partners/avatar.png'

const currentSlideIndex = ref(0)
const slides = ref([
	{
		avatar: avatarImage,
		author: 'Александр Волшков',
		company: 'RealDubai Group',
		position: 'Основатель RealDubai Group',
		rating: 5,
		review: 'Мы получили огромную клиентскую базу за один день, это просто невероятно, M2 это действительно уникальный продукт.'
	},
	{
		avatar: avatarImage,
		author: 'Анна Петрова',
		company: 'ООО "Ромашка"',
		position: 'Генеральный директор',
		rating: 4,
		review: 'Роскошная вилла в Испании с бассейном'
	}
])

const formatSlideNumber = (num) => {
	return String(num).padStart(2, '0')
}

const prevSlide = () => {
	if (currentSlideIndex.value > 0) {
		currentSlideIndex.value--
	}
}

const nextSlide = () => {
	if (currentSlideIndex.value < slides.value.length - 1) {
		currentSlideIndex.value++
	}
}
</script>

<style>
.slider-counter:not(:last-child) {
  display: none;
}
</style>
