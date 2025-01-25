<template>
  <div class="flex flex-col max-w-[600px] h-full">
    <h2 class="custom-title mb-6 text-left">Вы хотите обменять свое жилье?</h2>
    <p class="description text-base mb-[90px]">
      На нашей платформе вы можете разместить свое
      объявление и ответить на несколько вопросов об интересующем вас варианте обмена, после чего сервис сам предложит вам варианты обмена!
    </p>
    <div class="flex gap-4">
      <label class="flex items-center">
        <input 
          type="radio" 
          value="yes" 
          :checked="selectedOption === 'yes'" 
          @change="updateSelection('yes')" 
          class="hidden" 
        />
        <span :class="{'bg-primary text-white': selectedOption === 'yes', 'text-blue-600': selectedOption !== 'yes'}" 
              class="flex items-center justify-center w-[250px] h-[92px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition border-[1px] border-primary text-[20px]">
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
              class="flex items-center justify-center w-[250px] h-[92px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition border-[1px] border-primary text-[20px]">
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