<template>
  <section class="mb-[100px]">
    <div class="container mx-auto">
      <div class="flex justify-between gap-5 bg-[#F0F3FE] rounded-[85px] py-16 px-[70px]">
        <div class="flex flex-col items-start gap-6 min-w-[570px]">
            <h2 class="h2-custom text-4xl font-bold text-dark mb-5">
                Поможем найти лучший вариант
            </h2>
            
            <h3 class="text-3xl text-dark mb-70">
                Обмена квартиры или дома в любой точке мира на Испанию
            </h3>

            <ExchangeButton />
        </div>

        <div class="flex flex-col items-start gap-12 grow">
            <div class="border border-primary-lighter rounded-[40px] py-3 px-5 font-medium text-dark-deeper text-xl">
                Обмен недвижимостью
            </div>
          
          <div class="flex flex-col gap-4 text-lg text-dark-deeper">
            <p>это форма сделки, при которой вы не платите за дом, а вместо этого совершаете прямой обмен вашей собственности на другую.
            Подобная сделка заключается в подписании контракта, который обязывает каждую сторону передать свою недвижимость другой без денежного обмена. Возможен обмен вилл, квартир, или любого другого типа жилья. Если вы хотите поменять свою недвижимость, но без необходимости платить за новый дом, более удобной альтернативой для вас может стать обмен недвижимости.
            </p>
            <p>Если вы хотите поменять свою недвижимость, но без необходимости платить за новый дом, более удобной альтернативой для вас может стать обмен недвижимости.
            </p>
        </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ExchangeButton from '@/components/ui/ExchangeButton.vue'
</script> 

<style scoped>

</style>