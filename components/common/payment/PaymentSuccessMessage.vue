<template>
  <div class="flex flex-col items-center gap-6 p-6">
    <div class="flex items-center justify-center w-16 h-16 bg-[#4460F6] rounded-full">
      <RefreshIcon class="w-8 h-8 text-white" />
    </div>

    <div class="flex flex-col gap-2 text-center">
      <h3 class="text-[#41495E] text-2xl font-bold">
        Запрос на обмен отправлен
      </h3>
      <p class="text-[#41495E] text-lg">
        Пользователь получил уведомление в чат, вам открыт доступ к переписке, теперь вы можете задать ему вопросы и обсудить детали.
      </p>
    </div>
  </div>
</template>

<script setup>
import RefreshIcon from '@/components/icons/RefreshIcon.vue'
</script>
