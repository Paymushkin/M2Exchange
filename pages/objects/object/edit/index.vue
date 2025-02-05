<template>
	<NuxtLayout name="object">
		<div class="container py-10">
			<form action="">
			<!-- Хлебные крошки -->
				<Breadcrumbs class="mb-2" :breadcrumbs="breadcrumbs" />
				<ObjectEditLocationSection :object="object" class="lg:mb-10 mb-5" />
				<ObjectEditMapSection :object="object" class="lg:mb-10 mb-5" />
				<ObjectEditTitleSection :object="object" class="lg:mb-10 mb-5" />
				<ObjectEditPhotosSection :object="object" class="lg:mb-10 mb-5" />
				<ObjectFilters
					v-model="filters"
					:config="filtersConfig"
					context="edit"
					class="lg:mb-20 mb-5"
				/>
				<ObjectEditDescriptionSection :object="object" class="mb-10" />
				<div class="flex flex-wrap justify-center items-center gap-4 w-full mb-20">
					<button
						type="submit"
						:disabled="!isFormValid && !isFormChanged"
						class="bg-secondary text-white rounded-lg py-2 px-4 w-[320px] h-[50px] hover:bg-secondary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-secondary"
					>
						Сохранить изменения
					</button>
					<button
						class="text-dark font-medium border border-[#B4CEFF] rounded-lg py-2 px-4 w-[320px] h-[50px] hover:bg-gray-50 transition-colors duration-200"
					>
						Снять с пуликации
					</button>
				</div>
			</form>
		</div>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
import ObjectEditLocationSection from '@/components/sections/object/edit/ObjectEditLocationSection.vue'
import ObjectEditMapSection from '@/components/sections/object/edit/ObjectEditMapSection.vue'
import ObjectEditTitleSection from '@/components/sections/object/edit/ObjectEditTitleSection.vue'
import ObjectEditPhotosSection from '@/components/sections/object/edit/ObjectEditPhotosSection.vue'
import ObjectFilters from '@/components/common/ObjectFilters.vue'
import ObjectEditDescriptionSection from '@/components/sections/object/edit/ObjectEditDescriptionSection.vue'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'
import locationImage from '@/assets/images/object/big-item.png'

definePageMeta({
	layout: 'object'
})

const isFormValid = ref(false)
const isFormChanged = ref(false)
// Пример данных для хлебных крошек
const breadcrumbs = [
	{
		name: 'Все объекты',
		path: '/objects'
	},
	{
		name: 'Испания',
		path: '/objects/spain'
	},
	{
		name: 'Виллы',
		path: '/objects/spain/villas'
	},
	{
		name: 'Вилла на море',
		path: '/objects/spain/villas/object?id=1'
	},
	{
		name: 'Редактирование',
		path: '/objects/spain/villas/object/edit?id=1'
	}
]

const object = {
	owner: {
		name: 'Жанна',
		id: '1234567890',
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
	coordinates: [39.4699, -0.3763],
	images: [
	locationImage,
	locationImage,
	locationImage,
	locationImage,
	locationImage,
	locationImage
],
	wishes: 'Ищу обмен домом на аналогичное жилье в другой стране. Предпочтительно спокойный, уютный район с развитой инфраструктурой, недалеко от природы или моря. Дом должен быть в хорошем состоянии, с минимальным ремонтом, подходящим для комфортного проживания семьи. Важно наличие нескольких спален, оборудованной кухни и уютного пространства для отдыха. Рассматриваю обмен на дом в теплых странах с мягким климатом и удобной транспортной доступностью.'
}

const route = useRoute()

// Проверяем наличие id в query параметрах
if (!route.query.id) {
	navigateTo('/') // Редирект на главную если нет id
}

const filtersConfig = {
	propertyTypeSection: {
		title: 'Тип недвижимости',
		options: [
			{ value: 'all', label: 'Все' },
			{ value: 'apartments', label: 'Апартаменты' },
			{ value: 'houses', label: 'Дома' },
			{ value: 'villas', label: 'Виллы' },
			{ value: 'bungalows', label: 'Бунгало' },
			{ value: 'townhouses', label: 'Таунхаус' },
			{ value: 'country-house', label: 'Деревенский дом' },
			{ value: 'mansion', label: 'Особняк' },
			{ value: 'farm', label: 'Ферма' },
			{ value: 'apartment', label: 'Квартира' }
		]
	},
	priceSection: {
		title: 'Стоимость',
		minPlaceholder: 'Мин: 10 000 $',
		maxPlaceholder: 'Макс: 1 000 000 000 $'
	},
	areaSection: {
		title: 'Площадь',
		minPlaceholder: 'Мин. м2',
		maxPlaceholder: 'Макс. м2'
	},
	roomsSection: {
		bedroomsLabel: 'Спальни',
		bathroomsLabel: 'Ванны',
		bedrooms: { min: 0, max: 10 },
		bathrooms: { min: 0, max: 10 }
	},
	amenitiesSection: {
		title: 'Удобства',
		options: [
			{ id: 'playground', label: 'Детская площадка' },
			{ id: 'pool', label: 'Бассейн' },
			{ id: 'barbecue', label: 'Зона барбекю' },
			{ id: 'parking', label: 'Стоянка' },
			{ id: 'security', label: 'Безопасность' },
			{ id: 'jacuzzi', label: 'Джакузи' },
			{ id: 'park', label: 'Парк' },
			{ id: 'smart-home', label: 'Умный дом' }
		]
	},
	buttons: {
		clear: 'Очистить',
		apply: 'Применить'
	}
}

const filters = ref({
	propertyType: 'all',
	price: { min: '', max: '' },
	area: { min: '', max: '' },
	rooms: { bedrooms: 1, bathrooms: 1 },
	amenities: {}
})
</script>
