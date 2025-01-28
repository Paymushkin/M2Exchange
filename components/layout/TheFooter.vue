<template>
  <footer class="bg-background-light xl:py-12 py-5 xl:rounded-t-[30px]">
    <div class="container mx-auto flex flex-col items-center">
      <div class="flex items-center w-full xl:mb-[72px] mb-5">

        <TheLogo class="mr-[78px]"/>

        <TheNavigation />

        <div class="flex items-center ml-auto gap-10">
          <span class="hidden xl:block text-black text-sm font-bold">Social</span>
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
      <div class="flex gap-2 xl:gap-0 xl:items-center items-start mt-5 w-full xl:text-base text-xs text-center text-gray-600">
        <div class="flex flex-col-reverse lg:flex-row gap-2 xl:gap-0 items-start xl:items-center">
          <p>&copy; {{ new Date().getFullYear() }} <b>m2 exchange</b></p>
          <div class="flex flex-col sm:flex-row xl:ml-[95px] items-start xl:gap-9 gap-2 xl:text-base text-xs">
            <a href="/privacy" class="hover:underline">Конфиденциальность</a>
            <a href="/terms" class="hover:underline">Условия</a>
            <a href="/download" class="hover:underline">Скачать приложение</a>
          </div>
        </div>
        <div class="flex flex-col-reverse lg:flex-row xl:items-center items-end ml-auto xl:gap-9 gap-2">
          <div class="flex items-center xl:gap-2 gap-1">
            <GlobeIconMini class="xl:h-auto h-4" />
            <span class="ml-1">Русский</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="ml-1">Поддержка и вопросы</span>
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