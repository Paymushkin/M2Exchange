import { reactive, computed } from 'vue'
import { object, string } from 'yup'

export function useFormValidation(isLogin, isSecondStep) {
  const emailSchema = object({
    email: string().email('Неверный формат email').required('Email обязателен')
  })

  const loginSchema = object({
    email: string().email('Неверный формат email').required('Email обязателен'),
    password: string()
      .min(8, 'Минимум 8 символов')
      .matches(/[A-Z]/, 'Пароль должен содержать заглавные буквы')
      .matches(/[a-z]/, 'Пароль должен содержать строчные буквы')
      .matches(/[0-9]/, 'Пароль должен содержать цифры')
      .matches(/[^A-Za-z0-9]/, 'Пароль должен содержать специальные символы')
      .required('Пароль обязателен')
  })

  const registerSchema = object({
    firstName: string().required('Имя обязательно'),
    lastName: string().required('Фамилия обязательна'),
    email: string().email('Неверный формат email').required('Email обязателен'),
    password: string()
      .min(8, 'Минимум 8 символов')
      .matches(/[A-Z]/, 'Пароль должен содержать заглавные буквы')
      .matches(/[a-z]/, 'Пароль должен содержать строчные буквы')
      .matches(/[0-9]/, 'Пароль должен содержать цифры')
      .matches(/[^A-Za-z0-9]/, 'Пароль должен содержать специальные символы')
      .required('Пароль обязателен')
  })

  const currentSchema = computed(() => {
    if (!isSecondStep.value) return emailSchema
    return isLogin.value ? loginSchema : registerSchema
  })

  const state = reactive({
    email: undefined,
    password: undefined,
    firstName: undefined,
    lastName: undefined
  })

  const isFormValid = computed(() => {
    try {
      currentSchema.value.validateSync(state)
      return true
    } catch {
      return false
    }
  })

  return {
    currentSchema,
    state,
    isFormValid
  }
}
