<template>
  <section class="mb-[60px]">
    <h2 class="section-title text-4xl font-bold text-dark mb-16 text-center">
      Как происходит обмен?
    </h2>
    
    <div class="max-w-[1400px] flex justify-between items-start mx-auto px-4">
      <div
        v-for="(step, index) in exchangeSteps"
        :key="index"
        class="exchange-process__step relative grow flex flex-col items-center w-1/4 max-w-[280px]"
      >
        <div class="w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center pt-10 pb-5 px-8 text-center gap-6">
          <div class="text-[44px] text-[#CCDAEF] font-bold">{{ step.number }}</div>
          <h3 class="text-xl font-semibold text-black" v-html="step.title"></h3>
          <p class="grow text-sm text-[#535151]">
            {{ step.description }}
          </p>
          <div class="step-arrow">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ArrowIcon from '~/components/icons/ArrowIcon.vue'

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

</style>