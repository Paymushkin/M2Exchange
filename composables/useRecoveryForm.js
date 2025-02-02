import { reactive, computed } from 'vue'
import { object, string } from 'yup'

export function useRecoveryForm() {
  const recoverySchema = object({
    email: string().email('Неверный формат email').required('Email обязателен')
  })

  const recoveryState = reactive({
    email: undefined
  })

  const isRecoveryFormValid = computed(() => {
    try {
      recoverySchema.validateSync(recoveryState)
      return true
    } catch {
      return false
    }
  })

  return {
    recoverySchema,
    recoveryState,
    isRecoveryFormValid
  }
}
