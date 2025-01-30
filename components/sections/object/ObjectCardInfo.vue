<template>
	<div
		class="flex flex-col items-start gap-4 shrink-0 lg:p-6 p-4 lg:max-w-[505px] w-full lg:w-1/3 border border-[#D2DBF5] rounded-lg"
	>
		<!-- Кнопка обмена -->
		<RoundedStandartButton @click="modalStore.openExchangeModal">
			<span>Запросить на обмен</span>
		</RoundedStandartButton>

		<UDivider />

		<!-- Блок с информацией -->
		<div class="flex flex-col items-center gap-4 w-full">
			<div class="flex justify-between items-center gap-2 w-full">
				<h3 class="2xl:text-3xl xl:text-2xl sm:text-xl text-base font-bold">Подробности</h3>
				<TagButton>
					<span>{{ object.type }}</span>
				</TagButton>
			</div>
			<div class="flex items-center gap-2 w-full">
				<LocationIcon />
				<span
					class="text-[#545454] text-medium sm:text-base text-sm"
					v-html="object.location"
				></span>
			</div>
		</div>

		<UDivider />

		<!-- Блок с ценой -->
		<div class="flex items-center gap-2 w-full text-secondary">
			<span class="2xl:text-3xl xl:text-2xl sm:text-xl text-base font-bold">{{
				object.currency
			}}</span>
			<span class="2xl:text-3xl xl:text-2xl sm:text-xl text-base font-bold">{{
				object.price
			}}</span>
		</div>

		<UDivider />

		<!-- Список характеристик -->
		<ul class="flex flex-col items-start gap-3 w-full">
			<li
				class="flex justify-between items-center gap-2 w-full 2xl:text-xl xl:text-base text-sm 2xl:h-[45px] xl:h-[35px] h-[30px]"
			>
				<span class="text-primary">Площадь участка:</span>
				<span class="font-bold">{{ object.plotArea }} м²</span>
			</li>

			<li
				class="flex justify-between items-center gap-2 w-full 2xl:text-xl xl:text-base text-sm 2xl:h-[45px] xl:h-[35px] h-[30px]"
			>
				<span class="text-primary">Площадь участка:</span>
				<span class="font-bold">{{ object.area }} м²</span>
			</li>

			<li
				class="flex justify-between items-center gap-2 w-full 2xl:h-[45px] xl:h-[35px] text-sm h-[30px]"
			>
				<span class="text-primary 2xl:text-xl xl:text-base text-sm">Спальни:</span>
				<div
					class="flex items-center gap-2 bg-background-light rounded-lg 2xl:px-6 xl:px-4 px-3 2xl:py-2 xl:py-1.5 py-1"
				>
					<BedIcon class="2xl:w-6 xl:w-5 w-4" />
					<span class="text-[#62648B]">{{ object.bedrooms }}</span>
				</div>
			</li>

			<li
				class="flex justify-between items-center gap-2 w-full 2xl:h-[45px] xl:h-[35px] text-sm h-[30px]"
			>
				<span class="text-primary 2xl:text-xl xl:text-base text-sm">Ванны:</span>
				<div
					class="flex items-center gap-2 bg-background-light rounded-lg 2xl:px-6 xl:px-4 px-3 2xl:py-2 xl:py-1.5 py-1"
				>
					<BathIcon class="2xl:w-6 xl:w-5 w-4" />
					<span class="text-[#62648B]">{{ object.bathrooms }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'
import TagButton from '@/components/ui/TagButton.vue'
import { LocationIcon, BathIcon, BedIcon } from '@/components/icons/icons.js'
import { useModalStore } from '@/stores/modalStore'

const modalStore = useModalStore()

const props = defineProps({
	object: {
		type: Object,
		required: true
	}
})
</script>
