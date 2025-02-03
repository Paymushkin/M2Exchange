<template>
  <div class="flex flex-col items-center sm:gap-6 gap-4 pt-5 w-full">
    <h2 class="text-[#0F172A] lg:text-3xl text-xl text-center">
      Контакты для связи
    </h2>

    <div class="flex flex-col items-center gap-2">
      <div class="w-20 h-20 rounded-full overflow-hidden">
        <img
          :src="avatarUrl"
          alt="User avatar"
          class="w-full h-full object-cover"
        />
      </div>
      <span class="text-[#4460F6] sm:text-2xl text-xl font-bold">Жанна</span>
    </div>

		<div class="flex flex-col sm:flex-row justify-between gap-4 grow w-full max-w-[600px]">
			<div class="flex items-center justify-between grow rounded-sm px-6 py-4 border border-[#E9E8E8]">
				<span class="text-[#41495E] text-sm">alexvoron@gmail.com</span>
      </div>

      <div class="flex items-center justify-between grow rounded-sm px-6 py-4 border border-[#E9E8E8]">
        <span class="text-[#41495E] text-sm">+7 939 939 8383</span>
      </div>
    </div>
		</div>

    <p class="text-dark text-center mb-4 sm:text-base text-xs">
      Теперь вы можете связаться с собственником и<br>
      уточнить все интересующие вас вопросы
    </p>
</template>

<script setup>
import { ShareIcon } from '@/components/icons/icons'
const avatarUrl = new URL('@/assets/images/avatars/avatar.png', import.meta.url).href
</script>
