import { ref, computed, nextTick } from 'vue'
import userAvatar1 from '@/assets/images/avatars/avatar-1.png'
import userAvatar2 from '@/assets/images/avatars/avatar-2.png'
import objectImage from '@/assets/images/object/chat-image.png'

export function useChat() {
const dialogs = ref([
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


  const selectedChat = ref(dialogs.value[0])
  const newMessage = ref('')
  const unreadMessages = computed(() => dialogs.value.filter(dialog => !dialog.isRead).length)

  const messagesContainer = ref(null)

  const scrollToBottom = () => {
    nextTick(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
      }
    })
  }

  const selectChat = (chat) => {
    selectedChat.value = chat
    document.getElementById('chat-body').classList.add('active-section')
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

    const chatInList = dialogs.value.find(m => m.id === selectedChat.value.id)
    if (chatInList) {
      chatInList.text = newMessage.value
      chatInList.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    newMessage.value = ''
    scrollToBottom()
  }

  return {
    dialogs,
    selectedChat,
    newMessage,
    unreadMessages,
    selectChat,
    sendMessage,
    messagesContainer,
    scrollToBottom
  }
}
