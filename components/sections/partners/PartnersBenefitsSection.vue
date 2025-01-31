<template>
	<section>
		<ul class="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
			<li v-for="benefit in benefits" :key="benefit.title" class="flex flex-col grow gap-5 2xl:p-8 p-5 bg-[#F5F6FB] rounded-lg">
			<div class="flex items-center gap-3 2xl:mb-[60px] lg:mb-2 mb-0">
				<div class="flex items-center justify-center bg-white rounded-full 2xl:min-w-[70px] 2xl:min-h-[70px] min-w-[50px] min-h-[50px]">
					<component :is="benefit.icon" class="2xl:w-auto lg:w-8 sm:w-8 w-6" />
				</div>
				<span class="2xl:text-2xl xl:text-lg text-base text-dark">
						{{ benefit.title }}
				</span>
			</div>
			<p class="2xl:text-lg xl:text-base text-sm text-[#525184]">
					{{ benefit.description }}
				</p>
			</li>
		</ul>
	</section>
</template>

<script setup>
import { GlobalNetworkIcon, IncreaseIcon, ServiceIcon, SettingsIcon } from '@/components/icons/icons'

const benefits = [
	{
		icon: GlobalNetworkIcon,
		title: 'Глобальная сеть',
		description: 'Наша платформа объединяет предложения недвижимости со всего мира, предоставляя агентствам возможность выйти на международный уровень. Это позволяет находить покупателей или обменщиков даже в тех странах и регионах, где агентству сложно самостоятельно продвигать свои услуги.',
	},
	{
		icon: IncreaseIcon,
		title: 'Увеличение числа сделок',
		description: 'За счет функции обмена недвижимости наши партнеры могут предлагать своим клиентам не только продажу, но и альтернативу в виде обмена с доплатой или без доплаты. Это открывает новые перспективы для заключения сделок, которые не всегда возможны при стандартной продаже.',
	},
	{
		icon: ServiceIcon,
		title: 'Уникальность сервиса',
		description: 'Наш сервис не имеет аналогов на рынке. Мы создаем уникальные возможности для агентств недвижимости, позволяя не только загружать объекты своих клиентов, но и договариваться об условиях обмена на равных условиях. Вы сможете предложить вашим клиентам эксклюзивные возможности, которые недоступны на других платформах.',
	},
	{
		icon: SettingsIcon,
		title: 'Выбор по предпочтениям',
		description: 'Платформа позволяет указывать предпочтения и критерии обмена: местоположение, площадь, тип недвижимости, условия доплаты и многое другое. Это дает агентствам больше возможностей для подбора идеального варианта для своих клиентов и ускоряет процесс ',
	}
]
</script>
