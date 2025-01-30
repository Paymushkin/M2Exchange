<template>
	<ul class="flex gap-4">
		<li v-for="benefit in benefits" :key="benefit.title" class="flex flex-col w-1/4 gap-5 p-8 bg-[#F5F6FB] rounded-lg">
			<div class="flex items-center gap-3 mb-[60px]">
				<div class="flex items-center justify-center bg-white rounded-full min-w-[70px] min-h-[70px]">
					<component :is="benefit.icon" />
				</div>
				<span class="text-2xl text-dark">
						{{ benefit.title }}
				</span>
			</div>
			<p class="text-lg text-[#525184]">
				{{ benefit.description }}
			</p>
		</li>
	</ul>
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
