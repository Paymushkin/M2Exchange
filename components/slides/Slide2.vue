<template>
  <div class="flex flex-col items-center justify-center h-full">
    <h2 class="custom-title mb-6 text-center">Где находится объект?</h2>
    <p class="description text-base mb-6 text-center">
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
import LocationIcon from '~/components/icons/LocationIcon.vue';
import MapIcon from '~/components/icons/MapIcon.vue';
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
</style> 