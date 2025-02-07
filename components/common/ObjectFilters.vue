<template>
  <div
    :class="{'sm:relative fixed inset-0 z-50 bg-white xl:bg-transparent': context === 'catalog'}">
    <div
      class="relative flex flex-col sm:justify-center xl:gap-10 gap-4 lg:border border-[#E4EBFB] rounded-lg p-5 w-full overflow-y-auto"
			:class="{'pt-14 xl:p-12 h-full xl:h-auto ': context === 'catalog'}"
    >
      <!-- Кнопки закрытия показываем только в каталоге -->
      <template v-if="context === 'catalog'">
        <button
          @click="$emit('close')"
          class="xl:hidden absolute top-3 right-3 p-2 hover:opacity-70 transition-opacity"
        >
          <CloseIcon />
        </button>
        <button
          @click="$emit('close')"
          class="xl:flex hidden absolute top-6 right-6 p-2 hover:opacity-70 transition-opacity"
        >
          <ChevronDownIcon />
        </button>
      </template>

      <!-- Блок выбора типа объекта -->
      <div class="flex flex-col xl:gap-4">
        <h3 class="text-dark font-medium"
				:class="{'text-[#171652] xl:text-xl text-sm mb-2': context === 'catalog',
						'text-lg text-dark mb-4': context === 'edit'
				}"
				>
					{{ config.propertyTypeSection.title }}
				</h3>
        <div class="flex flex-wrap max-w-[600px] xl:gap-4 gap-2">
          <RadioButton
            v-for="button in config.propertyTypeSection.options"
            :key="button.value"
            v-model="filters.propertyType"
            :value="button.value"
          >
            {{ button.label }}
          </RadioButton>
        </div>
      </div>

      <!-- Блоки с инпутами -->
      <div class="flex xl:gap-20 gap-4 flex-wrap">
        <!-- Блок стоимости -->
        <div class="flex flex-col xl:gap-4 gap-2">
          <h3 class="text-[#171652] xl:text-xl text-sm font-semibold">{{ config.priceSection.title }}</h3>
          <div class="flex gap-4">
            <input
              type="number"
              v-model="filters.price.min"
              :placeholder="config.priceSection.minPlaceholder"
              class="xl:w-[200px] w-[100%] border text-sm xl:text-base border-[#D2DBF5] rounded-sm lg:px-4 px-2 lg:py-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
            />
            <input
              type="number"
              v-model="filters.price.max"
              :placeholder="config.priceSection.maxPlaceholder"
              class="xl:w-[200px] w-[100%] border text-sm xl:text-base border-[#D2DBF5] rounded-sm lg:px-4 px-2 lg:py-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
            />
          </div>
        </div>

        <!-- Блок площади -->
        <div class="flex flex-col xl:gap-4 gap-2">
          <h3 class="text-[#171652] xl:text-xl text-sm font-semibold">{{ config.areaSection.title }}</h3>
          <div class="flex gap-4">
            <input
              type="number"
              v-model="filters.area.min"
              :placeholder="config.areaSection.minPlaceholder"
              class="xl:w-[200px] w-[100%] border text-sm xl:text-base border-[#D2DBF5] rounded-sm lg:px-4 px-2 lg:py-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
            />
            <input
              type="number"
              v-model="filters.area.max"
              :placeholder="config.areaSection.maxPlaceholder"
              class="xl:w-[200px] w-[100%] border text-sm xl:text-base border-[#D2DBF5] rounded-sm lg:px-4 px-2 lg:py-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
            />
          </div>
        </div>
      </div>

      <!-- Блок спальни и ванны -->
      <div class="flex xl:gap-[120px] gap-4 flex-wrap">
        <CounterControl
          class="w-[400px]"
          v-model="filters.rooms.bedrooms"
          :label="config.roomsSection.bedroomsLabel"
          :min="config.roomsSection.bedrooms.min"
          :max="config.roomsSection.bedrooms.max"
        />

        <CounterControl
          class="w-[400px]"
          v-model="filters.rooms.bathrooms"
          :label="config.roomsSection.bathroomsLabel"
          :min="config.roomsSection.bathrooms.min"
          :max="config.roomsSection.bathrooms.max"
        />
      </div>

      <!-- Блок удобств -->
      <div class="flex flex-col xl:gap-4 gap-2">
        <h3 class="text-[#171652] xl:text-xl text-sm font-semibold">{{ config.amenitiesSection.title }}</h3>
        <div class="flex flex-wrap xl:gap-3 gap-2">
          <CheckboxButton
            v-for="amenity in config.amenitiesSection.options"
            :key="amenity.id"
            v-model="filters.amenities[amenity.id]"
          >
            {{ amenity.label }}
          </CheckboxButton>
        </div>
      </div>

      <!-- Блок кнопок -->
      <div class="flex justify-center items-center gap-4 mt-4">
        <button
          @click="clearFilters"
          class="border border-[#D2DBF5] lg:text-base text-sm lg:px-8 px-4 lg:py-3 py-2 text-[#171652] rounded-sm hover:bg-gray-50 transition duration-200"
        >
          {{ config.buttons.clear }}
        </button>
        <button
          @click="applyFilters"
          class="bg-[#6284FF] lg:text-base text-sm lg:px-8 px-4 lg:py-3 py-2 text-white rounded-sm hover:bg-[#4169E1] transition duration-200"
        >
          {{ config.buttons.apply }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import RadioButton from '@/components/ui/RadioButton.vue'
import CounterControl from '@/components/ui/CounterControl.vue'
import CheckboxButton from '@/components/ui/CheckboxButton.vue'
import { ChevronDownIcon, CloseIcon } from '@/components/icons/icons'

const props = defineProps({
  config: {
    type: Object,
    required: true
  },
  modelValue: {
    type: Object,
    required: true
  },
  context: {
    type: String,
    default: 'catalog',
    validator: (value) => ['catalog', 'edit'].includes(value)
  }
})

const emit = defineEmits(['close', 'update:modelValue'])

// Инициализируем amenities с булевыми значениями для каждой опции
const filters = reactive({
  ...props.modelValue,
  amenities: props.modelValue.amenities || props.config.amenitiesSection.options.reduce((acc, option) => {
    acc[option.id] = false
    return acc
  }, {})
})

const clearFilters = () => {
  filters.propertyType = 'all'
  filters.price = { min: '', max: '' }
  filters.area = { min: '', max: '' }
  filters.rooms = { bedrooms: 1, bathrooms: 1 }
  filters.amenities = Object.keys(filters.amenities).reduce((acc, key) => {
    acc[key] = false
    return acc
  }, {})
  emit('update:modelValue', { ...filters })
}

const applyFilters = () => {
  emit('update:modelValue', { ...filters })
  emit('close')
}
</script>

<style scoped>
@media (max-width: 1280px) {
  .fixed {
    backdrop-filter: blur(4px);
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>
