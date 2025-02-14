<template>
	<section class="xl:mb-20 mb-5 bg-background-blue lg:bg-transparent">
		<div class="container p-0 mx-auto">
			<div
				class="flex flex-col lg:flex-row justify-between xl:gap-8 gap-5 lg:bg-background-blue 2xl:rounded-[85px] rounded-xl xl:py-16 py-8 xl:px-[70px] lg:px-8 px-0"
			>
				<div class="flex flex-col items-start xl:gap-6 gap-4 xl:w-[570px] min-w-[35%]">
					<h2 class="2xl:text-[42px] lg:4xl text-2xl leading-[1.2] font-bold text-dark">
						Поможем найти лучший вариант
					</h2>

					<h3 class="xl:text-3xl text-lg text-dark mb-70">
						Обмена квартиры или дома в любой точке мира на Испанию
					</h3>

					<ExchangeButton @click="modalStore.openExchangeFormSliderModal" />
				</div>

				<div class="flex flex-col items-start xl:gap-12 lg:gap-6 gap-2 grow">
					<div
						class="lg:border border-primary rounded-[40px] xl:py-3 lg:py-2 xl:px-5 lg:px-3 font-medium text-dark-deeper text-xl"
					>
						Обмен недвижимостью
					</div>

					<div class="flex flex-col gap-4 xl:text-lg text-sm text-dark-deeper">
						<p>
							это форма сделки, при которой вы не платите за дом, а вместо этого совершаете прямой
							обмен вашей собственности на другую. Подобная сделка заключается в подписании
							контракта, который обязывает каждую сторону передать свою недвижимость другой без
							денежного обмена. Возможен обмен вилл, квартир, или любого другого типа жилья. Если вы
							хотите поменять свою недвижимость, но без необходимости платить за новый дом, более
							удобной альтернативой для вас может стать обмен недвижимости.
						</p>
						<p>
							Если вы хотите поменять свою недвижимость, но без необходимости платить за новый дом,
							более удобной альтернативой для вас может стать обмен недвижимости.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import ExchangeButton from '@/components/ui/ExchangeButton.vue'

import { useModalStore } from '@/stores/modalStore'

const modalStore = useModalStore()
</script>

<style scoped></style>
