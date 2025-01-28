<template>
  <section class="relative pt-5 xl:pt-[78px] lg:pt-[40px] xl:pb-[150px] pb-[40px]">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-5">
        <!-- Левый блок с контентом -->
        <div class="lg:w-[55%] w-full lg:max-w-[777px]">
          <span class="text-dark-secondary lg:text-3xl tracking-[12px] uppercase font-normal xl:mb-9 mb-5 block">
            exchange
          </span>
          <h1 class="2xl:text-6xl xl:text-5xl sm:text-4xl text-2xl leading-[1.2] font-bold text-dark-deep xl:mb-11 mb-5">
            Обмен недвижимостью
          </h1>
          <p class="text-[#426BFF] 2xl:text-2xl lg:text-xl text-lg font-medium max-w-[608px] xl:mb-11 mb-5">
            Станьте собственником недвижимости в другой стране не расплачиваясь за нее
          </p>
          
          <!-- Форма поиска -->
          <div class="flex gap-4">
            <div class="flex items-center w-full max-w-[460px] bg-white rounded-[60px] border-divider-light border 2xl:py-5 py-3 2xl:pr-10 pr-5 flex-1 transition-all duration-300 hover:shadow-[0px_0px_0px_1px_#4460F6] hover:border-transparent">
              <div class="flex items-center flex-1">
                <SearchFormIcon class="text-primary ml-2 mr-3 h-6 xl:h-auto" />
                <div class="hidden lg:block w-[1px] h-[32px] bg-[#7974E7]"></div>
                <input 
                  type="text" 
                  placeholder="Поиск" 
                  class="flex-1 lg:px-4 lg:max-w-[260px] max-w-full outline-none xl:text-xl text-lg text-dark"
                />
              </div>
              <button type="submit" class="hidden lg:block text-dark-deep rounded-[8px] 2xl:text-2xl xl:text-xl text-lg transition-colors hover:text-primary">
                Найти
              </button>
            </div>
            <ExchangeButton isWide class="hidden xl:flex" />
          </div>
        </div>

        <!-- Правый блок с изображением -->
        <div class="hidden lg:block max-w-[45%] w-[800px]">
          <img src="~/assets/images/hero/hero-image.jpg" alt="Обмен недвижимостью" class="w-full rounded-[20px]">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { SearchFormIcon } from '@/components/icons/icons.js'
  import ExchangeButton from '@/components/ui/ExchangeButton.vue'
</script> 