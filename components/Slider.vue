<template>
  <div class="slide w-full py-8 px-10 max-w-[1360px] min-h-[720px] mx-auto rounded-[50px] overflow-hidden bg-white flex flex-col">
    <header class="slider-header flex items-center justify-between">
      <LogoIcon />
    </header>
    
    <div class="slider-content flex-grow flex items-center justify-center">
      <component :is="currentSlide" />
    </div>
    
    <footer class="slider-footer flex items-center gap-7">
      <div class="pagination flex gap-1 grow">
        <div v-for="(slide, index) in slides" :key="index" 
             class="bullet h-[5px] grow rounded transition-colors duration-300" 
             :class="{'bg-primary': currentIndex === index, 'bg-[#E9ECFF]': currentIndex !== index}">
        </div>
      </div>
      <button 
        class="min-w-[140px] h-[50px] bg-primary-dark text-white text-[18px] px-4 py-2 rounded-[40px] hover:bg-blue-700" 
        @click="nextSlide">
        {{ currentIndex === slides.length - 1 ? 'Отправить' : 'Далее' }}
      </button>
    </footer>
  </div>
</template>

<script setup>
import { ref, markRaw } from 'vue';
import Slide1 from './slides/Slide1.vue';
import Slide2 from './slides/Slide2.vue';
import Slide3 from './slides/Slide3.vue';
import Slide4 from './slides/Slide4.vue';
import Slide5 from './slides/Slide5.vue';
import Slide6 from './slides/Slide6.vue';
import Slide7 from './slides/Slide7.vue';
import Slide8 from './slides/Slide8.vue';
import LogoIcon from './icons/LogoIcon.vue';

const slides = [
  markRaw(Slide1),
  markRaw(Slide2),
  markRaw(Slide3),
  markRaw(Slide4),
  markRaw(Slide5),
  markRaw(Slide6),
  markRaw(Slide7),
  markRaw(Slide8)
];
const currentIndex = ref(0);
const currentSlide = ref(slides[currentIndex.value]);

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