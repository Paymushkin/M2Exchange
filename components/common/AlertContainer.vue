<template>
  <div class="fixed top-6 left-6 right-6 max-w-full z-[999]">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div class="flex justify-end w-full">
        <UnpublishAlert v-if="alertStore.showUnpublishAlert" />
        <DeleteAlert v-if="alertStore.showDeleteAlert" />
        <ShareAlert v-if="alertStore.showShareAlert" />
        <FavoriteAlert
          v-if="alertStore.showFavoriteAlert"
          :title="alertStore.favoriteAlertData.title"
          :description="alertStore.favoriteAlertData.description"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useAlertStore } from '@/stores/alertStore'
import UnpublishAlert from '@/components/common/alerts/UnpublishAlert.vue'
import DeleteAlert from '@/components/common/alerts/DeleteAlert.vue'
import ShareAlert from '@/components/common/alerts/ShareAlert.vue'
import FavoriteAlert from '@/components/common/alerts/FavoriteAlert.vue'

const alertStore = useAlertStore()
</script>
