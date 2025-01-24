<template>
  <div class="flex flex-col items-center justify-center max-w-[970px] h-full">
    <h2 class="custom-title mb-6 text-center">Стоимость и площадь объекта</h2>
    <p class="description text-base mb-6 text-center">
      Укажите цену и площадь вашей недвижимости
    </p>

    <div class="w-[750px] max-w-full">
      <div class="mb-6">
        <div class="flex items-center gap-7">
          <label class="block text-left text-[18px] font-semibold text-[#001062]">Стоимость</label>
          <div class="text-[16px] font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] px-4 py-2">{{ price }} €</div>
        </div>
        <URange
          v-model="price"
          :min="priceConfig.min"
          :max="priceConfig.max"
          :step="priceConfig.step"
          class="my-4 custom-range"
        />
        <div class="flex justify-between">
          <span class="text-[22px] font-semibold text-[#001062]">{{ priceConfig.min }} €</span>
          <span class="text-[22px] font-semibold text-[#001062]">{{ priceConfig.max }} €</span>
        </div>
      </div>

      <div>
        <div class="flex items-center gap-7">
          <label class="block text-left text-[18px] font-semibold text-[#001062]">Площадь</label>
          <div class="text-[16px] font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] px-4 py-2">{{ area }} м²</div>
        </div>
        <URange
          v-model="area"
          :min="areaConfig.min"
          :max="areaConfig.max"
          :step="areaConfig.step"
          class="my-4 custom-range"
        />
        <div class="flex justify-between">
          <span class="text-[22px] font-semibold text-[#001062]">{{ areaConfig.min }} м²</span>
          <span class="text-[22px] font-semibold text-[#001062]">{{ areaConfig.max }} м²</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const priceConfig = {
  min: 0,
  max: 1000000,
  step: 10000,
  defaultValue: 300000
}

const areaConfig = {
  min: 0,
  max: 300000,
  step: 10,
  defaultValue: 30000
}

const price = ref(priceConfig.defaultValue)
const area = ref(areaConfig.defaultValue)
</script>

<style>
.custom-title {
  color: #202020;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
}

.description {
  max-width: 560px;
  color: #8C8B8B;
  font-size: 16px;
  line-height: 1.2;
}

.custom-range {
  --u-range-thumb-background: #4169E1;
  --u-range-thumb-border-color: #4169E1;
  --u-range-track-background: #E5E7EB;
  --u-range-track-active-background: #4169E1;
  --u-range-thumb-size: 20px;
  --u-range-track-height: 6px;
}

.custom-range .u-range-thumb {
  border-radius: 50%;
  cursor: pointer;
}

.custom-range .u-range-track {
  border-radius: 3px;
}
</style> 