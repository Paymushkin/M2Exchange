<template>
  <div class="container">
    <div class="flex items-center gap-[400px] mb-10">
      <h2 class="text-[40px] font-bold text-primary-darker">Топ локации</h2>
      <div class="flex gap-4 items-center cursor-pointer">
        <span class="text-2xl text-[#4A43EC]">Смотреть все</span>
        <SeeAllIcon />
      </div>
    </div>

    <div class="flex gap-5 mb-20">
      <label class="flex items-center bg-[#F3F4FF] rounded-[80px] py-4 pr-8 pl-4">
        <input class="hidden" type="radio" name="location" value="Spain" />
        <div class="button-content gap-4">
          <div class="location-image" :style="{ backgroundImage: `url(${spain})`}"></div>
          <span class="text-primary-darker font-medium text-xl">Испания</span>
        </div>
      </label>
      <label class="flex items-center bg-[#F3F4FF] rounded-[80px] py-4 pr-8 pl-4">
        <input class="hidden" type="radio" name="location" value="Canada" />
        <div class="button-content gap-4">
          <div class="location-image " :style="{ backgroundImage: `url(${spain})`}"></div>
          <span class="text-primary-darker font-medium text-xl">Канада</span>
        </div>
      </label>
      <label class="flex items-center bg-[#F3F4FF] rounded-[80px] py-4 pr-8 pl-4">
        <input class="hidden" type="radio" name="location" value="Cyprus" />
        <div class="button-content gap-4">
          <div class="location-image" :style="{ backgroundImage: `url(${cyprus})`}"></div>
          <span class="text-primary-darker font-medium text-xl">Кипр</span>
        </div>
      </label>
      <label class="flex items-center bg-[#F3F4FF] rounded-[80px] py-4 pr-8 pl-4">
        <input class="hidden" type="radio" name="location" value="Other" />
        <div class="button-content gap-4">
          <div class="location-image" :style="{ backgroundImage: `url(${cyprus})`}"></div>
          <span class="text-primary-darker font-medium text-xl">Другие</span>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
import spain from '@/assets/images/locations/spain.png';
import cyprus from '@/assets/images/locations/cyprus.png';
import SeeAllIcon from '@/components/icons/SeeAllIcon.vue';
</script>

<style scoped>


.locations {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.location-image  {
  width: 90px;
  height: 90px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.location-button {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 2px solid #E9ECFF;
  border-radius: 30px;
  cursor: pointer;
}

.location-button input {
  display: none; /* Скрываем радиокнопку */
}

.button-content {
  display: flex;
  align-items: center;
}

.button-content img {
  width: 24px; /* Установите нужный размер изображения */
  height: 24px;
  margin-right: 8px;
}
</style>