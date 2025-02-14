<template>
  <UAlert
		icon="i-heroicons-information-circle"
    color="primary"
    variant="solid"
    class="bg-[#FB7C61] rounded-sm max-w-[600px]"
  >
    <template #title>
      <span class="sm:text-lg text-sm font-medium">Объект снят с публикации</span>
    </template>
    <template #description>
      <span class="sm:text-base text-xs font-normal">Объект больше не отображается в поиске</span>
    </template>
  </UAlert>
</template>
