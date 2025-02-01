<template>
	<div class="flex flex-col items-center justify-center p-10 bg-white rounded-3xl">
		<!-- Переключатель Войти/Регистрация -->
		<div class="flex gap-2 p-1 bg-gray-100 rounded-full mb-8">
			<button
				@click="isLogin = true"
				:class="[
					'px-6 py-2 rounded-full transition-colors',
					isLogin ? 'bg-primary text-white' : 'text-dark-primary'
				]"
			>
				Войти
			</button>
			<button
				@click="isLogin = false"
				:class="[
					'px-6 py-2 rounded-full transition-colors',
					!isLogin ? 'bg-primary text-white' : 'text-dark-primary'
				]"
			>
				Регистрация
			</button>
		</div>

		<!-- Форма -->
		<form @submit.prevent="handleSubmit" class="w-full max-w-md">
			<input
				type="password"
				v-model="password"
				placeholder="Пароль"
				class="w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
			/>

			<button
				type="submit"
				class="w-full py-3 mb-4 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
			>
				Продолжить
			</button>

			<div class="text-center mb-6">
				<a href="#" class="text-dark-primary hover:underline">Забыли пароль?</a>
			</div>

			<!-- Социальные кнопки -->
			<div class="flex flex-col gap-3">
				<button class="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
					<GoogleIcon class="w-5 h-5" />
					Войти с Google
				</button>
				<button class="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
					<AppleIcon class="w-5 h-5" />
					Войти с Apple
				</button>
				<button class="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
					<FacebookIcon class="w-5 h-5" />
					Войти с Facebook
				</button>
			</div>
		</form>

		<!-- Кнопка назад -->
		<button class="absolute top-6 left-6 flex items-center gap-2 text-dark-primary hover:text-primary transition-colors">
			<ArrowPrevIcon class="w-5 h-5" />
			назад
		</button>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { GoogleLoginIcon, AppleLoginIcon, FacebookLoginIcon, ArrowPrevIcon } from '@/components/icons/icons'

const isLogin = ref(true)
const password = ref('')

const handleSubmit = () => {
	console.log('Form submitted')
}
</script>
