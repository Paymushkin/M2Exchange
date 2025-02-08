<template>
  <div class="flex flex-col items-start gap-5">
		<form action="" class="flex flex-col gap-4 w-[550px] max-w-full">
			<div class="flex items-center gap-6">
				<input ref="avatarInput" type="file" @change="onAvatarChange" hidden accept="image/*" />
				<label for="avatar">
					<img :src="userData.avatarUrl || defaultAvatar" alt="Avatar" class="w-[100px] h-[100px] rounded-full border-[3px] border-[#D1CFFF] cursor-pointer" />
				</label>

				<div class="flex flex-col gap-2">
					<h2 class="text-dark text-2xl font-semibold">Hi, <br> {{ userData.firstName || 'User' }}!</h2>
					<button
						type="button"
						@click="$refs.avatarInput.click()"
						class="flex justify-center items-center bg-dark text-white text-xs rounded-full px-4 py-1"
					>
						<span v-if="userData.avatarUrl">Изменить фото</span>
						<span v-else>Добавить фото</span>
					</button>
				</div>

			</div>
				<div class="grid grid-cols-2 gap-x-6 gap-y-2 w-[550px] max-w-full">
					<input class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 text-sm grow" v-model="userData.firstName" placeholder="Имя" />
					<input class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 text-sm grow" v-model="userData.lastName" placeholder="Фамилия" />
					<input class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 text-sm grow" v-model="userData.email" placeholder="Email" />
					<input class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 text-sm grow" v-model="userData.phone" placeholder="Телефон" />
					<RoundedStandartButton type="submit" @click="save" class="grow mt-4">
						<span class="text-sm font-medium">Сохранить</span>
					</RoundedStandartButton>
				</div>
		</form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import userAvatar from '@/assets/images/avatars/avatar.png'
import defaultAvatar from '@/assets/images/avatars/default-avatar.svg'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

const userData = reactive({
  firstName: 'Жанна',
  lastName: 'Воронова',
  email: 'voronova@gmail.com',
  phone: '+79999999999',
  avatarUrl: userAvatar
})

const onAvatarChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    userData.avatarUrl = URL.createObjectURL(file)
  }
}

const save = () => {
  // Логика сохранения данных
}
</script>
