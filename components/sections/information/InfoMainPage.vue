<template>
	<section>
		<div class="container lg:flex xl:gap-20 gap-8 py-12">
			<!-- Mobile Menu Button -->
			<button
				@click="isMobileMenuOpen = !isMobileMenuOpen"
				class="lg:hidden flex items-center gap-2 mb-6 text-dark hover:text-primary transition-colors duration-200"
			>
				<span>Меню</span>
				<ChevronDownIcon :class="{ 'rotate-180': isMobileMenuOpen }" />
			</button>

			<!-- Sidebar -->
			<aside
				class="w-full lg:w-[280px] lg:shrink-0"
				:class="{ 'mb-6': isMobileMenuOpen }"
			>
				<nav
					class="flex flex-col items-start gap-2 lg:sticky lg:top-8"
					:class="{ 'hidden lg:flex': !isMobileMenuOpen }"
				>
					<button
						v-for="item in menuItems"
						:key="item.hash"
						@click="navigateToSection(item.hash)"
						class="text-left px-4 py-3 rounded-lg text-sm transition-colors duration-200"
						:class="[
							currentHash === item.hash
								? 'bg-[#4460F6] text-white'
								: 'text-[#4460F6] hover:bg-gray-50'
						]"
					>
						{{ item.title }}
					</button>
				</nav>
			</aside>

			<!-- Main Content -->
			<main class="grow">
				<InfoAboutSection v-if="currentHash === 'about'" />
				<InfoHIWSection v-if="currentHash === 'how-it-works'" />
				<InfoSupportSection v-if="currentHash === 'support'" />
				<InfoContactsSection v-if="currentHash === 'contacts'" />
				<InfoLegalInformationSection v-if="currentHash === 'legal-information'" />
				<InfoPrivacyPolicySection v-if="currentHash === 'privacy-policy'" />
				<InfoTermsOfServiceSection v-if="currentHash === 'terms-of-service'" />
				<InfoExchangeRulesSection v-if="currentHash === 'exchange-rules'" />
				<InfoPressCenterSection v-if="currentHash === 'press-center'" />
				<InfoVacanciesSection v-if="currentHash === 'vacancies'" />
				<InfoM2ExchangeForBusinessSection v-if="currentHash === 'm2-exchange-for-business'" />
				<InfoAddExchangeObjectSection v-if="currentHash === 'add-exchange-object'" />
				<InfoExchangeObjectListSection v-if="currentHash === 'exchange-object-list'" />
				<InfoFAQSection v-if="currentHash === 'faq'" />
				<InfoCodeOfRulesSection v-if="currentHash === 'code-of-rules'" />
			</main>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ChevronDownIcon } from '@/components/icons/icons'
import InfoAboutSection from '@/components/sections/information/InfoAboutSection.vue'
import InfoHIWSection from '@/components/sections/information/InfoHIWSection.vue'
import InfoSupportSection from '@/components/sections/information/InfoSupportSection.vue'
import InfoContactsSection from '@/components/sections/information/InfoContactsSection.vue'
import InfoLegalInformationSection from '@/components/sections/information/InfoLegalInformationSection.vue'
import InfoPrivacyPolicySection from '@/components/sections/information/InfoPrivacyPolicySection.vue'
import InfoTermsOfServiceSection from '@/components/sections/information/InfoTermsOfServiceSection.vue'
import InfoExchangeRulesSection from '@/components/sections/information/InfoExchangeRulesSection.vue'
import InfoPressCenterSection from '@/components/sections/information/InfoPressCenterSection.vue'
import InfoVacanciesSection from '@/components/sections/information/InfoVacanciesSection.vue'
import InfoM2ExchangeForBusinessSection from '@/components/sections/information/InfoM2ExchangeForBusinessSection.vue'
import InfoAddExchangeObjectSection from '@/components/sections/information/InfoAddExchangeObjectSection.vue'
import InfoExchangeObjectListSection from '@/components/sections/information/InfoExchangeObjectListSection.vue'
import InfoFAQSection from '@/components/sections/information/InfoFAQSection.vue'
import InfoCodeOfRulesSection from '@/components/sections/information/InfoCodeOfRulesSection.vue'

const router = useRouter()
const route = useRoute()
const isMobileMenuOpen = ref(false)

const menuItems = [
	{ hash: 'about', title: 'О M2 Exchange™' },
	{ hash: 'legal-information', title: 'Юридическая информация' },
	{ hash: 'privacy-policy', title: 'Политика конфиденциальности' },
	{ hash: 'terms-of-service', title: 'Пользовательское соглашение' },
	{ hash: 'exchange-rules', title: 'Правила обмена' },
	{ hash: 'how-it-works', title: 'Как работает платформа' },
	{ hash: 'contacts', title: 'Контакты' },
	{ hash: 'press-center', title: 'Пресс-центр' },
	{ hash: 'vacancies', title: 'Вакансии' },
	{ hash: 'm2-exchange-for-business', title: 'M2 Exchange для бизнеса' },
	{ hash: 'add-exchange-object', title: 'Добавить объект обмена' },
	{ hash: 'exchange-object-list', title: 'Список объектов обмена' },
	{ hash: 'faq', title: 'Часто задаваемые вопросы' },
	{ hash: 'code-of-rules', title: 'Кодекс правил для участников' }
]

const currentHash = ref('about')

const navigateToSection = (hash) => {
	currentHash.value = hash
	router.push({ hash: `#${hash}` })
	// Закрываем мобильное меню после выбора пункта
	isMobileMenuOpen.value = false
}

watch(
	() => route.hash,
	(newHash) => {
		const hash = newHash.replace('#', '')
		if (menuItems.some(item => item.hash === hash)) {
			currentHash.value = hash
		}
	}
)

onMounted(() => {
	const hash = route.hash.replace('#', '')
	if (hash && menuItems.some(item => item.hash === hash)) {
		currentHash.value = hash
	}
})
</script>

<style>
@media (max-width: 1024px) {
	.prose {
		font-size: 0.9375rem;
	}

	.prose h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.prose h2 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	.prose ul,
	.prose ol {
		padding-left: 1.25rem;
	}
}
</style>
