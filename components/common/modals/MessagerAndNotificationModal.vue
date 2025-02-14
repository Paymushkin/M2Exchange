<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="relative bg-white md:rounded-lg w-[1465px] max-w-full md:h-[780px] h-[100svh] max-h-[100svh] flex xl:py-10 xl:px-[50px] py-5 px-5">
      <button
        @click="closeModal"
        class="absolute top-4 right-4 transition-colors duration-300 p-1 hover:bg-gray-200 rounded-full outline-none"
      >
        <CloseIcon />
      </button>
      <!-- Левая часть -->
      <div
        class="2xl:w-[540px] lg:w-[400px] md:w-[300px] w-full md:border-r border-[#EBEBEB] flex flex-col"
      >
        <!-- Переключатели -->
        <div class="flex items-center mb-4 xl:pr-10 pr-5">
          <button
            class="relative flex items-center text-dark lg:px-7 sm:px-5 px-4 lg:py-4 sm:py-3 py-2 rounded-full xl:text-lg lg:text-base text-sm"
            :class="{ 'font-medium bg-background-light': activeTab === 'messages' }"
            @click="activeTab = 'messages'"
          >
            Сообщения
            <span v-if="unreadMessages" class="absolute lg:right-2 lg:top-1 right-0 top-0 bg-accent text-white rounded-full md:w-5 md:h-5 w-4 h-4 flex items-center justify-center lg:text-xs text-xs">
              {{ unreadMessages }}
            </span>
          </button>
          <button
            class="relative flex items-center text-dark lg:px-7 sm:px-5 px-4 lg:py-4 sm:py-3 py-2 rounded-full xl:text-lg lg:text-base text-sm"
            :class="{ 'font-medium bg-background-light': activeTab === 'notifications' }"
            @click="activeTab = 'notifications'"
          >
            Уведомления
            <span v-if="unreadNotifications" class="absolute lg:right-2 lg:top-1 right-0 top-0 bg-accent text-white rounded-full md:w-5 md:h-5 w-4 h-4 flex items-center justify-center lg:text-xs text-xs">
              {{ unreadNotifications }}
            </span>
          </button>
        </div>

        <!-- Поиск -->
        <div class="xl:pr-10 pr-5">
          <input
            type="search"
            class="w-full border border-[#EBEBEB] rounded-lg px-4 py-2 xl:h-[60px] h-[50px] xl:mb-10 mb-5 xl:text-base text-sm"
            :placeholder="activeTab === 'messages' ? 'Поиск по сообщениям' : 'Поиск по уведомлениям'"
          >
        </div>

        <!-- Список сообщений/уведомлений -->
        <div class="flex flex-col flex-1 overflow-y-auto gap-4 xl:pr-10 pr-5">
          <template v-if="activeTab === 'messages'">
            <div
              v-for="dialog in dialogs"
              :key="dialog.id"
              class="hover:bg-gray-50 cursor-pointer border border-[#E9E8E8] rounded-sm xl:p-4 p-3"
              :class="{ 'text-[#8C8B8B]': dialog.isRead, 'text-[#202020]': !dialog.isRead }"
              @click="selectChat(dialog)"
            >
              <div class="flex items-center">
                <img :src="dialog.avatar" class="xl:min-w-[60px] xl:h-[60px] lg:min-w-[50px] lg:h-[50px] min-w-[40px] h-[40px] rounded-full mr-3">
                <div class="flex flex-col xl:gap-2 gap-1 overflow-hidden truncate grow">
                  <div class="flex items-center justify-between overflow-hidden">
                    <span class="xl:text-base lg:text-sm text-xs truncate">{{ dialog.name }}</span>
                    <span class="xl:text-sm text-xs" :class="{ 'text-[#8C8B8B]': dialog.isRead, 'text-secondary': !dialog.isRead }">
                        {{ dialog.time }}
                    </span>
                  </div>
                  <p class="xl:text-sm text-xs truncate">{{ dialog.text }}</p>
                </div>
              </div>
            </div>
          </template>

          <template v-else>
            <div
              v-for="notification in notifications"
              :key="notification.id"
              class="hover:bg-gray-50 cursor-pointer border border-[#E9E8E8] rounded-sm p-4"
							:class="{ 'text-[#8C8B8B]': notification.isRead, 'text-[#202020]': !notification.isRead }"
              @click="selectNotification(notification)"
            >
              <div class="flex items-center">
                <img src="@/assets/images/default-notification-avatar.png" class="w-10 h-10 rounded-full mr-3">
                <div class="flex flex-col gap-2 overflow-hidden truncate">
                  <div class="xl:text-sm text-xs font-medium truncate">{{ notification.title }}</div>
                  <p class="xl:text-sm text-xs truncate">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- Правая часть -->
      <div
        v-if="selectedChat || selectedNotification"
				id="chat-body"
        class="chat-body flex-1 flex w-full flex-col bg-white pb-5 md:px-0 md:py-0 z-40"
      >
        <!-- Диалог -->
        <template v-if="selectedChat">
          <!-- Шапка диалога -->
          <div class="p-4 flex items-center xl:gap-3 gap-2">
						<button @click="goBack" class="md:hidden flex items-center justify-center xl:w-10 xl:h-10 w-8 h-8 rounded-full border border-[#E9E8E8] hover:border-primary transition-colors duration-300">
							<ArrowIcon class="w-4 h-4" />
						</button>
            <img :src="selectedChat.avatar" class="xl:w-10 xl:h-10 w-8 h-8  rounded-full">
            <span class="font-medium xl:text-xl lg:text-lg text-base text-[#202020]">{{ selectedChat.name }}</span>
          </div>

          <!-- Тело диалога -->
          <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 grow">
            <div
              v-for="message in selectedChat.messages"
              :key="message.id"
              class="xl:mb-4 mb-3"
              :class="{ 'flex justify-end': message.isMine }"
            >
              <div
                class="max-w-[70%] rounded-sm lg:p-3 p-2"
                :class="message.isMine ? 'bg-secondary text-white' : 'bg-background-light'"
              >
              	<div v-if="message.attachment" class="flex flex-col gap-3">
									<NuxtLink :to="message.attachment.url" class="text-sm text-secondary hover:text-primary transition-colors duration-300">Объект добавлен</NuxtLink>
									<div class="flex items-center gap-3 border-b border-[#E9E8E8] pb-3 mb-3">
										<img :src="message.attachment.image" class="w-[50px] h-[50px] rounded-full">
										<span class="text-sm">{{ message.attachment.text }}</span>
									</div>
								</div>

                <span class="xl:text-base text-sm">{{ message.text }}</span>

              </div>
            </div>
          </div>

          <!-- Ввод сообщения -->
					<div>
						<div class="flex flex-col gap-3 px-4 mb-2 max-w-[500px]">
							<h4 class="text-dark font-medium">Спросите собственника</h4>
							<ul class="flex flex-wrap gap-2">
								<li class="flex justify-center items-center h-[34px] text-[14px] bg-dark text-white rounded-full px-4 py-1 cursor-pointer hover:bg-primary transition-colors duration-300">Торг уместен?</li>
								<li class="flex justify-center items-center h-[34px] text-[14px] bg-dark text-white rounded-full px-4 py-1 cursor-pointer hover:bg-primary transition-colors duration-300">Можно планировку?</li>
								<li class="flex justify-center items-center h-[34px] text-[14px] bg-dark text-white rounded-full px-4 py-1 cursor-pointer hover:bg-primary transition-colors duration-300">Рассматриваете продажу?</li>
								<li class="flex justify-center items-center h-[34px] text-[14px] bg-dark text-white rounded-full px-4 py-1 cursor-pointer hover:bg-primary transition-colors duration-300">Есть терраса?</li>
							</ul>
						</div>
						<div class="flex items-center md:gap-4 gap-2 pt-2 px-4">
							<div class="flex gap-2 items-center">
								<input
									type="file"
									ref="fileInput"
									class="hidden"
									@change="handleFileUpload"
									multiple
								/>
								<button
									class="flex items-center justify-center p-2 xl:w-[55px] xl:h-[55px] md:w-[45px] md:h-[45px] w-[40px] h-[40px] hover:bg-primary rounded-full bg-secondary border border-secondary transition-colors duration-300"
									@click="$refs.fileInput.click()"
								>
									<Plus2Icon class="w-6 h-6" />
								</button>
								<input
									type="file"
									ref="mediaInput"
									class="hidden"
									@change="handleMediaUpload"
									accept="image/*,video/*"
									multiple
								/>
								<button
									class="flex items-center justify-center p-2 xl:w-[55px] xl:h-[55px] md:w-[45px] md:h-[45px] w-[40px] h-[40px] hover:bg-grey-200 rounded-full border border-secondary transition-colors duration-300"
									@click="$refs.mediaInput.click()"
								>
									<AddImageIcon class="w-6 h-6" />
								</button>
							</div>
							<div class="flex items-center grow">
								<input
									v-model="newMessage"
									type="text"
									class="flex-1 border border-[#EBEBEB] rounded-lg xl:p-4 p-3 xl:h-[55px] md:h-[45px] h-[40px] xl:text-base text-sm sm:max-w-auto max-w-[calc(100vw-183px)]"
									placeholder="Введите сообщение..."
									@keyup.enter="sendMessage"
								>
							</div>
							<div class="flex space-x-2">
								<button
									class="flex items-center justify-center p-2 xl:w-[55px] xl:h-[55px] md:w-[45px] md:h-[45px] w-[40px] h-[40px] hover:bg-grey-200 rounded-full border border-secondary transition-colors duration-300 cursor-pointer"
									@click="sendMessage"
									:disabled="!newMessage.trim()"
								>
									<SendButtonIcon class="w-6 h-6" />
								</button>
							</div>
						</div>
					</div>
        </template>

        <!-- Уведомление -->
        <template v-if="selectedNotification">
          <div class="p-4 flex items-center xl:gap-3 gap-2">
						<button @click="goBack" class="md:hidden flex items-center justify-center xl:w-10 xl:h-10 w-8 h-8 rounded-full border border-[#E9E8E8] hover:border-primary transition-colors duration-300">
							<ArrowIcon class="w-4 h-4" />
						</button>
            <img src="@/assets/images/default-notification-avatar.png" class="xl:w-10 xl:h-10 w-8 h-8 rounded-full lg:mr-3 mr-2">
            <span class="font-medium">{{ selectedNotification.title }}</span>
          </div>

          <div class="flex-1 p-6">
            <!-- Если это уведомление об объекте -->
            <div v-if="selectedNotification.object" class="mb-6 bg-[#F8F8F8] rounded-lg p-4">
              <NuxtLink :to="selectedNotification.object.link" class="flex items-start">
                <img
                  :src="selectedNotification.object.image"
                  class="xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-12 h-12 object-cover rounded-lg xl:mr-4 mr-2"
                >
                <div>
                  <h3 class="xl:text-lg lg:text-base text-sm font-medium xl:mb-2 mb-1">{{ selectedNotification.object.title }}</h3>
                  <p class="text-sm text-[#8C8B8B]">{{ selectedNotification.object.address }}</p>
                </div>
              </NuxtLink>
            </div>

            <!-- Текст уведомления -->
            <p class="text-dark">{{ selectedNotification.fullText }}</p>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch, defineProps, onMounted } from 'vue'
import { AddImageIcon, Plus2Icon, SendButtonIcon, CloseIcon, ArrowIcon } from '@/components/icons/icons'
import { useModalStore } from '@/stores/modalStore'
import { storeToRefs } from 'pinia'
import { useChat } from '@/composables/useChat'
import { useNotifications } from '@/composables/useNotifications'
import { useFileUpload } from '@/composables/useFileUpload'

const props = defineProps({
  type: {
    type: String,
    default: 'messages',
    validator: (value) => ['messages', 'notifications'].includes(value)
  }
})

const modalStore = useModalStore()
const { messagerAndNotificationModal } = storeToRefs(modalStore)
const activeTab = ref(messagerAndNotificationModal.value.type)

const {
  dialogs,
  selectedChat,
  newMessage,
  unreadMessages,
  selectChat,
  sendMessage,
  messagesContainer,
  scrollToBottom
} = useChat()

const {
  notifications,
  selectedNotification,
  unreadNotifications,
  selectNotification
} = useNotifications()

const {
  fileInput,
  mediaInput,
  handleFileUpload,
  handleMediaUpload
} = useFileUpload()

const closeModal = () => {
  modalStore.closeMessagerAndNotificationModal()
}

const goBack = () => {
  document.getElementById('chat-body').classList.remove('active-section')
  // if (activeTab.value === 'messages') {
  //   selectedChat.value = null
  // } else {
  //   selectedNotification.value = null
  // }
}

watch(selectedChat, () => {
  scrollToBottom()
})

watch(activeTab, (newTab) => {
  if (newTab === 'notifications') {
    selectedChat.value = null
    if (notifications.value.length > 0) {
      selectedNotification.value = notifications.value[0]
    }
  } else {
    selectedNotification.value = null
    if (dialogs.value.length > 0) {
      selectedChat.value = dialogs.value[0]
    }
  }
})

onMounted(() => {
  if (activeTab.value === 'notifications' && notifications.value.length > 0) {
    selectedNotification.value = notifications.value[0]
    selectedChat.value = null
  } else if (activeTab.value === 'messages' && dialogs.value.length > 0) {
    selectedChat.value = dialogs.value[0]
    scrollToBottom()
  }
})
</script>

<style scoped>
.chat-body  {
  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    transform: translateX(100%);
  }
}

.chat-body.active-section {
  @media (max-width: 768px) {
    transform: translateX(0);
  }
}

.overflow-y-auto {
  /* Стили для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #060565 transparent;
}

/* Стили для Chrome, Safari и других браузеров на WebKit */
.overflow-y-auto::-webkit-scrollbar {
  width: 7px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #060565;
  border-radius: 3.5px;
}
</style>
