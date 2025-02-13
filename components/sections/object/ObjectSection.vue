<template>
	<div class="flex flex-col">
		<!-- Заголовок -->
		 <div class="flex justify-between items-center">
				<h1 class="mb-6 text-xl lg:text-3xl 2xl:text-[40px] leading-[1.3] font-bold">
					{{ object.title }}
				</h1>

			<!-- Опции в зависимости от роли	 -->
				<div v-if="isMyObject" class="flex justify-between items-center gap-2">
					<button
						class="p-2 rounded-full hover:bg-background-light transition-colors duration-300"
						@click="handleFavoriteClick"
					>
						<Heart2Icon
							:class="{ 'fill-[#3d62ff] stroke-[#3d62ff]': favoriteStore.isFavorite(objectId) }"
						/>
					</button>
					<button
						class="p-2 rounded-full hover:bg-background-light transition-colors duration-300"
						@click="handleShareClick"
					>
						<ShareIcon />
					</button>
					<button class="p-2 rounded-full hover:bg-background-light transition-colors duration-300">
						<ReverseIcon />
					</button>
				</div>

				<div v-else class="flex justify-between items-center gap-2">
					<button @click="modalStore.openObjectOptionModal" class="p-2 rounded-full hover:bg-background-light transition-colors duration-300">
						<OptionsIcon />
					</button>
				</div>

		 </div>

		<!-- Основной контент -->
		<div class="flex flex-col lg:flex-row justify-between lg:gap-6 gap-10 min-h-[500px] w-full lg:mb-20 mb-10">
			<!-- Слайдер -->
			<div id="object-slider" class="rounded-lg relative max-h-full">
				<UCarousel
					:items="object.images"
					arrows
					indicators
					:ui="{
						item: 'w-full 2xl:h-[631px] lg:h-[583px] sm:h-[400px] h-[300px] max-h-full cursor-grab',
						indicators: {
							wrapper: 'flex justify-center items-center gap-2 absolute bottom-[-20px]'
						}
					}"
					:prev-button="{
						color: 'gray',
						icon: 'i-heroicons-arrow-left-20-solid',
						class: 'arrow-slider arrow-prev hover:scale-110 transition-transform duration-300'
					}"
					:next-button="{
						color: 'gray',
						icon: 'i-heroicons-arrow-right-20-solid',
						class: 'arrow-slider arrow-next hover:scale-110 transition-transform duration-300'
					}"
				>
					<template #default="{ item }">
						<img
							:src="item"
							alt="Изображение объекта"
							loading="lazy"
							placeholder="blur"
							class="w-full h-full object-cover rounded-lg"
						/>
					</template>

					<template #indicator="{ active }">
						<div
							class="grow h-1 rounded-full transition-colors duration-300"
							:class="active ? 'bg-primary' : 'bg-[#E9ECFF]'"
						/>
					</template>
				</UCarousel>
			</div>

			<!-- Информация об объекте -->
			<ObjectCardInfo :object="object" />

		</div>

		<!-- Описание объекта -->
		<ObjectCardDescription :object="object" class="sm:mb-20 mb-10" />

		<UDivider class="mb-10" />

		<!-- Удобства объекта -->
		<ObjectCardComfort :object="object" class="sm:mb-20 mb-10" />

		<!-- Местоположение объекта -->
		<ObjectCardLocation :object="object" class="mb-7" />

	</div>
</template>

<script setup>
import locationImage from '/assets/images/object/big-item.png'
import ownerImage from '/assets/images/avatars/avatar.png'
import { LocationIcon, ArrowNextIcon, ArrowPrevIcon } from '@/components/icons/icons.js'
import ObjectCardInfo from '@/components/sections/object/ObjectCardInfo.vue'
import ObjectCardDescription from '@/components/sections/object/ObjectCardDescription.vue'
import ObjectCardComfort from '@/components/sections/object/ObjectCardComfort.vue'
import ObjectCardLocation from '@/components/sections/object/ObjectCardLocation.vue'
import { Heart2Icon, ShareIcon, ReverseIcon, OptionsIcon } from '@/components/icons/icons.js'
import { useModalStore } from '@/stores/modalStore'
import { useFavoriteStore } from '@/stores/favoriteStore'
import { useAlertStore } from '@/stores/alertStore'

const props = defineProps({
	objectId: {
		type: [String, Number],
		required: true
	}
})

const myId = '12345678901'

const isMyObject = computed(() => {
	return myId === object.owner.id
})

const modalStore = useModalStore()
const favoriteStore = useFavoriteStore()
const alertStore = useAlertStore()

const handleFavoriteClick = () => {
	favoriteStore.toggleFavorite(props.objectId)
}

const handleShareClick = async () => {
	try {
		await navigator.clipboard.writeText(window.location.href)
		alertStore.showShareMessage()
	} catch (err) {
		console.error('Failed to copy:', err)
	}
}

const object = {
	owner: {
		name: 'Жанна',
		id: '1234567890',
		avatar: ownerImage
	},
	title: 'Роскошная вилла в Испании с бассейном',
	description: `Эксклюзивные виллы на продажу в элитном жилом комплексе на юго-западном побережье Тенерифе.
    Это лимитированная коллекция из 12 великолепных особняков, каждый из которых имеет собственный бассейн с зоной для загара. <br><br>
    Атмосфера здесь очень уединенная, и вы можете полюбоваться потрясающими видами. Неподалеку находится теннисная академия Аннабель Крофт,
    окруженная блестящим полем для гольфа, спроектированным Дэйвом Томасом. Комплекс непременно привлечет тех, кто стремится найти для себя самое модное жилье.<br><br>
    Земельный участок занимает 594 м2, а жилая площадь составляет около 272 м2 и распределена на двух уровнях.<br><br>
    На первом этаже находится большая гостиная и столовая с прямым выходом на открытую и крытую террасы к красивому бассейну. Открытая и светлая кухня с качественной техникой и большим количеством места для приготовления пищи.`,
	price: '850 000',
	currency: '$',
	location: `Carrer de Lluís Peixó, 46011 Валенсия`,
	bedrooms: 4,
	bathrooms: 3,
	area: 200,
	plotArea: 1000,
	type: 'Апартаменты',
	comfort: ['Бассейн', 'Парковка', 'Кондиционер', 'Бесплатный Wi-Fi', 'Бесплатный Wi-Fi', 'Стоянка для машин', 'Парк', 'Бассейн', 'Парковка', 'Кондиционер', 'Бесплатный Wi-Fi', 'Бесплатный Wi-Fi', 'Стоянка для машин'],
	images: [
		locationImage,
		locationImage,
		locationImage,
		locationImage,
		locationImage,
		locationImage
	],
	coordinates: [39.4699, -0.3763],
	wishes: 'Ищу обмен домом на аналогичное жилье в другой стране. Предпочтительно спокойный, уютный район с развитой инфраструктурой, недалеко от природы или моря. Дом должен быть в хорошем состоянии, с минимальным ремонтом, подходящим для комфортного проживания семьи. Важно наличие нескольких спален, оборудованной кухни и уютного пространства для отдыха. Рассматриваю обмен на дом в теплых странах с мягким климатом и удобной транспортной доступностью.'
}
</script>
