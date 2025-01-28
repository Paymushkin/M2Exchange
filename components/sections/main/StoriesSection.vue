<template>
  <section class="xl:mb-20 mb-5">
      <div class="container custom-container mx-auto">
        <h3 class="2xl:text-[42px] lg:4xl text-2xl leading-[1.2] font-semibold text-primary-darker 2xl:mb-10 xl:mb-8 mb-5">M2 stories</h3>
        <ul 
            ref="scrollContainer"
            class="flex 2xl:gap-10 xl:gap-6 gap-4 overflow-x-auto scrollbar-hide scroll-grab"
            @mousedown="startDragging"
            @mousemove="drag"
            @mouseup="stopDragging"
            @mouseleave="stopDragging"
        >
            <li
                v-for="story in stories" 
                :key="story.id"
            >
                <NuxtLink :to="story.link" class="flex flex-col items-center gap-4">
                    <div :style="{ backgroundImage: `url(${story.image})` }" class="story-item"></div>
                    <span class="2xl:text-lg xl:text-base text-xs font-medium text-dark-deeper">
                        {{ story.title }}
                    </span>
                </NuxtLink>
            </li>

        </ul>
    </div>
  </section>
</template>

<script setup>
import { useDragScroll } from '@/composables/useDragScroll'
const { scrollContainer, startDragging, stopDragging, drag } = useDragScroll()
const stories = [
  {
    id: 1,
    title: 'О сервисе',
    image: new URL('@/assets/images/stories/story-1.png', import.meta.url).href,
    link: '/story',
  },
  {
    id: 2,
    title: 'Места',
    image: new URL('@/assets/images/stories/story-1.png', import.meta.url).href,
    link: '/story',
  },
  {
    id: 3,
    title: 'Виллы',
    image: new URL('@/assets/images/stories/story-1.png', import.meta.url).href,
    link: '/story',
  },
    {
    id: 4,
    title: 'Условия',
    image: new URL('@/assets/images/stories/story-1.png', import.meta.url).href,
    link: '/story',
  },
  {
    id: 5,
    title: 'Jakarta',
    image: new URL('@/assets/images/stories/story-1.png', import.meta.url).href,
    link: '/story',
  },
  {
    id: 6,
    title: 'Виллы',
    image: new URL('@/assets/images/stories/story-1.png', import.meta.url).href,
    link: '/story',
  },
    {
    id: 7,
    title: 'О сервисе',
    image: new URL('@/assets/images/stories/story-1.png', import.meta.url).href,
    link: '/story',
  },
  {
    id: 8,
    title: 'Места',
    image: new URL('@/assets/images/stories/story-1.png', import.meta.url).href,
    link: '/story',
  },
  {
    id: 9,
    title: 'Виллы',
    image: new URL('@/assets/images/stories/story-1.png', import.meta.url).href,
    link: '/story',
  },
    {
    id: 10,
    title: 'О сервисе',
    image: new URL('@/assets/images/stories/story-1.png', import.meta.url).href,
    link: '/story',
  }
];
</script>

<style scoped>
.story-item {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #F5F4F8;
    background-size: cover;
    background-position: center;
    border: 4px solid #6284FF;
    transition: border-color 0.3s ease;
    cursor: pointer;

    @media (max-width: 1280px) {
        width: 90px;
        height: 90px;
    }

    @media (max-width: 640px) {
        width: 70px;
        height: 70px;
        border-width: 2px;
    }
}

.story-item:hover {
    border-color: #FB7C61;
}
</style>
