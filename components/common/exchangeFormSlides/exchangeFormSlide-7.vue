<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div class="max-w-[420px]">
      <h2 class="slide-custom__title mb-6 text-left">Опишите жилье</h2>
      <p class="slide-custom__description text-base mb-6">
        Добавьте как минимум 4 фотографии
        с названиями. Чем больше фото вы разместите, тем выше шанс найти вариант на обмен. 
      </p>
    </div>
    <form>
      <div class="flex gap-3 justify-center flex-wrap">
        <label class="object-item" :style="{ backgroundImage: `url(${item1})` }">
          <input 
            type="radio" 
            name="photo" 
            value="main" 
            v-model="selectedPhoto" 
            class="hidden"
          />
          <span class="xl:text-[14px] text-xs rounded-lg xl:px-6 px-4 xl:py-2 py-1 transition-colors"
                :class="selectedPhoto === 'main' ? 'bg-[#1C2D6A] text-white' : 'bg-white'">
            Главное
          </span>
        </label>

        <label class="object-item" :style="{ backgroundImage: `url(${item2})` }">
          <input 
            type="radio" 
            name="photo" 
            value="yard" 
            v-model="selectedPhoto" 
            class="hidden"
          />
          <span class="xl:text-[14px] text-xs rounded-lg xl:px-6 px-4 xl:py-2 py-1 transition-colors"
                :class="selectedPhoto === 'yard' ? 'bg-[#1C2D6A] text-white' : 'bg-white'">
            Двор
          </span>
        </label>

        <label class="object-item" :style="{ backgroundImage: `url(${item1})` }">
          <input 
            type="radio" 
            name="photo" 
            value="pool" 
            v-model="selectedPhoto" 
            class="hidden"
          />
          <span class="xl:text-[14px] text-xs rounded-lg xl:px-6 px-4 xl:py-2 py-1 transition-colors"
                :class="selectedPhoto === 'pool' ? 'bg-[#1C2D6A] text-white' : 'bg-white'">
            Бассейн
          </span>
        </label>

        <label class="object-item" :style="{ backgroundImage: `url(${item2})` }">
          <input 
            type="radio" 
            name="photo" 
            value="bedroom" 
            v-model="selectedPhoto" 
            class="hidden"
          />
          <span class="xl:text-[14px] text-xs rounded-lg xl:px-6 px-4 xl:py-2 py-1 transition-colors"
                :class="selectedPhoto === 'bedroom' ? 'bg-[#1C2D6A] text-white' : 'bg-white'">
            Спальня
          </span>
        </label>
        
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import item1 from '@/assets/images/object/item-1.png'
import item2 from '@/assets/images/object/item-2.png'

const selectedPhoto = ref('main')
</script>

<style scoped>
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

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 640px) {
    width: 150px;
    aspect-ratio: 1/1;
  }
}

.object-item span {
  transition: all 0.3s ease;
}
</style> 