<template>
  <div class="payment-card">
    <div class="flex items-center justify-between mb-4">
      <h4 class="text-sm font-medium">Новая карта</h4>
      <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
        <span class="text-xl">&times;</span>
      </button>
    </div>

    <form class="flex flex-col">
      <input
        type="text"
        class="text-sm font-semibold border border-[#D9E3FF] rounded-sm px-4 py-2 mb-3"
        placeholder="Номер карты"
      >

      <div class="flex justify-between gap-2">
        <div class="flex flex-col">
          <label class="text-[#9CA3C5] text-[10px]">CVC/CVV</label>
          <input
            type="password"
            class="border border-[#D9E3FF] text-sm rounded-sm px-4 py-2 w-20"
            placeholder="***"
          >
        </div>
        <div class="flex flex-col">
          <label class="text-[#9CA3C5] text-[10px]">Срок действия</label>
          <input
            type="text"
            class="border border-[#D9E3FF] text-sm rounded-sm px-4 py-2 w-20"
            placeholder="ММ/ГГ"
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>
