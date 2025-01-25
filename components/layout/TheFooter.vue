<template>
  <footer class="bg-footer py-12 rounded-t-[30px]">
    <div class="container mx-auto flex flex-col items-center">
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
      <div class="w-full h-[1px] bg-gray-200"></div>
      <div class="flex items-center mt-5 w-full text-center text-gray-600">
        <p>&copy; {{ new Date().getFullYear() }} <b>m2 exchange</b></p>
        <div class="flex ml-[95px] gap-9">
          <a href="/privacy" class="hover:underline">Конфиденциальность</a>
          <a href="/terms" class="hover:underline">Условия</a>
          <a href="/download" class="hover:underline">Скачать приложение</a>
        </div>
        <div class="flex items-center ml-auto gap-8">
          <div class="flex items-center gap-2">
            <GlobeIconMini />
            <span class="ml-1">Русский</span>
          </div>
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
import TheLogo from '@/components/common/TheLogo.vue'
import TheNavigation from '@/components/common/TheNavigation.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import GlobeIconMini from '@/components/icons/GlobeIconMini.vue'
import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue'
</script>