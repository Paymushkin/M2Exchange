<template>
	<div id="security" class="flex flex-col items-start gap-5">
		<!-- Показываем только блок успеха, если сброс выполнен -->
		<div v-if="isResetSuccess" class="flex items-center gap-8 max-w-[400px] w-full">
			<div class="min-w-[100px] min-h-[100px] rounded-full bg-background-light flex items-center justify-center">
				<CheckIcon class="w-10 h-10 text-primary" />
			</div>
			<h2 class="text-dark text-lg font-semibold">Мы отправили ссылку для сброса пароля на вашу электронную почту</h2>
		</div>

		<!-- Показываем остальные блоки только если нет успеха -->
		<template v-else>
			<!-- Блок изменения пароля -->
			<form v-if="!isResetMode" class="flex flex-col sm:gap-4 gap-3 max-w-[345px] w-full">
				<h2 class="text-dark font-semibold">Изменение пароля</h2>

				<div class="flex flex-col sm:gap-4 gap-2">
					<input
						type="password"
						v-model="passwords.current"
						autocomplete="off"
						placeholder="Текущий пароль"
						class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 sm:text-sm text-xs"
					/>
					<input
						type="password"
						v-model="passwords.new"
						autocomplete="off"
						placeholder="Введите новый пароль"
						class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 sm:text-sm text-xs"
					/>
					<input
						type="password"
						v-model="passwords.confirm"
						autocomplete="off"
						placeholder="Введите новый пароль еще раз"
						class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 sm:text-sm text-xs"
					/>
				</div>

				<RoundedStandartButton type="submit" @click.prevent="saveNewPassword" class="mt-2">
					<span class="sm:text-sm text-xs font-medium">Сохранить новый пароль</span>
				</RoundedStandartButton>
			</form>

			<!-- Блок сброса пароля -->
			<form v-if="isResetMode" class="flex flex-col gap-4 max-w-[345px] w-full" @submit.prevent="resetPassword">
				<div class="flex flex-col gap-4">
					<h2 class="text-dark font-semibold">Забыли пароль</h2>
					<input
						id="email"
						v-model="email"
						type="email"
						placeholder="Введите email"
						class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 sm:text-sm text-xs"
						:class="{ 'border-red-500': !isEmailValid && email }"
					/>
					<span v-if="!isEmailValid && email" class="text-sm text-red-500">
						Введите корректный email адрес
					</span>
				</div>
				<RoundedStandartButton
					type="submit"
					:disabled="!isEmailValid || !email"
				>
					<span class="sm:text-sm text-xs font-medium">Сбросить пароль</span>
				</RoundedStandartButton>
			</form>

			<!-- Переключатель режимов -->
			<a
				href="#"
				class="text-primary sm:text-sm text-xs cursor-pointer"
				@click.prevent="toggleMode"
			>
				{{ isResetMode ? 'Вернуться к изменению пароля' : 'Забыли пароль?' }}
			</a>
		</template>
	</div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'
import CheckIcon from '@/components/icons/CheckIcon.vue'

const isResetMode = ref(false)
const isResetSuccess = ref(false)
const email = ref('')
const passwords = reactive({
	current: '',
	new: '',
	confirm: ''
})

// Валидация email с помощью регулярного выражения
const isEmailValid = computed(() => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email.value)
})

const toggleMode = () => {
	isResetMode.value = !isResetMode.value
}

const resetPassword = () => {
	if (isEmailValid.value) {
		// Логика сброса пароля
		isResetSuccess.value = true
	}
}

const saveNewPassword = () => {
	// Логика сохранения нового пароля
}
</script>

