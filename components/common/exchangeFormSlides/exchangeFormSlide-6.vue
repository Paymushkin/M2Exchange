<template>
  <div class="flex flex-col items-start justify-center h-full max-w-[420px]">
    <h2 class="slide-custom__title mb-6 text-left">Добавьте фото</h2>
    <p class="slide-custom__description text-base mb-6">
      Добавьте как минимум 4 фотографии с названиями. Чем больше фото вы разместите, тем выше шанс найти вариант на обмен.
    </p>
    
    <div class="flex flex-wrap gap-3">
      <div class="flex-item flex-item__wide"
        @click="selectFile(0)"
      >
        <PlusIcon />
        <input type="file" accept="image/*" @change="handleFileChange(0)" class="hidden" ref="fileInput0" />
      </div>
      <div class="flex-item flex-item__small"
        @click="selectFile(1)"
      >
        <PlusIcon />
        <input type="file" accept="image/*" @change="handleFileChange(1)" class="hidden" ref="fileInput1" />
      </div>
      <div class="flex-item flex-item__small"
        @click="selectFile(2)"
      >
        <PlusIcon />
        <input type="file" accept="image/*" @change="handleFileChange(2)" class="hidden" ref="fileInput2" />
      </div>
      <div class="flex-item flex-item__wide"
        @click="selectFile(3)"
      >
        <PlusIcon />
        <input type="file" accept="image/*" @change="handleFileChange(3)" class="hidden" ref="fileInput3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PlusIcon } from '@/components/icons/icons.js'

const fileInput0 = ref(null);
const fileInput1 = ref(null);
const fileInput2 = ref(null);
const fileInput3 = ref(null);

const selectFile = (index) => {
  const fileInput = index === 0 ? fileInput0 : index === 1 ? fileInput1 : index === 2 ? fileInput2 : fileInput3;
  fileInput.value.click(); // Открываем диалог выбора файла
}

const handleFileChange = (index) => {
  const fileInput = index === 0 ? fileInput0 : index === 1 ? fileInput1 : index === 2 ? fileInput2 : fileInput3;
  const selectedFiles = fileInput.value.files;
  if (selectedFiles.length > 0) {
    console.log(selectedFiles[0]); // Обработка выбранного файла
  }
}
</script>

<style scoped>
.flex-item {
  padding: 12px;
  border-radius: 20px;
  background-color: #E9ECFF;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.flex-item:hover {
  background-color: #D6D9F5;
}

.flex-item__wide {
  width: 245px;
  aspect-ratio: 245 / 145;
}

.flex-item__small {
  width: 155px;
  aspect-ratio: 155 / 145;
}
</style> 