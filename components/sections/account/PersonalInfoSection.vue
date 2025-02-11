<template>
  <div id="personal" class="flex flex-col items-start gap-5">
		<form action="" class="flex flex-col gap-4 max-w-[550px] w-full">
			<div class="flex items-center sm:gap-6 gap-3">
				<input ref="avatarInput" type="file" @change="onAvatarChange" hidden accept="image/*" />
				<label for="avatar">
					<img :src="userData.avatarUrl || defaultAvatar" alt="Avatar" class="sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] rounded-full border-[3px] border-[#D1CFFF] cursor-pointer" />
				</label>

				<div class="flex flex-col sm:gap-2 gap-1">
					<h2 class="text-dark sm:text-2xl text-lg font-semibold">Hi, {{ userData.firstName || 'User' }}!</h2>
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
				<div class="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-2 max-w-[550px] w-full">
					<input class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 text-sm grow" v-model="userData.firstName" placeholder="Имя" />
					<input class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 text-sm grow" v-model="userData.lastName" placeholder="Фамилия" />
					<input class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 text-sm grow" v-model="userData.email" placeholder="Email" />
					<input class="border border-[#E9E8E8] rounded-sm h-[50px] p-3 text-sm grow" v-model="userData.phone" placeholder="Телефон" />
					<RoundedStandartButton type="submit" @click="save" class="grow mt-4">
						<span class="sm:text-sm text-xs font-medium">Сохранить</span>
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
