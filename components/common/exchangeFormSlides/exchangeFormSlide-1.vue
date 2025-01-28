<template>
  <div class="flex flex-col justify-center max-w-[600px] h-full">
    <h2 class="slide-custom__title xl:mb-6 mb-3 text-left">Вы хотите обменять свое жилье?</h2>
    <p class="slide-custom__description xl:text-base text-sm mb-[90px]">
      На нашей платформе вы можете разместить свое
      объявление и ответить на несколько вопросов об интересующем вас варианте обмена, после чего сервис сам предложит вам варианты обмена!
    </p>
    <div class="flex gap-4 justify-center">
      <label class="flex items-center">
        <input 
          type="radio" 
          value="yes" 
          :checked="selectedOption === 'yes'" 
          @change="updateSelection('yes')" 
          class="hidden" 
        />
        <span :class="{'bg-primary text-white': selectedOption === 'yes', 'text-blue-600': selectedOption !== 'yes'}" 
              class="flex items-center justify-center xl:w-[250px] xl:h-[92px] w-[100px] h-[100px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition border-[1px] border-primary xl:text-lg text-sm">
          Да
        </span>
      </label>
      <label class="flex items-center">
        <input 
          type="radio" 
          value="no" 
          :checked="selectedOption === 'no'" 
          @change="updateSelection('no')" 
          class="hidden" 
        />
        <span :class="{'bg-primary text-white': selectedOption === 'no', 'text-blue-600': selectedOption !== 'no'}" 
              class="flex items-center justify-center xl:w-[250px] xl:h-[92px] w-[100px] h-[100px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition border-[1px] border-primary xl:text-lg text-sm">
          Нет
        </span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedOption = ref('yes');

const updateSelection = (value) => {
  selectedOption.value = value;
};
</script>