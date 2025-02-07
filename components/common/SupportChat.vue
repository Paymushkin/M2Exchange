<template>
  <div class="support-chat flex flex-col sm:absolute fixed top-0 left-0 right-0 sm:left-[unset] sm:right-[unset] sm:top-[unset] bottom-0 max-w-full sm:w-[400px] rounded-lg bg-background-light p-4 shadow-sm">
    <!-- Заголовок -->
    <div class="mb-3 flex justify-between items-center">
      <h2 class="text-lg font-bold text-dark">Служба поддержки</h2>
      <button
        @click="$emit('close-chat')"
        class="text-gray-400 hover:text-gray-600"
      >
        <CloseIcon class="h-6 w-6" />
      </button>
    </div>

    <!-- Область сообщений -->
    <div class="messages-area mb-6 sm:h-[300px] h-auto grow overflow-y-auto">
      <!-- Приветственное сообщение от поддержки -->
      <div class="flex justify-start mb-4">
        <div class="support-message w-[80%] rounded-[4px] bg-[#4460F6] p-2 text-sm text-white">
          <p>Здравствуйте! Меня зовут Андрей, опишите свой вопрос и я постараюсь вам помочь!</p>
        </div>
      </div>

      <!-- Сообщения -->
      <div v-for="message in messages" :key="message.id"
           :class="[
             'flex mb-4',
             message.isSupport ? 'justify-start' : 'justify-end'
           ]">
        <div :class="[
          'max-w-[80%] rounded-[4px] p-2 text-sm text-white',
          message.isSupport ? 'bg-[#4460F6]' : 'bg-[#90A4FF]'
        ]">
          {{ message.text }}
        </div>
      </div>
    </div>

    <!-- Поле ввода -->
    <div class="input-area flex items-center gap-2">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Введите сообщение"
        class="grow shrink rounded-full border border-gray-200 py-3 pl-6 sm:pr-6 pr-14 outline-none focus:border-primary"
        @keyup.enter="sendMessage"
      />
      <button
        class="flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-primary absolute sm:relative sm:right-[unset] right-5"
        @click="sendMessage"
      >
        <ChatIcon class="h-5 w-5 text-white" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { ChatIcon, CloseIcon } from '@/components/icons/icons'

defineEmits(['close-chat'])

const messages = ref([])
const newMessage = ref('')
const messagesArea = ref(null)

const scrollToBottom = async () => {
  await nextTick()
  const container = messagesArea.value
  if (container) {
    container.scrollTop = container.scrollHeight
  }
}

const sendMessage = () => {
  if (!newMessage.value.trim()) return

  messages.value.push({
    id: Date.now(),
    text: newMessage.value,
    isSupport: false
  })

  newMessage.value = ''
  scrollToBottom()

  // Имитация ответа от поддержки
  setTimeout(() => {
    messages.value.push({
      id: Date.now(),
      text: 'Спасибо за ваше сообщение! Я помогу вам с этим вопросом.',
      isSupport: true
    })
    scrollToBottom()
  }, 1000)
}
</script>

<style scoped>
.messages-area {
  scrollbar-width: thin;
  scrollbar-color: #4460F6 transparent;
}

.messages-area::-webkit-scrollbar {
  width: 6px;
}

.messages-area::-webkit-scrollbar-track {
  background: transparent;
}

.messages-area::-webkit-scrollbar-thumb {
  background-color: #4460F6;
  border-radius: 20px;
}
</style>
