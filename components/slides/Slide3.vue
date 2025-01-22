<template>
  <div class="flex flex-col items-center justify-center max-w-[970px] h-full">
    <h2 class="custom-title mb-6 text-center">Тип объекта</h2>
    <p class="description text-base mb-6 text-center">
      Выберите одну или несколько категорий интересующей вас недвижимости
    </p>
    
    <div class="flex flex-wrap justify-center gap-4">
      <RadioButton 
        v-for="button in buttons" 
        :key="button.value" 
        :value="button.value" 
        name="property-type" 
        v-model="selectedType">
        {{ button.label }}
      </RadioButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from '~/components/ui/RadioButton.vue';

const selectedType = ref('all');

const buttons = [
  { value: 'all', label: 'Все' },
  { value: 'apartments', label: 'Апартаменты' },
  { value: 'houses', label: 'Дома' },
  { value: 'villas', label: 'Виллы' },
  { value: 'bungalows', label: 'Бунгало' },
  { value: 'townhouses', label: 'Таунхаус' },
  { value: 'country-house', label: 'Деревенский дом' },
  { value: 'mansion', label: 'Особняк' },
  { value: 'farm', label: 'Ферма' },
  { value: 'apartment', label: 'Квартира' },
  { value: 'duplex', label: 'Двухквартирный дом' },
  { value: 'land-plot', label: 'Земельный участок' },
  { value: 'hotels', label: 'Гостиницы и отели' },
  { value: 'commercial', label: 'Коммерческая недвижимость' },
  { value: 'industrial', label: 'Промышленная недвижимость' }
];
</script>

<style scoped>
.custom-title {
  color: #202020;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
}

.description {
  max-width: 560px;
  color: #8C8B8B;
  font-size: 16px;
  line-height: 1.2;
}
</style> 