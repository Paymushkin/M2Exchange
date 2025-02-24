<template>
	<div class="flex flex-col justify-center max-w-[600px] h-full">
		<template v-if="role === 1">
			<h2 class="slide-custom__title xl:mb-6 mb-3 text-left">Вы хотите обменять свое жилье?</h2>
			<p class="slide-custom__description xl:text-base text-sm mb-[90px]">
				На нашей платформе вы можете разместить свое объявление и ответить на несколько вопросов об
				интересующем вас варианте обмена, после чего сервис сам предложит вам варианты обмена!
			</p>
			<div class="flex gap-4 justify-center">
				<label class="flex items-center">
					<input
						type="radio"
						value="yes"
						:checked="selectedOption === 'yes'"
						@change="updateSelection('yes')"
						class="hidden"
					/>
					<span
						:class="{
							'bg-primary text-white': selectedOption === 'yes',
							'text-blue-600': selectedOption !== 'yes'
						}"
						class="flex items-center justify-center xl:w-[250px] xl:h-[92px] w-[100px] h-[100px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition border-[1px] border-primary xl:text-lg text-sm"
					>
						Да
					</span>
				</label>
				<label class="flex items-center">
					<input
						type="radio"
						value="no"
						:checked="selectedOption === 'no'"
						@change="updateSelection('no')"
						class="hidden"
					/>
					<span
						:class="{
							'bg-primary text-white': selectedOption === 'no',
							'text-blue-600': selectedOption !== 'no'
						}"
						class="flex items-center justify-center xl:w-[250px] xl:h-[92px] w-[100px] h-[100px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition border-[1px] border-primary xl:text-lg text-sm"
					>
						Нет
					</span>
				</label>
			</div>
		</template>
		<template v-if="role === 2">
			<div class="flex flex-col items-center max-w-[350px]">
				<div class="bg-background-light rounded-full p-5 min-h-20 min-w-20 xl:mb-10 mb-5">
					<CheckIcon class="w-10 h-10"/>
				</div>
				<h2 class="slide-custom__title xl:mb-10 mb-5 text-center">Почти все готово, теперь расскажите про ваше жилье мечты</h2>
				<RoundedStandartButton>
					<span class="md:text-base text-sm">Подобрать варианты обмена</span>
				</RoundedStandartButton>
			</div>
		</template>
		<template v-if="role === 3">
			<div class="flex items-center justify-start gap-3">
				<h2 class="slide-custom__title xl:mb-6 mb-3 text-left">Вы хотите стать частью</h2>
				<LogoIcon class="w-[100px] h-[100px]"/>
			</div>
			<p class="slide-custom__description xl:text-base text-sm mb-5">
				На нашей платформе вы можете разместить свои объекты вручную или связать свою базу с нашей через API или файлом XML, а также получить доступ к огромной клиентской базе, наши пользователи люди которые уже готовы обменять свое жилье!Ответьте на несколько вопросов, после чего сервис направим вам ссылку для регистрации.
			</p>
			<RoundedStandartButton class="self-start">
				Продолжить
			</RoundedStandartButton>
		</template>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import { LogoIcon, CheckIcon } from '@/components/icons/icons'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'
const selectedOption = ref('yes')

const updateSelection = (value) => {
	selectedOption.value = value
}

const props = defineProps({
	role: {
		type: Number,
		required: true
	}
})
</script>
