<template>
	<div class="relative">
		<router-link :to="isAuthenticated ? '/account' : '/login'" class="block">
			<img
				:src="isAuthenticated ? avatarUrl : defaultAvatarUrl"
				:alt="isAuthenticated ? 'User avatar' : 'Default avatar'"
				loading="lazy"
				placeholder="blur"
				class="min-w-[38px] h-[38px] aspect-square rounded-full object-cover"
			/>
		</router-link>

		<!-- Счетчик уведомлений -->
		<div
			v-if="notificationsCount > 0"
			class="absolute top-0 right-0 w-[14px] h-[14px] bg-[#FE8A71] rounded-full flex items-center justify-center"
		>
			<span class="text-white text-[10px] leading-none">{{ notificationsCount }}</span>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const isAuthenticated = ref(true)
const notificationsCount = ref(3)

const avatarUrl = new URL('@/assets/images/avatars/avatar.png', import.meta.url).href
const defaultAvatarUrl = new URL('@/assets/images/avatars/default-avatar.svg', import.meta.url).href
</script>
