<template>
	<section>
		<div class="container">
			<div class="flex flex-col sm:flex-row items-center sm:items-start xl:gap-[90px] gap-10 sm:py-10 py-5">
				<EmptyListIcon class="sm:w-32 sm:h-32 w-20 h-20" />

				<div class="flex flex-col items-start xl:max-w-[600px] sm:max-w-[500px] max-w-auto text-left">

					<h2 class="text-dark lg:text-4xl sm:text-2xl text-xl font-bold text-left mb-5">
						На данный момент нет желаемого типа жилья
					</h2>

					<p class="text-[#171652] text-base lg:text-lg mb-8">
						Поиск и подбор предложения может занять некоторое время, как только появятся варианты, вы получите уведомление. Спасибо за ваше терпение!
					</p>

					<RoundedStandartButton>
						<span class="text-sm font-semibold">Изменить настройки подбора</span>
					</RoundedStandartButton>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { EmptyListIcon } from '@/components/icons/icons'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'
</script>
