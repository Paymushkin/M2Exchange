<template>
	<div class="flex flex-col items-center justify-center max-w-[970px] h-full">
		<h2 class="slide-custom__title mb-6 text-center">
			<span v-if="role === 1">Тип объекта</span>
			<span v-if="role === 2">Тип объекта</span>
			<span v-if="role === 3">На какой недвижимости вы специализируете?</span>
		</h2>
		<p class="slide-custom__description xl:text-base text-sm mb-[40px] text-center">
			<span v-if="role === 1">Выберите одну или несколько категорий интересующей вас недвижимости</span>
			<span v-if="role === 2">Выберите одну или несколько категорий интересующей вас недвижимости</span>
			<span v-if="role === 3">Выберите одну или несколько категорий</span>
		</p>

		<div class="flex flex-wrap justify-center xl:gap-4 gap-2">
			<RadioButton
				v-for="button in buttons"
				:key="button.value"
				v-model="selectedType"
				:value="button.value"
			>
				{{ button.label }}
			</RadioButton>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import RadioButton from '@/components/ui/RadioButton.vue'

const props = defineProps({
	role: {
		type: Number,
		required: true
	}
})

const selectedType = ref('all')

const buttons = [
	{ value: 'all', label: 'Все' },
	{ value: 'apartments', label: 'Апартаменты' },
	{ value: 'houses', label: 'Дома' },
	{ value: 'villas', label: 'Виллы' },
	{ value: 'bungalows', label: 'Бунгало' },
	{ value: 'townhouses', label: 'Таунхаус' },
	{ value: 'country-house', label: 'Деревенский дом' },
	{ value: 'mansion', label: 'Особняк' },
	{ value: 'farm', label: 'Ферма' },
	{ value: 'apartment', label: 'Квартира' },
	{ value: 'duplex', label: 'Двухквартирный дом' },
	{ value: 'land-plot', label: 'Земельный участок' },
	{ value: 'hotels', label: 'Гостиницы и отели' },
	{ value: 'commercial', label: 'Коммерческая недвижимость' },
	{ value: 'industrial', label: 'Промышленная недвижимость' }
]
</script>
