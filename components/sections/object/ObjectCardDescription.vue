<template>
    <!-- Описание -->
    <div class="flex flex-col gap-4 lg:max-w-[66%] w-full">
      <h2 class="text-dark lg:text-4xl sm:text-2xl text-xl font-bold">Описание объекта</h2>
      <p class="sm:text-sm text-xs" v-html="object.description" />
    </div>
</template>

<script setup>

const props = defineProps({
  object: Object
})

</script>