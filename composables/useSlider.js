import { ref, watch } from 'vue'

export function useSlider(slides) {
    const currentIndex = ref(0)
    const currentSlide = ref(slides.value[0])

    const isFirstSlide = ref(true)

    watch(slides, (newSlides) => {
        currentIndex.value = 0
        currentSlide.value = newSlides[0]
        isFirstSlide.value = true
    })

    const goToSlide = (index) => {
        if (index >= 0 && index < slides.value.length) {
            currentIndex.value = index
            currentSlide.value = slides.value[index]
            isFirstSlide.value = index === 0
        }
    }

    const nextSlide = () => {
        if (currentIndex.value === slides.value.length - 1) {
            console.log('Отправка данных...')
        } else {
            currentIndex.value++
            currentSlide.value = slides.value[currentIndex.value]
            isFirstSlide.value = false
        }
    }

    const goBack = () => {
        if (currentIndex.value > 0) {
            currentIndex.value--
            currentSlide.value = slides.value[currentIndex.value]
            isFirstSlide.value = currentIndex.value === 0
        }
    }

    return {
        currentIndex,
        currentSlide,
        isFirstSlide,
        goToSlide,
        nextSlide,
        goBack
    }
}
