import { ref, computed } from 'vue'
import objectImage from '@/assets/images/object/chat-image.png'

export function useNotifications() {
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

  const selectedNotification = ref(null)
  const unreadNotifications = computed(() => notifications.value.filter(notification => !notification.isRead).length)

  const selectNotification = (notification) => {
    selectedNotification.value = notification
    document.getElementById('chat-body').classList.add('active-section')
  }

  return {
    notifications,
    selectedNotification,
    unreadNotifications,
    selectNotification
  }
}
