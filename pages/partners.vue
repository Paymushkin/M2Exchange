<template>
	<NuxtLayout>
		<div class="container py-10">
			<PartnersHeroSection />
			<PartnersExchangeSection class="mb-12"/>
			<PartnersWhySection class="mb-7" />
			<PartnersBenefitsSection class="mb-7" />
			<PartnersSpecialOfferSection />
			<PartnersJoinSection class="mb-20" />
			<PartnersSliderSection class="mb-20" />
		</div>
	</NuxtLayout>
</template>

<script setup>
import PartnersHeroSection from '@/components/sections/partners/PartnersHeroSection.vue'
import PartnersExchangeSection from '@/components/sections/partners/PartnersExchangeSection.vue'
import PartnersWhySection from '@/components/sections/partners/PartnersWhySection.vue'
import PartnersBenefitsSection from '@/components/sections/partners/PartnersBenefitsSection.vue'
import PartnersSpecialOfferSection from '@/components/sections/partners/PartnersSpecialOfferSection.vue'
import PartnersJoinSection from '@/components/sections/partners/PartnersJoinSection.vue'
import PartnersSliderSection from '@/components/sections/partners/PartnersSliderSection.vue'
// </script>
