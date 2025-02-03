<template>
	<div class="flex flex-col grow gap-5 xl:min-w-[467px] w-full">
		<!-- Кнопка обмена -->
		<RoundedStandartButton v-if="!isMyObject" @click="modalStore.openExchangeModal">
			<span>Запросить на обмен</span>
		</RoundedStandartButton>

		<div class="flex flex-col items-start gap-4 grow shrink-0 lg:p-4 lg:pl-6 p-3 border border-[#D2DBF5] rounded-lg">
			<!-- Блок с информацией -->
			<div class="flex flex-col items-center gap-4 w-full">
				<div class="flex justify-between items-center gap-2 w-full">
					<h3 class="2xl:text-3xl xl:text-2xl sm:text-xl text-base font-bold">
						Подробности
					</h3>
					<TagButton>
						<span>{{ object.type }}</span>
					</TagButton>
				</div>
				<div class="flex items-center gap-2 w-full">
					<LocationIcon />
					<span
						class="text-[#545454] text-medium sm:text-base text-sm"
						v-html="object.location"
					/>
				</div>

			</div>

			<UDivider />

			<!-- Блок с ценой -->
			<div class="flex items-center gap-2 w-full text-secondary">
				<span class="2xl:text-3xl xl:text-2xl sm:text-xl text-base font-bold">
					{{ object.currency }}
				</span>
				<span class="2xl:text-3xl xl:text-2xl sm:text-xl text-base font-bold">
					{{ object.price }}
				</span>
			</div>

			<UDivider />

			<!-- Список характеристик -->
			<ul class="flex flex-col items-start gap-3 w-full">
				<li class="flex justify-between items-center gap-2 w-full 2xl:text-xl xl:text-base text-sm 2xl:h-[45px] xl:h-[35px] h-[30px]">
					<span class="text-primary">Площадь участка:</span>
					<span class="font-bold">{{ object.plotArea }} м²</span>
				</li>

				<li class="flex justify-between items-center gap-2 w-full 2xl:text-xl xl:text-base text-sm 2xl:h-[45px] xl:h-[35px] h-[30px]">
					<span class="text-primary">Площадь участка:</span>
					<span class="font-bold">{{ object.area }} м²</span>
				</li>

				<li class="flex justify-between items-center gap-2 w-full 2xl:h-[45px] xl:h-[35px] text-sm h-[30px]">
					<span class="text-primary 2xl:text-xl xl:text-base text-sm">
						Спальни:
					</span>
					<div class="flex items-center gap-2 bg-background-light rounded-lg 2xl:px-6 xl:px-4 px-3 2xl:py-2 xl:py-1.5 py-1">
						<BedIcon class="2xl:w-6 xl:w-5 w-4" />
						<span class="text-[#62648B]">{{ object.bedrooms }}</span>
					</div>
				</li>

				<li class="flex justify-between items-center gap-2 w-full 2xl:h-[45px] xl:h-[35px] text-sm h-[30px]">
					<span class="text-primary 2xl:text-xl xl:text-base text-sm">
						Ванны:
					</span>
					<div class="flex items-center gap-2 bg-background-light rounded-lg 2xl:px-6 xl:px-4 px-3 2xl:py-2 xl:py-1.5 py-1">
						<BathIcon class="2xl:w-6 xl:w-5 w-4" />
						<span class="text-[#62648B]">{{ object.bathrooms }}</span>
					</div>
				</li>
			</ul>

			<UDivider v-if="!isMyObject" />

			<div
				v-if="!isMyObject"
				class="flex justify-between items-center flex-wrap sm:gap2 gap-4 w-full"
			>
				<div class="flex items-center gap-2">
					<div
						class="flex items-center gap-2 w-[65px] h-[65px] bg-background-light rounded-full bg-cover bg-center"
						:style="{ backgroundImage: `url(${object.owner.avatar})` }"
					>
					</div>
					<span class="text-primary text-base font-bold">{{ object.owner.name }}</span>
				</div>
				<AccentButton
					v-if="modalStore"
					@click="modalStore.openContactsModal"
				>
					Показать контакты
				</AccentButton>
			</div>

		</div>


	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'
import TagButton from '@/components/ui/TagButton.vue'
import { LocationIcon, BathIcon, BedIcon } from '@/components/icons/icons'
import { useModalStore } from '@/stores/modalStore'
import AccentButton from '@/components/ui/AccentButton.vue'

const props = defineProps({
	object: {
		type: Object,
		required: true
	}
})

const myId = '12345678901'

const modalStore = useModalStore()

const isMyObject = computed(() => {
	return myId === props.object.owner.id
})
</script>
