<template>

    <div 
        class="flex flex-col justify-center xl:pl-[145px] p-5 rounded-[20px] w-full xl:h-[280px] h-[200px] bg-[#6284FF] bg-cover bg-right bg-no-repeat"
        :style="{ backgroundImage: `url(${image})` }"
    >
        <div class="flex flex-col lg:gap-8 gap-2 max-w-[600px]">
            <h3 class="text-white xl:text-[40px] sm:text-xl text-sm leading-[1.2] font-semibold">Поменяйтесь домами и начните новую жизнь!</h3>
            <div class="flex flex-col lg:flex-row lg:items-center items-start xl:gap-8 gap-4">
                <p class="text-white sm:text-base text-xs max-w-[300px]">Сделайте переезд легким с нашим приложением</p>
                <AccentButton>
                    <span class="sm:text-sm text-xs font-semibold">Узнать больше</span>
                </AccentButton>
            </div>
        </div>
    </div>

</template>

<script setup>
import AccentButton from '@/components/ui/AccentButton.vue'
import image from '@/assets/images/banners/item-1.png'
</script>