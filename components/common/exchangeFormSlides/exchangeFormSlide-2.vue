<template>
	<div class="flex flex-col justify-center h-full max-w-[500px]">
		<h2 class="slide-custom__title xl:mb-6 mb-3">
			<span v-if="role === 1">Где находится объект?</span>
			<span v-if="role === 2">Где бы вы хотели жить?</span>
			<span v-if="role === 3">В какой стране и городе вы работаете с недвижимостью?</span>
		</h2>
		<p class="slide-custom__description xl:text-base text-sm xl:mb-[40px] mb-5">
			<span v-if="role === 1">Введите адрес или выберите зону на карте</span>
			<span v-if="role === 2">Введите страну, город или выберите зону на карте для подбора вариантов обмена</span>
			<span v-if="role === 3">Введите страну, город или выберите зону на карте</span>
		</p>

		<div id="location-input"
			class="flex items-center xl:w-[480px] w-full border border-[#ECEDF3] rounded-[40px] xl:py-4 py-2 xl:px-5 px-2"
		>
			<LocationIcon class="mr-2" />
			<select class="mr-2 xl:text-base text-sm cursor-pointer">
				<option value="location1">Italy, Sardinia</option>
				<option value="location2">Spain, Barcelona</option>
				<option value="location3">France, Paris</option>
			</select>
			<button
				class="flex items-center ml-auto bg-dark text-white text-[12px] xl:px-5 px-3 xl:py-3 py-2 rounded-full hover:bg-blue-700 transition"
			>
				<MapIcon class="mr-2" />
				Карта
			</button>
		</div>

		<div v-if="role === 2" class="flex flex-col gap-3 mt-4 xl:w-[480px] w-full">
			<div class="flex flex-col gap-3">
				<label
					v-for="location in locations"
					:key="location"
					class="flex items-center gap-2 cursor-pointer"
				>
					<div class="custom-radio">
						<input
							type="radio"
							v-model="selectedLocation"
							:value="location"
							name="location"
							class="hidden"
						>
						<div class="radio-circle"></div>
					</div>
					<RoundedStandartButton>{{ location }}</RoundedStandartButton>
				</label>
			</div>

			<button
				@click="addLocation"
				class="flex items-center gap-3 text-dark xl:text-base text-sm hover:text-blue-700 transition"
			>
				<div class="w-10 h-10 rounded-full bg-[#F5F7FF] flex items-center justify-center">
					<PlusIcon class="w-5 h-5" />
				</div>
				Добавить еще одну локацию
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { LocationIcon, MapIcon, PlusIcon } from '@/components/icons/icons.js'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

const props = defineProps({
	role: {
		type: Number,
		required: true
	}
})

const selectedLocation = ref('Italy, Sardinia')
const locations = ref(['Italy, Sardinia', 'Spain, Barcelona', 'France, Paris'])

const addLocation = () => {
	// Здесь будет логика добавления новой локации
	locations.value.push('New Location')
}
</script>

<style scoped>
.custom-radio {
	width: 44px;
	height: 44px;
	background-color: #E9ECFF;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}

.radio-circle {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: transparent;
	transition: all 0.3s ease;
}

input[type="radio"]:checked + .radio-circle {
	background-color: #3D62FF;
}
</style>
