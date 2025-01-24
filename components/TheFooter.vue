<template>
  <footer class="bg-footer py-12 rounded-t-[30px]">
    <div class="container mx-auto flex flex-col items-center">
      <!-- Верхняя часть подвала -->
      <div class="flex items-center w-full mb-[72px]">
        <TheLogo class="mr-[78px]"/>
        <TheNavigation />
        <div class="flex items-center ml-auto gap-10">
          <span class="text-black text-sm font-bold">Social</span>
          <div class="flex items-center gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <!-- Разделитель -->
      <div class="w-full h-[1px] bg-gray-200"></div>
      <!-- Нижняя часть подвала -->
      <div class="flex items-center mt-5 w-full text-center text-gray-600">
        <p>&copy; {{ new Date().getFullYear() }} <b>m2 exchange</b></p>
        <div class="flex ml-[95px] gap-9">
          <a href="/privacy" class="hover:underline">Конфиденциальность</a>
          <a href="/terms" class="hover:underline">Условия</a>
          <a href="/download" class="hover:underline">Скачать приложение</a>
        </div>
        <div class="flex items-center ml-auto gap-8">
          <!-- Переключатель языка -->
          <div class="flex items-center gap-2">
            <GlobeIconMini />
            <span class="ml-1">Русский</span>
          </div>
          <!-- Блок с текстом 'Поддержка и вопросы' -->
          <div class="flex items-center gap-2">
            <span class="ml-1">Поддержка и вопросы</span>
            <ChevronDownIcon />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import TheLogo from './TheLogo.vue'
import TheNavigation from './TheNavigation.vue'
import InstagramIcon from './icons/InstagramIcon.vue'
import FacebookIcon from './icons/FacebookIcon.vue'
import GlobeIconMini from './icons/GlobeIconMini.vue'
import ChevronDownIcon from './icons/ChevronDownIcon.vue'
</script>

<style scoped>
/* Добавьте стили, если необходимо */
</style> 