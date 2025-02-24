<template>
    <div class="fixed inset-0 flex items-center justify-center bg-white z-50">
        <LogoIcon
            class="loader-logo"
            :width="120"
            :height="44"
            color="#4765FF"
        />
    </div>
</template>

<script setup>
import LogoIcon from '@/components/icons/LogoIcon.vue'
</script>

<style scoped>
.loader-logo {
    animation: pulse 1.5s ease-in-out infinite;
}

.loader-logo :deep(.logo-path) {
    animation: pathFill 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(0.95);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes pathFill {
    0% {
        fill-opacity: 1;
    }
    50% {
        fill-opacity: 0.5;
    }
    100% {
        fill-opacity: 1;
    }
}
</style>
