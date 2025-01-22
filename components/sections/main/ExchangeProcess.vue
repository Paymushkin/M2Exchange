<template>
  <section class="exchange-process">
    <h2 class="section-title text-4xl font-bold text-dark mb-16 text-center">
      Как происходит обмен?
    </h2>
    
    <div class="exchange-process__steps flex justify-between items-start mx-auto px-4">
      <div class="exchange-process__step flex flex-col items-center relative w-1/4">
        <div class="w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-3">
          <div class="step-number font-bold text-customColor">01</div>
          <h3 class="step-title text-xl font-semibold text-black">
            Оставьте
            <br />
            заявку
          </h3>
          <p class="step-description grow text-base text-dark-deeper">
            Оставьте заявку на обмен заполнив краткую форму с данными о вашем объекте
          </p>
          <div class="step-arrow">
            <ArrowIcon />
          </div>
        </div>
      </div>

      <div class="exchange-process__step flex flex-col items-center relative w-1/4">
        <div class="w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-3">
          <div class="step-number font-bold text-customColor">02</div>
          <h3 class="step-title text-xl font-semibold text-black">
            Проверим чистоту и
            <br />
            подлинность
          </h3>
          <p class="step-description grow text-base text-dark-deeper">
            Мы проверим его на юридическую чистоту и подлинность, после чего добавим в базу
          </p>
          <div class="step-arrow">
            <ArrowIcon />
          </div>
        </div>
      </div>

      <div class="exchange-process__step flex flex-col items-center relative w-1/4">
        <div class="w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-3">
          <div class="step-number font-bold text-customColor">03</div>
          <h3 class="step-title text-xl font-semibold text-black">
            Подбор
            <br />
            вариантов
          </h3>
          <p class="step-description grow text-base text-dark-deeper">
            Система подберет релевантные объекты в другом стране, подходящие по параметрам для обмена
          </p>
          <div class="step-arrow">
            <ArrowIcon />
          </div>
        </div>
      </div>

      <div class="exchange-process__step flex flex-col items-center relative w-1/4">
        <div class="w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-2">
          <div class="step-number font-bold text-customColor">04</div>
          <h3 class="step-title text-xl font-semibold text-black">
            От переговоров
            <br />
            до
          </h3>
          <p class="step-description grow text-base text-dark-deeper">
            Когда вы выберите вариант, в случае если другой собственник будет также заинтересован вашим объектом, мы проведем сделку от переговоров до передачи ключей
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
</script>

<style scoped>
.exchange-process {
  padding: 60px 0;
}

.exchange-process__steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.exchange-process__step {
  flex: 1;
  position: relative;
  padding: 20px;
  text-align: center;
  max-width: 280px;
}

.step-number {
  font-size: 44px;
  color: #CCDAEF;
}

.step-title {
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
}

.step-description {
  font-size: 16px;
  line-height: 1.4;
  color: #535151;
}

.step-arrow {
  margin-top: 10px; /* Отступ для стрелки */
}

@media (max-width: 768px) {
  .exchange-process__steps {
    flex-direction: column;
    align-items: center;
  }

  .exchange-process__step {
    margin-bottom: 30px;
  }

  .step-arrow {
    margin-top: 10px; /* Отступ для стрелки */
  }
}
</style>