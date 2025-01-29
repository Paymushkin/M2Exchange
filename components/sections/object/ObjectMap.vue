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
  location: {
    type: String,
    required: true
  },
  coordinates: {
    type: Array,
    required: false,
    default: () => [55.7558, 37.6173],
    validator: (value) => {
      return value.length === 2 && 
        typeof value[0] === 'number' && 
        typeof value[1] === 'number'
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
    center: props.coordinates,
    zoom: 14,
    controls: ['zoomControl']
  })

  const placemark = new window.ymaps.Placemark(props.coordinates, {}, {
    preset: 'islands#blueHomeIcon'
  })

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
</style> 