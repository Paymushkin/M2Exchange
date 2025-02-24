<template>
	<div id="my-objects" class="flex flex-col items-start xl:gap-7 gap-4 w-full">
		<h2 class="text-dark font-semibold">Избранное</h2>
		<div v-if="items.length">
			<ul class="flex flex-wrap gap-5">
				<FavoriteListItem
					v-for="item in items"
					:key="item.id"
					:item="item"
					@update-title="(newTitle) => updateFavoriteTitle(item.id, newTitle)"
				/>
				<li class="relative flex flex-col items-start justify-between px-4 pt-7 pb-4 border border-[#E9E8E8] rounded-sm sm:max-w-[190px] grow min-h-[190px] bg-white cursor-pointer hover:border-primary hover:shadow-md transition-all duration-300">
					<h4 class="mb-2 max-w-[123px]">Новая подборка</h4>
					<button class="w-10 h-10 bg-[#D7E5FF] rounded-full cursor-pointer flex items-center justify-center">
						<PlusIcon class="w-6 h-6" />
					</button>
				</li>
			</ul>
		</div>

		<div v-if="!items.length" class="flex items-center gap-5">
			<div class="flex justify-center items-center rounded-full bg-background-light w-[100px] h-[100px]">
				<FavoriteEmptyIcon />
			</div>
			<h4 class="text-dark font-semibold">В вашем списке<br>желаний пока<br>ничего нет</h4>
			<NuxtLink to="/">
				<RoundedStandartButton>
					<span>Смотреть варианты</span>
				</RoundedStandartButton>
			</NuxtLink>
		</div>

	</div>
</template>

<script setup>
import FavoriteListItem from '@/components/common/FavoriteListItem.vue'
import { ref } from 'vue'
import { PlusIcon, FavoriteEmptyIcon } from '@/components/icons/icons'
import RoundedStandartButton from '@/components/ui/RoundedStandartButton.vue'

const items = ref([
	{
		id: 1,
		title: 'Дома Испания',
		count: 10,
	},
	{
		id: 2,
		title: 'Квартиры Канада',
		count: 4,
	},
	{
		id: 3,
		title: 'Апартаменты Испания',
		count: 12,
	},
	{
		id: 4,
		title: 'Дома Барселона',
		count: 6,
	}
])

const updateFavoriteTitle = (id, newTitle) => {
	const item = items.value.find(item => item.id === id)
	if (item) {
		item.title = newTitle
	}
}
</script>
