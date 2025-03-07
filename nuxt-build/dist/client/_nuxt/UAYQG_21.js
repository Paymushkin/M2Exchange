import {
	o,
	c as a,
	a as e,
	b as r,
	m as F,
	n as b,
	d as m,
	r as _,
	u as v,
	t as p,
	F as w,
	p as C,
	w as B,
	q as $,
	v as y,
	s as k,
	x as f,
	y as I,
	z as L
} from './DsAHgXQU.js'
import { _ as i } from './DlAUqK2U.js'
import { L as D } from './BFUUyzWQ.js'
const M = '' + new URL('hero-image.CORNdmfG.jpg', import.meta.url).href,
	H = {},
	E = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '38',
		height: '39',
		viewBox: '0 0 38 39',
		fill: 'none'
	}
function A(l, s) {
	return (
		o(),
		a(
			'svg',
			E,
			s[0] ||
				(s[0] = [
					e(
						'path',
						{
							d: 'M17.2793 30.5452C24.1459 30.5452 29.7124 24.804 29.7124 17.7218C29.7124 10.6397 24.1459 4.89844 17.2793 4.89844C10.4127 4.89844 4.84619 10.6397 4.84619 17.7218C4.84619 24.804 10.4127 30.5452 17.2793 30.5452Z',
							stroke: 'currentColor',
							'stroke-width': '4.00731',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round'
						},
						null,
						-1
					),
					e(
						'path',
						{
							opacity: '0.4',
							d: 'M32.8201 33.7501L26.0596 26.7773',
							stroke: 'currentColor',
							'stroke-width': '4.00731',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round'
						},
						null,
						-1
					)
				])
		)
	)
}
const Z = i(H, [['render', A]]),
	P = {},
	R = {
		width: '45',
		height: '46',
		viewBox: '0 0 45 46',
		fill: 'none',
		xmlns: 'http://www.w3.org/2000/svg'
	}
function O(l, s) {
	return (
		o(),
		a(
			'svg',
			R,
			s[0] ||
				(s[0] = [
					e('circle', { cx: '22.6564', cy: '23.1661', r: '22.2911', fill: '#F0F3FE' }, null, -1),
					e('circle', { cx: '22.6563', cy: '23.1651', r: '11.1456', fill: '#6284FF' }, null, -1)
				])
		)
	)
}
const N = i(P, [['render', O]]),
	U = { class: 'text-[25px] leading-[34px]' },
	j = {
		__name: 'ExchangeButton',
		props: { isWide: { type: Boolean, default: !1 } },
		setup(l) {
			return (s, t) => (
				o(),
				a(
					'button',
					{
						class: b([
							'flex items-center gap-3 bg-primary text-white rounded-[60px] py-4 px-8 hover:bg-primary-dark transition-colors',
							{ 'w-[282px]': l.isWide }
						])
					},
					[
						r(N),
						e('span', U, [F(s.$slots, 'default', {}, () => [t[0] || (t[0] = m('Обменять'))])])
					],
					2
				)
			)
		}
	},
	q = { class: 'relative' },
	z = { class: 'container mx-auto px-4 py-16' },
	T = { class: 'flex items-center justify-between' },
	W = { class: 'w-[55%] max-w-[777px]' },
	X = { class: 'flex gap-4' },
	G = {
		class:
			'flex items-center max-w-[460px] bg-white rounded-[60px] border-divider-light border py-5 pr-10 pl-5 flex-1 transition-all duration-300 hover:shadow-[0px_0px_0px_1px_#4460F6] hover:border-transparent'
	},
	J = { class: 'flex items-center flex-1' },
	K = {
		__name: 'HeroSection',
		setup(l) {
			return (s, t) => (
				o(),
				a('section', q, [
					e('div', z, [
						e('div', T, [
							e('div', W, [
								t[3] ||
									(t[3] = e(
										'span',
										{
											class:
												'text-dark-secondary text-[28px] leading-[34px] tracking-[12px] uppercase font-normal mb-9 block'
										},
										' exchange ',
										-1
									)),
								t[4] ||
									(t[4] = e(
										'h2',
										{
											class: 'h2-custom text-[77px] leading-[80px] font-bold text-dark-deep mb-11'
										},
										' Обмен недвижимостью ',
										-1
									)),
								t[5] ||
									(t[5] = e(
										'p',
										{
											class:
												'text-[#426BFF] text-[26px] leading-[36px] font-medium max-w-[608px] mb-11'
										},
										' Станьте собственником недвижимости в другой стране не расплачиваясь за нее ',
										-1
									)),
								e('div', X, [
									e('div', G, [
										e('div', J, [
											r(Z, { class: 'text-primary ml-2 mr-3' }),
											t[0] ||
												(t[0] = e('div', { class: 'w-[1px] h-[32px] bg-[#7974E7]' }, null, -1)),
											t[1] ||
												(t[1] = e(
													'input',
													{
														type: 'text',
														placeholder: 'Поиск',
														class:
															'flex-1 px-4 max-w-[260px] outline-none text-[22px] leading-[32px] text-dark'
													},
													null,
													-1
												))
										]),
										t[2] ||
											(t[2] = e(
												'button',
												{
													type: 'submit',
													class:
														'text-dark-deep rounded-[8px] text-[25px] leading-[34px] transition-colors hover:text-primary'
												},
												' Найти ',
												-1
											))
									]),
									r(j, { isWide: '' })
								])
							]),
							t[6] ||
								(t[6] = e(
									'div',
									{ class: 'max-w-[40%] xl:w-[800px]' },
									[
										e('img', { src: M, alt: 'Обмен недвижимостью', class: 'w-full rounded-[20px]' })
									],
									-1
								))
						])
					])
				])
			)
		}
	}
function Q() {
	const l = _([])
	return {
		favorites: l,
		toggleFavorite: (d) => {
			const n = l.value.indexOf(d)
			n === -1 ? l.value.push(d) : l.value.splice(n, 1)
		},
		isFavorite: (d) => l.value.includes(d)
	}
}
const Y = {},
	ee = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '24',
		height: '24',
		viewBox: '0 0 24 24',
		fill: 'none'
	}
function te(l, s) {
	return (
		o(),
		a(
			'svg',
			ee,
			s[0] ||
				(s[0] = [
					e(
						'path',
						{
							d: 'M19.0712 13.1437L13.4142 18.8017C13.0391 19.1767 12.5305 19.3873 12.0002 19.3873C11.4699 19.3873 10.9613 19.1767 10.5862 18.8017L4.9292 13.1447C4.46157 12.6812 4.09011 12.1298 3.83613 11.5223C3.58216 10.9148 3.45067 10.2631 3.44923 9.6047C3.44779 8.94625 3.57642 8.294 3.82773 7.68539C4.07904 7.07679 4.44809 6.52381 4.91368 6.05822C5.37928 5.59262 5.93225 5.22357 6.54086 4.97226C7.14947 4.72095 7.80172 4.59232 8.46017 4.59376C9.11862 4.5952 9.7703 4.72669 10.3778 4.98066C10.9853 5.23464 11.5367 5.6061 12.0002 6.07373C12.9418 5.1556 14.2071 4.6454 15.5222 4.65364C16.8373 4.66188 18.0962 5.1879 19.0262 6.11776C19.9562 7.04761 20.4824 8.30643 20.4908 9.62151C20.4992 10.9366 19.9892 12.202 19.0712 13.1437Z',
							fill: 'white',
							stroke: '#3D62FF',
							'stroke-width': '2',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round',
							class: 'transition-all duration-300'
						},
						null,
						-1
					)
				])
		)
	)
}
const se = i(Y, [['render', te]]),
	le = {},
	ne = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '22',
		height: '22',
		viewBox: '0 0 22 22',
		fill: 'none'
	}
function oe(l, s) {
	return (
		o(),
		a(
			'svg',
			ne,
			s[0] ||
				(s[0] = [
					e(
						'path',
						{
							d: 'M18.3475 9.42766C18.3475 13.3225 11.2949 20.0067 11.2949 20.0067C11.2949 20.0067 4.24219 13.3225 4.24219 9.42766C4.24219 7.55718 4.98523 5.76331 6.30786 4.44068C7.6305 3.11805 9.42437 2.375 11.2949 2.375C13.1653 2.375 14.9592 3.11805 16.2818 4.44068C17.6045 5.76331 18.3475 7.55718 18.3475 9.42766Z',
							fill: '#3D62FF'
						},
						null,
						-1
					),
					e(
						'path',
						{
							d: 'M11.2941 10.1311C11.5746 10.1311 11.8436 10.0196 12.042 9.82128C12.2403 9.62292 12.3518 9.35388 12.3518 9.07335C12.3518 8.79283 12.2403 8.52379 12.042 8.32543C11.8436 8.12706 11.5746 8.01562 11.2941 8.01562C11.0135 8.01562 10.7445 8.12706 10.5461 8.32543C10.3478 8.52379 10.2363 8.79283 10.2363 9.07335C10.2363 9.35388 10.3478 9.62292 10.5461 9.82128C10.7445 10.0196 11.0135 10.1311 11.2941 10.1311Z',
							fill: 'white',
							stroke: 'white',
							'stroke-width': '1.76317',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round'
						},
						null,
						-1
					)
				])
		)
	)
}
const S = i(le, [['render', oe]]),
	ae = {},
	re = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '23',
		height: '22',
		viewBox: '0 0 23 22',
		fill: 'none'
	}
function ie(l, s) {
	return (
		o(),
		a(
			'svg',
			re,
			s[0] ||
				(s[0] = [
					e(
						'rect',
						{
							x: '0.841797',
							y: '0.375',
							width: '21.2143',
							height: '21.2143',
							rx: '5.30357',
							fill: '#3D62FF'
						},
						null,
						-1
					),
					e(
						'rect',
						{
							x: '6.14844',
							y: '5.67822',
							width: '10.6071',
							height: '10.6071',
							rx: '1.76786',
							fill: 'white'
						},
						null,
						-1
					)
				])
		)
	)
}
const de = i(ae, [['render', ie]]),
	ce = {},
	ue = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '36',
		height: '26',
		viewBox: '0 0 36 26',
		fill: 'none'
	}
function xe(l, s) {
	return (
		o(),
		a(
			'svg',
			ue,
			s[0] ||
				(s[0] = [
					e(
						'path',
						{
							d: 'M29.5073 5.17882H3.25543V1.75467C3.25543 1.45195 3.13517 1.16164 2.92112 0.947586C2.70707 0.733534 2.41676 0.613281 2.11404 0.613281C1.81133 0.613281 1.52101 0.733534 1.30696 0.947586C1.09291 1.16164 0.972656 1.45195 0.972656 1.75467V24.5824C0.972656 24.8851 1.09291 25.1754 1.30696 25.3895C1.52101 25.6035 1.81133 25.7238 2.11404 25.7238C2.41676 25.7238 2.70707 25.6035 2.92112 25.3895C3.13517 25.1754 3.25543 24.8851 3.25543 24.5824V20.0168H32.9315V24.5824C32.9315 24.8851 33.0517 25.1754 33.2658 25.3895C33.4798 25.6035 33.7701 25.7238 34.0728 25.7238C34.3756 25.7238 34.6659 25.6035 34.8799 25.3895C35.094 25.1754 35.2142 24.8851 35.2142 24.5824V10.8858C35.2142 9.37218 34.613 7.9206 33.5427 6.85034C32.4724 5.78009 31.0209 5.17882 29.5073 5.17882ZM3.25543 7.46159H13.5279V17.7341H3.25543V7.46159Z',
							fill: '#3D62FF'
						},
						null,
						-1
					)
				])
		)
	)
}
const pe = i(ce, [['render', xe]]),
	me = {},
	ve = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '35',
		height: '30',
		viewBox: '0 0 35 30',
		fill: 'none'
	}
function _e(l, s) {
	return (
		o(),
		a(
			'svg',
			ve,
			s[0] ||
				(s[0] = [
					e(
						'path',
						{
							d: 'M33.4747 10.8233H30.0505C30.0505 10.5206 29.9303 10.2303 29.7162 10.0162C29.5022 9.80217 29.2119 9.68192 28.9092 9.68192H18.6367C18.334 9.68192 18.0436 9.80217 17.8296 10.0162C17.6155 10.2303 17.4953 10.5206 17.4953 10.8233H8.36421V4.54568C8.36421 4.09161 8.54459 3.65614 8.86567 3.33506C9.18674 3.01398 9.62222 2.8336 10.0763 2.8336C10.4776 2.83196 10.8675 2.96635 11.1826 3.21483C11.4977 3.46332 11.7193 3.81124 11.8112 4.20184C11.8739 4.49599 12.0502 4.7535 12.3017 4.9184C12.5532 5.08331 12.8596 5.14228 13.1544 5.0825C13.4491 5.02273 13.7084 4.84903 13.8758 4.59917C14.0431 4.3493 14.1052 4.04347 14.0483 3.74814C13.8545 2.8399 13.3538 2.02614 12.6303 1.44381C11.9069 0.861477 11.005 0.546129 10.0763 0.550833C9.01679 0.550833 8.00068 0.971718 7.2515 1.7209C6.50232 2.47008 6.08144 3.48618 6.08144 4.54568V10.8233H1.5159C1.21318 10.8233 0.922867 10.9436 0.708816 11.1576C0.494764 11.3717 0.374512 11.662 0.374512 11.9647V17.6716C0.376778 19.7899 1.21927 21.8208 2.71714 23.3187C4.21501 24.8166 6.24591 25.6591 8.36421 25.6613V27.9441C8.36421 28.2468 8.48446 28.5371 8.69851 28.7512C8.91257 28.9652 9.20288 29.0855 9.5056 29.0855C9.80831 29.0855 10.0986 28.9652 10.3127 28.7512C10.5267 28.5371 10.647 28.2468 10.647 27.9441V25.6613H24.3436V27.9441C24.3436 28.2468 24.4639 28.5371 24.6779 28.7512C24.892 28.9652 25.1823 29.0855 25.485 29.0855C25.7877 29.0855 26.078 28.9652 26.2921 28.7512C26.5061 28.5371 26.6264 28.2468 26.6264 27.9441V25.6613C28.7447 25.6591 30.7756 24.8166 32.2734 23.3187C33.7713 21.8208 34.6138 19.7899 34.6161 17.6716V11.9647C34.6161 11.662 34.4958 11.3717 34.2818 11.1576C34.0677 10.9436 33.7774 10.8233 33.4747 10.8233ZM27.7678 11.9647V17.6716H19.7781V11.9647H27.7678Z',
							fill: '#3D62FF'
						},
						null,
						-1
					)
				])
		)
	)
}
const fe = i(me, [['render', _e]]),
	be = ['src', 'alt'],
	ge = { class: 'flex items-center mb-3 gap-2 justify-between text-[24px]' },
	he = { class: 'font-semibold' },
	we = { class: 'text-primary-lighter font-semibold' },
	Ce = { class: 'flex items-center mb-3' },
	$e = { class: 'ml-1 text-[18px]' },
	ye = { class: 'flex items-center gap-2' },
	ke = { class: 'flex items-center grow mt-2' },
	Fe = { class: 'ml-1' },
	je = { class: 'flex items-center grow mt-2' },
	Se = { class: 'ml-1' },
	Ve = { class: 'flex items-center grow mt-2' },
	Be = { class: 'ml-1' },
	Ie = {
		__name: 'ObjectCard',
		props: { card: { type: Object, required: !0 } },
		setup(l) {
			const { toggleFavorite: s, isFavorite: t } = Q()
			return (d, n) => (
				o(),
				a(
					'li',
					{
						class: b([
							'relative w-[350px] bg-white rounded-[60px] p-6 object-item',
							{ 'favorite-object': v(t)(l.card.id) }
						])
					},
					[
						e(
							'img',
							{ src: l.card.image, alt: l.card.title, class: 'w-full h-auto rounded-lg mb-3' },
							null,
							8,
							be
						),
						e(
							'div',
							{
								class: b([
									'absolute top-12 right-12 flex items-center justify-center rounded-full icon-heart cursor-pointer',
									{ 'is-favorite': v(t)(l.card.id) }
								]),
								onClick: n[0] || (n[0] = (x) => v(s)(l.card.id))
							},
							[r(se, { class: 'h-6' })],
							2
						),
						e('div', ge, [e('p', he, p(l.card.title), 1), e('p', we, '$' + p(l.card.price), 1)]),
						e('div', Ce, [r(S), e('span', $e, p(l.card.location), 1)]),
						e('div', ye, [
							e('div', ke, [r(de), e('span', Fe, p(l.card.area) + 'm²', 1)]),
							e('div', je, [r(pe), e('span', Se, p(l.card.beds), 1)]),
							e('div', Ve, [r(fe), e('span', Be, p(l.card.baths), 1)])
						])
					],
					2
				)
			)
		}
	},
	Le = i(Ie, [['__scopeId', 'data-v-930f86e1']])
function De() {
	const l = _(null),
		s = _(!1),
		t = _(0),
		d = _(0)
	return {
		scrollContainer: l,
		startDragging: (c) => {
			l.value &&
				((s.value = !0), (t.value = c.pageX - l.value.offsetLeft), (d.value = l.value.scrollLeft))
		},
		stopDragging: () => {
			s.value = !1
		},
		drag: (c) => {
			if (!s.value || !l.value) return
			c.preventDefault()
			const V = (c.pageX - l.value.offsetLeft - t.value) * 2
			l.value.scrollLeft = d.value - V
		}
	}
}
const Me = { class: 'relative pl-[80px] pr-6 py-6 mb-20' },
	He = { class: 'cards-container' },
	Ee = {
		__name: 'RecommendationsSection',
		setup(l) {
			const { scrollContainer: s, startDragging: t, stopDragging: d, drag: n } = De(),
				x = [
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
			return (g, c) => (
				o(),
				a('section', Me, [
					c[4] || (c[4] = e('div', { class: 'absolute inset-0 object-shape' }, null, -1)),
					c[5] ||
						(c[5] = e(
							'h2',
							{ class: 'text-[42px] leading-[50px] font-bold text-left mb-6 text-dark' },
							'Рекомендуемые объекты',
							-1
						)),
					e('div', He, [
						e(
							'ul',
							{
								ref_key: 'scrollContainer',
								ref: s,
								class: 'flex space-x-4 overflow-x-auto scrollbar-hide scroll-grab',
								onMousedown: c[0] || (c[0] = (...u) => v(t) && v(t)(...u)),
								onMousemove: c[1] || (c[1] = (...u) => v(n) && v(n)(...u)),
								onMouseup: c[2] || (c[2] = (...u) => v(d) && v(d)(...u)),
								onMouseleave: c[3] || (c[3] = (...u) => v(d) && v(d)(...u))
							},
							[
								(o(),
								a(
									w,
									null,
									C(x, (u) => r(Le, { key: u.id, card: u }, null, 8, ['card'])),
									64
								))
							],
							544
						)
					])
				])
			)
		}
	},
	Ae = i(Ee, [['__scopeId', 'data-v-3a537993']]),
	Ze = { class: 'container mx-auto' },
	Pe = { class: 'flex justify-between gap-5 bg-[#F0F3FE] rounded-[85px] py-16 px-[70px]' },
	Re = { class: 'flex flex-col items-start gap-6 min-w-[570px]' },
	Oe = {
		__name: 'ExchangeInfoSection',
		setup(l) {
			return (s, t) => (
				o(),
				a('section', null, [
					e('div', Ze, [
						e('div', Pe, [
							e('div', Re, [
								t[0] ||
									(t[0] = e(
										'h2',
										{ class: 'h2-custom text-[60px] leading-[70px] font-bold text-dark mb-5' },
										' Поможем найти лучший вариант ',
										-1
									)),
								t[1] ||
									(t[1] = e(
										'h3',
										{ class: 'text-[30px] leading-[40px] text-dark mb-70' },
										' Обмена квартиры или дома в любой точке мира на Испанию ',
										-1
									)),
								r(j)
							]),
							t[2] ||
								(t[2] = e(
									'div',
									{ class: 'flex flex-col items-start gap-12 grow' },
									[
										e(
											'div',
											{
												class:
													'border border-primary-lighter rounded-[40px] leading-[30px] py-3 px-5 font-medium text-dark-deeper text-[22px]'
											},
											' Обмен недвижимостью '
										),
										e(
											'div',
											{ class: 'flex flex-col gap-4 text-[19px] leading-[26px] text-dark-deeper' },
											[
												e(
													'p',
													null,
													'это форма сделки, при которой вы не платите за дом, а вместо этого совершаете прямой обмен вашей собственности на другую. Подобная сделка заключается в подписании контракта, который обязывает каждую сторону передать свою недвижимость другой без денежного обмена. Возможен обмен вилл, квартир, или любого другого типа жилья. Если вы хотите поменять свою недвижимость, но без необходимости платить за новый дом, более удобной альтернативой для вас может стать обмен недвижимости. '
												),
												e(
													'p',
													null,
													'Если вы хотите поменять свою недвижимость, но без необходимости платить за новый дом, более удобной альтернативой для вас может стать обмен недвижимости. '
												)
											]
										)
									],
									-1
								))
						])
					])
				])
			)
		}
	},
	Ne = {},
	Ue = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '42',
		height: '29',
		viewBox: '0 0 42 29',
		fill: 'none'
	}
function qe(l, s) {
	return (
		o(),
		a(
			'svg',
			Ue,
			s[0] ||
				(s[0] = [
					e(
						'path',
						{
							'fill-rule': 'evenodd',
							'clip-rule': 'evenodd',
							d: 'M28.2285 0.741132L40.5548 13.0675C41.3112 13.8239 41.3112 15.0502 40.5548 15.8067L28.2285 28.133C27.4721 28.8894 26.2457 28.8894 25.4893 28.133C24.7329 27.3766 24.7329 26.1502 25.4893 25.3938L34.5091 16.374H0.447266V12.5002H34.5091L25.4893 3.48032C24.7329 2.72391 24.7329 1.49754 25.4893 0.741132C26.2457 -0.0152733 27.4721 -0.0152733 28.2285 0.741132Z',
							fill: '#6284FF'
						},
						null,
						-1
					)
				])
		)
	)
}
const h = i(Ne, [['render', qe]]),
	ze = { class: 'exchange-process' },
	Te = { class: 'exchange-process__steps flex justify-between items-start mx-auto px-4' },
	We = { class: 'exchange-process__step flex flex-col items-center relative w-1/4' },
	Xe = {
		class:
			'w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-3'
	},
	Ge = { class: 'step-arrow' },
	Je = { class: 'exchange-process__step flex flex-col items-center relative w-1/4' },
	Ke = {
		class:
			'w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-3'
	},
	Qe = { class: 'step-arrow' },
	Ye = { class: 'exchange-process__step flex flex-col items-center relative w-1/4' },
	et = {
		class:
			'w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-3'
	},
	tt = { class: 'step-arrow' },
	st = { class: 'exchange-process__step flex flex-col items-center relative w-1/4' },
	lt = {
		class:
			'w-[380px] h-[380px] border-2 border-black rounded-full flex flex-col items-center p-8 text-center gap-2'
	},
	nt = { class: 'step-arrow' },
	ot = {
		__name: 'ExchangeProcess',
		setup(l) {
			return (s, t) => (
				o(),
				a('section', ze, [
					t[12] ||
						(t[12] = e(
							'h2',
							{ class: 'section-title text-4xl font-bold text-dark mb-16 text-center' },
							' Как происходит обмен? ',
							-1
						)),
					e('div', Te, [
						e('div', We, [
							e('div', Xe, [
								t[0] ||
									(t[0] = e('div', { class: 'step-number font-bold text-customColor' }, '01', -1)),
								t[1] ||
									(t[1] = e(
										'h3',
										{ class: 'step-title text-xl font-semibold text-black' },
										[m(' Оставьте '), e('br'), m(' заявку ')],
										-1
									)),
								t[2] ||
									(t[2] = e(
										'p',
										{ class: 'step-description grow text-base text-dark-deeper' },
										' Оставьте заявку на обмен заполнив краткую форму с данными о вашем объекте ',
										-1
									)),
								e('div', Ge, [r(h)])
							])
						]),
						e('div', Je, [
							e('div', Ke, [
								t[3] ||
									(t[3] = e('div', { class: 'step-number font-bold text-customColor' }, '02', -1)),
								t[4] ||
									(t[4] = e(
										'h3',
										{ class: 'step-title text-xl font-semibold text-black' },
										[m(' Проверим чистоту и '), e('br'), m(' подлинность ')],
										-1
									)),
								t[5] ||
									(t[5] = e(
										'p',
										{ class: 'step-description grow text-base text-dark-deeper' },
										' Мы проверим его на юридическую чистоту и подлинность, после чего добавим в базу ',
										-1
									)),
								e('div', Qe, [r(h)])
							])
						]),
						e('div', Ye, [
							e('div', et, [
								t[6] ||
									(t[6] = e('div', { class: 'step-number font-bold text-customColor' }, '03', -1)),
								t[7] ||
									(t[7] = e(
										'h3',
										{ class: 'step-title text-xl font-semibold text-black' },
										[m(' Подбор '), e('br'), m(' вариантов ')],
										-1
									)),
								t[8] ||
									(t[8] = e(
										'p',
										{ class: 'step-description grow text-base text-dark-deeper' },
										' Система подберет релевантные объекты в другом стране, подходящие по параметрам для обмена ',
										-1
									)),
								e('div', tt, [r(h)])
							])
						]),
						e('div', st, [
							e('div', lt, [
								t[9] ||
									(t[9] = e('div', { class: 'step-number font-bold text-customColor' }, '04', -1)),
								t[10] ||
									(t[10] = e(
										'h3',
										{ class: 'step-title text-xl font-semibold text-black' },
										[m(' От переговоров '), e('br'), m(' до ')],
										-1
									)),
								t[11] ||
									(t[11] = e(
										'p',
										{ class: 'step-description grow text-base text-dark-deeper' },
										' Когда вы выберите вариант, в случае если другой собственник будет также заинтересован вашим объектом, мы проведем сделку от переговоров до передачи ключей ',
										-1
									)),
								e('div', nt, [r(h)])
							])
						])
					])
				])
			)
		}
	},
	at = i(ot, [['__scopeId', 'data-v-5cc80164']]),
	rt = { class: 'flex flex-col items-center justify-center h-full' },
	it = { class: 'flex gap-4' },
	dt = { class: 'flex items-center' },
	ct = ['checked'],
	ut = { class: 'flex items-center' },
	xt = ['checked'],
	pt = {
		__name: 'Slide1',
		setup(l) {
			const s = _('yes'),
				t = (d) => {
					s.value = d
				}
			return (d, n) => (
				o(),
				a('div', rt, [
					n[2] ||
						(n[2] = e(
							'h2',
							{ class: 'custom-title mb-6 text-center' },
							'Вы хотите обменять свое жилье?',
							-1
						)),
					n[3] ||
						(n[3] = e(
							'p',
							{ class: 'description text-base mb-[90px] text-center' },
							' На нашей платформе вы можете разместить свое объявление и ответить на несколько вопросов об интересующем вас варианте обмена, после чего сервис сам предложит вам варианты обмена! ',
							-1
						)),
					e('div', it, [
						e('label', dt, [
							e(
								'input',
								{
									type: 'radio',
									value: 'yes',
									checked: s.value === 'yes',
									onChange: n[0] || (n[0] = (x) => t('yes')),
									class: 'hidden'
								},
								null,
								40,
								ct
							),
							e(
								'span',
								{
									class: b([
										{
											'bg-primary text-white': s.value === 'yes',
											'text-blue-600': s.value !== 'yes'
										},
										'flex items-center justify-center w-[250px] h-[92px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition border-[1px] border-primary text-[20px]'
									])
								},
								' Да ',
								2
							)
						]),
						e('label', ut, [
							e(
								'input',
								{
									type: 'radio',
									value: 'no',
									checked: s.value === 'no',
									onChange: n[1] || (n[1] = (x) => t('no')),
									class: 'hidden'
								},
								null,
								40,
								xt
							),
							e(
								'span',
								{
									class: b([
										{
											'bg-primary text-white': s.value === 'no',
											'text-blue-600': s.value !== 'no'
										},
										'flex items-center justify-center w-[250px] h-[92px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition border-[1px] border-primary text-[20px]'
									])
								},
								' Нет ',
								2
							)
						])
					])
				])
			)
		}
	},
	mt = i(pt, [['__scopeId', 'data-v-4c57ed3a']]),
	vt = {},
	_t = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '24',
		height: '22',
		viewBox: '0 0 24 22',
		fill: 'none'
	}
function ft(l, s) {
	return (
		o(),
		a(
			'svg',
			_t,
			s[0] ||
				(s[0] = [
					e(
						'path',
						{
							d: 'M8.5842 2.72972V16.4824M16.1693 5.50141V19.6561M1.95117 6.72858V17.0219C1.95117 19.0319 3.37934 19.8571 5.11429 18.8627L7.60035 17.4451C8.13988 17.1383 9.0391 17.1066 9.59978 17.3922L15.1538 20.1745C15.7144 20.4495 16.6137 20.4284 17.1532 20.1216L21.7339 17.498C22.3157 17.1595 22.8024 16.3343 22.8024 15.6572V5.36389C22.8024 3.35388 21.3742 2.52872 19.6393 3.52314L17.1532 4.94073C16.6137 5.24752 15.7144 5.27925 15.1538 4.99362L9.59978 2.22192C9.0391 1.94687 8.13988 1.96803 7.60035 2.27482L3.01965 4.89841C2.42723 5.23694 1.95117 6.0621 1.95117 6.72858Z',
							stroke: 'white',
							'stroke-width': '2.1158',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round'
						},
						null,
						-1
					)
				])
		)
	)
}
const bt = i(vt, [['render', ft]]),
	gt = { class: 'flex flex-col items-center justify-center h-full' },
	ht = { class: 'flex items-center w-[480px] border border-[#ECEDF3] rounded-[40px] py-4 px-5' },
	wt = {
		class:
			'flex items-center ml-auto bg-primary-dark text-white text-[12px] px-5 py-3 rounded-full hover:bg-blue-700 transition'
	},
	Ct = {
		__name: 'Slide2',
		setup(l) {
			return (s, t) => (
				o(),
				a('div', gt, [
					t[2] ||
						(t[2] = e(
							'h2',
							{ class: 'custom-title mb-6 text-center' },
							'Где находится объект?',
							-1
						)),
					t[3] ||
						(t[3] = e(
							'p',
							{ class: 'description text-base mb-6 text-center' },
							' Введите адрес или выберите зону на карте ',
							-1
						)),
					e('div', ht, [
						r(S, { class: 'mr-2' }),
						t[1] ||
							(t[1] = e(
								'select',
								{ class: 'mr-2 text-[18px] cursor-pointer' },
								[
									e('option', { value: 'location1' }, 'Italy, Sardinia'),
									e('option', { value: 'location2' }, 'Spain, Barcelona'),
									e('option', { value: 'location3' }, 'France, Paris')
								],
								-1
							)),
						e('button', wt, [r(bt, { class: 'mr-2' }), t[0] || (t[0] = m(' Карта '))])
					])
				])
			)
		}
	},
	$t = i(Ct, [['__scopeId', 'data-v-a1add007']]),
	yt = { class: 'flex items-center' },
	kt = ['value', 'name'],
	Ft = {
		__name: 'RadioButton',
		props: { value: String, name: String, modelValue: String },
		setup(l) {
			return (s, t) => (
				o(),
				a('label', yt, [
					e(
						'input',
						{
							type: 'radio',
							value: l.value,
							name: l.name,
							class: 'hidden',
							onChange: t[0] || (t[0] = (d) => s.$emit('update:modelValue', l.value))
						},
						null,
						40,
						kt
					),
					e(
						'span',
						{
							class: b([
								{
									'bg-[#1C2D6A] text-white': l.modelValue === l.value,
									'button-default': l.modelValue !== l.value
								},
								'button'
							])
						},
						[F(s.$slots, 'default', {}, void 0, !0)],
						2
					)
				])
			)
		}
	},
	jt = i(Ft, [['__scopeId', 'data-v-a54b9b2c']]),
	St = { class: 'flex flex-col items-center justify-center max-w-[970px] h-full' },
	Vt = { class: 'flex flex-wrap justify-center gap-4' },
	Bt = {
		__name: 'Slide3',
		setup(l) {
			const s = _('all'),
				t = [
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
			return (d, n) => (
				o(),
				a('div', St, [
					n[1] || (n[1] = e('h2', { class: 'custom-title mb-6 text-center' }, 'Тип объекта', -1)),
					n[2] ||
						(n[2] = e(
							'p',
							{ class: 'description text-base mb-6 text-center' },
							' Выберите одну или несколько категорий интересующей вас недвижимости ',
							-1
						)),
					e('div', Vt, [
						(o(),
						a(
							w,
							null,
							C(t, (x) =>
								r(
									jt,
									{
										key: x.value,
										value: x.value,
										name: 'property-type',
										modelValue: s.value,
										'onUpdate:modelValue': n[0] || (n[0] = (g) => (s.value = g))
									},
									{ default: B(() => [m(p(x.label), 1)]), _: 2 },
									1032,
									['value', 'modelValue']
								)
							),
							64
						))
					])
				])
			)
		}
	},
	It = i(Bt, [['__scopeId', 'data-v-79c14eca']]),
	Lt = { class: 'flex flex-col items-center justify-center max-w-[970px] h-full' },
	Dt = { class: 'w-[750px] max-w-full' },
	Mt = { class: 'mb-6' },
	Ht = { class: 'flex items-center gap-7' },
	Et = {
		class:
			'text-[16px] font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] px-4 py-2'
	},
	At = { class: 'relative' },
	Zt = ['min', 'max'],
	Pt = { class: 'range-scale-container mb-2' },
	Rt = { class: 'flex justify-between' },
	Ot = { class: 'text-[22px] font-semibold text-[#001062]' },
	Nt = { class: 'text-[22px] font-semibold text-[#001062]' },
	Ut = { class: 'flex items-center gap-7' },
	qt = {
		class:
			'text-[16px] font-semibold text-[#001062] border border-[#3D62FF] rounded-[30px] px-4 py-2'
	},
	zt = { class: 'relative' },
	Tt = ['min', 'max'],
	Wt = { class: 'range-scale-container mb-2' },
	Xt = { class: 'flex justify-between' },
	Gt = { class: 'text-[22px] font-semibold text-[#001062]' },
	Jt = { class: 'text-[22px] font-semibold text-[#001062]' },
	Kt = {
		__name: 'Slide4',
		setup(l) {
			const s = _({ min: 0, max: 1e7, value: 3e5 }),
				t = _({ min: 0, max: 1e5, value: 300 })
			return (d, n) => (
				o(),
				a('div', Lt, [
					n[4] ||
						(n[4] = e(
							'h2',
							{ class: 'custom-title mb-6 text-center' },
							'Стоимость и площадь объекта',
							-1
						)),
					n[5] ||
						(n[5] = e(
							'p',
							{ class: 'description text-base mb-6 text-center' },
							' Укажите цену и площадь вашей недвижимости ',
							-1
						)),
					e('div', Dt, [
						e('div', Mt, [
							e('div', Ht, [
								n[2] ||
									(n[2] = e(
										'label',
										{ class: 'block text-left text-[18px] font-semibold text-[#001062]' },
										'Стоимость',
										-1
									)),
								e('div', Et, p(s.value.value) + ' €', 1)
							]),
							e('div', At, [
								$(
									e(
										'input',
										{
											type: 'range',
											min: s.value.min,
											max: s.value.max,
											'onUpdate:modelValue': n[0] || (n[0] = (x) => (s.value.value = x)),
											class: 'w-full range-input'
										},
										null,
										8,
										Zt
									),
									[[y, s.value.value]]
								),
								e('div', Pt, [
									e(
										'div',
										{
											class: 'range-scale',
											style: k({ width: (s.value.value / s.value.max) * 100 + '%' })
										},
										null,
										4
									)
								])
							]),
							e('div', Rt, [
								e('span', Ot, p(s.value.min) + ' €', 1),
								e('span', Nt, p(s.value.max) + ' €', 1)
							])
						]),
						e('div', null, [
							e('div', Ut, [
								n[3] ||
									(n[3] = e(
										'label',
										{ class: 'block text-left text-[18px] font-semibold text-[#001062]' },
										'Площадь',
										-1
									)),
								e('div', qt, p(t.value.value) + ' м²', 1)
							]),
							e('div', zt, [
								$(
									e(
										'input',
										{
											type: 'range',
											min: t.value.min,
											max: t.value.max,
											'onUpdate:modelValue': n[1] || (n[1] = (x) => (t.value.value = x)),
											class: 'w-full range-input'
										},
										null,
										8,
										Tt
									),
									[[y, t.value.value]]
								),
								e('div', Wt, [
									e(
										'div',
										{
											class: 'range-scale',
											style: k({ width: (t.value.value / t.value.max) * 100 + '%' })
										},
										null,
										4
									)
								])
							]),
							e('div', Xt, [
								e('span', Gt, p(t.value.min) + ' м²', 1),
								e('span', Jt, p(t.value.max) + ' м²', 1)
							])
						])
					])
				])
			)
		}
	},
	Qt = i(Kt, [['__scopeId', 'data-v-1321d4b2']]),
	Yt = {
		__name: 'Slide5',
		setup(l) {
			return (s, t) => (
				o(),
				a(
					'div',
					null,
					t[0] ||
						(t[0] = [e('h2', null, 'Слайд 5', -1), e('p', null, 'Содержимое первого слайда.', -1)])
				)
			)
		}
	},
	es = i(Yt, [['__scopeId', 'data-v-aa81697d']]),
	ts = {
		__name: 'Slide6',
		setup(l) {
			return (s, t) => (
				o(),
				a(
					'div',
					null,
					t[0] ||
						(t[0] = [e('h2', null, 'Слайд 6', -1), e('p', null, 'Содержимое первого слайда.', -1)])
				)
			)
		}
	},
	ss = i(ts, [['__scopeId', 'data-v-01eeca6b']]),
	ls = {
		__name: 'Slide7',
		setup(l) {
			return (s, t) => (
				o(),
				a(
					'div',
					null,
					t[0] ||
						(t[0] = [e('h2', null, 'Слайд 7', -1), e('p', null, 'Содержимое первого слайда.', -1)])
				)
			)
		}
	},
	ns = i(ls, [['__scopeId', 'data-v-c9f40ca7']]),
	os = {
		__name: 'Slide8',
		setup(l) {
			return (s, t) => (
				o(),
				a(
					'div',
					null,
					t[0] ||
						(t[0] = [e('h2', null, 'Слайд 8', -1), e('p', null, 'Содержимое первого слайда.', -1)])
				)
			)
		}
	},
	as = i(os, [['__scopeId', 'data-v-e03230fe']]),
	rs = {
		class:
			'slide w-full py-8 px-10 max-w-[1360px] min-h-[720px] mx-auto rounded-[50px] overflow-hidden bg-white flex flex-col'
	},
	is = { class: 'slider-header flex items-center justify-between' },
	ds = { class: 'slider-content flex-grow flex items-center justify-center' },
	cs = { class: 'slider-footer flex items-center gap-7' },
	us = { class: 'pagination flex gap-1 grow' },
	xs = {
		__name: 'Slider',
		setup(l) {
			const s = [f(mt), f($t), f(It), f(Qt), f(es), f(ss), f(ns), f(as)],
				t = _(0),
				d = _(s[t.value]),
				n = () => {
					t.value === s.length - 1
						? console.log('Отправка данных...')
						: (t.value++, (d.value = s[t.value]))
				}
			return (x, g) => (
				o(),
				a('div', rs, [
					e('header', is, [r(D)]),
					e('div', ds, [(o(), I(L(d.value)))]),
					e('footer', cs, [
						e('div', us, [
							(o(),
							a(
								w,
								null,
								C(s, (c, u) =>
									e(
										'div',
										{
											key: u,
											class: b([
												'bullet h-[5px] grow rounded transition-colors duration-300',
												{ 'bg-primary': t.value === u, 'bg-[#E9ECFF]': t.value !== u }
											])
										},
										null,
										2
									)
								),
								64
							))
						]),
						e(
							'button',
							{
								class:
									'min-w-[140px] h-[50px] bg-primary-dark text-white text-[18px] px-4 py-2 rounded-[40px] hover:bg-blue-700',
								onClick: n
							},
							p(t.value === s.length - 1 ? 'Отправить' : 'Далее'),
							1
						)
					])
				])
			)
		}
	},
	ps = i(xs, [['__scopeId', 'data-v-a6e51e47']]),
	ms = { class: 'container' },
	vs = { class: 'py-12 bg-[#EFF3FF] rounded-[80px]' },
	_s = {
		__name: 'index',
		setup(l) {
			return (s, t) => (
				o(), a(w, null, [r(K), r(Ae), r(Oe), r(at), e('div', ms, [e('div', vs, [r(ps)])])], 64)
			)
		}
	},
	hs = i(_s, [['__scopeId', 'data-v-a7a089e5']])
export { hs as default }
