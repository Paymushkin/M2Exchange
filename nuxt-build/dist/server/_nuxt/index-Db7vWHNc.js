import {
	ssrRenderAttrs,
	ssrRenderComponent,
	ssrRenderSlot,
	ssrRenderAttr,
	ssrRenderClass,
	ssrInterpolate,
	ssrRenderList,
	ssrIncludeBooleanAttr,
	ssrRenderStyle,
	ssrRenderVNode
} from 'vue/server-renderer'
import {
	mergeProps,
	useSSRContext,
	ref,
	unref,
	withCtx,
	createTextVNode,
	toDisplayString,
	markRaw,
	createVNode,
	resolveDynamicComponent
} from 'vue'
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.js'
import { L as LogoIcon } from './LogoIcon-CdN9Hf-k.js'
const _imports_0 = '' + __buildAssetsURL('hero-image.CORNdmfG.jpg')
const _sfc_main$p = {}
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '38',
					height: '39',
					viewBox: '0 0 38 39',
					fill: 'none'
				},
				_attrs
			)
		)}><path d="M17.2793 30.5452C24.1459 30.5452 29.7124 24.804 29.7124 17.7218C29.7124 10.6397 24.1459 4.89844 17.2793 4.89844C10.4127 4.89844 4.84619 10.6397 4.84619 17.7218C4.84619 24.804 10.4127 30.5452 17.2793 30.5452Z" stroke="currentColor" stroke-width="4.00731" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.4" d="M32.8201 33.7501L26.0596 26.7773" stroke="currentColor" stroke-width="4.00731" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
	)
}
const _sfc_setup$p = _sfc_main$p.setup
_sfc_main$p.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/SearchIconForm.vue'
	)
	return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0
}
const SearchIconForm = /* @__PURE__ */ _export_sfc(_sfc_main$p, [['ssrRender', _sfc_ssrRender$8]])
const _sfc_main$o = {}
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					width: '45',
					height: '46',
					viewBox: '0 0 45 46',
					fill: 'none',
					xmlns: 'http://www.w3.org/2000/svg'
				},
				_attrs
			)
		)}><circle cx="22.6564" cy="23.1661" r="22.2911" fill="#F0F3FE"></circle><circle cx="22.6563" cy="23.1651" r="11.1456" fill="#6284FF"></circle></svg>`
	)
}
const _sfc_setup$o = _sfc_main$o.setup
_sfc_main$o.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/SearchIconBackground.vue'
	)
	return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0
}
const SearchIconBackground = /* @__PURE__ */ _export_sfc(_sfc_main$o, [
	['ssrRender', _sfc_ssrRender$7]
])
const _sfc_main$n = {
	__name: 'ExchangeButton',
	__ssrInlineRender: true,
	props: {
		isWide: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<button${ssrRenderAttrs(
					mergeProps(
						{
							class: [
								'flex items-center gap-3 bg-primary text-white rounded-[60px] py-4 px-8 hover:bg-primary-dark transition-colors',
								{ 'w-[282px]': __props.isWide }
							]
						},
						_attrs
					)
				)}>`
			)
			_push(ssrRenderComponent(SearchIconBackground, null, null, _parent))
			_push(`<span class="text-[25px] leading-[34px]">`)
			ssrRenderSlot(
				_ctx.$slots,
				'default',
				{},
				() => {
					_push(`Обменять`)
				},
				_push,
				_parent
			)
			_push(`</span></button>`)
		}
	}
}
const _sfc_setup$n = _sfc_main$n.setup
_sfc_main$n.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/buttons/ExchangeButton.vue'
	)
	return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0
}
const _sfc_main$m = {
	__name: 'HeroSection',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<section${ssrRenderAttrs(mergeProps({ class: 'relative' }, _attrs))}><div class="container mx-auto px-4 py-16"><div class="flex items-center justify-between"><div class="w-[55%] max-w-[777px]"><span class="text-dark-secondary text-[28px] leading-[34px] tracking-[12px] uppercase font-normal mb-9 block"> exchange </span><h2 class="h2-custom text-[77px] leading-[80px] font-bold text-dark-deep mb-11"> Обмен недвижимостью </h2><p class="text-[#426BFF] text-[26px] leading-[36px] font-medium max-w-[608px] mb-11"> Станьте собственником недвижимости в другой стране не расплачиваясь за нее </p><div class="flex gap-4"><div class="flex items-center max-w-[460px] bg-white rounded-[60px] border-divider-light border py-5 pr-10 pl-5 flex-1 transition-all duration-300 hover:shadow-[0px_0px_0px_1px_#4460F6] hover:border-transparent"><div class="flex items-center flex-1">`
			)
			_push(ssrRenderComponent(SearchIconForm, { class: 'text-primary ml-2 mr-3' }, null, _parent))
			_push(
				`<div class="w-[1px] h-[32px] bg-[#7974E7]"></div><input type="text" placeholder="Поиск" class="flex-1 px-4 max-w-[260px] outline-none text-[22px] leading-[32px] text-dark"></div><button type="submit" class="text-dark-deep rounded-[8px] text-[25px] leading-[34px] transition-colors hover:text-primary"> Найти </button></div>`
			)
			_push(ssrRenderComponent(_sfc_main$n, { isWide: '' }, null, _parent))
			_push(
				`</div></div><div class="max-w-[40%] xl:w-[800px]"><img${ssrRenderAttr('src', _imports_0)} alt="Обмен недвижимостью" class="w-full rounded-[20px]"></div></div></div></section>`
			)
		}
	}
}
const _sfc_setup$m = _sfc_main$m.setup
_sfc_main$m.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/sections/main/HeroSection.vue'
	)
	return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0
}
function useFavorites() {
	const favorites = ref([])
	const toggleFavorite = (id) => {
		const index2 = favorites.value.indexOf(id)
		if (index2 === -1) {
			favorites.value.push(id)
		} else {
			favorites.value.splice(index2, 1)
		}
	}
	const isFavorite = (id) => {
		return favorites.value.includes(id)
	}
	return {
		favorites,
		toggleFavorite,
		isFavorite
	}
}
const _sfc_main$l = {}
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
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
		)}><path d="M19.0712 13.1437L13.4142 18.8017C13.0391 19.1767 12.5305 19.3873 12.0002 19.3873C11.4699 19.3873 10.9613 19.1767 10.5862 18.8017L4.9292 13.1447C4.46157 12.6812 4.09011 12.1298 3.83613 11.5223C3.58216 10.9148 3.45067 10.2631 3.44923 9.6047C3.44779 8.94625 3.57642 8.294 3.82773 7.68539C4.07904 7.07679 4.44809 6.52381 4.91368 6.05822C5.37928 5.59262 5.93225 5.22357 6.54086 4.97226C7.14947 4.72095 7.80172 4.59232 8.46017 4.59376C9.11862 4.5952 9.7703 4.72669 10.3778 4.98066C10.9853 5.23464 11.5367 5.6061 12.0002 6.07373C12.9418 5.1556 14.2071 4.6454 15.5222 4.65364C16.8373 4.66188 18.0962 5.1879 19.0262 6.11776C19.9562 7.04761 20.4824 8.30643 20.4908 9.62151C20.4992 10.9366 19.9892 12.202 19.0712 13.1437Z" fill="white" stroke="#3D62FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-all duration-300"></path></svg>`
	)
}
const _sfc_setup$l = _sfc_main$l.setup
_sfc_main$l.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/HeartIcon.vue'
	)
	return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0
}
const HeartIcon = /* @__PURE__ */ _export_sfc(_sfc_main$l, [['ssrRender', _sfc_ssrRender$6]])
const _sfc_main$k = {}
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
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
		)}><path d="M18.3475 9.42766C18.3475 13.3225 11.2949 20.0067 11.2949 20.0067C11.2949 20.0067 4.24219 13.3225 4.24219 9.42766C4.24219 7.55718 4.98523 5.76331 6.30786 4.44068C7.6305 3.11805 9.42437 2.375 11.2949 2.375C13.1653 2.375 14.9592 3.11805 16.2818 4.44068C17.6045 5.76331 18.3475 7.55718 18.3475 9.42766Z" fill="#3D62FF"></path><path d="M11.2941 10.1311C11.5746 10.1311 11.8436 10.0196 12.042 9.82128C12.2403 9.62292 12.3518 9.35388 12.3518 9.07335C12.3518 8.79283 12.2403 8.52379 12.042 8.32543C11.8436 8.12706 11.5746 8.01562 11.2941 8.01562C11.0135 8.01562 10.7445 8.12706 10.5461 8.32543C10.3478 8.52379 10.2363 8.79283 10.2363 9.07335C10.2363 9.35388 10.3478 9.62292 10.5461 9.82128C10.7445 10.0196 11.0135 10.1311 11.2941 10.1311Z" fill="white" stroke="white" stroke-width="1.76317" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
	)
}
const _sfc_setup$k = _sfc_main$k.setup
_sfc_main$k.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/LocationIcon.vue'
	)
	return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0
}
const LocationIcon = /* @__PURE__ */ _export_sfc(_sfc_main$k, [['ssrRender', _sfc_ssrRender$5]])
const _sfc_main$j = {}
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '23',
					height: '22',
					viewBox: '0 0 23 22',
					fill: 'none'
				},
				_attrs
			)
		)}><rect x="0.841797" y="0.375" width="21.2143" height="21.2143" rx="5.30357" fill="#3D62FF"></rect><rect x="6.14844" y="5.67822" width="10.6071" height="10.6071" rx="1.76786" fill="white"></rect></svg>`
	)
}
const _sfc_setup$j = _sfc_main$j.setup
_sfc_main$j.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/SquareIcon.vue'
	)
	return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0
}
const SquareIcon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [['ssrRender', _sfc_ssrRender$4]])
const _sfc_main$i = {}
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '36',
					height: '26',
					viewBox: '0 0 36 26',
					fill: 'none'
				},
				_attrs
			)
		)}><path d="M29.5073 5.17882H3.25543V1.75467C3.25543 1.45195 3.13517 1.16164 2.92112 0.947586C2.70707 0.733534 2.41676 0.613281 2.11404 0.613281C1.81133 0.613281 1.52101 0.733534 1.30696 0.947586C1.09291 1.16164 0.972656 1.45195 0.972656 1.75467V24.5824C0.972656 24.8851 1.09291 25.1754 1.30696 25.3895C1.52101 25.6035 1.81133 25.7238 2.11404 25.7238C2.41676 25.7238 2.70707 25.6035 2.92112 25.3895C3.13517 25.1754 3.25543 24.8851 3.25543 24.5824V20.0168H32.9315V24.5824C32.9315 24.8851 33.0517 25.1754 33.2658 25.3895C33.4798 25.6035 33.7701 25.7238 34.0728 25.7238C34.3756 25.7238 34.6659 25.6035 34.8799 25.3895C35.094 25.1754 35.2142 24.8851 35.2142 24.5824V10.8858C35.2142 9.37218 34.613 7.9206 33.5427 6.85034C32.4724 5.78009 31.0209 5.17882 29.5073 5.17882ZM3.25543 7.46159H13.5279V17.7341H3.25543V7.46159Z" fill="#3D62FF"></path></svg>`
	)
}
const _sfc_setup$i = _sfc_main$i.setup
_sfc_main$i.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/BedIcon.vue'
	)
	return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0
}
const BedIcon = /* @__PURE__ */ _export_sfc(_sfc_main$i, [['ssrRender', _sfc_ssrRender$3]])
const _sfc_main$h = {}
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '35',
					height: '30',
					viewBox: '0 0 35 30',
					fill: 'none'
				},
				_attrs
			)
		)}><path d="M33.4747 10.8233H30.0505C30.0505 10.5206 29.9303 10.2303 29.7162 10.0162C29.5022 9.80217 29.2119 9.68192 28.9092 9.68192H18.6367C18.334 9.68192 18.0436 9.80217 17.8296 10.0162C17.6155 10.2303 17.4953 10.5206 17.4953 10.8233H8.36421V4.54568C8.36421 4.09161 8.54459 3.65614 8.86567 3.33506C9.18674 3.01398 9.62222 2.8336 10.0763 2.8336C10.4776 2.83196 10.8675 2.96635 11.1826 3.21483C11.4977 3.46332 11.7193 3.81124 11.8112 4.20184C11.8739 4.49599 12.0502 4.7535 12.3017 4.9184C12.5532 5.08331 12.8596 5.14228 13.1544 5.0825C13.4491 5.02273 13.7084 4.84903 13.8758 4.59917C14.0431 4.3493 14.1052 4.04347 14.0483 3.74814C13.8545 2.8399 13.3538 2.02614 12.6303 1.44381C11.9069 0.861477 11.005 0.546129 10.0763 0.550833C9.01679 0.550833 8.00068 0.971718 7.2515 1.7209C6.50232 2.47008 6.08144 3.48618 6.08144 4.54568V10.8233H1.5159C1.21318 10.8233 0.922867 10.9436 0.708816 11.1576C0.494764 11.3717 0.374512 11.662 0.374512 11.9647V17.6716C0.376778 19.7899 1.21927 21.8208 2.71714 23.3187C4.21501 24.8166 6.24591 25.6591 8.36421 25.6613V27.9441C8.36421 28.2468 8.48446 28.5371 8.69851 28.7512C8.91257 28.9652 9.20288 29.0855 9.5056 29.0855C9.80831 29.0855 10.0986 28.9652 10.3127 28.7512C10.5267 28.5371 10.647 28.2468 10.647 27.9441V25.6613H24.3436V27.9441C24.3436 28.2468 24.4639 28.5371 24.6779 28.7512C24.892 28.9652 25.1823 29.0855 25.485 29.0855C25.7877 29.0855 26.078 28.9652 26.2921 28.7512C26.5061 28.5371 26.6264 28.2468 26.6264 27.9441V25.6613C28.7447 25.6591 30.7756 24.8166 32.2734 23.3187C33.7713 21.8208 34.6138 19.7899 34.6161 17.6716V11.9647C34.6161 11.662 34.4958 11.3717 34.2818 11.1576C34.0677 10.9436 33.7774 10.8233 33.4747 10.8233ZM27.7678 11.9647V17.6716H19.7781V11.9647H27.7678Z" fill="#3D62FF"></path></svg>`
	)
}
const _sfc_setup$h = _sfc_main$h.setup
_sfc_main$h.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/BathIcon.vue'
	)
	return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0
}
const BathIcon = /* @__PURE__ */ _export_sfc(_sfc_main$h, [['ssrRender', _sfc_ssrRender$2]])
const _sfc_main$g = {
	__name: 'ObjectCard',
	__ssrInlineRender: true,
	props: {
		card: {
			type: Object,
			required: true
		}
	},
	setup(__props) {
		const { toggleFavorite, isFavorite } = useFavorites()
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<li${ssrRenderAttrs(
					mergeProps(
						{
							class: [
								'relative w-[350px] bg-white rounded-[60px] p-6 object-item',
								{ 'favorite-object': unref(isFavorite)(__props.card.id) }
							]
						},
						_attrs
					)
				)} data-v-930f86e1><img${ssrRenderAttr('src', __props.card.image)}${ssrRenderAttr('alt', __props.card.title)} class="w-full h-auto rounded-lg mb-3" data-v-930f86e1><div class="${ssrRenderClass([{ 'is-favorite': unref(isFavorite)(__props.card.id) }, 'absolute top-12 right-12 flex items-center justify-center rounded-full icon-heart cursor-pointer'])}" data-v-930f86e1>`
			)
			_push(ssrRenderComponent(HeartIcon, { class: 'h-6' }, null, _parent))
			_push(
				`</div><div class="flex items-center mb-3 gap-2 justify-between text-[24px]" data-v-930f86e1><p class="font-semibold" data-v-930f86e1>${ssrInterpolate(__props.card.title)}</p><p class="text-primary-lighter font-semibold" data-v-930f86e1>$${ssrInterpolate(__props.card.price)}</p></div><div class="flex items-center mb-3" data-v-930f86e1>`
			)
			_push(ssrRenderComponent(LocationIcon, null, null, _parent))
			_push(
				`<span class="ml-1 text-[18px]" data-v-930f86e1>${ssrInterpolate(__props.card.location)}</span></div><div class="flex items-center gap-2" data-v-930f86e1><div class="flex items-center grow mt-2" data-v-930f86e1>`
			)
			_push(ssrRenderComponent(SquareIcon, null, null, _parent))
			_push(
				`<span class="ml-1" data-v-930f86e1>${ssrInterpolate(__props.card.area)}m²</span></div><div class="flex items-center grow mt-2" data-v-930f86e1>`
			)
			_push(ssrRenderComponent(BedIcon, null, null, _parent))
			_push(
				`<span class="ml-1" data-v-930f86e1>${ssrInterpolate(__props.card.beds)}</span></div><div class="flex items-center grow mt-2" data-v-930f86e1>`
			)
			_push(ssrRenderComponent(BathIcon, null, null, _parent))
			_push(
				`<span class="ml-1" data-v-930f86e1>${ssrInterpolate(__props.card.baths)}</span></div></div></li>`
			)
		}
	}
}
const _sfc_setup$g = _sfc_main$g.setup
_sfc_main$g.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/sections/main/ObjectCard.vue'
	)
	return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0
}
const ObjectCard = /* @__PURE__ */ _export_sfc(_sfc_main$g, [['__scopeId', 'data-v-930f86e1']])
function useDragScroll() {
	const scrollContainer = ref(null)
	const isDragging = ref(false)
	const startX = ref(0)
	const scrollLeft = ref(0)
	const startDragging = (e) => {
		if (!scrollContainer.value) return
		isDragging.value = true
		startX.value = e.pageX - scrollContainer.value.offsetLeft
		scrollLeft.value = scrollContainer.value.scrollLeft
	}
	const stopDragging = () => {
		isDragging.value = false
	}
	const drag = (e) => {
		if (!isDragging.value || !scrollContainer.value) return
		e.preventDefault()
		const x = e.pageX - scrollContainer.value.offsetLeft
		const walk = (x - startX.value) * 2
		scrollContainer.value.scrollLeft = scrollLeft.value - walk
	}
	return {
		scrollContainer,
		startDragging,
		stopDragging,
		drag
	}
}
const _sfc_main$f = {
	__name: 'RecommendationsSection',
	__ssrInlineRender: true,
	setup(__props) {
		useDragScroll()
		const cards = [
			{
				id: 1,
				image: '/images/objects/object-1.png',
				title: 'Apartment',
				price: '267000',
				location: 'Playa Arenal-Bol',
				area: '600',
				beds: '2',
				baths: '6'
			},
			{
				id: 2,
				image: '/images/objects/object-2.png',
				title: 'Apartment',
				price: '267000',
				location: 'Playa Arenal-Bol',
				area: '600',
				beds: '2',
				baths: '6'
			},
			{
				id: 3,
				image: '/images/objects/object-3.png',
				title: 'Apartment',
				price: '267000',
				location: 'Playa Arenal-Bol',
				area: '600',
				beds: '2',
				baths: '6'
			},
			{
				id: 4,
				image: '/images/objects/object-4.png',
				title: 'Apartment',
				price: '267000',
				location: 'Playa Arenal-Bol',
				area: '600',
				beds: '2',
				baths: '6'
			},
			{
				id: 5,
				image: '/images/objects/object-5.png',
				title: 'Apartment',
				price: '267000',
				location: 'Playa Arenal-Bol',
				area: '600',
				beds: '2',
				baths: '6'
			}
		]
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<section${ssrRenderAttrs(mergeProps({ class: 'relative pl-[80px] pr-6 py-6 mb-20' }, _attrs))} data-v-3a537993><div class="absolute inset-0 object-shape" data-v-3a537993></div><h2 class="text-[42px] leading-[50px] font-bold text-left mb-6 text-dark" data-v-3a537993>Рекомендуемые объекты</h2><div class="cards-container" data-v-3a537993><ul class="flex space-x-4 overflow-x-auto scrollbar-hide scroll-grab" data-v-3a537993><!--[-->`
			)
			ssrRenderList(cards, (card) => {
				_push(
					ssrRenderComponent(
						ObjectCard,
						{
							key: card.id,
							card
						},
						null,
						_parent
					)
				)
			})
			_push(`<!--]--></ul></div></section>`)
		}
	}
}
const _sfc_setup$f = _sfc_main$f.setup
_sfc_main$f.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/sections/main/RecommendationsSection.vue'
	)
	return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0
}
const RecommendationsSection = /* @__PURE__ */ _export_sfc(_sfc_main$f, [
	['__scopeId', 'data-v-3a537993']
])
const _sfc_main$e = {
	__name: 'ExchangeInfoSection',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<section${ssrRenderAttrs(_attrs)}><div class="container mx-auto"><div class="flex justify-between gap-5 bg-[#F0F3FE] rounded-[85px] py-16 px-[70px]"><div class="flex flex-col items-start gap-6 min-w-[570px]"><h2 class="h2-custom text-[60px] leading-[70px] font-bold text-dark mb-5"> Поможем найти лучший вариант </h2><h3 class="text-[30px] leading-[40px] text-dark mb-70"> Обмена квартиры или дома в любой точке мира на Испанию </h3>`
			)
			_push(ssrRenderComponent(_sfc_main$n, null, null, _parent))
			_push(
				`</div><div class="flex flex-col items-start gap-12 grow"><div class="border border-primary-lighter rounded-[40px] leading-[30px] py-3 px-5 font-medium text-dark-deeper text-[22px]"> Обмен недвижимостью </div><div class="flex flex-col gap-4 text-[19px] leading-[26px] text-dark-deeper"><p>это форма сделки, при которой вы не платите за дом, а вместо этого совершаете прямой обмен вашей собственности на другую. Подобная сделка заключается в подписании контракта, который обязывает каждую сторону передать свою недвижимость другой без денежного обмена. Возможен обмен вилл, квартир, или любого другого типа жилья. Если вы хотите поменять свою недвижимость, но без необходимости платить за новый дом, более удобной альтернативой для вас может стать обмен недвижимости. </p><p>Если вы хотите поменять свою недвижимость, но без необходимости платить за новый дом, более удобной альтернативой для вас может стать обмен недвижимости. </p></div></div></div></div></section>`
			)
		}
	}
}
const _sfc_setup$e = _sfc_main$e.setup
_sfc_main$e.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/sections/main/ExchangeInfoSection.vue'
	)
	return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0
}
const _sfc_main$d = {}
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '42',
					height: '29',
					viewBox: '0 0 42 29',
					fill: 'none'
				},
				_attrs
			)
		)}><path fill-rule="evenodd" clip-rule="evenodd" d="M28.2285 0.741132L40.5548 13.0675C41.3112 13.8239 41.3112 15.0502 40.5548 15.8067L28.2285 28.133C27.4721 28.8894 26.2457 28.8894 25.4893 28.133C24.7329 27.3766 24.7329 26.1502 25.4893 25.3938L34.5091 16.374H0.447266V12.5002H34.5091L25.4893 3.48032C24.7329 2.72391 24.7329 1.49754 25.4893 0.741132C26.2457 -0.0152733 27.4721 -0.0152733 28.2285 0.741132Z" fill="#6284FF"></path></svg>`
	)
}
const _sfc_setup$d = _sfc_main$d.setup
_sfc_main$d.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/ArrowIcon.vue'
	)
	return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0
}
const ArrowIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [['ssrRender', _sfc_ssrRender$1]])
const _sfc_main$c = {
	__name: 'ExchangeProcess',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<section${ssrRenderAttrs(mergeProps({ class: 'exchange-process' }, _attrs))} data-v-5cc80164><h2 class="section-title text-4xl font-bold text-dark mb-16 text-center" data-v-5cc80164> Как происходит обмен? </h2><div class="exchange-process__steps flex justify-between items-start mx-auto px-4" data-v-5cc80164><div class="exchange-process__step flex flex-col items-center relative w-1/4" data-v-5cc80164><div class="w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-3" data-v-5cc80164><div class="step-number font-bold text-customColor" data-v-5cc80164>01</div><h3 class="step-title text-xl font-semibold text-black" data-v-5cc80164> Оставьте <br data-v-5cc80164> заявку </h3><p class="step-description grow text-base text-dark-deeper" data-v-5cc80164> Оставьте заявку на обмен заполнив краткую форму с данными о вашем объекте </p><div class="step-arrow" data-v-5cc80164>`
			)
			_push(ssrRenderComponent(ArrowIcon, null, null, _parent))
			_push(
				`</div></div></div><div class="exchange-process__step flex flex-col items-center relative w-1/4" data-v-5cc80164><div class="w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-3" data-v-5cc80164><div class="step-number font-bold text-customColor" data-v-5cc80164>02</div><h3 class="step-title text-xl font-semibold text-black" data-v-5cc80164> Проверим чистоту и <br data-v-5cc80164> подлинность </h3><p class="step-description grow text-base text-dark-deeper" data-v-5cc80164> Мы проверим его на юридическую чистоту и подлинность, после чего добавим в базу </p><div class="step-arrow" data-v-5cc80164>`
			)
			_push(ssrRenderComponent(ArrowIcon, null, null, _parent))
			_push(
				`</div></div></div><div class="exchange-process__step flex flex-col items-center relative w-1/4" data-v-5cc80164><div class="w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-3" data-v-5cc80164><div class="step-number font-bold text-customColor" data-v-5cc80164>03</div><h3 class="step-title text-xl font-semibold text-black" data-v-5cc80164> Подбор <br data-v-5cc80164> вариантов </h3><p class="step-description grow text-base text-dark-deeper" data-v-5cc80164> Система подберет релевантные объекты в другом стране, подходящие по параметрам для обмена </p><div class="step-arrow" data-v-5cc80164>`
			)
			_push(ssrRenderComponent(ArrowIcon, null, null, _parent))
			_push(
				`</div></div></div><div class="exchange-process__step flex flex-col items-center relative w-1/4" data-v-5cc80164><div class="w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-2" data-v-5cc80164><div class="step-number font-bold text-customColor" data-v-5cc80164>04</div><h3 class="step-title text-xl font-semibold text-black" data-v-5cc80164> От переговоров <br data-v-5cc80164> до </h3><p class="step-description grow text-base text-dark-deeper" data-v-5cc80164> Когда вы выберите вариант, в случае если другой собственник будет также заинтересован вашим объектом, мы проведем сделку от переговоров до передачи ключей </p><div class="step-arrow" data-v-5cc80164>`
			)
			_push(ssrRenderComponent(ArrowIcon, null, null, _parent))
			_push(`</div></div></div></div></section>`)
		}
	}
}
const _sfc_setup$c = _sfc_main$c.setup
_sfc_main$c.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/sections/main/ExchangeProcess.vue'
	)
	return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0
}
const ExchangeProcess = /* @__PURE__ */ _export_sfc(_sfc_main$c, [['__scopeId', 'data-v-5cc80164']])
const _sfc_main$b = {
	__name: 'Slide1',
	__ssrInlineRender: true,
	setup(__props) {
		const selectedOption = ref('yes')
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(mergeProps({ class: 'flex flex-col items-center justify-center h-full' }, _attrs))} data-v-4c57ed3a><h2 class="custom-title mb-6 text-center" data-v-4c57ed3a>Вы хотите обменять свое жилье?</h2><p class="description text-base mb-[90px] text-center" data-v-4c57ed3a> На нашей платформе вы можете разместить свое объявление и ответить на несколько вопросов об интересующем вас варианте обмена, после чего сервис сам предложит вам варианты обмена! </p><div class="flex gap-4" data-v-4c57ed3a><label class="flex items-center" data-v-4c57ed3a><input type="radio" value="yes"${ssrIncludeBooleanAttr(selectedOption.value === 'yes') ? ' checked' : ''} class="hidden" data-v-4c57ed3a><span class="${ssrRenderClass([{ 'bg-primary text-white': selectedOption.value === 'yes', 'text-blue-600': selectedOption.value !== 'yes' }, 'flex items-center justify-center w-[250px] h-[92px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition border-[1px] border-primary text-[20px]'])}" data-v-4c57ed3a> Да </span></label><label class="flex items-center" data-v-4c57ed3a><input type="radio" value="no"${ssrIncludeBooleanAttr(selectedOption.value === 'no') ? ' checked' : ''} class="hidden" data-v-4c57ed3a><span class="${ssrRenderClass([{ 'bg-primary text-white': selectedOption.value === 'no', 'text-blue-600': selectedOption.value !== 'no' }, 'flex items-center justify-center w-[250px] h-[92px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition border-[1px] border-primary text-[20px]'])}" data-v-4c57ed3a> Нет </span></label></div></div>`
			)
		}
	}
}
const _sfc_setup$b = _sfc_main$b.setup
_sfc_main$b.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/slides/Slide1.vue'
	)
	return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0
}
const Slide1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [['__scopeId', 'data-v-4c57ed3a']])
const _sfc_main$a = {}
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(
		`<svg${ssrRenderAttrs(
			mergeProps(
				{
					xmlns: 'http://www.w3.org/2000/svg',
					width: '24',
					height: '22',
					viewBox: '0 0 24 22',
					fill: 'none'
				},
				_attrs
			)
		)}><path d="M8.5842 2.72972V16.4824M16.1693 5.50141V19.6561M1.95117 6.72858V17.0219C1.95117 19.0319 3.37934 19.8571 5.11429 18.8627L7.60035 17.4451C8.13988 17.1383 9.0391 17.1066 9.59978 17.3922L15.1538 20.1745C15.7144 20.4495 16.6137 20.4284 17.1532 20.1216L21.7339 17.498C22.3157 17.1595 22.8024 16.3343 22.8024 15.6572V5.36389C22.8024 3.35388 21.3742 2.52872 19.6393 3.52314L17.1532 4.94073C16.6137 5.24752 15.7144 5.27925 15.1538 4.99362L9.59978 2.22192C9.0391 1.94687 8.13988 1.96803 7.60035 2.27482L3.01965 4.89841C2.42723 5.23694 1.95117 6.0621 1.95117 6.72858Z" stroke="white" stroke-width="2.1158" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
	)
}
const _sfc_setup$a = _sfc_main$a.setup
_sfc_main$a.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/icons/MapIcon.vue'
	)
	return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0
}
const MapIcon = /* @__PURE__ */ _export_sfc(_sfc_main$a, [['ssrRender', _sfc_ssrRender]])
const _sfc_main$9 = {
	__name: 'Slide2',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(mergeProps({ class: 'flex flex-col items-center justify-center h-full' }, _attrs))} data-v-a1add007><h2 class="custom-title mb-6 text-center" data-v-a1add007>Где находится объект?</h2><p class="description text-base mb-6 text-center" data-v-a1add007> Введите адрес или выберите зону на карте </p><div class="flex items-center w-[480px] border border-[#ECEDF3] rounded-[40px] py-4 px-5" data-v-a1add007>`
			)
			_push(ssrRenderComponent(LocationIcon, { class: 'mr-2' }, null, _parent))
			_push(
				`<select class="mr-2 text-[18px] cursor-pointer" data-v-a1add007><option value="location1" data-v-a1add007>Italy, Sardinia</option><option value="location2" data-v-a1add007>Spain, Barcelona</option><option value="location3" data-v-a1add007>France, Paris</option></select><button class="flex items-center ml-auto bg-primary-dark text-white text-[12px] px-5 py-3 rounded-full hover:bg-blue-700 transition" data-v-a1add007>`
			)
			_push(ssrRenderComponent(MapIcon, { class: 'mr-2' }, null, _parent))
			_push(` Карта </button></div></div>`)
		}
	}
}
const _sfc_setup$9 = _sfc_main$9.setup
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/slides/Slide2.vue'
	)
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0
}
const Slide2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [['__scopeId', 'data-v-a1add007']])
const _sfc_main$8 = {
	__name: 'RadioButton',
	__ssrInlineRender: true,
	props: {
		value: String,
		name: String,
		modelValue: String
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<label${ssrRenderAttrs(mergeProps({ class: 'flex items-center' }, _attrs))} data-v-a54b9b2c><input type="radio"${ssrRenderAttr('value', __props.value)}${ssrRenderAttr('name', __props.name)} class="hidden" data-v-a54b9b2c><span class="${ssrRenderClass([{ 'bg-[#1C2D6A] text-white': __props.modelValue === __props.value, 'button-default': __props.modelValue !== __props.value }, 'button'])}" data-v-a54b9b2c>`
			)
			ssrRenderSlot(_ctx.$slots, 'default', {}, null, _push, _parent)
			_push(`</span></label>`)
		}
	}
}
const _sfc_setup$8 = _sfc_main$8.setup
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/ui/RadioButton.vue'
	)
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0
}
const RadioButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [['__scopeId', 'data-v-a54b9b2c']])
const _sfc_main$7 = {
	__name: 'Slide3',
	__ssrInlineRender: true,
	setup(__props) {
		const selectedType = ref('all')
		const buttons = [
			{ value: 'all', label: 'Все' },
			{ value: 'apartments', label: 'Апартаменты' },
			{ value: 'houses', label: 'Дома' },
			{ value: 'villas', label: 'Виллы' },
			{ value: 'bungalows', label: 'Бунгало' },
			{ value: 'townhouses', label: 'Таунхаус' },
			{ value: 'country-house', label: 'Деревенский дом' },
			{ value: 'mansion', label: 'Особняк' },
			{ value: 'farm', label: 'Ферма' },
			{ value: 'apartment', label: 'Квартира' },
			{ value: 'duplex', label: 'Двухквартирный дом' },
			{ value: 'land-plot', label: 'Земельный участок' },
			{ value: 'hotels', label: 'Гостиницы и отели' },
			{ value: 'commercial', label: 'Коммерческая недвижимость' },
			{ value: 'industrial', label: 'Промышленная недвижимость' }
		]
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(mergeProps({ class: 'flex flex-col items-center justify-center max-w-[970px] h-full' }, _attrs))} data-v-79c14eca><h2 class="custom-title mb-6 text-center" data-v-79c14eca>Тип объекта</h2><p class="description text-base mb-6 text-center" data-v-79c14eca> Выберите одну или несколько категорий интересующей вас недвижимости </p><div class="flex flex-wrap justify-center gap-4" data-v-79c14eca><!--[-->`
			)
			ssrRenderList(buttons, (button) => {
				_push(
					ssrRenderComponent(
						RadioButton,
						{
							key: button.value,
							value: button.value,
							name: 'property-type',
							modelValue: selectedType.value,
							'onUpdate:modelValue': ($event) => (selectedType.value = $event)
						},
						{
							default: withCtx((_, _push2, _parent2, _scopeId) => {
								if (_push2) {
									_push2(`${ssrInterpolate(button.label)}`)
								} else {
									return [createTextVNode(toDisplayString(button.label), 1)]
								}
							}),
							_: 2
						},
						_parent
					)
				)
			})
			_push(`<!--]--></div></div>`)
		}
	}
}
const _sfc_setup$7 = _sfc_main$7.setup
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/slides/Slide3.vue'
	)
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0
}
const Slide3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [['__scopeId', 'data-v-79c14eca']])
const _sfc_main$6 = {
	__name: 'Slide4',
	__ssrInlineRender: true,
	setup(__props) {
		const price = ref({
			min: 0,
			max: 1e7,
			value: 3e5
		})
		const area = ref({
			min: 0,
			max: 1e5,
			value: 300
		})
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(mergeProps({ class: 'flex flex-col items-center justify-center max-w-[970px] h-full' }, _attrs))} data-v-1321d4b2><h2 class="custom-title mb-6 text-center" data-v-1321d4b2>Стоимость и площадь объекта</h2><p class="description text-base mb-6 text-center" data-v-1321d4b2> Укажите цену и площадь вашей недвижимости </p><div class="w-[750px] max-w-full" data-v-1321d4b2><div class="mb-6" data-v-1321d4b2><div class="flex items-center gap-7" data-v-1321d4b2><label class="block text-left text-[18px] font-semibold text-[#001062]" data-v-1321d4b2>Стоимость</label><div class="text-[16px] font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] px-4 py-2" data-v-1321d4b2>${ssrInterpolate(price.value.value)} €</div></div><div class="relative" data-v-1321d4b2><input type="range"${ssrRenderAttr('min', price.value.min)}${ssrRenderAttr('max', price.value.max)}${ssrRenderAttr('value', price.value.value)} class="w-full range-input" data-v-1321d4b2><div class="range-scale-container mb-2" data-v-1321d4b2><div class="range-scale" style="${ssrRenderStyle({ width: (price.value.value / price.value.max) * 100 + '%' })}" data-v-1321d4b2></div></div></div><div class="flex justify-between" data-v-1321d4b2><span class="text-[22px] font-semibold text-[#001062]" data-v-1321d4b2>${ssrInterpolate(price.value.min)} €</span><span class="text-[22px] font-semibold text-[#001062]" data-v-1321d4b2>${ssrInterpolate(price.value.max)} €</span></div></div><div data-v-1321d4b2><div class="flex items-center gap-7" data-v-1321d4b2><label class="block text-left text-[18px] font-semibold text-[#001062]" data-v-1321d4b2>Площадь</label><div class="text-[16px] font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] px-4 py-2" data-v-1321d4b2>${ssrInterpolate(area.value.value)} м²</div></div><div class="relative" data-v-1321d4b2><input type="range"${ssrRenderAttr('min', area.value.min)}${ssrRenderAttr('max', area.value.max)}${ssrRenderAttr('value', area.value.value)} class="w-full range-input" data-v-1321d4b2><div class="range-scale-container mb-2" data-v-1321d4b2><div class="range-scale" style="${ssrRenderStyle({ width: (area.value.value / area.value.max) * 100 + '%' })}" data-v-1321d4b2></div></div></div><div class="flex justify-between" data-v-1321d4b2><span class="text-[22px] font-semibold text-[#001062]" data-v-1321d4b2>${ssrInterpolate(area.value.min)} м²</span><span class="text-[22px] font-semibold text-[#001062]" data-v-1321d4b2>${ssrInterpolate(area.value.max)} м²</span></div></div></div></div>`
			)
		}
	}
}
const _sfc_setup$6 = _sfc_main$6.setup
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/slides/Slide4.vue'
	)
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0
}
const Slide4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [['__scopeId', 'data-v-1321d4b2']])
const _sfc_main$5 = {
	__name: 'Slide5',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(_attrs)} data-v-aa81697d><h2 data-v-aa81697d>Слайд 5</h2><p data-v-aa81697d>Содержимое первого слайда.</p></div>`
			)
		}
	}
}
const _sfc_setup$5 = _sfc_main$5.setup
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/slides/Slide5.vue'
	)
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0
}
const Slide5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [['__scopeId', 'data-v-aa81697d']])
const _sfc_main$4 = {
	__name: 'Slide6',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(_attrs)} data-v-01eeca6b><h2 data-v-01eeca6b>Слайд 6</h2><p data-v-01eeca6b>Содержимое первого слайда.</p></div>`
			)
		}
	}
}
const _sfc_setup$4 = _sfc_main$4.setup
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/slides/Slide6.vue'
	)
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0
}
const Slide6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [['__scopeId', 'data-v-01eeca6b']])
const _sfc_main$3 = {
	__name: 'Slide7',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(_attrs)} data-v-c9f40ca7><h2 data-v-c9f40ca7>Слайд 7</h2><p data-v-c9f40ca7>Содержимое первого слайда.</p></div>`
			)
		}
	}
}
const _sfc_setup$3 = _sfc_main$3.setup
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/slides/Slide7.vue'
	)
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0
}
const Slide7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [['__scopeId', 'data-v-c9f40ca7']])
const _sfc_main$2 = {
	__name: 'Slide8',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(_attrs)} data-v-e03230fe><h2 data-v-e03230fe>Слайд 8</h2><p data-v-e03230fe>Содержимое первого слайда.</p></div>`
			)
		}
	}
}
const _sfc_setup$2 = _sfc_main$2.setup
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/slides/Slide8.vue'
	)
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0
}
const Slide8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [['__scopeId', 'data-v-e03230fe']])
const _sfc_main$1 = {
	__name: 'Slider',
	__ssrInlineRender: true,
	setup(__props) {
		const slides = [
			markRaw(Slide1),
			markRaw(Slide2),
			markRaw(Slide3),
			markRaw(Slide4),
			markRaw(Slide5),
			markRaw(Slide6),
			markRaw(Slide7),
			markRaw(Slide8)
		]
		const currentIndex = ref(0)
		const currentSlide = ref(slides[currentIndex.value])
		return (_ctx, _push, _parent, _attrs) => {
			_push(
				`<div${ssrRenderAttrs(mergeProps({ class: 'slide w-full py-8 px-10 max-w-[1360px] min-h-[720px] mx-auto rounded-[50px] overflow-hidden bg-white flex flex-col' }, _attrs))} data-v-a6e51e47><header class="slider-header flex items-center justify-between" data-v-a6e51e47>`
			)
			_push(ssrRenderComponent(LogoIcon, null, null, _parent))
			_push(
				`</header><div class="slider-content flex-grow flex items-center justify-center" data-v-a6e51e47>`
			)
			ssrRenderVNode(
				_push,
				createVNode(resolveDynamicComponent(currentSlide.value), null, null),
				_parent
			)
			_push(
				`</div><footer class="slider-footer flex items-center gap-7" data-v-a6e51e47><div class="pagination flex gap-1 grow" data-v-a6e51e47><!--[-->`
			)
			ssrRenderList(slides, (slide, index2) => {
				_push(
					`<div class="${ssrRenderClass([{ 'bg-primary': currentIndex.value === index2, 'bg-[#E9ECFF]': currentIndex.value !== index2 }, 'bullet h-[5px] grow rounded transition-colors duration-300'])}" data-v-a6e51e47></div>`
				)
			})
			_push(
				`<!--]--></div><button class="min-w-[140px] h-[50px] bg-primary-dark text-white text-[18px] px-4 py-2 rounded-[40px] hover:bg-blue-700" data-v-a6e51e47>${ssrInterpolate(currentIndex.value === slides.length - 1 ? 'Отправить' : 'Далее')}</button></footer></div>`
			)
		}
	}
}
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
		'components/Slider.vue'
	)
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const Slider = /* @__PURE__ */ _export_sfc(_sfc_main$1, [['__scopeId', 'data-v-a6e51e47']])
const _sfc_main = {
	__name: 'index',
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`)
			_push(ssrRenderComponent(_sfc_main$m, null, null, _parent))
			_push(ssrRenderComponent(RecommendationsSection, null, null, _parent))
			_push(ssrRenderComponent(_sfc_main$e, null, null, _parent))
			_push(ssrRenderComponent(ExchangeProcess, null, null, _parent))
			_push(
				`<div class="container" data-v-a7a089e5><div class="py-12 bg-[#EFF3FF] rounded-[80px]" data-v-a7a089e5>`
			)
			_push(ssrRenderComponent(Slider, null, null, _parent))
			_push(`</div></div><!--]-->`)
		}
	}
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext()
	;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('pages/index.vue')
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [['__scopeId', 'data-v-a7a089e5']])
export { index as default }
//# sourceMappingURL=index-Db7vWHNc.js.map
