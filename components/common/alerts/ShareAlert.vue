<template>
  <UAlert
		icon="i-heroicons-share-16-solid"
    color="primary"
    variant="solid"
    class="bg-[#FB7C61] rounded-sm max-w-[600px]"
  >
    <template #title>
      <span class="sm:text-lg text-sm font-medium">Ссылка скопирована в буфер обмена</span>
    </template>
    <template #description>
      <span class="sm:text-base text-xs font-normal">Теперь вы можете поделиться объектом</span>
    </template>
  </UAlert>
</template>
