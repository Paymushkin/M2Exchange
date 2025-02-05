<template>
	<section>
		<div class="flex flex-col gap-4">
			<label class="text-lg text-dark font-medium">Фото объета</label>
			<div class="relative">
				<ul
				class="flex gap-4 overflow-x-auto pb-5"
			>
				<!-- Кнопка добавления фото -->
				<li class="relative lg:min-w-[300px] lg:h-[300px] min-w-[150px] h-[150px] bg-[#F8F9FF] lg:rounded-xl rounded-lg flex items-center justify-center cursor-pointer">
					<input
						type="file"
						accept="image/*"
						class="absolute inset-0 opacity-0 cursor-pointer"
						@change="handleFileUpload"
					/>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M31.6667 21.6667H21.6667V31.6667H18.3334V21.6667H8.33337V18.3333H18.3334V8.33334H21.6667V18.3333H31.6667V21.6667Z" fill="#4460F6"/>
					</svg>
				</li>

				<!-- Существующие фото -->
				<li
					v-for="(image, index) in object.images"
					:key="image.id"
					class="relative lg:min-w-[300px] lg:h-[300px] min-w-[150px] h-[150px] lg:rounded-2xl rounded-lg overflow-hidden group"
				>
					<input
						type="file"
						accept="image/*"
						class="absolute inset-0 opacity-0 cursor-pointer z-20"
						@change="handleFileUpload"
					/>
					<div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M31.6667 21.6667H21.6667V31.6667H18.3334V21.6667H8.33337V18.3333H18.3334V8.33334H21.6667V18.3333H31.6667V21.6667Z" fill="white"/>
						</svg>
					</div>
					<img
						:src="object.images[index]"
						:alt="image.id"
						class="w-full h-full object-cover"
					/>
				</li>
			</ul>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'
import { useDragScroll } from '@/composables/useDragScroll'

const props = defineProps({
	object: {
		type: Object,
		required: true
	}
})

const handleFileUpload = (event) => {
	const file = event.target.files[0]
	if (file) {
		console.log('File selected:', file)
	}
}
</script>

<style scoped>
.hide-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
	display: none;
}
</style>
