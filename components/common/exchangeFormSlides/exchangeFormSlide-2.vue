<template>
  <div class="flex flex-col justify-center h-full">
    <h2 class="slide-custom__title mb-6">Где находится объект?</h2>
    <p class="slide-custom__description text-base mb-[40px]">
      Введите адрес или выберите зону на карте
    </p>
    
    <div class="flex items-center w-[480px] border border-[#ECEDF3] rounded-[40px] py-4 px-5">
      <LocationIcon class="mr-2" />
      <select class="mr-2 text-[18px] cursor-pointer">
        <option value="location1">Italy, Sardinia</option>
        <option value="location2">Spain, Barcelona</option>
        <option value="location3">France, Paris</option>
      </select>
      <button class="flex items-center ml-auto bg-primary-dark text-white text-[12px] px-5 py-3 rounded-full hover:bg-blue-700 transition">
        <MapIcon class="mr-2" />
        Карта
      </button>
    </div>
  </div>
</template>

<script setup>
import { LocationIcon } from '@/components/icons/icons.js';
import { MapIcon } from '@/components/icons/icons.js';

</script>