import {
	mergeProps,
	withCtx,
	createVNode,
	useSSRContext,
	ref,
	resolveComponent,
	resolveDynamicComponent,
	openBlock,
	createBlock,
	toDisplayString
} from 'vue'
import {
	ssrRenderComponent,
	ssrRenderAttrs,
	ssrRenderList,
	ssrRenderAttr,
	ssrInterpolate,
	ssrRenderClass,
	ssrRenderVNode,
	ssrRenderSlot
} from 'vue/server-renderer'
import { _ as __nuxt_component_0 } from './nuxt-link-CERVLrnW.js'
import { L as LogoIcon } from './LogoIcon-CdN9Hf-k.js'
import { useRouter } from 'vue-router'
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.js'
import 'ufo'
import '../server.mjs'
import 'ofetch'
import '#internal/nuxt/paths'
import 'hookable'
import 'unctx'
import 'h3'
import 'unhead'
import '@unhead/shared'
import 'radix3'
import 'defu'
const _sfc_main$n = {
	__name: 'TheLogo',
	__ssrInlineRender: true,
	setup(__props) {
		const router = useRouter()
		const navigateToHome = () => {
			if ((void 0).location.pathname !== '/') {
				router.push('/')
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = __nuxt_component_0
			_push(
				ssrRenderComponent(
					_component_NuxtLink,
					mergeProps(
						{
							to: '/',
							class: [
								'flex items-center space-x-2',
								{
									'cursor-pointer': _ctx.$route.path !== '/',
									'cursor-default': _ctx.$route.path === '/'
								}
							],
							onClick: ($event) => (_ctx.$route.path === '/' ? null : navigateToHome())
						},
						_attrs
					),
					{
						default: withCtx((_, _push2, _parent2, _scopeId) => {
							if (_push2) {
								_push2(ssrRenderComponent(LogoIcon, null, null, _parent2, _scopeId))
							} else {
								return [createVNode(LogoIcon)]
							}
						}),
						_: 1
					},
					_parent
				)
			)
		}
	}
}
const _sfc_setup$n = _sfc_main$n.setup
_sfc_main$n.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/TheLogo.vue'
	)
	return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0
}
const _sfc_main$m = {
	__name: 'TheNavigation',
	__ssrInlineRender: true,
	setup(__props) {
		const navigationItems = [
			{ text: 'О сервисе', href: '#' },
			{ text: 'Партнерам', href: '#' },
			{ text: 'Объекты', href: '#' },
			{ text: 'Информация', href: '#' }
		]
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(mergeProps({ class: 'hidden md:flex items-center space-x-8' }, _attrs))}><button class="flex items-center gap-2 bg-white px-[8px] py-[6px] rounded-[40px] min-w-[179px]"><div class="w-[44px] h-[44px] rounded-full bg-[#060565] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none"><path d="M9.42639 12.3634L4.03051 14.7006L1.69336 9.30469" stroke="white" stroke-width="1.47007" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.03033 14.7014L5.83243 10.1453C6.87611 7.50688 8.91787 5.38625 11.5149 4.24339C14.1119 3.10053 17.0548 3.02759 19.7053 4.04038" stroke="white" stroke-width="1.47007" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.5312 15.6641L26.9271 13.3269L29.2643 18.7228" stroke="white" stroke-width="1.47007" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.9287 13.3256L25.1266 17.8816C24.083 20.5201 22.0412 22.6407 19.4442 23.7836C16.8472 24.9264 13.9043 24.9994 11.2538 23.9866" stroke="white" stroke-width="1.47007" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><span class="text-[#171652]">Обменять</span></button><!--[-->`
			)
			ssrRenderList(navigationItems, (item) => {
				_push(
					`<a${ssrRenderAttr('href', item.href)} class="text-[#171652] hover:text-[#171652]/80">${ssrInterpolate(item.text)}</a>`
				)
			})
			_push(`<!--]--></div>`)
		}
	}
}
const _sfc_setup$m = _sfc_main$m.setup
_sfc_main$m.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/TheNavigation.vue'
	)
	return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0
}
const _sfc_main$l = {}
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					width: '46',
					height: '46',
					viewBox: '0 0 46 46',
					fill: 'none',
					xmlns: 'http://www.w3.org/2000/svg'
				},
				_attrs
			)
		)}><circle cx="23.2768" cy="23.2573" r="21.8889" stroke="black" stroke-width="1.01809"></circle><g clip-path="url(#clip0_116_20973)"><path d="M23.1335 34.1827C23.1335 34.1827 11.7129 28.0331 11.7129 20.7854C11.7129 19.2127 12.3377 17.7044 13.4497 16.5923C14.5618 15.4802 16.0701 14.8555 17.6428 14.8555C20.1235 14.8555 22.2484 16.2073 23.1335 18.3695C24.0186 16.2073 26.1435 14.8555 28.6242 14.8555C30.197 14.8555 31.7053 15.4802 32.8173 16.5923C33.9294 17.7044 34.5542 19.2127 34.5542 20.7854C34.5542 28.0331 23.1335 34.1827 23.1335 34.1827Z" stroke="black" stroke-width="1.75702" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_20973"><rect width="28.1124" height="28.1124" fill="white" transform="translate(9.07812 9.58594)"></rect></clipPath></defs></svg>`
	)
}
const _sfc_setup$l = _sfc_main$l.setup
_sfc_main$l.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/FavoriteIcon.vue'
	)
	return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0
}
const FavoriteIcon = /* @__PURE__ */ _export_sfc(_sfc_main$l, [['ssrRender', _sfc_ssrRender$e]])
const _sfc_main$k = {}
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					width: '46',
					height: '46',
					viewBox: '0 0 46 46',
					fill: 'none',
					xmlns: 'http://www.w3.org/2000/svg'
				},
				_attrs
			)
		)}><circle cx="23.187" cy="23.2573" r="21.8889" stroke="black" stroke-width="1.01809"></circle><g clip-path="url(#clip0_116_20967)"><path d="M21.9484 29.9124C26.5981 29.9124 30.3674 26.143 30.3674 21.4933C30.3674 16.8436 26.5981 13.0742 21.9484 13.0742C17.2986 13.0742 13.5293 16.8436 13.5293 21.4933C13.5293 26.143 17.2986 29.9124 21.9484 29.9124Z" stroke="black" stroke-width="1.75702" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.9004 27.4414L33.7338 33.2748" stroke="black" stroke-width="1.75702" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_20967"><rect width="26.941" height="26.941" fill="white" transform="translate(10.1602 9.70312)"></rect></clipPath></defs></svg>`
	)
}
const _sfc_setup$k = _sfc_main$k.setup
_sfc_main$k.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/SearchIcon.vue'
	)
	return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0
}
const SearchIcon = /* @__PURE__ */ _export_sfc(_sfc_main$k, [['ssrRender', _sfc_ssrRender$d]])
const _sfc_main$j = {}
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '46',
					height: '46',
					viewBox: '0 0 46 46',
					fill: 'none'
				},
				_attrs
			)
		)}><circle cx="23.0972" cy="23.2573" r="21.8889" stroke="black" stroke-width="1.01809"></circle><path d="M12.4121 22.5312H34.6677" stroke="black" stroke-width="1.63989" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5399 33.658C29.6856 33.658 34.6677 28.6759 34.6677 22.5302C34.6677 16.3844 29.6856 11.4023 23.5399 11.4023C17.3942 11.4023 12.4121 16.3844 12.4121 22.5302C12.4121 28.6759 17.3942 33.658 23.5399 33.658Z" stroke="black" stroke-width="1.63989" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.1755 22.5302C28.1755 29.9487 23.5389 33.658 23.5389 33.658C23.5389 33.658 18.9023 29.9487 18.9023 22.5302C18.9023 15.1116 23.5389 11.4023 23.5389 11.4023C23.5389 11.4023 28.1755 15.1116 28.1755 22.5302Z" stroke="black" stroke-width="1.63989" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
	)
}
const _sfc_setup$j = _sfc_main$j.setup
_sfc_main$j.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/GlobeIcon.vue'
	)
	return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0
}
const GlobeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [['ssrRender', _sfc_ssrRender$c]])
const _sfc_main$i = {
	__name: 'MenuButton',
	__ssrInlineRender: true,
	props: {
		isOpen: {
			type: Boolean,
			default: false
		}
	},
	emits: ['toggle'],
	setup(__props, { emit: __emit }) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<button${ssrRenderAttrs(mergeProps({ class: 'flex flex-col gap-[8px] cursor-pointer relative w-[28px] h-[20px]' }, _attrs))} data-v-dd6be091><span class="${ssrRenderClass(
					[
						{
							'rotate-45 top-[8px]': __props.isOpen,
							'top-0': !__props.isOpen
						},
						'absolute w-[24px] h-[3px] bg-dark rounded-full transition-all duration-300'
					]
				)}" data-v-dd6be091></span><span class="${ssrRenderClass([{ 'opacity-0': __props.isOpen }, 'absolute w-[19px] h-[3px] bg-dark rounded-full top-[8px] transition-all duration-300'])}" data-v-dd6be091></span><span class="${ssrRenderClass(
					[
						{
							'-rotate-45 top-[8px]': __props.isOpen,
							'top-[16px]': !__props.isOpen
						},
						'absolute w-[24px] h-[3px] bg-dark rounded-full transition-all duration-300'
					]
				)}" data-v-dd6be091></span></button>`
			)
		}
	}
}
const _sfc_setup$i = _sfc_main$i.setup
_sfc_main$i.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/MenuButton.vue'
	)
	return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0
}
const MenuButton = /* @__PURE__ */ _export_sfc(_sfc_main$i, [['__scopeId', 'data-v-dd6be091']])
const _sfc_main$h = {
	__name: 'UserAvatar',
	__ssrInlineRender: true,
	setup(__props) {
		const isAuthenticated = ref(true)
		const notificationsCount = ref(3)
		return (_ctx, _push, _parent, _attrs) => {
			const _component_router_link = resolveComponent('router-link')
			_push(`<div${ssrRenderAttrs(mergeProps({ class: 'relative' }, _attrs))}>`)
			_push(
				ssrRenderComponent(
					_component_router_link,
					{
						to: isAuthenticated.value ? '/account' : '/auth',
						class: 'block'
					},
					{
						default: withCtx((_, _push2, _parent2, _scopeId) => {
							if (_push2) {
								_push2(
									`<img${ssrRenderAttr('src', isAuthenticated.value ? '/images/avatars/avatar.png' : '/images/avatars/default-avatar.svg')}${ssrRenderAttr('alt', isAuthenticated.value ? 'User avatar' : 'Default avatar')} class="min-w-[46px] h-[46px] aspect-square rounded-full object-cover"${_scopeId}>`
								)
							} else {
								return [
									createVNode(
										'img',
										{
											src: isAuthenticated.value
												? '/images/avatars/avatar.png'
												: '/images/avatars/default-avatar.svg',
											alt: isAuthenticated.value ? 'User avatar' : 'Default avatar',
											class: 'min-w-[46px] h-[46px] aspect-square rounded-full object-cover'
										},
										null,
										8,
										['src', 'alt']
									)
								]
							}
						}),
						_: 1
					},
					_parent
				)
			)
			if (notificationsCount.value > 0) {
				_push(
					`<div class="absolute top-0 right-0 w-[14px] h-[14px] bg-[#FE8A71] rounded-full flex items-center justify-center"><span class="text-white text-[10px] leading-none">${ssrInterpolate(notificationsCount.value)}</span></div>`
				)
			} else {
				_push(`<!---->`)
			}
			_push(`</div>`)
		}
	}
}
const _sfc_setup$h = _sfc_main$h.setup
_sfc_main$h.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/UserAvatar.vue'
	)
	return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0
}
const _sfc_main$g = {}
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '20',
					height: '20',
					viewBox: '0 0 20 20',
					fill: 'none'
				},
				_attrs
			)
		)}><path d="M10.1342 9.06024C10.0509 9.0519 9.95091 9.0519 9.85924 9.06024C8.90275 9.02776 7.99645 8.62427 7.33227 7.9352C6.66809 7.24614 6.2982 6.32561 6.30091 5.36857C6.30091 3.3269 7.95091 1.66857 10.0009 1.66857C10.4863 1.65982 10.9686 1.74674 11.4203 1.92439C11.8721 2.10203 12.2844 2.36691 12.6338 2.70391C12.9832 3.04091 13.2627 3.44343 13.4566 3.88848C13.6504 4.33353 13.7547 4.81239 13.7634 5.29774C13.7722 5.78308 13.6852 6.2654 13.5076 6.71715C13.33 7.1689 13.0651 7.58123 12.7281 7.93061C12.3911 8.27999 11.9886 8.55958 11.5435 8.7534C11.0985 8.94722 10.6196 9.05148 10.1342 9.06024ZM5.96758 12.1352C3.95091 13.4852 3.95091 15.6852 5.96758 17.0269C8.25924 18.5602 12.0176 18.5602 14.3092 17.0269C16.3259 15.6769 16.3259 13.4769 14.3092 12.1352C12.0259 10.6102 8.26758 10.6102 5.96758 12.1352Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
	)
}
const _sfc_setup$g = _sfc_main$g.setup
_sfc_main$g.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/ProfileIcon.vue'
	)
	return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0
}
const ProfileIcon = /* @__PURE__ */ _export_sfc(_sfc_main$g, [['ssrRender', _sfc_ssrRender$b]])
const _sfc_main$f = {}
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '20',
					height: '20',
					viewBox: '0 0 20 20',
					fill: 'none'
				},
				_attrs
			)
		)}><path d="M10.0175 2.42578C7.25914 2.42578 5.01747 4.66745 5.01747 7.42578V9.83412C5.01747 10.3424 4.80081 11.1174 4.54247 11.5508L3.58414 13.1424C2.99247 14.1258 3.40081 15.2174 4.48414 15.5841C8.07581 16.7841 11.9508 16.7841 15.5425 15.5841C16.5508 15.2508 16.9925 14.0591 16.4425 13.1424L15.4841 11.5508C15.2341 11.1174 15.0175 10.3424 15.0175 9.83412V7.42578C15.0175 4.67578 12.7675 2.42578 10.0175 2.42578Z" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M11.5579 2.66719C10.5502 2.38018 9.48235 2.38018 8.47461 2.66719C8.71628 2.05052 9.31628 1.61719 10.0163 1.61719C10.7163 1.61719 11.3163 2.05052 11.5579 2.66719Z" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5176 15.8828C12.5176 17.2578 11.3926 18.3828 10.0176 18.3828C9.33424 18.3828 8.70091 18.0995 8.25091 17.6495C7.78271 17.1806 7.51907 16.5454 7.51758 15.8828" stroke="currentColor" stroke-miterlimit="10"></path></svg>`
	)
}
const _sfc_setup$f = _sfc_main$f.setup
_sfc_main$f.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/NotificationIcon.vue'
	)
	return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0
}
const NotificationIcon = /* @__PURE__ */ _export_sfc(_sfc_main$f, [['ssrRender', _sfc_ssrRender$a]])
const _sfc_main$e = {}
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '22',
					height: '22',
					viewBox: '0 0 22 22',
					fill: 'none'
				},
				_attrs
			)
		)}><g clip-path="url(#clip0_116_26565)"><path d="M6.875 12.375L9.625 9.625L12.375 12.375L15.125 9.625" stroke="currentColor" stroke-width="1.03125" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.8682 18.1404C8.60116 19.1433 10.6397 19.4818 12.6038 19.0928C14.5679 18.7037 16.3235 17.6136 17.5433 16.0257C18.763 14.4379 19.3636 12.4606 19.2332 10.4626C19.1028 8.46459 18.2502 6.5822 16.8344 5.16638C15.4186 3.75056 13.5362 2.89796 11.5381 2.76753C9.54013 2.6371 7.56287 3.23776 5.97501 4.4575C4.38714 5.67724 3.29706 7.43282 2.90799 9.39692C2.51892 11.361 2.85743 13.3996 3.86039 15.1325L2.78531 18.3423C2.74491 18.4635 2.73905 18.5934 2.76838 18.7177C2.79771 18.842 2.86107 18.9557 2.95136 19.0459C3.04166 19.1362 3.15531 19.1996 3.27959 19.2289C3.40387 19.2583 3.53386 19.2524 3.655 19.212L6.8682 18.1404Z" stroke="currentColor" stroke-width="1.03125" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_26565"><rect width="22" height="22" fill="white"></rect></clipPath></defs></svg>`
	)
}
const _sfc_setup$e = _sfc_main$e.setup
_sfc_main$e.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/MessageIcon.vue'
	)
	return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0
}
const MessageIcon = /* @__PURE__ */ _export_sfc(_sfc_main$e, [['ssrRender', _sfc_ssrRender$9]])
const _sfc_main$d = {}
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '21',
					height: '21',
					viewBox: '0 0 21 21',
					fill: 'none'
				},
				_attrs
			)
		)}><g clip-path="url(#clip0_116_26560)"><path d="M8.53125 17.7193V12.4693H12.4688V17.7193H17.7188V9.84427C17.7188 9.75806 17.7019 9.67269 17.669 9.59302C17.636 9.51336 17.5877 9.44096 17.5268 9.37997L10.9643 2.81747C10.9033 2.75645 10.831 2.70805 10.7513 2.67502C10.6716 2.642 10.5862 2.625 10.5 2.625C10.4138 2.625 10.3284 2.642 10.2487 2.67502C10.169 2.70805 10.0967 2.75645 10.0357 2.81747L3.4732 9.37997C3.41228 9.44096 3.36397 9.51336 3.33104 9.59302C3.2981 9.67269 3.28118 9.75806 3.28125 9.84427V17.7193H8.53125Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_26560"><rect width="21" height="21" fill="white"></rect></clipPath></defs></svg>`
	)
}
const _sfc_setup$d = _sfc_main$d.setup
_sfc_main$d.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/MyObjectsIcon.vue'
	)
	return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0
}
const MyObjectsIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [['ssrRender', _sfc_ssrRender$8]])
const _sfc_main$c = {}
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '22',
					height: '22',
					viewBox: '0 0 22 22',
					fill: 'none'
				},
				_attrs
			)
		)}><g clip-path="url(#clip0_116_26555)"><path d="M3.4375 18.5625L10.3125 11.6875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.3125 17.1875L10.3116 11.6884L4.8125 11.6875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.75 15.8125H17.875C18.0573 15.8125 18.2322 15.7401 18.3611 15.6111C18.4901 15.4822 18.5625 15.3073 18.5625 15.125V4.125C18.5625 3.94266 18.4901 3.7678 18.3611 3.63886C18.2322 3.50993 18.0573 3.4375 17.875 3.4375H6.875C6.69266 3.4375 6.5178 3.50993 6.38886 3.63886C6.25993 3.7678 6.1875 3.94266 6.1875 4.125V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_26555"><rect width="22" height="22" fill="white"></rect></clipPath></defs></svg>`
	)
}
const _sfc_setup$c = _sfc_main$c.setup
_sfc_main$c.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/AddObjectIcon.vue'
	)
	return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0
}
const AddObjectIcon = /* @__PURE__ */ _export_sfc(_sfc_main$c, [['ssrRender', _sfc_ssrRender$7]])
const _sfc_main$b = {}
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '19',
					height: '19',
					viewBox: '0 0 19 19',
					fill: 'none'
				},
				_attrs
			)
		)}><path d="M9.71924 16.063L16.3514 9.3358C17.0475 8.63977 17.4385 7.69576 17.4385 6.71143C17.4385 5.7271 17.0475 4.78308 16.3514 4.08705C15.6554 3.39102 14.7114 3 13.7271 3C12.7427 3 11.7987 3.39102 11.1027 4.08705L9.71924 5.37549L8.3358 4.08705C7.63977 3.39102 6.69576 3 5.71143 3C4.7271 3 3.78308 3.39102 3.08705 4.08705C2.39102 4.78308 2 5.7271 2 6.71143C2 7.69576 2.39102 8.63977 3.08705 9.3358L9.71924 16.063Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
	)
}
const _sfc_setup$b = _sfc_main$b.setup
_sfc_main$b.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/FavoritesIcon.vue'
	)
	return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0
}
const FavoritesIcon = /* @__PURE__ */ _export_sfc(_sfc_main$b, [['ssrRender', _sfc_ssrRender$6]])
const _sfc_main$a = {}
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '25',
					height: '25',
					viewBox: '0 0 25 25',
					fill: 'none'
				},
				_attrs
			)
		)}><g clip-path="url(#clip0_116_26542)"><path d="M12.5 15.625V14.0625C15.5205 14.0625 17.9688 11.9639 17.9688 9.375C17.9688 6.78613 15.5205 4.6875 12.5 4.6875C9.47949 4.6875 7.03125 6.78613 7.03125 9.375" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5 21.4844C13.1472 21.4844 13.6719 20.9597 13.6719 20.3125C13.6719 19.6653 13.1472 19.1406 12.5 19.1406C11.8528 19.1406 11.3281 19.6653 11.3281 20.3125C11.3281 20.9597 11.8528 21.4844 12.5 21.4844Z" fill="currentColor"></path></g><defs><clipPath id="clip0_116_26542"><rect width="25" height="25" fill="white"></rect></clipPath></defs></svg>`
	)
}
const _sfc_setup$a = _sfc_main$a.setup
_sfc_main$a.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/HelpIcon.vue'
	)
	return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0
}
const HelpIcon = /* @__PURE__ */ _export_sfc(_sfc_main$a, [['ssrRender', _sfc_ssrRender$5]])
const _sfc_main$9 = {}
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '19',
					height: '19',
					viewBox: '0 0 19 19',
					fill: 'none'
				},
				_attrs
			)
		)}><g clip-path="url(#clip0_116_26546)"><path d="M16.625 14.8438V15.4375C16.625 16.0674 16.3748 16.6715 15.9294 17.1169C15.484 17.5623 14.8799 17.8125 14.25 17.8125H10.0938" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.625 9.5H14.25C13.9351 9.5 13.633 9.62511 13.4103 9.84781C13.1876 10.0705 13.0625 10.3726 13.0625 10.6875V13.6562C13.0625 13.9712 13.1876 14.2732 13.4103 14.4959C13.633 14.7186 13.9351 14.8438 14.25 14.8438H16.625V9.5ZM16.625 9.5C16.625 8.56433 16.4407 7.63783 16.0826 6.77338C15.7246 5.90894 15.1998 5.12348 14.5381 4.46186C13.8765 3.80025 13.0911 3.27542 12.2266 2.91736C11.3622 2.55929 10.4357 2.375 9.5 2.375C8.56433 2.375 7.63783 2.55929 6.77338 2.91736C5.90894 3.27542 5.12348 3.80025 4.46186 4.46186C3.80025 5.12348 3.27542 5.90894 2.91736 6.77338C2.55929 7.63783 2.375 8.56433 2.375 9.5M2.375 9.5V13.6562C2.375 13.9712 2.50011 14.2732 2.72281 14.4959C2.94551 14.7186 3.24756 14.8438 3.5625 14.8438H4.75C5.06494 14.8438 5.36699 14.7186 5.58969 14.4959C5.81239 14.2732 5.9375 13.9712 5.9375 13.6562V10.6875C5.9375 10.3726 5.81239 10.0705 5.58969 9.84781C5.36699 9.62511 5.06494 9.5 4.75 9.5H2.375Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_26546"><rect width="19" height="19" fill="white"></rect></clipPath></defs></svg>`
	)
}
const _sfc_setup$9 = _sfc_main$9.setup
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/ContactIcon.vue'
	)
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0
}
const ContactIcon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [['ssrRender', _sfc_ssrRender$4]])
const _sfc_main$8 = {
	__name: 'HeaderMenu',
	__ssrInlineRender: true,
	props: {
		isOpen: {
			type: Boolean,
			default: false
		}
	},
	emits: ['close'],
	setup(__props, { emit: __emit }) {
		const emit = __emit
		const menuItems = [
			{
				name: 'Аккаунт',
				path: '/account',
				icon: ProfileIcon
			},
			{
				name: 'Уведомления',
				path: '/notifications',
				icon: NotificationIcon
			},
			{
				name: 'Сообщения',
				path: '/messages',
				icon: MessageIcon
			},
			{
				name: 'Мои объекты',
				path: '/my-objects',
				icon: MyObjectsIcon
			},
			{
				name: 'Разместить объект',
				path: '/add-object',
				icon: AddObjectIcon
			},
			{
				name: 'Избранные объекты',
				path: '/favorites',
				icon: FavoritesIcon
			},
			{
				name: 'Помощь',
				path: '/help',
				icon: HelpIcon
			},
			{
				name: 'Связаться с нами',
				path: '/contact',
				icon: ContactIcon
			}
		]
		const closeMenu = () => {
			emit('close')
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_router_link = resolveComponent('router-link')
			_push(
				`<div${ssrRenderAttrs(
					mergeProps(
						{
							style: __props.isOpen ? null : { display: 'none' },
							class:
								'absolute top-[calc(100%+25px)] right-0 w-[232px] bg-white rounded-[26px] shadow-lg px-[10px] pt-[36px] pb-[12px] transition-all duration-300 z-50'
						},
						_attrs
					)
				)}><nav class="flex flex-col gap-4"><!--[-->`
			)
			ssrRenderList(menuItems, (item, index) => {
				_push(`<!--[-->`)
				_push(
					ssrRenderComponent(
						_component_router_link,
						{
							to: item.path,
							class: 'flex items-center gap-3 hover:text-primary transition-colors group',
							onClick: closeMenu
						},
						{
							default: withCtx((_, _push2, _parent2, _scopeId) => {
								if (_push2) {
									ssrRenderVNode(
										_push2,
										createVNode(
											resolveDynamicComponent(item.icon),
											{ class: 'w-5 h-5 text-primary group-hover:text-primary' },
											null
										),
										_parent2,
										_scopeId
									)
									_push2(
										`<span class="text-dark group-hover:text-primary text-[13px] leading-[20px]"${_scopeId}>${ssrInterpolate(item.name)}</span>`
									)
								} else {
									return [
										(openBlock(),
										createBlock(resolveDynamicComponent(item.icon), {
											class: 'w-5 h-5 text-primary group-hover:text-primary'
										})),
										createVNode(
											'span',
											{ class: 'text-dark group-hover:text-primary text-[13px] leading-[20px]' },
											toDisplayString(item.name),
											1
										)
									]
								}
							}),
							_: 2
						},
						_parent
					)
				)
				if (index === 2 || index === 5) {
					_push(`<div class="h-[1px] bg-gray-divider"></div>`)
				} else {
					_push(`<!---->`)
				}
				_push(`<!--]-->`)
			})
			_push(`<!--]--></nav></div>`)
		}
	}
}
const _sfc_setup$8 = _sfc_main$8.setup
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/HeaderMenu.vue'
	)
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0
}
const _sfc_main$7 = {
	__name: 'TheHeaderActions',
	__ssrInlineRender: true,
	setup(__props) {
		const actions = [{ icon: FavoriteIcon }, { icon: SearchIcon }, { icon: GlobeIcon }]
		const isMenuOpen = ref(false)
		const toggleMenu = () => {
			isMenuOpen.value = !isMenuOpen.value
		}
		const closeMenu = () => {
			isMenuOpen.value = false
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(mergeProps({ class: 'flex items-center gap-5' }, _attrs))}><div class="flex items-center gap-2"><!--[-->`
			)
			ssrRenderList(actions, (action, index) => {
				_push(`<button class="text-gray-600 hover:text-gray-900">`)
				ssrRenderVNode(
					_push,
					createVNode(resolveDynamicComponent(action.icon), null, null),
					_parent
				)
				_push(`</button>`)
			})
			_push(
				`<!--]--></div><div class="relative"><div class="flex justify-between items-center gap-[22px] py-[6px] pl-[22px] pr-[12px] bg-white rounded-[40px] w-[115px]">`
			)
			_push(
				ssrRenderComponent(
					MenuButton,
					{
						'is-open': isMenuOpen.value,
						onToggle: toggleMenu
					},
					null,
					_parent
				)
			)
			_push(ssrRenderComponent(_sfc_main$h, null, null, _parent))
			_push(`</div>`)
			_push(
				ssrRenderComponent(
					_sfc_main$8,
					{
						'is-open': isMenuOpen.value,
						onClose: closeMenu
					},
					null,
					_parent
				)
			)
			_push(`</div></div>`)
		}
	}
}
const _sfc_setup$7 = _sfc_main$7.setup
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/TheHeaderActions.vue'
	)
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0
}
const _sfc_main$6 = {
	__name: 'TheHeader',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<header${ssrRenderAttrs(mergeProps({ class: 'w-full bg-primary-light rounded-b-[36px] relative z-40' }, _attrs))}><div class="container mx-auto px-4"><nav class="flex items-center py-5">`
			)
			_push(ssrRenderComponent(_sfc_main$n, { class: 'mr-[115px]' }, null, _parent))
			_push(ssrRenderComponent(_sfc_main$m, null, null, _parent))
			_push(ssrRenderComponent(_sfc_main$7, { class: 'ml-auto' }, null, _parent))
			_push(`</nav></div></header>`)
		}
	}
}
const _sfc_setup$6 = _sfc_main$6.setup
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/TheHeader.vue'
	)
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0
}
const _sfc_main$5 = {}
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '24',
					height: '24',
					viewBox: '0 0 24 24',
					fill: 'none'
				},
				_attrs
			)
		)}><path d="M12 2.162C15.2 2.162 15.584 2.174 16.849 2.232C18.1733 2.20221 19.4607 2.66999 20.457 3.543C21.333 4.53751 21.8012 5.82611 21.768 7.151C21.826 8.416 21.838 8.796 21.838 12C21.838 15.204 21.826 15.584 21.768 16.849C21.7953 18.1729 21.3278 19.4594 20.457 20.457C19.4625 21.3331 18.1739 21.8013 16.849 21.768C15.584 21.826 15.204 21.838 12 21.838C8.796 21.838 8.416 21.826 7.151 21.768C5.82769 21.7916 4.54247 21.3246 3.543 20.457C2.66957 19.461 2.20172 18.1734 2.232 16.849C2.174 15.584 2.162 15.204 2.162 12C2.162 8.796 2.174 8.416 2.232 7.151C2.20647 5.82737 2.67371 4.54149 3.543 3.543C4.53813 2.66802 5.8263 2.19995 7.151 2.232C8.416 2.174 8.8 2.162 12 2.162ZM12 0C8.741 0 8.332 0.014 7.052 0.072C5.1883 0.063286 3.38965 0.756613 2.014 2.014C0.75525 3.38881 0.0617091 5.18801 0.072 7.052C0.014 8.332 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.0640715 18.8116 0.757292 20.6099 2.014 21.986C3.38934 23.2439 5.1882 23.9373 7.052 23.928C8.332 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C18.8116 23.9362 20.6101 23.243 21.986 21.986C23.2447 20.6112 23.9383 18.812 23.928 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.332 23.928 7.052C23.9364 5.18836 23.2431 3.38981 21.986 2.014C20.6103 0.756698 18.8117 0.0633843 16.948 0.072C15.668 0.014 15.259 0 12 0Z" fill="black"></path><path d="M11.9999 5.83789C10.7812 5.83789 9.58981 6.19929 8.57647 6.87638C7.56313 7.55346 6.77334 8.51584 6.30695 9.6418C5.84056 10.7678 5.71853 12.0067 5.95629 13.202C6.19406 14.3973 6.78093 15.4953 7.6427 16.3571C8.50447 17.2189 9.60244 17.8057 10.7977 18.0435C11.9931 18.2813 13.232 18.1592 14.358 17.6928C15.4839 17.2264 16.4463 16.4367 17.1234 15.4233C17.8005 14.41 18.1619 13.2186 18.1619 11.9999C18.1619 10.3656 17.5127 8.7983 16.3571 7.6427C15.2015 6.4871 13.6342 5.83789 11.9999 5.83789ZM11.9999 15.9999C11.2088 15.9999 10.4354 15.7653 9.77761 15.3258C9.11982 14.8862 8.60713 14.2615 8.30437 13.5306C8.00162 12.7997 7.92241 11.9955 8.07675 11.2195C8.23109 10.4436 8.61206 9.73087 9.17147 9.17146C9.73088 8.61205 10.4436 8.23109 11.2195 8.07675C11.9955 7.92241 12.7997 8.00162 13.5306 8.30437C14.2615 8.60712 14.8862 9.11981 15.3258 9.77761C15.7653 10.4354 15.9999 11.2088 15.9999 11.9999C15.9999 13.0608 15.5785 14.0782 14.8283 14.8283C14.0782 15.5785 13.0608 15.9999 11.9999 15.9999Z" fill="black"></path><path d="M18.4058 7.0343C19.2011 7.0343 19.8458 6.38959 19.8458 5.5943C19.8458 4.79901 19.2011 4.1543 18.4058 4.1543C17.6105 4.1543 16.9658 4.79901 16.9658 5.5943C16.9658 6.38959 17.6105 7.0343 18.4058 7.0343Z" fill="black"></path></svg>`
	)
}
const _sfc_setup$5 = _sfc_main$5.setup
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/InstagramIcon.vue'
	)
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0
}
const InstagramIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [['ssrRender', _sfc_ssrRender$3]])
const _sfc_main$4 = {}
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '24',
					height: '24',
					viewBox: '0 0 24 24',
					fill: 'none'
				},
				_attrs
			)
		)}><g clip-path="url(#clip0_116_25449)"><path d="M24 12.0723C24 18.0613 19.606 23.0263 13.87 23.9273V15.5643H16.659L17.19 12.1043H13.87V9.85927H17.329V5.04427C17.329 5.04427 15.959 4.81027 14.65 4.81027C11.916 4.81027 10.13 6.46727 10.13 9.46627V12.1033H7.091V15.5633H10.13V23.9263C4.395 23.0243 0 18.0603 0 12.0723C0 5.44527 5.373 0.0722656 12 0.0722656C18.627 0.0722656 24 5.44427 24 12.0723Z" fill="black"></path></g><defs><clipPath id="clip0_116_25449"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>`
	)
}
const _sfc_setup$4 = _sfc_main$4.setup
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/FacebookIcon.vue'
	)
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0
}
const FacebookIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [['ssrRender', _sfc_ssrRender$2]])
const _sfc_main$3 = {}
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '21',
					height: '21',
					viewBox: '0 0 21 21',
					fill: 'none'
				},
				_attrs
			)
		)}><path d="M1 10.5H20" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 20C15.7467 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.4557 10.5C14.4557 16.8333 10.4974 20 10.4974 20C10.4974 20 6.53906 16.8333 6.53906 10.5C6.53906 4.16667 10.4974 1 10.4974 1C10.4974 1 14.4557 4.16667 14.4557 10.5Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
	)
}
const _sfc_setup$3 = _sfc_main$3.setup
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/GlobeIconMini.vue'
	)
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0
}
const GlobeIconMini = /* @__PURE__ */ _export_sfc(_sfc_main$3, [['ssrRender', _sfc_ssrRender$1]])
const _sfc_main$2 = {}
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '15',
					height: '15',
					viewBox: '0 0 15 15',
					fill: 'none'
				},
				_attrs
			)
		)}><g clip-path="url(#clip0_116_26602)"><path d="M12.1875 5.625L7.5 10.3125L2.8125 5.625" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_26602"><rect width="15" height="15" fill="white"></rect></clipPath></defs></svg>`
	)
}
const _sfc_setup$2 = _sfc_main$2.setup
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/ChevronDownIcon.vue'
	)
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0
}
const ChevronDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [['ssrRender', _sfc_ssrRender]])
const _sfc_main$1 = {
	__name: 'TheFooter',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<footer${ssrRenderAttrs(mergeProps({ class: 'bg-footer py-12 rounded-t-[30px]' }, _attrs))} data-v-0ebbb638><div class="container mx-auto flex flex-col items-center" data-v-0ebbb638><div class="flex items-center w-full mb-[72px]" data-v-0ebbb638>`
			)
			_push(ssrRenderComponent(_sfc_main$n, { class: 'mr-[78px]' }, null, _parent))
			_push(ssrRenderComponent(_sfc_main$m, null, null, _parent))
			_push(
				`<div class="flex items-center ml-auto gap-10" data-v-0ebbb638><span class="text-black text-[16px] font-bold" data-v-0ebbb638>Social</span><div class="flex items-center gap-4" data-v-0ebbb638><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" data-v-0ebbb638>`
			)
			_push(ssrRenderComponent(InstagramIcon, null, null, _parent))
			_push(
				`</a><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" data-v-0ebbb638>`
			)
			_push(ssrRenderComponent(FacebookIcon, null, null, _parent))
			_push(
				`</a></div></div></div><div class="w-full h-[1px] bg-gray-200" data-v-0ebbb638></div><div class="flex items-center mt-5 w-full text-center text-gray-600" data-v-0ebbb638><p data-v-0ebbb638>© ${ssrInterpolate(/* @__PURE__ */ new Date().getFullYear())} <b data-v-0ebbb638>m2 exchange</b></p><div class="flex ml-[95px] gap-9" data-v-0ebbb638><a href="/privacy" class="hover:underline" data-v-0ebbb638>Конфиденциальность</a><a href="/terms" class="hover:underline" data-v-0ebbb638>Условия</a><a href="/download" class="hover:underline" data-v-0ebbb638>Скачать приложение</a></div><div class="flex items-center ml-auto gap-8" data-v-0ebbb638><div class="flex items-center gap-2" data-v-0ebbb638>`
			)
			_push(ssrRenderComponent(GlobeIconMini, null, null, _parent))
			_push(
				`<span class="ml-1" data-v-0ebbb638>Русский</span></div><div class="flex items-center gap-2" data-v-0ebbb638><span class="ml-1" data-v-0ebbb638>Поддержка и вопросы</span>`
			)
			_push(ssrRenderComponent(ChevronDownIcon, null, null, _parent))
			_push(`</div></div></div></div></footer>`)
		}
	}
}
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/TheFooter.vue'
	)
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [['__scopeId', 'data-v-0ebbb638']])
const _sfc_main = {
	__name: 'default',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: 'min-h-screen flex flex-col' }, _attrs))}>`)
			_push(ssrRenderComponent(_sfc_main$6, null, null, _parent))
			_push(`<main class="flex flex-grow flex-col">`)
			ssrRenderSlot(_ctx.$slots, 'default', {}, null, _push, _parent)
			_push(`</main>`)
			_push(ssrRenderComponent(TheFooter, null, null, _parent))
			_push(`</div>`)
		}
	}
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'layouts/default.vue'
	)
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
export { _sfc_main as default }
//# sourceMappingURL=default-CusM0wjH.js.map
