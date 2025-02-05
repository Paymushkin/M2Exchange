import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T &
	DefineComponent<
		{},
		{ refresh: () => Promise<void> },
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		SlotsType<{ fallback: { error: unknown } }>
	>
interface _GlobalComponents {
	HeaderMenu: (typeof import('../components/ui/HeaderMenu.vue'))['default']
	MenuButton: (typeof import('../components/ui/MenuButton.vue'))['default']
	Slider: (typeof import('../components/common/modals/ExchangeFormSliderModal.vue'))['default']
	TheFooter: (typeof import('../components/layout/TheFooter.vue'))['default']
	TheHeader: (typeof import('../components/layout/TheHeader.vue'))['default']
	TheHeaderActions: (typeof import('../components/TheHeaderActions.vue'))['default']
	TheLogo: (typeof import('../components/common/TheLogo.vue'))['default']
	TheNavigation: (typeof import('../components/common/TheNavigation.vue'))['default']
	UserAvatar: (typeof import('../components/common/TheUserAvatar.vue'))['default']
	ButtonsExchangeButton: (typeof import('../components/ExchangeButton.vue'))['default']
	IconsAddObjectIcon: (typeof import('../components/icons/AddObjectIcon.vue'))['default']
	IconsArrowIcon: (typeof import('../components/icons/ArrowIcon.vue'))['default']
	IconsBathIcon: (typeof import('../components/icons/BathIcon.vue'))['default']
	IconsBedIcon: (typeof import('../components/icons/BedIcon.vue'))['default']
	IconsChevronDownIcon: (typeof import('../components/icons/ChevronDownIcon.vue'))['default']
	IconsContactIcon: (typeof import('../components/icons/ContactIcon.vue'))['default']
	IconsFacebookIcon: (typeof import('../components/icons/FacebookIcon.vue'))['default']
	IconsFavoriteIcon: (typeof import('../components/icons/FavoriteIcon.vue'))['default']
	IconsFavoritesIcon: (typeof import('../components/icons/FavoritesIcon.vue'))['default']
	IconsGlobeIcon: (typeof import('../components/icons/GlobeIcon.vue'))['default']
	IconsGlobeIconMini: (typeof import('../components/icons/GlobeIconMini.vue'))['default']
	IconsHeartIcon: (typeof import('../components/icons/HeartIcon.vue'))['default']
	IconsHelpIcon: (typeof import('../components/icons/HelpIcon.vue'))['default']
	IconsInstagramIcon: (typeof import('../components/icons/InstagramIcon.vue'))['default']
	IconsLocationIcon: (typeof import('../components/icons/LocationIcon.vue'))['default']
	IconsLogoIcon: (typeof import('../components/icons/LogoIcon.vue'))['default']
	IconsMapIcon: (typeof import('../components/icons/MapIcon.vue'))['default']
	IconsMessageIcon: (typeof import('../components/icons/MessageIcon.vue'))['default']
	IconsMyObjectsIcon: (typeof import('../components/icons/MyObjectsIcon.vue'))['default']
	IconsNotificationIcon: (typeof import('../components/icons/NotificationIcon.vue'))['default']
	IconsProfileIcon: (typeof import('../components/icons/ProfileIcon.vue'))['default']
	IconsSearchIcon: (typeof import('../components/icons/SearchIcon.vue'))['default']
	IconsSearchIconBackground: (typeof import('../components/icons/SearchBackgroundIcon.vue'))['default']
	IconsSearchIconForm: (typeof import('../components/icons/SearchFormIcon.vue'))['default']
	IconsSquareIcon: (typeof import('../components/icons/SquareIcon.vue'))['default']
	SectionsMainExchangeInfoSection: (typeof import('../components/sections/main/ExchangeInfoSection.vue'))['default']
	SectionsMainExchangeProcess: (typeof import('../components/sections/main/ExchangeProcessSection.vue'))['default']
	SectionsMainHeroSection: (typeof import('../components/sections/main/HeroSection.vue'))['default']
	SectionsMainObjectCard: (typeof import('../components/common/ObjectCard.vue'))['default']
	SectionsMainRecommendationsSection: (typeof import('../components/sections/main/RecommendationsSection.vue'))['default']
	SlidesSlide1: (typeof import('../components/slides/Slide1.vue'))['default']
	SlidesSlide2: (typeof import('../components/slides/Slide2.vue'))['default']
	SlidesSlide3: (typeof import('../components/slides/Slide3.vue'))['default']
	SlidesSlide4: (typeof import('../components/slides/Slide4.vue'))['default']
	SlidesSlide5: (typeof import('../components/slides/Slide5.vue'))['default']
	SlidesSlide6: (typeof import('../components/slides/Slide6.vue'))['default']
	SlidesSlide7: (typeof import('../components/slides/Slide7.vue'))['default']
	SlidesSlide8: (typeof import('../components/slides/Slide8.vue'))['default']
	UiRadioButton: (typeof import('../components/ui/RadioButton.vue'))['default']
	NuxtWelcome: (typeof import('../node_modules/nuxt/dist/app/components/welcome.vue'))['default']
	NuxtLayout: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-layout'))['default']
	NuxtErrorBoundary: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-error-boundary'))['default']
	ClientOnly: (typeof import('../node_modules/nuxt/dist/app/components/client-only'))['default']
	DevOnly: (typeof import('../node_modules/nuxt/dist/app/components/dev-only'))['default']
	ServerPlaceholder: (typeof import('../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
	NuxtLink: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-link'))['default']
	NuxtLoadingIndicator: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-loading-indicator'))['default']
	NuxtRouteAnnouncer: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-route-announcer'))['default']
	NuxtImg: (typeof import('../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue'))['default']
	NuxtPicture: (typeof import('../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue'))['default']
	NuxtPage: (typeof import('../node_modules/nuxt/dist/pages/runtime/page'))['default']
	NoScript: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['NoScript']
	Link: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Link']
	Base: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Base']
	Title: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Title']
	Meta: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Meta']
	Style: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Style']
	Head: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Head']
	Html: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Html']
	Body: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Body']
	NuxtIsland: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-island'))['default']
	NuxtRouteAnnouncer: IslandComponent<
		(typeof import('../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
	>
	LazyHeaderMenu: (typeof import('../components/ui/HeaderMenu.vue'))['default']
	LazyMenuButton: (typeof import('../components/ui/MenuButton.vue'))['default']
	LazySlider: (typeof import('../components/common/modals/ExchangeFormSliderModal.vue'))['default']
	LazyTheFooter: (typeof import('../components/layout/TheFooter.vue'))['default']
	LazyTheHeader: (typeof import('../components/layout/TheHeader.vue'))['default']
	LazyTheHeaderActions: (typeof import('../components/TheHeaderActions.vue'))['default']
	LazyTheLogo: (typeof import('../components/common/TheLogo.vue'))['default']
	LazyTheNavigation: (typeof import('../components/common/TheNavigation.vue'))['default']
	LazyUserAvatar: (typeof import('../components/common/TheUserAvatar.vue'))['default']
	LazyButtonsExchangeButton: (typeof import('../components/ExchangeButton.vue'))['default']
	LazyIconsAddObjectIcon: (typeof import('../components/icons/AddObjectIcon.vue'))['default']
	LazyIconsArrowIcon: (typeof import('../components/icons/ArrowIcon.vue'))['default']
	LazyIconsBathIcon: (typeof import('../components/icons/BathIcon.vue'))['default']
	LazyIconsBedIcon: (typeof import('../components/icons/BedIcon.vue'))['default']
	LazyIconsChevronDownIcon: (typeof import('../components/icons/ChevronDownIcon.vue'))['default']
	LazyIconsContactIcon: (typeof import('../components/icons/ContactIcon.vue'))['default']
	LazyIconsFacebookIcon: (typeof import('../components/icons/FacebookIcon.vue'))['default']
	LazyIconsFavoriteIcon: (typeof import('../components/icons/FavoriteIcon.vue'))['default']
	LazyIconsFavoritesIcon: (typeof import('../components/icons/FavoritesIcon.vue'))['default']
	LazyIconsGlobeIcon: (typeof import('../components/icons/GlobeIcon.vue'))['default']
	LazyIconsGlobeIconMini: (typeof import('../components/icons/GlobeIconMini.vue'))['default']
	LazyIconsHeartIcon: (typeof import('../components/icons/HeartIcon.vue'))['default']
	LazyIconsHelpIcon: (typeof import('../components/icons/HelpIcon.vue'))['default']
	LazyIconsInstagramIcon: (typeof import('../components/icons/InstagramIcon.vue'))['default']
	LazyIconsLocationIcon: (typeof import('../components/icons/LocationIcon.vue'))['default']
	LazyIconsLogoIcon: (typeof import('../components/icons/LogoIcon.vue'))['default']
	LazyIconsMapIcon: (typeof import('../components/icons/MapIcon.vue'))['default']
	LazyIconsMessageIcon: (typeof import('../components/icons/MessageIcon.vue'))['default']
	LazyIconsMyObjectsIcon: (typeof import('../components/icons/MyObjectsIcon.vue'))['default']
	LazyIconsNotificationIcon: (typeof import('../components/icons/NotificationIcon.vue'))['default']
	LazyIconsProfileIcon: (typeof import('../components/icons/ProfileIcon.vue'))['default']
	LazyIconsSearchIcon: (typeof import('../components/icons/SearchIcon.vue'))['default']
	LazyIconsSearchIconBackground: (typeof import('../components/icons/SearchBackgroundIcon.vue'))['default']
	LazyIconsSearchIconForm: (typeof import('../components/icons/SearchFormIcon.vue'))['default']
	LazyIconsSquareIcon: (typeof import('../components/icons/SquareIcon.vue'))['default']
	LazySectionsMainExchangeInfoSection: (typeof import('../components/sections/main/ExchangeInfoSection.vue'))['default']
	LazySectionsMainExchangeProcess: (typeof import('../components/sections/main/ExchangeProcessSection.vue'))['default']
	LazySectionsMainHeroSection: (typeof import('../components/sections/main/HeroSection.vue'))['default']
	LazySectionsMainObjectCard: (typeof import('../components/common/ObjectCard.vue'))['default']
	LazySectionsMainRecommendationsSection: (typeof import('../components/sections/main/RecommendationsSection.vue'))['default']
	LazySlidesSlide1: (typeof import('../components/slides/Slide1.vue'))['default']
	LazySlidesSlide2: (typeof import('../components/slides/Slide2.vue'))['default']
	LazySlidesSlide3: (typeof import('../components/slides/Slide3.vue'))['default']
	LazySlidesSlide4: (typeof import('../components/slides/Slide4.vue'))['default']
	LazySlidesSlide5: (typeof import('../components/slides/Slide5.vue'))['default']
	LazySlidesSlide6: (typeof import('../components/slides/Slide6.vue'))['default']
	LazySlidesSlide7: (typeof import('../components/slides/Slide7.vue'))['default']
	LazySlidesSlide8: (typeof import('../components/slides/Slide8.vue'))['default']
	LazyUiRadioButton: (typeof import('../components/ui/RadioButton.vue'))['default']
	LazyNuxtWelcome: (typeof import('../node_modules/nuxt/dist/app/components/welcome.vue'))['default']
	LazyNuxtLayout: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-layout'))['default']
	LazyNuxtErrorBoundary: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-error-boundary'))['default']
	LazyClientOnly: (typeof import('../node_modules/nuxt/dist/app/components/client-only'))['default']
	LazyDevOnly: (typeof import('../node_modules/nuxt/dist/app/components/dev-only'))['default']
	LazyServerPlaceholder: (typeof import('../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
	LazyNuxtLink: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-link'))['default']
	LazyNuxtLoadingIndicator: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-loading-indicator'))['default']
	LazyNuxtRouteAnnouncer: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-route-announcer'))['default']
	LazyNuxtImg: (typeof import('../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue'))['default']
	LazyNuxtPicture: (typeof import('../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue'))['default']
	LazyNuxtPage: (typeof import('../node_modules/nuxt/dist/pages/runtime/page'))['default']
	LazyNoScript: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['NoScript']
	LazyLink: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Link']
	LazyBase: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Base']
	LazyTitle: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Title']
	LazyMeta: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Meta']
	LazyStyle: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Style']
	LazyHead: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Head']
	LazyHtml: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Html']
	LazyBody: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Body']
	LazyNuxtIsland: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-island'))['default']
	LazyNuxtRouteAnnouncer: IslandComponent<
		(typeof import('../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
	>
}

declare module 'vue' {
	export interface GlobalComponents extends _GlobalComponents {}
}

export const HeaderMenu: (typeof import('../components/ui/HeaderMenu.vue'))['default']
export const MenuButton: (typeof import('../components/ui/MenuButton.vue'))['default']
export const Slider: (typeof import('../components/common/modals/ExchangeFormSliderModal.vue'))['default']
export const TheFooter: (typeof import('../components/layout/TheFooter.vue'))['default']
export const TheHeader: (typeof import('../components/layout/TheHeader.vue'))['default']
export const TheHeaderActions: (typeof import('../components/TheHeaderActions.vue'))['default']
export const TheLogo: (typeof import('../components/common/TheLogo.vue'))['default']
export const TheNavigation: (typeof import('../components/common/TheNavigation.vue'))['default']
export const UserAvatar: (typeof import('../components/common/TheUserAvatar.vue'))['default']
export const ButtonsExchangeButton: (typeof import('../components/ExchangeButton.vue'))['default']
export const IconsAddObjectIcon: (typeof import('../components/icons/AddObjectIcon.vue'))['default']
export const IconsArrowIcon: (typeof import('../components/icons/ArrowIcon.vue'))['default']
export const IconsBathIcon: (typeof import('../components/icons/BathIcon.vue'))['default']
export const IconsBedIcon: (typeof import('../components/icons/BedIcon.vue'))['default']
export const IconsChevronDownIcon: (typeof import('../components/icons/ChevronDownIcon.vue'))['default']
export const IconsContactIcon: (typeof import('../components/icons/ContactIcon.vue'))['default']
export const IconsFacebookIcon: (typeof import('../components/icons/FacebookIcon.vue'))['default']
export const IconsFavoriteIcon: (typeof import('../components/icons/FavoriteIcon.vue'))['default']
export const IconsFavoritesIcon: (typeof import('../components/icons/FavoritesIcon.vue'))['default']
export const IconsGlobeIcon: (typeof import('../components/icons/GlobeIcon.vue'))['default']
export const IconsGlobeIconMini: (typeof import('../components/icons/GlobeIconMini.vue'))['default']
export const IconsHeartIcon: (typeof import('../components/icons/HeartIcon.vue'))['default']
export const IconsHelpIcon: (typeof import('../components/icons/HelpIcon.vue'))['default']
export const IconsInstagramIcon: (typeof import('../components/icons/InstagramIcon.vue'))['default']
export const IconsLocationIcon: (typeof import('../components/icons/LocationIcon.vue'))['default']
export const IconsLogoIcon: (typeof import('../components/icons/LogoIcon.vue'))['default']
export const IconsMapIcon: (typeof import('../components/icons/MapIcon.vue'))['default']
export const IconsMessageIcon: (typeof import('../components/icons/MessageIcon.vue'))['default']
export const IconsMyObjectsIcon: (typeof import('../components/icons/MyObjectsIcon.vue'))['default']
export const IconsNotificationIcon: (typeof import('../components/icons/NotificationIcon.vue'))['default']
export const IconsProfileIcon: (typeof import('../components/icons/ProfileIcon.vue'))['default']
export const IconsSearchIcon: (typeof import('../components/icons/SearchIcon.vue'))['default']
export const IconsSearchIconBackground: (typeof import('../components/icons/SearchBackgroundIcon.vue'))['default']
export const IconsSearchIconForm: (typeof import('../components/icons/SearchFormIcon.vue'))['default']
export const IconsSquareIcon: (typeof import('../components/icons/SquareIcon.vue'))['default']
export const SectionsMainExchangeInfoSection: (typeof import('../components/sections/main/ExchangeInfoSection.vue'))['default']
export const SectionsMainExchangeProcess: (typeof import('../components/sections/main/ExchangeProcessSection.vue'))['default']
export const SectionsMainHeroSection: (typeof import('../components/sections/main/HeroSection.vue'))['default']
export const SectionsMainObjectCard: (typeof import('../components/common/ObjectCard.vue'))['default']
export const SectionsMainRecommendationsSection: (typeof import('../components/sections/main/RecommendationsSection.vue'))['default']
export const SlidesSlide1: (typeof import('../components/slides/Slide1.vue'))['default']
export const SlidesSlide2: (typeof import('../components/slides/Slide2.vue'))['default']
export const SlidesSlide3: (typeof import('../components/slides/Slide3.vue'))['default']
export const SlidesSlide4: (typeof import('../components/slides/Slide4.vue'))['default']
export const SlidesSlide5: (typeof import('../components/slides/Slide5.vue'))['default']
export const SlidesSlide6: (typeof import('../components/slides/Slide6.vue'))['default']
export const SlidesSlide7: (typeof import('../components/slides/Slide7.vue'))['default']
export const SlidesSlide8: (typeof import('../components/slides/Slide8.vue'))['default']
export const UiRadioButton: (typeof import('../components/ui/RadioButton.vue'))['default']
export const NuxtWelcome: (typeof import('../node_modules/nuxt/dist/app/components/welcome.vue'))['default']
export const NuxtLayout: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-layout'))['default']
export const NuxtErrorBoundary: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-error-boundary'))['default']
export const ClientOnly: (typeof import('../node_modules/nuxt/dist/app/components/client-only'))['default']
export const DevOnly: (typeof import('../node_modules/nuxt/dist/app/components/dev-only'))['default']
export const ServerPlaceholder: (typeof import('../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
export const NuxtLink: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-link'))['default']
export const NuxtLoadingIndicator: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-loading-indicator'))['default']
export const NuxtRouteAnnouncer: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-route-announcer'))['default']
export const NuxtImg: (typeof import('../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue'))['default']
export const NuxtPicture: (typeof import('../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue'))['default']
export const NuxtPage: (typeof import('../node_modules/nuxt/dist/pages/runtime/page'))['default']
export const NoScript: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['NoScript']
export const Link: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Link']
export const Base: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Base']
export const Title: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Title']
export const Meta: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Meta']
export const Style: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Style']
export const Head: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Head']
export const Html: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Html']
export const Body: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Body']
export const NuxtIsland: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-island'))['default']
export const NuxtRouteAnnouncer: IslandComponent<
	(typeof import('../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
>
export const LazyHeaderMenu: (typeof import('../components/ui/HeaderMenu.vue'))['default']
export const LazyMenuButton: (typeof import('../components/ui/MenuButton.vue'))['default']
export const LazySlider: (typeof import('../components/common/modals/ExchangeFormSliderModal.vue'))['default']
export const LazyTheFooter: (typeof import('../components/layout/TheFooter.vue'))['default']
export const LazyTheHeader: (typeof import('../components/layout/TheHeader.vue'))['default']
export const LazyTheHeaderActions: (typeof import('../components/TheHeaderActions.vue'))['default']
export const LazyTheLogo: (typeof import('../components/common/TheLogo.vue'))['default']
export const LazyTheNavigation: (typeof import('../components/common/TheNavigation.vue'))['default']
export const LazyUserAvatar: (typeof import('../components/common/TheUserAvatar.vue'))['default']
export const LazyButtonsExchangeButton: (typeof import('../components/ExchangeButton.vue'))['default']
export const LazyIconsAddObjectIcon: (typeof import('../components/icons/AddObjectIcon.vue'))['default']
export const LazyIconsArrowIcon: (typeof import('../components/icons/ArrowIcon.vue'))['default']
export const LazyIconsBathIcon: (typeof import('../components/icons/BathIcon.vue'))['default']
export const LazyIconsBedIcon: (typeof import('../components/icons/BedIcon.vue'))['default']
export const LazyIconsChevronDownIcon: (typeof import('../components/icons/ChevronDownIcon.vue'))['default']
export const LazyIconsContactIcon: (typeof import('../components/icons/ContactIcon.vue'))['default']
export const LazyIconsFacebookIcon: (typeof import('../components/icons/FacebookIcon.vue'))['default']
export const LazyIconsFavoriteIcon: (typeof import('../components/icons/FavoriteIcon.vue'))['default']
export const LazyIconsFavoritesIcon: (typeof import('../components/icons/FavoritesIcon.vue'))['default']
export const LazyIconsGlobeIcon: (typeof import('../components/icons/GlobeIcon.vue'))['default']
export const LazyIconsGlobeIconMini: (typeof import('../components/icons/GlobeIconMini.vue'))['default']
export const LazyIconsHeartIcon: (typeof import('../components/icons/HeartIcon.vue'))['default']
export const LazyIconsHelpIcon: (typeof import('../components/icons/HelpIcon.vue'))['default']
export const LazyIconsInstagramIcon: (typeof import('../components/icons/InstagramIcon.vue'))['default']
export const LazyIconsLocationIcon: (typeof import('../components/icons/LocationIcon.vue'))['default']
export const LazyIconsLogoIcon: (typeof import('../components/icons/LogoIcon.vue'))['default']
export const LazyIconsMapIcon: (typeof import('../components/icons/MapIcon.vue'))['default']
export const LazyIconsMessageIcon: (typeof import('../components/icons/MessageIcon.vue'))['default']
export const LazyIconsMyObjectsIcon: (typeof import('../components/icons/MyObjectsIcon.vue'))['default']
export const LazyIconsNotificationIcon: (typeof import('../components/icons/NotificationIcon.vue'))['default']
export const LazyIconsProfileIcon: (typeof import('../components/icons/ProfileIcon.vue'))['default']
export const LazyIconsSearchIcon: (typeof import('../components/icons/SearchIcon.vue'))['default']
export const LazyIconsSearchIconBackground: (typeof import('../components/icons/SearchBackgroundIcon.vue'))['default']
export const LazyIconsSearchIconForm: (typeof import('../components/icons/SearchFormIcon.vue'))['default']
export const LazyIconsSquareIcon: (typeof import('../components/icons/SquareIcon.vue'))['default']
export const LazySectionsMainExchangeInfoSection: (typeof import('../components/sections/main/ExchangeInfoSection.vue'))['default']
export const LazySectionsMainExchangeProcess: (typeof import('../components/sections/main/ExchangeProcessSection.vue'))['default']
export const LazySectionsMainHeroSection: (typeof import('../components/sections/main/HeroSection.vue'))['default']
export const LazySectionsMainObjectCard: (typeof import('../components/common/ObjectCard.vue'))['default']
export const LazySectionsMainRecommendationsSection: (typeof import('../components/sections/main/RecommendationsSection.vue'))['default']
export const LazySlidesSlide1: (typeof import('../components/slides/Slide1.vue'))['default']
export const LazySlidesSlide2: (typeof import('../components/slides/Slide2.vue'))['default']
export const LazySlidesSlide3: (typeof import('../components/slides/Slide3.vue'))['default']
export const LazySlidesSlide4: (typeof import('../components/slides/Slide4.vue'))['default']
export const LazySlidesSlide5: (typeof import('../components/slides/Slide5.vue'))['default']
export const LazySlidesSlide6: (typeof import('../components/slides/Slide6.vue'))['default']
export const LazySlidesSlide7: (typeof import('../components/slides/Slide7.vue'))['default']
export const LazySlidesSlide8: (typeof import('../components/slides/Slide8.vue'))['default']
export const LazyUiRadioButton: (typeof import('../components/ui/RadioButton.vue'))['default']
export const LazyNuxtWelcome: (typeof import('../node_modules/nuxt/dist/app/components/welcome.vue'))['default']
export const LazyNuxtLayout: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-layout'))['default']
export const LazyNuxtErrorBoundary: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-error-boundary'))['default']
export const LazyClientOnly: (typeof import('../node_modules/nuxt/dist/app/components/client-only'))['default']
export const LazyDevOnly: (typeof import('../node_modules/nuxt/dist/app/components/dev-only'))['default']
export const LazyServerPlaceholder: (typeof import('../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
export const LazyNuxtLink: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-link'))['default']
export const LazyNuxtLoadingIndicator: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-loading-indicator'))['default']
export const LazyNuxtRouteAnnouncer: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-route-announcer'))['default']
export const LazyNuxtImg: (typeof import('../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue'))['default']
export const LazyNuxtPicture: (typeof import('../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue'))['default']
export const LazyNuxtPage: (typeof import('../node_modules/nuxt/dist/pages/runtime/page'))['default']
export const LazyNoScript: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['NoScript']
export const LazyLink: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Link']
export const LazyBase: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Base']
export const LazyTitle: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Title']
export const LazyMeta: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Meta']
export const LazyStyle: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Style']
export const LazyHead: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Head']
export const LazyHtml: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Html']
export const LazyBody: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Body']
export const LazyNuxtIsland: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-island'))['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<
	(typeof import('../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
>

export const componentNames: string[]
