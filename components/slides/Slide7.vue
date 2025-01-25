<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div class="max-w-[420px]">
          <h2 class="custom-title mb-6 text-left">Опишите жилье</h2>
          <p class="description text-base mb-6">
            Добавьте как минимум 4 фотографии
            с названиями. Чем больше фото вы разместите, тем выше шанс найти вариант на обмен. 
          </p>
    </div>
    <div class="flex gap-3">
      <div class="object-item" :style="{ backgroundImage: `url(${item1})` }">
        <span class="text-[14px] bg-white rounded-lg px-6 py-2 transition-colors">Главное</span>
      </div>
      <div class="object-item" :style="{ backgroundImage: `url(${item2})` }">
        <span class="text-[14px] bg-white rounded-lg px-6 py-2 transition-colors">Двор</span>
      </div>
      <div class="object-item" :style="{ backgroundImage: `url(${item1})` }">
        <span class="text-[14px] bg-white rounded-lg px-6 py-2 transition-colors">Бассейн</span>
      </div>
      <div class="object-item" :style="{ backgroundImage: `url(${item2})` }">
        <span class="text-[14px] bg-white rounded-lg px-6 py-2 transition-colors">Спальня</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import item1 from '@/assets/images/object/item-1.png';
import item2 from '@/assets/images/object/item-2.png';
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

.object-item {
  display: flex;
  align-items: flex-start;
  padding: 12px;
  width: 225px;
  aspect-ratio: 1/1;
  border-radius: 30px;
  background-color: #F5F5F5;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}

.object-item:hover span {
  color: #ffffff;
  background-color: #2B3F9E;
}
</style> 