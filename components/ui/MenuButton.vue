<template>
	<button
		class="flex flex-col gap-[8px] cursor-pointer relative w-[28px] h-[20px]"
		@click="toggleMenu"
	>
		<span
			class="absolute w-[24px] h-[3px] bg-dark rounded-full transition-all duration-300"
			:class="{
				'rotate-45 top-[8px]': isOpen,
				'top-0': !isOpen
			}"
		></span>
		<span
			class="absolute w-[19px] h-[3px] bg-dark rounded-full top-[8px] transition-all duration-300"
			:class="{ 'opacity-0': isOpen }"
		></span>
		<span
			class="absolute w-[24px] h-[3px] bg-dark rounded-full transition-all duration-300"
			:class="{
				'-rotate-45 top-[8px]': isOpen,
				'top-[16px]': !isOpen
			}"
		></span>
	</button>
</template>

<script setup>
defineProps({
	isOpen: {
		type: Boolean,
		default: false
	}
})

const emit = defineEmits(['toggle'])

const toggleMenu = () => {
	emit('toggle')
}
</script>

<style scoped>
.menu-button {
	@apply relative w-[28px] h-[20px] cursor-pointer;
}

.menu-line {
	@apply absolute h-[2.5px] bg-dark rounded-full transition-all duration-300;
}

.menu-line.top {
	@apply w-[28px] top-0;
}

.menu-line.middle {
	@apply w-[22px] top-[8px];
}

.menu-line.bottom {
	@apply w-[28px] top-[16px];
}

.is-open .menu-line.top {
	@apply rotate-45 top-[8px];
}

.is-open .menu-line.middle {
	@apply opacity-0;
}

.is-open .menu-line.bottom {
	@apply -rotate-45 top-[8px];
}
</style>
