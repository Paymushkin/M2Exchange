import { ref, computed } from 'vue'

export function useLoginForm() {
  const isLogin = ref(true)
  const isSecondStep = ref(false)
  const isPasswordRecovery = ref(false)
  const isPasswordSent = ref(false)

  const showBackButton = computed(() =>
    (isSecondStep.value || (isPasswordRecovery.value && !isPasswordSent.value))
  )

  const handleBackClick = () => {
    if (isPasswordRecovery.value) {
      isPasswordRecovery.value = false
    } else if (isSecondStep.value) {
      isSecondStep.value = false
    }
  }

  return {
    isLogin,
    isSecondStep,
    isPasswordRecovery,
    isPasswordSent,
    showBackButton,
    handleBackClick
  }
}
