<template>
  <section class="relative">
    <div class="container mx-auto px-4 py-16">
      <div class="flex items-center justify-between">
        <!-- Левый блок с контентом -->
        <div class="w-[55%] max-w-[777px]">
          <span class="text-dark-secondary text-[28px] leading-[34px] tracking-[12px] uppercase font-normal mb-9 block">
            exchange
          </span>
          <h2 class="h2-custom text-[77px] leading-[80px] font-bold text-dark-deep mb-11">
            Обмен недвижимостью
          </h2>
          <p class="text-[#426BFF] text-[26px] leading-[36px] font-medium max-w-[608px] mb-11">
            Станьте собственником недвижимости в другой стране не расплачиваясь за нее
          </p>
          
          <!-- Форма поиска -->
          <div class="flex gap-4">
            <div class="flex items-center max-w-[460px] bg-white rounded-[60px] border-divider-light border py-5 pr-10 pl-5 flex-1 transition-all duration-300 hover:shadow-[0px_0px_0px_1px_#4460F6] hover:border-transparent">
              <div class="flex items-center flex-1">
                <SearchIconForm class="text-primary ml-2 mr-3" />
                <div class="w-[1px] h-[32px] bg-[#7974E7]"></div>
                <input 
                  type="text" 
                  placeholder="Поиск" 
                  class="flex-1 px-4 max-w-[260px] outline-none text-[22px] leading-[32px] text-dark"
                />
              </div>
              <button type="submit" class="text-dark-deep rounded-[8px] text-[25px] leading-[34px] transition-colors hover:text-primary">
                Найти
              </button>
            </div>
            <ExchangeButton isWide/>
          </div>
        </div>

        <!-- Правый блок с изображением -->
        <div class="max-w-[40%] xl:w-[800px]">
          <img src="~/assets/images/hero/hero-image.jpg" alt="Обмен недвижимостью" class="w-full rounded-[20px]">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SearchIconForm from '~/components/icons/SearchIconForm.vue'
import ExchangeButton from '~/components/buttons/ExchangeButton.vue'
</script> 