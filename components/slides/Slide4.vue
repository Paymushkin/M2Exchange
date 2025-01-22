<template>
  <div class="flex flex-col items-center justify-center max-w-[970px] h-full">
    <h2 class="custom-title mb-6 text-center">Стоимость и площадь объекта</h2>
    <p class="description text-base mb-6 text-center">
      Укажите цену и площадь вашей недвижимости
    </p>

    <!-- Блок с ползунками -->
    <div class="w-[750px] max-w-full">
      <div class="mb-6">
        <div class="flex items-center gap-7">
          <label class="block text-left text-[18px] font-semibold text-[#001062]">Стоимость</label>
          <div class="text-[16px] font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] px-4 py-2">{{ price.value }} €</div>
        </div>
        <div class="relative">
          <input type="range" :min="price.min" :max="price.max" v-model="price.value" class="w-full range-input" />
          <div class="range-scale-container mb-2">
            <div class="range-scale" :style="{ width: (price.value / price.max) * 100 + '%' }"></div>
          </div>
        </div>
        <div class="flex justify-between">
          <span class="text-[22px] font-semibold text-[#001062]">{{ price.min }} €</span>
          <span class="text-[22px] font-semibold text-[#001062]">{{ price.max }} €</span>
        </div>
      </div>

      <div>
        <div class="flex items-center gap-7">
          <label class="block text-left text-[18px] font-semibold text-[#001062]">Площадь</label>
          <div class="text-[16px] font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] px-4 py-2">{{ area.value }} м²</div>
        </div>
        <div class="relative">
          <input type="range" :min="area.min" :max="area.max" v-model="area.value" class="w-full range-input" />
          <div class="range-scale-container mb-2">
            <div class="range-scale" :style="{ width: (area.value / area.max) * 100 + '%' }"></div>
          </div>
        </div>
        <div class="flex justify-between">
          <span class="text-[22px] font-semibold text-[#001062]">{{ area.min }} м²</span>
          <span class="text-[22px] font-semibold text-[#001062]">{{ area.max }} м²</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const price = ref({
  min: 0,
  max: 10000000,
  value: 300000,
});
const area = ref({
  min: 0,
  max: 100000,
  value: 300,
}); 
</script>

<style scoped>
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

.range-input {
  -webkit-appearance: none;
  width: 100%;
  height: 0;
  background: transparent;
  outline: none;
  position: relative;
  z-index: 2;
  transform: translateY(8px);
}

.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 26px;
  height: 26px;
  background: #ffffff;
  border: 2px solid #3D62FF;
  border-radius: 50%;
  cursor: pointer;
}

.range-input::-moz-range-thumb {
  width: 26px;
  height: 26px;
  background: #ffffff;
  border: 2px solid #3D62FF;
  border-radius: 50%;
  cursor: pointer;
}

.range-scale {
  position: absolute;
  height: 5px;
  background: #3D62FF;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 30px;
}

.range-scale-container {
  position: relative;
  height: 5px;
  background: #EAEFFB;
  border-radius: 30px;
}
</style> 