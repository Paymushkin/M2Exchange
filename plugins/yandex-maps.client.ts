export default defineNuxtPlugin(() => {
  return new Promise((resolve) => {
    const yandexMapsScript = document.createElement('script')
    yandexMapsScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=a0d18d5f-ffdb-41e5-8cc5-86e70d7636e0&lang=ru_RU')
    yandexMapsScript.addEventListener('load', () => {
      resolve()
    })
    document.head.appendChild(yandexMapsScript)
  })
}) 