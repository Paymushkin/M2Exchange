<template>
	<!-- Карта -->
	<div class="map-container">
		<ClientOnly>
			<div id="map" ref="mapRef"></div>
		</ClientOnly>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
	object: Object,
	coordinates: {
		type: Array,
		required: false,
		default: () => [55.7558, 37.6173],
		validator: (value) => {
			return value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number'
		}
	}
})

const mapRef = ref(null)

onMounted(() => {
	if (window.ymaps) {
		window.ymaps.ready(() => {
			initMap()
		})
	}
})

const initMap = () => {
	const map = new window.ymaps.Map('map', {
		center: props.object.coordinates,
		zoom: 14,
		controls: ['zoomControl']
	})

	// Создаем макет для кастомной иконки
	const customLayout = window.ymaps.templateLayoutFactory.createClass(
		'<div class="custom-placemark">' +
		'<svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
		'<path d="M20 0C12.0645 0 5.625 6.43945 5.625 14.375C5.625 17.0996 6.43945 19.7754 7.96875 22.0215L19.0918 39.4043C19.3359 39.7852 19.6777 40 20 40C20.3223 40 20.6641 39.7852 20.9082 39.4043L32.0312 22.0215C33.5605 19.7754 34.375 17.0996 34.375 14.375C34.375 6.43945 27.9355 0 20 0ZM20 20C16.8945 20 14.375 17.4805 14.375 14.375C14.375 11.2695 16.8945 8.75 20 8.75C23.1055 8.75 25.625 11.2695 25.625 14.375C25.625 17.4805 23.1055 20 20 20Z" fill="#4460F6"/>' +
		'</svg>' +
		'</div>'
	)

	const placemark = new window.ymaps.Placemark(
		props.object.coordinates,
		{},
		{
			iconLayout: customLayout,
			iconShape: {
				type: 'Rectangle',
				coordinates: [[-20, -48], [20, 0]]
			}
		}
	)

	map.geoObjects.add(placemark)
}
</script>

<style>
.map-container {
	position: relative;
	width: 100%;
	height: 400px;
	border-radius: 1rem;
	overflow: hidden;
}

#map {
	width: 100%;
	height: 100%;
}

.custom-placemark {
	width: 40px;
	height: 48px;
	transform: translate(-50%, -100%);
}
</style>
