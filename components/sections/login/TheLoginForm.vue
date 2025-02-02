<template>
	<div class="flex justify-center">
		<div class="flex flex-col-reverse sm:flex-row sm:items-end gap-6 px-4 lg:py-10 py-4 bg-background-light xl:rounded-2xl rounded-lg grow">
			<div id="back" class="w-[100px]">
				<button
					v-if="showBackButton && !isPasswordSent"
					@click="handleBackClick"
					class="flex items-center gap-2 border border-[#E9E8E8] rounded-full px-4 py-2 text-sm text-[#41495E] hover:text-[#4460F6] transition-colors"
				>
					<ArrowIcon class="w-5 h-5" />
					<span>назад</span>
				</button>
			</div>

			<div class="flex flex-col justify-center max-w-full w-[340px] grow self-start">
				<!-- Блок успеха -->
				<div v-if="isPasswordSent" class="flex flex-col items-center justify-center gap-6">
					<div class="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[#E9ECFF] p-5">
						<CheckIcon class="text-[#4460F6]" />
					</div>
					<p class="text-dark font-medium text-lg text-center">
						{{ isPasswordRecovery ? 'Новый пароль отправлен на вашу почту' : 'Вы успешно зарегистрированы' }}
					</p>
				</div>

				<!-- Основной контент -->
				<div v-else>
					<!-- Переключатель Войти/Регистрация -->
					<div v-if="!isPasswordRecovery" class="flex items-center gap-4 mb-4">
						<button
							@click="isLogin = true"
							:class="[
								'h-[50px] border border-[#E1E1E1] grow px-6 py-2 rounded-full transition-colors text-sm w-1/2',
								isLogin ? 'bg-[#4460F6] text-white' : 'bg-white text-dark-primary'
							]"
						>
							Войти
						</button>
						<button
							@click="isLogin = false"
							:class="[
								'h-[50px] border border-[#E1E1E1] grow px-6 py-2 rounded-full transition-colors text-sm w-1/2',
								!isLogin ? 'bg-[#4460F6] text-white' : 'bg-white text-dark-primary'
							]"
						>
							Регистрация
						</button>
					</div>

					<!-- Шаг 1 и 2: Основная форма -->
					<div v-if="!isPasswordRecovery">
						<!-- Форма -->
						<UForm :schema="currentSchema" :state="state" class="space-y-2 w-full" @submit="onSubmit">
							<!-- Шаг 1: Email -->
							<template v-if="!isSecondStep">
								<UFormGroup name="email">
									<UInput
										v-model="state.email"
										placeholder="Email Address"
										input-class="rounded-sm bg-white h-[56px] border-[#E9E8E8]"
									/>
								</UFormGroup>
							</template>

							<!-- Шаг 2: Остальные поля -->
							<template v-else>
								<!-- Поля для регистрации -->
								<template v-if="!isLogin">
									<UFormGroup name="firstName">
										<UInput
											v-model="state.firstName"
											placeholder="Имя"
											input-class="rounded-sm bg-white h-[56px] border-[#E9E8E8]"
										/>
									</UFormGroup>
									<UFormGroup name="lastName">
										<UInput
											v-model="state.lastName"
											placeholder="Фамилия"
											input-class="rounded-sm bg-white h-[56px] border-[#E9E8E8]"
										/>
									</UFormGroup>
									<UFormGroup name="email">
										<UInput
											v-model="state.email"
											placeholder="Email Address"
											input-class="rounded-sm bg-white h-[56px] border-[#E9E8E8]"
											disabled
										/>
									</UFormGroup>
								</template>

								<!-- Поле пароля (для обоих режимов) -->
								<UFormGroup name="password">
									<UInput
										v-model="state.password"
										type="password"
										placeholder="Пароль"
										input-class="rounded-sm bg-white h-[56px] border-[#E9E8E8]"
									/>
								</UFormGroup>
							</template>

							<UButton
								type="submit"
								:disabled="!isFormValid"
								:class="[
									'flex items-center justify-center w-full py-3 rounded-full transition-colors h-[56px]',
									isFormValid
										? 'bg-[#4460F6] text-white hover:bg-primary-dark'
										: 'bg-gray-100 text-gray-400 cursor-not-allowed'
								]"
							>
								Продолжить
							</UButton>
							<NuxtLink
								v-if="isLogin && isSecondStep"
								@click.prevent="isPasswordRecovery = true"
								class="flex mt-2 text-sm text-black font-medium cursor-pointer hover:underline"
							>
								Забыли пароль?
							</NuxtLink>
						</UForm>

						<!-- Социальные сети -->
						<SocialAuthButtons v-if="isLogin || !isSecondStep" />

						<!-- Текст о согласии -->
						<div v-if="!isLogin && isSecondStep" class="mt-4 text-xs text-[#41495E] leading-[1.6]">
							<p>
								Нажимая кнопку, Вы даете согласие на обработку персональных данных.
							</p>
							<NuxtLink to="/privacy" class="text-[#4460F6] hover:underline">
								Политика конфиденциальности
							</NuxtLink>.
						</div>
					</div>

					<!-- Шаг 3: Восстановление пароля -->
					<div v-else class="flex flex-col max-w-full">
						<template v-if="!isPasswordSent">
							<h2 class="text-xl font-medium mb-6">Забыли пароль?</h2>

							<UForm :schema="recoverySchema" :state="recoveryState" class="space-y-4 w-full" @submit="onRecoverySubmit">
								<UFormGroup name="email">
									<UInput
										v-model="recoveryState.email"
										placeholder="Email Address"
										input-class="rounded-sm bg-white h-[56px] border-[#E9E8E8]"
									/>
								</UFormGroup>

								<UButton
									type="submit"
									:disabled="!isRecoveryFormValid"
									:class="[
										'flex items-center justify-center w-full py-3 rounded-full transition-colors h-[56px]',
										isRecoveryFormValid
											? 'bg-[#4460F6] text-white hover:bg-primary-dark'
											: 'bg-gray-100 text-gray-400 cursor-not-allowed'
									]"
								>
									Продолжить
								</UButton>
							</UForm>
						</template>
					</div>
				</div>
			</div>

			<div class="hidden sm:block w-[100px]">
			</div>
		</div>

		<div class="hidden xl:block max-h-[561px] aspect-[538/516] rounded-2xl overflow-hidden">
				<img
					src="@/assets/images/login-image.png"
					alt="Login-imagee"
					loading="lazy"
					placeholder="blur"
					class="h-full object-cover">
		</div>

	</div>
</template>


<script setup>
import { ArrowIcon, CheckIcon } from '@/components/icons/icons'
import SocialAuthButtons from '@/components/sections/login/SocialAuthButtons.vue'
import { useLoginForm } from '@/composables/useLoginForm'
import { useFormValidation } from '@/composables/useFormValidation'
import { useRecoveryForm } from '@/composables/useRecoveryForm'

const {
	isLogin,
	isSecondStep,
	isPasswordRecovery,
	isPasswordSent,
	showBackButton,
	handleBackClick
} = useLoginForm()
const { currentSchema, state, isFormValid } = useFormValidation(isLogin, isSecondStep)
const { recoverySchema, recoveryState, isRecoveryFormValid } = useRecoveryForm()

const onSubmit = async (event) => {
	if (!isSecondStep.value) {
		isSecondStep.value = true
	} else {
		console.log('Form submitted:', event.data)
		if (!isLogin.value) {
			isPasswordSent.value = true
		}
	}
}

const onRecoverySubmit = async (event) => {
	console.log('Recovery form submitted:', event.data)
	isPasswordSent.value = true
}
</script>
