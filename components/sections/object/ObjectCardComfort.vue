<template>
    <!-- Описание -->
    <div class="flex flex-col gap-4 lg:max-w-[66%] w-full mb-10">
      <h2 class="text-dark lg:text-4xl sm:text-2xl text-xl font-bold">Удобства</h2>
      <div class="flex items-center flex-wrap gap-2">
        <TagButton v-for="item in object.comfort" :key="item.id">
          <span>{{ item }}</span>
        </TagButton>
      </div>
    </div>
</template>

<script setup>

import TagButton from '@/components/ui/TagButton.vue'

const props = defineProps({
  object: Object
})

</script>