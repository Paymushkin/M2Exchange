<template>
	<section class="relative container lg:py-12 lg:pb-12 py-12 sm:pb-20 pb-8">
		<!-- Заголовок -->
		<div class="text-center mb-8">
			<h1 class="xl:text-4xl text-xl text-dark font-semibold lg:mb-4 mb-2">Здравствуйте! Чем мы можем помочь?</h1>
			<p class="xl:text-4xl text-xl text-primary">Введите свой вопрос</p>
		</div>

		<!-- Строка поиска -->
		<div class="flex justify-center w-full lg:mb-[100px] mb-10">
			<SearchForm size="small" placeholder='Ведите тему, например "Как добавить объект"'/>
		</div>

		<!-- Тематические разделы -->
		<div v-if="!selectedQuestion" class="grid lg:grid-cols-3 gap-x-8 lg:gap-y-20 gap-y-5">
			<div v-for="section in sections" :key="section.title" class="flex flex-col gap-4">
				<h2 class="text-xl font-semibold text-dark">{{ section.title }}</h2>
				<ul class="flex flex-col gap-2 pl-5">
					<li
						v-for="question in section.questions"
						:key="question.id"
						@click="showAnswer(section.title, question)"
						class="list-disc text-sm text-left text-dark hover:text-primary transition-colors duration-200 cursor-pointer"
					>
						{{ question.text }}
					</li>
				</ul>
			</div>
		</div>

		<!-- Блок с ответом -->
		<div v-else class="flex flex-col sm:flex-row items-start justify-start sm:gap-10 gap-5">
			<button
				@click="selectedQuestion = null"
				class="flex items-center gap-4"
			>
				<div class="flex justify-center items-center border rounded-full p-1 w-[45px] h-[45px]">
					<ArrowIcon />
				</div>
				<span class="text-[#8C8B8B] text-sm hover:text-primary transition-colors duration-200 cursor-pointer">Назад</span>
			</button>

			<SupportAnswer :answer="selectedQuestion.answer" />
		</div>

		<div class="flex mt-20">
			<SupportServiceBlock />
		</div>

		<SupportChatContainer />
	</section>
</template>

<script setup>
import { ref } from 'vue'
import SearchForm from '@/components/common/SearchForm.vue'
import SupportAnswer from '@/components/sections/support/SupportAnswer.vue'
import { ArrowIcon } from '@/components/icons/icons'
import SupportServiceBlock from '@/components/common/SupportServiceBlock.vue'
import SupportChatContainer from '@/components/common/SupportChatContainer.vue'

const selectedQuestion = ref(null)

const isChatOpen = ref(true)

const sections = [
	{
		title: 'Часто задаваемые вопросы',
		questions: [
			{ id: 1, text: 'Не вижу свой объект в поиске', answer: 'Подробный ответ на вопрос...' },
			{ id: 2, text: 'Почему мой объект не подтверждён?', answer: 'Подробный ответ на вопрос...' },
			{ id: 3, text: 'Мой аккаунт заблокировали. Что делать?', answer: 'Подробный ответ на вопрос...' },
			{ id: 4, text: 'Как удалить или редактировать объект?', answer: 'Подробный ответ на вопрос...' },
			{ id: 5, text: 'Как связаться с владельцем объекта для обмена?', answer: 'Подробный ответ на вопрос...' },
			{ id: 6, text: 'Как отменить процесс обмена?', answer: 'Подробный ответ на вопрос...' },
			{ id: 7, text: 'Изменился номер телефона, не могу войти в профиль', answer: 'Подробный ответ на вопрос...' }
		]
	},
	{
		title: 'Обмен объектами',
		questions: [
			{ id: 8, text: 'Как найти подходящий объект для обмена?', answer: 'Подробный ответ на вопрос...' },
			{ id: 9, text: 'Как отправить запрос на обмен?', answer: 'Подробный ответ на вопрос...' },
			{ id: 10, text: 'Что делать, если запрос отклонён?', answer: 'Подробный ответ на вопрос...' },
			{ id: 11, text: 'Как согласовать условия обмена?', answer: 'Подробный ответ на вопрос...' },
			{ id: 12, text: 'Как оформить обмен через платформу?', answer: 'Подробный ответ на вопрос...' },
			{ id: 13, text: 'Можно ли обмениваться несколькими объектами сразу?', answer: 'Подробный ответ на вопрос...' },
			{ id: 14, text: 'Какие документы нужны для безопасного обмена?', answer: 'Подробный ответ на вопрос...' }
		]
	},
	{
		title: 'Как добавить объект',
		questions: [
			{ id: 15, text: 'Жилая недвижимость', answer: 'Подробный ответ на вопрос...' },
			{ id: 16, text: 'Коммерческая недвижимость', answer: 'Подробный ответ на вопрос...' },
			{ id: 17, text: 'Загородные дома', answer: 'Подробный ответ на вопрос...' },
			{ id: 18, text: 'Квартиры для временного проживания', answer: 'Подробный ответ на вопрос...' },
			{ id: 19, text: 'Помещения для мероприятий', answer: 'Подробный ответ на вопрос...' },
		]
	},
	{
		title: 'Мои объекты',
		questions: [
			{ id: 20, text: 'Сколько времени проверяют объект?', answer: 'Подробный ответ на вопрос...' },
			{ id: 21, text: 'Как добавить объект?', answer: {
				title: 'Как добавить объект: советы и рекомендации',
				description: 'Добавление объекта на платформу проходит в несколько простых шагов:',
				steps: [
					{
						text: 'Перейдите в личный кабинет и нажмите кнопку Добавить объект'
					},
					{
						text: 'Заполните квиз, указав основные данные:',
						bullets: [
							'Тип недвижимости (квартира, дом, офис и т.д.)',
							'Точное местоположение объекта',
							'Основные характеристики: площадь, количество комнат, состояние',
							'Доступность для обмена: даты и продолжительность',
							'Загрузите качественные фотографии, чтобы объект выглядел привлекательно для других пользователей'
						]
					},
					{
						text: 'После заполнения всех шагов квиза нажмите Сохранить'
					},
					{
						text: 'Мы проверим ваш объект в течение 24 часов. После подтверждения он станет доступен в поиске'
					}
				],
				tips: [
					'Убедитесь, что фото высокого качества и соответствуют описанию',
					'Заполните все поля формы максимально подробно, чтобы повысить шансы на успешный обмен',
					'Проверьте корректность указанных контактных данных'
				],
				footer: 'Если у вас возникнут трудности с добавлением объекта, свяжитесь с поддержкой через раздел личного кабинета Помощь'
			} },
			{ id: 22, text: 'Как редактировать объект?', answer: 'Подробный ответ на вопрос...' },
			{ id: 23, text: 'Как удалить объект?', answer: 'Подробный ответ на вопрос...' },
			{ id: 24, text: 'Почему мой объект не виден в поиске?', answer: 'Подробный ответ на вопрос...' },
			{ id: 25, text: 'Как выглядят мои объявления на платформе?', answer: 'Подробный ответ на вопрос...' }
		]
	},
	{
		title: 'Проблемы с объектом',
		questions: [
			{ id: 26, text: 'Не удаётся добавить объект', answer: 'Подробный ответ на вопрос...' },
			{ id: 27, text: 'Объект заблокирован', answer: 'Подробный ответ на вопрос...' },
			{ id: 28, text: 'Объект не отображается в результатах поиска', answer: 'Подробный ответ на вопрос...' },
			{ id: 29, text: 'Указан неверный адрес или телефон', answer: 'Подробный ответ на вопрос...' },
			{ id: 30, text: 'Мало запросов на обмен по моему объекту', answer: 'Подробный ответ на вопрос...' }
		]
	},
	{
		title: 'Профиль',
		questions: [
			{ id: 31, text: 'Как изменить данные профиля?', answer: 'Подробный ответ на вопрос...' },
			{ id: 32, text: 'Аккаунт заблокирован', answer: 'Подробный ответ на вопрос...' },
			{ id: 33, text: 'Как добавить или сменить телефон?', answer: 'Подробный ответ на вопрос...' },
			{ id: 34, text: 'Как добавить или сменить почту?', answer: 'Подробный ответ на вопрос...' },
			{ id: 35, text: 'Как удалить аккаунт?', answer: 'Подробный ответ на вопрос...' },
			{ id: 36, text: 'Как подтвердить профиль?', answer: 'Подробный ответ на вопрос...' },
			{ id: 37, text: 'Связанные профили', answer: 'Подробный ответ на вопрос...' }
		]
	}
]

const showAnswer = (sectionTitle, question) => {
	selectedQuestion.value = {
		...question,
		section: sectionTitle
	}
}
</script>
