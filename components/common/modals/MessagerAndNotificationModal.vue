<template>
    <div class="relative bg-white rounded-lg w-[1465px] max-w-full h-[780px] max-h-screen flex py-10 px-[50px]">
			<button
				@click="closeModal"
				class="absolute top-4 right-4 transition-colors duration-300 p-1 hover:bg-gray-200 rounded-full"
			>
				<CloseIcon />
			</button>
      <!-- Левая часть -->
      <div class="w-[540px] border-r border-[#EBEBEB] flex flex-col">
        <!-- Переключатели -->
        <div class="flex items-center mb-4 pr-10">
          <button
            class="relative flex items-center text-dark px-7 py-4 rounded-full text-lg"
            :class="{ 'font-medium bg-background-light': activeTab === 'messages' }"
            @click="activeTab = 'messages'"
          >
            Сообщения
            <span v-if="unreadMessages" class="absolute right-2 top-1 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {{ unreadMessages }}
            </span>
          </button>
          <button
            class="relative flex items-center text-dark px-7 py-4 rounded-full text-lg"
            :class="{ 'font-medium bg-background-light': activeTab === 'notifications' }"
            @click="activeTab = 'notifications'"
          >
            Уведомления
            <span v-if="unreadNotifications" class="absolute right-2 top-1 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {{ unreadNotifications }}
            </span>
          </button>
        </div>

        <!-- Поиск -->
        <div class="pr-10">
          <input
            type="search"
            class="w-full border border-[#EBEBEB] rounded-lg px-4 py-2 h-[60px] mb-10 "
            :placeholder="activeTab === 'messages' ? 'Поиск по сообщениям' : 'Поиск по уведомлениям'"
          >
        </div>

        <!-- Список сообщений/уведомлений -->
        <div class="flex flex-col flex-1 overflow-y-auto gap-4 pr-10">
          <template v-if="activeTab === 'messages'">
            <div
              v-for="message in messages"
              :key="message.id"
              class=" hover:bg-gray-50 cursor-pointer border border-[#E9E8E8] rounded-sm p-4"
              :class="{ 'text-[#8C8B8B]': message.isRead, 'text-[#202020]': !message.isRead }"
              @click="selectChat(message)"
            >
              <div class="flex items-center">
                <img :src="message.avatar" class="w-[60px] h-[60px] rounded-full mr-3">
                <div class="flex flex-col gap-2 overflow-hidden truncate">
                  <div class="flex justify-between overflow-hidden">
                    <span class="truncate">{{ message.name }}</span>
                    <span :class="{ 'text-[#8C8B8B]': message.isRead, 'text-secondary': !message.isRead }">
                        {{ message.time }}
                    </span>
                  </div>
                  <p class="truncate">{{ message.text }}</p>
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
                  <div class="font-medium truncate">{{ notification.title }}</div>
                  <p class="text-sm truncate">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- Правая часть - Диалог или Уведомление -->
      <div v-if="selectedChat || selectedNotification" class="flex-1 flex flex-col">
        <!-- Диалог -->
        <template v-if="selectedChat">
          <!-- Шапка диалога -->
          <div class="p-4 flex items-center">
            <img :src="selectedChat.avatar" class="w-10 h-10 rounded-full mr-3">
            <span class="font-medium text-xl text-[#202020]">{{ selectedChat.name }}</span>
          </div>

          <!-- Тело диалога -->
          <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4">
            <div
              v-for="message in selectedChat.messages"
              :key="message.id"
              class="mb-4"
              :class="{ 'flex justify-end': message.isMine }"
            >
              <div
                class="max-w-[70%] rounded-sm p-3"
                :class="message.isMine ? 'bg-secondary text-white' : 'bg-gray-100'"
              >
                {{ message.text }}
              </div>
            </div>
          </div>

          <!-- Ввод сообщения -->
          <div class="flex items-center gap-4 px-2">
            <div class="flex space-x-2 items-center">
              <input
                type="file"
                ref="fileInput"
                class="hidden"
                @change="handleFileUpload"
                multiple
              />
              <button
                class="flex items-center justify-center p-2 w-[55px] h-[55px] hover:bg-primary rounded-full bg-secondary border border-secondary transition-colors duration-300"
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
                class="flex items-center justify-center p-2 w-[55px] h-[55px] hover:bg-grey-200 rounded-full border border-secondary transition-colors duration-300"
                @click="$refs.mediaInput.click()"
              >
                <AddImageIcon class="w-6 h-6" />
              </button>
            </div>
            <div class="flex items-center grow pt-2">
              <input
                v-model="newMessage"
                type="text"
                class="flex-1 border border-[#EBEBEB] rounded-lg p-4 max-h-[55px]"
                placeholder="Введите сообщение..."
                @keyup.enter="sendMessage"
              >
            </div>
            <div class="flex space-x-2">
              <button
                class="flex items-center justify-center p-2 w-[55px] h-[55px] hover:bg-grey-200 rounded-full border border-secondary transition-colors duration-300 cursor-pointer"
                @click="sendMessage"
                :disabled="!newMessage.trim()"
              >
                <SendButtonIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
        </template>

        <!-- Уведомление -->
        <template v-if="selectedNotification">
          <div class="p-4 border-b border-[#EBEBEB] flex items-center">
            <img src="@/assets/images/default-notification-avatar.png" class="w-10 h-10 rounded-full mr-3">
            <span class="font-medium">{{ selectedNotification.title }}</span>
          </div>

          <div class="flex-1 p-6">
            <!-- Если это уведомление об объекте -->
            <div v-if="selectedNotification.object" class="mb-6 bg-[#F8F8F8] rounded-lg p-4">
              <NuxtLink :to="selectedNotification.object.link" class="flex items-start">
                <img
                  :src="selectedNotification.object.image"
                  class="w-20 h-20 object-cover rounded-lg mr-4"
                >
                <div>
                  <h3 class="font-medium mb-2">{{ selectedNotification.object.title }}</h3>
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
</template>

<script setup>
import { ref, computed, nextTick, watch, defineProps } from 'vue'
import { AddImageIcon, Plus2Icon, SendButtonIcon, CloseIcon } from '@/components/icons/icons'
import userAvatar1 from '@/assets/images/avatars/avatar-1.png'
import userAvatar2 from '@/assets/images/avatars/avatar-2.png'
import objectImage from '@/assets/images/object/chat-image.png'
import { useModalStore } from '@/stores/modalStore'

const props = defineProps({
  type: {
    type: String,
    default: 'messages',
    validator: (value) => ['messages', 'notifications'].includes(value)
  }
})

const modalStore = useModalStore()

const closeModal = () => {
  modalStore.closeMessagerAndNotificationModal()
}

const activeTab = ref(props.type)
const newMessage = ref('')
const selectedNotification = ref(null)
const unreadMessages = computed(() => messages.value.filter(message => !message.isRead).length)
const unreadNotifications = computed(() => notifications.value.filter(notification => !notification.isRead).length)

const messages = ref([
  {
    id: 1,
    name: 'Сергей (Менеджер)',
    avatar: userAvatar1,
    text: 'Я ваш персональный менеджер, отвечу на все вопросы',
    time: '10:24AM',
    isRead: false,
    messages: [
      {
        id: 1,
        text: 'Здравствуйте, мы добавили ваш объект на на нашу платформу. Я ваш персональный менеджер. Если у вас появятся вопросы, всегда готов помочь!',
        isMine: false,
				attachment: {
					image: objectImage,
					text: 'C. Real de la Alhambra, s/n, Centro, 18009 Granada',
					url: './objects/object?id=3'
				}
      },
			{
        id: 2,
        text: 'Здравствуйте, Сергей! Рад знакомству, помогите, пожалуйста, подобрать для меня подходящие варианты.',
        isMine: true,
      },
			{
        id: 3,
        text: 'Спасибо, Сергей!',
        isMine: true,
      },
			{
        id: 4,
        text: 'Спасибо, Сергей!',
        isMine: true,
      },
			{
        id: 5,
        text: 'Спасибо, Сергей!',
        isMine: true,
      },
			{
        id: 6,
        text: 'Спасибо, Сергей!',
        isMine: true,
      },
    ]
  },
  {
    id: 2,
    name: 'Сергей (Менеджер)',
    avatar: userAvatar2,
    text: 'Я ваш персональный менеджер, отвечу на все вопросы',
    time: '10:24AM',
    isRead: true,
    messages: [
			{
        id: 1,
        text: 'Привет! Как дела?',
        isMine: false,
      }
    ]
  },
  {
    id: 3,
    name: 'Сергей (Менеджер)',
    avatar: userAvatar1,
    text: 'Я ваш персональный менеджер, отвечу на все вопросы',
    time: '10:24AM',
    isRead: true,
    messages: [
      {
        id: 1,
        text: 'Привет! Как дела?',
        isMine: false,
      }
    ]
  },
	{
    id: 4,
    name: 'Сергей (Менеджер)',
    avatar: userAvatar2,
    text: 'Я ваш персональный менеджер, отвечу на все вопросы',
    time: '10:24AM',
    isRead: true,
    messages: [
      {
        id: 1,
        text: 'Привет! Как дела?',
        isMine: false,
      }
    ]
  },
	{
    id: 5,
    name: 'Сергей (Менеджер)',
    avatar: userAvatar1,
    text: 'Я ваш персональный менеджер, отвечу на все вопросы',
    time: '10:24AM',
    isRead: true,
    messages: [
      {
        id: 1,
        text: 'Привет! Как дела?',
        isMine: false,
      }
    ]
  }
])

const notifications = ref([
  {
    id: 1,
    title: 'Новое сообщение',
    text: 'Вы получили новое сообщение!',
    fullText: 'Вы получили новое сообщение от вашего менеджера. Пожалуйста, проверьте вкладку сообщений.',
		isRead: false,
  },
  {
    id: 2,
    title: 'Новый объект',
    text: 'Этот объект может вас заинтересовать!',
    fullText: 'Мы нашли новый объект, который соответствует вашим критериям поиска.',
		isRead: true,
    object: {
      image: objectImage,
      title: 'C. Real de la Alhambra, s/n, Centro, 18009',
      address: 'Granada',
			link: './objects/object?id=3'
    }
  }
])

const selectedChat = ref(messages.value[0])

const selectNotification = (notification) => {
  selectedNotification.value = notification
  selectedChat.value = null
}

const selectChat = (chat) => {
  selectedChat.value = chat
  selectedNotification.value = null
}

const fileInput = ref(null)
const mediaInput = ref(null)

const messagesContainer = ref(null)

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const handleFileUpload = (event) => {
  const files = event.target.files
  if (!files.length) return

  // Здесь можно добавить логику обработки файлов
  // Например, отправка на сервер или добавление в чат
  const formData = new FormData()
  Array.from(files).forEach(file => {
    formData.append('files[]', file)
  })

  // Очищаем input для возможности повторной загрузки того же файла
  event.target.value = ''
}

const handleMediaUpload = (event) => {
  const files = event.target.files
  if (!files.length) return

  const formData = new FormData()

  Array.from(files).forEach(file => {
    // Проверяем тип файла
    if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
      formData.append('media[]', file)
    }
  })

  // Здесь можно добавить логику обработки медиафайлов
  // Например, отправка на сервер или добавление в чат

  // Очищаем input для возможности повторной загрузки тех же файлов
  event.target.value = ''
}

const sendMessage = () => {
  if (!newMessage.value.trim() || !selectedChat.value) return

  const message = {
    id: Date.now(),
    text: newMessage.value,
    isMine: true,
    timestamp: new Date().toISOString(),
  }

  if (!selectedChat.value.messages) {
    selectedChat.value.messages = []
  }
  selectedChat.value.messages.push(message)

  const chatInList = messages.value.find(m => m.id === selectedChat.value.id)
  if (chatInList) {
    chatInList.text = newMessage.value
    chatInList.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  newMessage.value = ''
  scrollToBottom()
}

// Скроллим к последнему сообщению при первом открытии чата
watch(selectedChat, () => {
  scrollToBottom()
})
</script>

<style scoped>
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
