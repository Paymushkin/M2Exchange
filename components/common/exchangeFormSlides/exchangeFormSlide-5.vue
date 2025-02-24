<template>
	<div class="flex flex-col items-start justify-center max-w-[970px] h-full">
		<h2 class="slide-custom__title sm:mb-10 mb-6 text-left">
			<span v-if="role === 1">Дополнительная информация об объекте</span>
			<span v-if="role === 2">Что для вас важно?</span>
		</h2>

		<div class="flex flex-col gap-8 w-full">
			<div class="flex flex-col gap-4 w-full"
				:class="{
					'max-w-[480px]': role === 1,
					'max-w-[600px]': role === 2
				}"
			>
				<CounterControl
					v-model="bedrooms"
					label="Спальни"
					no-matter="Количество спален не важно"
					:min="bedroomsConfig.min"
					:max="bedroomsConfig.max"
					:role="role"
				/>

				<CounterControl
					v-model="bathrooms"
					label="Ванны"
					no-matter="Количество ванных не важно"
					:min="bathroomsConfig.min"
					:max="bathroomsConfig.max"
					:role="role"
				/>
			</div>

			<div class="flex flex-col gap-4 max-w-[650px]">
				<h3 class="text-[#202020] xl:text-xl text-base font-medium">Комфорт</h3>
				<div class="flex flex-wrap xl:gap-3 gap-2">
					<CheckboxButton
						v-for="comfort in comfortItems"
						:key="comfort.id"
						v-model="selectedComforts[comfort.id - 1]"
					>
						{{ comfort.label }}
					</CheckboxButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import CheckboxButton from '@/components/ui/CheckboxButton.vue'
import CounterControl from '@/components/ui/CounterControl.vue'

const props = defineProps({
	role: {
		type: Number,
		required: true
	}
})

const bedroomsConfig = {
	min: 0,
	max: 10
}

const bathroomsConfig = {
	min: 0,
	max: 10
}

const bedrooms = ref(1)
const bathrooms = ref(1)

// Инициализируем массив с 8 элементами false
const selectedComforts = ref(new Array(8).fill(false))

const comfortItems = [
	{ id: 1, label: 'Детская площадка' },
	{ id: 2, label: 'Бассейн' },
	{ id: 3, label: 'Зона барбекю' },
	{ id: 4, label: 'Стоянка' },
	{ id: 5, label: 'Безопасность' },
	{ id: 6, label: 'Джакузи' },
	{ id: 7, label: 'Парк' },
	{ id: 8, label: 'Умный дом' }
]
</script>
