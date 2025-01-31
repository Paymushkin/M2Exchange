<template>
		<section class="flex flex-col items-start">
			<div class="text-dark xl:text-2xl lg:text-xl text-base xl:px-8 lg:px-6 px-4 py-2 border border[#D2DBF5] rounded-full xl:mb-[70px] lg:mb-[50px] mb-8">
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
						<div class="flex flex-col xl:gap-8 lg:gap-4 gap-2">
							<QuoteIcon class="xl:max-h-auto lg:max-h-15 max-w-10" />
							<p class="text-dark xl:text-[55px] lg:text-4xl text-xl xl:leading-[1.2] mb-2">
								{{ item.review }}
							</p>
							<div class="flex items-center gap-2">
								<div class="flex flex-col gap-2">
									<span class="text-[#C2C5CD] xl:text-2xl lg:text-xl text-base font-[Aclonica]">
										{{ item.company }}
									</span>
									<div class="flex items-center lg:gap-4 gap-2 lg:mb-4 mb-2">
										<img
											:src="item.avatar"
											alt="Аватар"
											loading="lazy"
											placeholder="blur"
											class="lg:w-16 lg:h-16 w-10 h-10 rounded-full" />
										<div class="flex flex-col lg:gap-2 gap-0">
											<span class="lg:text-2xl text-base">
												{{ item.author }}
											</span>
											<span class="text-[#41495D] lg:text-lg text-xs">
												{{ item.position }}
											</span>
										</div>
									</div>
									<div class="flex items-center gap-2">
										<StarRaitingIcon
											v-for="star in item.rating"
											:key="star"
										/>
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
							class="absolute xl:right-[244px] lg:right-[182px] sm:right-[150px] right-unset sm:left-[unset] left-0 lg:bottom-20 sm:bottom-0 bottom-[-80px]"
						>
							<ArrowPrevIcon class="xl:max-w-[131px] lg:max-w-[100px] max-w-[80px] cursor-pointer" />
						</button>
					</template>

					<template #indicator>
						<div class="absolute xl:right-[160px] lg:right-[115px] sm:right-[92px] right-[unset] sm:left-unset left-50% lg:bottom-[75px] sm:bottom-0 bottom-[-80px]">
							<span class="text-[#41495E] lg:text-lg text-base lg:leading-[79px] leading-[47px] slider-counter">
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
							class="absolute right-0 lg:bottom-20 sm:bottom-0 bottom-[-80px]"
						>
							<ArrowNextIcon class="xl:max-w-[131px] lg:max-w-[100px] max-w-[80px] cursor-pointer"/>
						</button>
					</template>

				</UCarousel>
		</section>
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
