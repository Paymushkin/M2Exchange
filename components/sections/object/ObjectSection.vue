<template>
  <div class="flex flex-col">
    <!-- Заголовок -->
    <h1 class="mb-4 text-xl lg:text-3xl 2xl:text-[40px] leading-[1.3] font-bold">
      {{ object.title }}
    </h1>

    <!-- Основной контент -->
    <div class="flex flex-col lg:flex-row lg:gap-6 gap-12 min-h-[500px] w-full lg:mb-20 mb-10">
      <!-- Слайдер -->
      <div id="object-slider" class="grow rounded-lg relative">
        <UCarousel 
          :items="object.images" 
          arrows 
          indicators 
          :ui="{ 
            item: 'w-full', 
            indicators: {
              wrapper: 'flex justify-center items-center gap-2 absolute bottom-[-20px]'
            }
          }"
          :prev-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-left-20-solid',
            class: 'arrow-slider arrow-prev hover:scale-110 transition-transform duration-300'
          }"
          :next-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-right-20-solid',
            class: 'arrow-slider arrow-next hover:scale-110 transition-transform duration-300'
          }"
        >
          <template #default="{ item }">
            <img 
              :src="item" 
              class="w-full h-full object-cover rounded-lg"
              alt="Изображение объекта"
            >
          </template>

          <template #indicator="{ active }">
            <div 
              class="grow h-1 rounded-full transition-colors duration-300" 
              :class="active ? 'bg-primary' : 'bg-[#E9ECFF]'"
            />
          </template>
        </UCarousel>
      </div>

      <!-- Информация об объекте -->
      <ObjectCardInfo :object="object" />
    </div>

    <ObjectCardDescription :object="object" class="mb-7" />

    <UDivider class="mb-7" />

    <ObjectCardComfort :object="object" class="mb-7" />

    <ObjectCardLocation :object="object" class="mb-7" />

    <UModal />

  </div>
</template>

<script setup>
import locationImage from '/assets/images/object/big-item.png'
import { LocationIcon, ArrowNextIcon, ArrowPrevIcon } from '@/components/icons/icons.js'
import ObjectCardInfo from '@/components/sections/object/ObjectCardInfo.vue'
import ObjectCardDescription from '@/components/sections/object/ObjectCardDescription.vue'
import ObjectCardComfort from '@/components/sections/object/ObjectCardComfort.vue'
import ObjectCardLocation from '@/components/sections/object/ObjectCardLocation.vue'

const object = {
  title: 'Роскошная вилла в Испании с бассейном',
  description: `Эксклюзивные виллы на продажу в элитном жилом комплексе на юго-западном побережье Тенерифе. 
    Это лимитированная коллекция из 12 великолепных особняков, каждый из которых имеет собственный бассейн с зоной для загара. <br><br>
    Атмосфера здесь очень уединенная, и вы можете полюбоваться потрясающими видами. Неподалеку находится теннисная академия Аннабель Крофт, 
    окруженная блестящим полем для гольфа, спроектированным Дэйвом Томасом. Комплекс непременно привлечет тех, кто стремится найти для себя самое модное жилье.<br><br> 
    Земельный участок занимает 594 м2, а жилая площадь составляет около 272 м2 и распределена на двух уровнях.<br><br>
    На первом этаже находится большая гостиная и столовая с прямым выходом на открытую и крытую террасы к красивому бассейну. Открытая и светлая кухня с качественной техникой и большим количеством места для приготовления пищи.`,
  price: '850 000',
  currency: '$',
  location: `Carrer de Lluís Peixó,<br>46011 Валенсия`,
  bedrooms: 4,
  bathrooms: 3,
  area: 200,
  plotArea: 1000,
  type: 'Апартаменты',
  comfort: [
    'Бассейн',
    'Парковка',
    'Кондиционер',
    'Бесплатный Wi-Fi',
    'Бесплатный Wi-Fi'
  ],
  images: [
    locationImage,
    locationImage,
    locationImage,
    locationImage,
    locationImage,
    locationImage
  ],
  coordinates: [39.4699, -0.3763]
}
</script>