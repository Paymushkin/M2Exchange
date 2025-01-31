<template>
	<section class="flex flex-col sm:flex-row justify-between lg:gap-6 gap-0">

			<div class="flex flex-col items-start grow bg-background-light 2xl:rounded-2xl rounded-xl 2xl:py-8 lg:py-6 py-4 2xl:px-[52px] px-8">
				<div class="2xl:mb-[70px] xl:mb-10 mb-5">
					<LogoIcon />
				</div>
				<h2 class="text-dark 2xl:text-[55px] xl:text-4xl lg:text-3xl text-2xl leading-[1.2] font-medium xl:mb-7 mb-3">
					Готовы присоединиться?
				</h2>
				<p class="text-dark 2xl:text-lg xl:text-base text-sm font-light 2xl:mb-[50px] xl:mb-[30px] mb-[20px] max-w-[830px]">
					На нашей платформе вы можете разместить свои объекты вручную или связать свою базу с нашей через API или файлом XML,  а также получить доступ к огромной клиентской базе, наши пользовател уже готовы обменять свое жилье!Ответьте на несколько вопросов, после чего сервис направим вам ссылку для регистрации.
				</p>
				<ArrowButton>
					Присоединиться
				</ArrowButton>
			</div>

			<div>
				<img
					src="@/assets/images/partners/partners-join.png"
					alt="image"
					loading="lazy"
					placeholder="blur"
					class="hidden lg:block xl:max-w-[576px] lg:max-w-[450px] sm:max-w-[375px] max-w-full object-cover"
				/>
			</div>
	</section>
</template>

<script setup>
import { LogoIcon } from '@/components/icons/icons'
import ArrowButton from '@/components/ui/ArrowButton.vue'
</script>
