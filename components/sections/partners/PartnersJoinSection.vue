<template>
		<div class="flex justify-between gap-6">
			<div class="flex flex-col items-start grow bg-background-light rounded-2xl py-8 px-[52px]">
				<div class="mb-[70px]">
					<LogoIcon />
				</div>
				<h2 class="text-dark text-[55px] leading-[1.2] font-medium mb-7">
					Готовы присоединиться?
				</h2>
				<p class="text-dark text-lg font-light mb-[50px] max-w-[830px]">
					На нашей платформе вы можете разместить свои объекты вручную или связать свою базу с нашей через API или файлом XML,  а также получить доступ к огромной клиентской базе, наши пользовател уже готовы обменять свое жилье!Ответьте на несколько вопросов, после чего сервис направим вам ссылку для регистрации.
				</p>
				<ArrowButton>
					Присоединиться
				</ArrowButton>
			</div>
			<div>
				<img src="@/assets/images/partners/partners-join.png" alt="image" class="max-w-[576px] object-cover">
			</div>
		</div>
</template>

<script setup>
import { LogoIcon } from '@/components/icons/icons'
import ArrowButton from '@/components/ui/ArrowButton.vue'
</script>
