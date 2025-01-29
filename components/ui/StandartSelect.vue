<template>
    <div class="flex items-center gap-2 border border-[#D2DBF5F] rounded-xl px-5 py-3 grow max-w-[320px]">
        <Location2Icon />
        <select class="grow focus:outline-none focus:ring-2 focus:ring-[#4169E1]">
            <option v-for="(option, index) in options" :key="index">{{ option }}</option>
        </select>
    </div>
</template>

<script setup>
import {Location2Icon} from '@/components/icons/icons'
import { defineProps } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Добавьте стили, если это необходимо */
</style>