<template>
  <section class="mb-[60px] container">
    <h2 class="2xl:text-[42px] lg:4xl text-2xl leading-[1.2] font-bold text-dark xl:mb-16 mb-5 text-center">
      Как происходит обмен?
    </h2>
    
    <ul class="steps-list mx-auto">
      <li
        v-for="(step, index) in exchangeSteps"
        :key="index"
        class="step-item relative flex flex-col items-center xl:aspect-[1/1] 2xl:pt-7 pt-4 2xl:pb-4 pb-3 px-4 2xl:px-8 text-center 2xl:gap-4 gap-3"
      >
        <div class="absolute inset-0 scale-[1.05] border-2 border-black rounded-full hidden xl:block"></div>
        <div class="2xl:text-4xl text-3xl text-[#CCDAEF] font-bold">{{ step.number }}</div>
        <h3 class="2xl:text-xl text-lg font-semibold text-black" v-html="step.title"></h3>
        <p class="grow 2xl:text-base xl:text-[14px] text-xs text-darker">
          {{ step.description }}
        </p>
        <div class="step-arrow hidden xl:block">
          <ArrowProcessIcon />
        </div>

      </li>
    </ul>
  </section>
</template>

<script setup>

import { ArrowProcessIcon } from '@/components/icons/icons.js'

const exchangeSteps = [
  {
    number: '01',
    title: 'Оставьте <br>заявку',
    description: 'Оставьте заявку на обмен, заполнив краткую форму с данными о вашем объекте'
  },
  {
    number: '02',
    title: 'Проверим чистоту и<br>подлинность',
    description: 'Мы проверим его на юридическую чистоту и подлинность, после чего добавим в базу'
  },
  {
    number: '03',
    title: 'Подбор<br>вариантов',
    description: 'Система подберет релевантные объекты в другой стране, подходящие по параметрам для обмена'
  },
  {
    number: '04',
    title: 'От переговоров<br>до',
    description: 'Когда вы выберите вариант, в случае если другой собственник будет также заинтересован вашим объектом, мы проведем сделку от переговоров до передачи ключей'
  }
]
</script>

<style scoped>
.steps-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  width: 1600px;
}

@media (max-width: 1280px) {
  .steps-list {
    grid-template-columns: repeat(2, minmax(200px, 350px));
  }
}

@media (max-width: 649px) {
  .steps-list {
    grid-template-columns: 1fr;
  }
}

.step-item {
  /* aspect-ratio: 1/1; */
}
/* .progress-item {
  width: 380px;
  aspect-ratio: 1/1;
}

@media (max-width: 1440px) {
  .progress-item {
    width: 300px;
  } */
/* }  */
        /* <div class="border-2 border-black rounded-full flex flex-col items-center pt-10 pb-5 px-8 text-center gap-6"> */

</style>
