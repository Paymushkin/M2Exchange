<template>
  <div class="slide w-full xl:px-10 px-5 xl:py-8 py-5 max-w-[1360px] xl:min-h-[720px] min-h-[600px] mx-auto xl:rounded-[50px] overflow-hidden bg-white flex flex-col">
    <header class="slider-header flex items-center justify-between">
      <LogoIcon  v-if="!fromModal" class="hidden xl:block" />
      <span v-else class="text-[#7B82AA] xl:text-xl text-sm" :class="{ 'opacity-0': currentIndex === slides.length - 1 }">
        {{ currentIndex + 1 }}/{{ slides.length }}
      </span>
      <button 
        v-if="fromModal"
        @click="closeModal" 
        class="flex items-center justify-center p-2 transition-colors duration-300 hover:bg-gray-200 rounded"
      >
        <CloseIcon />
      </button>
    </header>
    
    <div class="slider-content flex-grow flex items-center justify-center">
      <component :is="currentSlide" />
    </div>
    
    <footer v-if="currentIndex < slides.length - 1" class="slider-footer relative flex justify-between items-center gap-7 pt-10 xl:pt-0">

      <button 
        v-if="fromModal" 
        class="flex items-center" 
        @click="goBack" 
        :disabled="isFirstSlide"
        :class="{ 'opacity-50 cursor-not-allowed': isFirstSlide }"
      >
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 cursor-pointer">
          <ArrowIcon class="text-black" />
        </div>
        <span class="ml-2 xl:inline hidden text-gray-600">Назад</span>
      </button>

      <div class="absolute top-4 left-0 right-0 lg:relative pagination flex gap-1 grow">
        <div v-for="(slide, index) in slides" :key="index" 
             class="bullet h-[5px] grow rounded transition-colors duration-300" 
             :class="{'bg-primary': currentIndex === index, 'bg-[#E9ECFF]': currentIndex !== index}">
        </div>
      </div>

      <button 
        class="xl:min-w-[140px] xl:h-[50px] ml-auto bg-dark text-white xl:text-[18px] sm:text-base text-xs px-4 py-2 rounded-[40px] hover:bg-blue-700" 
        @click="nextSlide">
        {{ currentIndex === slides.length - 2 ? 'Отправить' : 'Далее' }}
      </button>
      
    </footer>
  </div>
</template>

<script setup>
import { ref, markRaw, computed, defineProps } from 'vue';
import exchangeFormSlide1 from '@/components/common/exchangeFormSlides/exchangeFormSlide-1.vue';
import exchangeFormSlide2 from '@/components/common/exchangeFormSlides/exchangeFormSlide-2.vue';
import exchangeFormSlide3 from '@/components/common/exchangeFormSlides/exchangeFormSlide-3.vue';
import exchangeFormSlide4 from '@/components/common/exchangeFormSlides/exchangeFormSlide-4.vue';
import exchangeFormSlide5 from '@/components/common/exchangeFormSlides/exchangeFormSlide-5.vue';
import exchangeFormSlide6 from '@/components/common/exchangeFormSlides/exchangeFormSlide-6.vue';
import exchangeFormSlide7 from '@/components/common/exchangeFormSlides/exchangeFormSlide-7.vue';
import exchangeFormSlide8 from '@/components/common/exchangeFormSlides/exchangeFormSlide-8.vue';
import exchangeFormSlide9 from '@/components/common/exchangeFormSlides/exchangeFormSlide-9.vue';

import { LogoIcon, ArrowIcon, CloseIcon } from '@/components/icons/icons.js'

const props = defineProps(['fromModal', 'closeModal'])

const slides = [
  markRaw(exchangeFormSlide1),
  markRaw(exchangeFormSlide2),
  markRaw(exchangeFormSlide3),
  markRaw(exchangeFormSlide4),
  markRaw(exchangeFormSlide5),
  markRaw(exchangeFormSlide6),
  markRaw(exchangeFormSlide7),
  markRaw(exchangeFormSlide8),
  markRaw(exchangeFormSlide9)
];

const currentIndex = ref(0);
const currentSlide = ref(slides[currentIndex.value]);
const currentSlideIndex = ref(0);

const goToSlide = (index) => {
  currentIndex.value = index;
  currentSlide.value = slides[currentIndex.value];
};

const nextSlide = () => {
  if (currentIndex.value === slides.length - 1) {
    console.log("Отправка данных...");
  } else {
    currentIndex.value++;
    currentSlide.value = slides[currentIndex.value];
  }
};

const goBack = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
    currentSlide.value = slides[currentIndex.value];
  }
};

const isFirstSlide = computed(() => currentIndex.value === 0);
</script>

<style scoped>
.slide {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.slider-content {
  flex-grow: 1;
}
</style> 