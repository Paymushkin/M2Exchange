import { _ as B } from './-jmUwcUN.js'
import {
	A as V,
	o as n,
	y as g,
	w as k,
	b as i,
	n as u,
	P as w,
	B as H,
	c as r,
	C as d,
	F as _,
	p as m,
	a as t,
	t as C,
	r as x,
	D as b,
	E as M,
	q as Z,
	G as I,
	z as j,
	d as P,
	m as O
} from './DsAHgXQU.js'
import { L as F } from './BFUUyzWQ.js'
import { _ as l } from './DlAUqK2U.js'
const y = {
		__name: 'TheLogo',
		setup(s) {
			const e = V(),
				o = () => {
					window.location.pathname !== '/' && e.push('/')
				}
			return (c, a) => {
				const p = B
				return (
					n(),
					g(
						p,
						{
							to: '/',
							class: u([
								'flex items-center space-x-2',
								{
									'cursor-pointer': (c._.provides[w] || c.$route).path !== '/',
									'cursor-default': (c._.provides[w] || c.$route).path === '/'
								}
							]),
							onClick:
								a[0] ||
								(a[0] = H(
									(v) => ((c._.provides[w] || c.$route).path === '/' ? null : o()),
									['prevent']
								))
						},
						{ default: k(() => [i(F)]), _: 1 },
						8,
						['class']
					)
				)
			}
		}
	},
	T = { class: 'hidden md:flex items-center space-x-8' },
	N = ['href'],
	L = {
		__name: 'TheNavigation',
		setup(s) {
			const e = [
				{ text: 'О сервисе', href: '#' },
				{ text: 'Партнерам', href: '#' },
				{ text: 'Объекты', href: '#' },
				{ text: 'Информация', href: '#' }
			]
			return (o, c) => (
				n(),
				r('div', T, [
					c[0] ||
						(c[0] = d(
							'<button class="flex items-center gap-2 bg-white px-[8px] py-[6px] rounded-[40px] min-w-[179px]"><div class="w-[44px] h-[44px] rounded-full bg-[#060565] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none"><path d="M9.42639 12.3634L4.03051 14.7006L1.69336 9.30469" stroke="white" stroke-width="1.47007" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.03033 14.7014L5.83243 10.1453C6.87611 7.50688 8.91787 5.38625 11.5149 4.24339C14.1119 3.10053 17.0548 3.02759 19.7053 4.04038" stroke="white" stroke-width="1.47007" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.5312 15.6641L26.9271 13.3269L29.2643 18.7228" stroke="white" stroke-width="1.47007" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.9287 13.3256L25.1266 17.8816C24.083 20.5201 22.0412 22.6407 19.4442 23.7836C16.8472 24.9264 13.9043 24.9994 11.2538 23.9866" stroke="white" stroke-width="1.47007" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><span class="text-[#171652]">Обменять</span></button>',
							1
						)),
					(n(),
					r(
						_,
						null,
						m(e, (a) =>
							t(
								'a',
								{ key: a.text, href: a.href, class: 'text-[#171652] hover:text-[#171652]/80' },
								C(a.text),
								9,
								N
							)
						),
						64
					))
				])
			)
		}
	},
	D = {},
	S = {
		width: '46',
		height: '46',
		viewBox: '0 0 46 46',
		fill: 'none',
		xmlns: 'http://www.w3.org/2000/svg'
	}
function A(s, e) {
	return (
		n(),
		r(
			'svg',
			S,
			e[0] ||
				(e[0] = [
					d(
						'<circle cx="23.2768" cy="23.2573" r="21.8889" stroke="black" stroke-width="1.01809"></circle><g clip-path="url(#clip0_116_20973)"><path d="M23.1335 34.1827C23.1335 34.1827 11.7129 28.0331 11.7129 20.7854C11.7129 19.2127 12.3377 17.7044 13.4497 16.5923C14.5618 15.4802 16.0701 14.8555 17.6428 14.8555C20.1235 14.8555 22.2484 16.2073 23.1335 18.3695C24.0186 16.2073 26.1435 14.8555 28.6242 14.8555C30.197 14.8555 31.7053 15.4802 32.8173 16.5923C33.9294 17.7044 34.5542 19.2127 34.5542 20.7854C34.5542 28.0331 23.1335 34.1827 23.1335 34.1827Z" stroke="black" stroke-width="1.75702" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_20973"><rect width="28.1124" height="28.1124" fill="white" transform="translate(9.07812 9.58594)"></rect></clipPath></defs>',
						3
					)
				])
		)
	)
}
const z = l(D, [['render', A]]),
	E = {},
	G = {
		width: '46',
		height: '46',
		viewBox: '0 0 46 46',
		fill: 'none',
		xmlns: 'http://www.w3.org/2000/svg'
	}
function q(s, e) {
	return (
		n(),
		r(
			'svg',
			G,
			e[0] ||
				(e[0] = [
					d(
						'<circle cx="23.187" cy="23.2573" r="21.8889" stroke="black" stroke-width="1.01809"></circle><g clip-path="url(#clip0_116_20967)"><path d="M21.9484 29.9124C26.5981 29.9124 30.3674 26.143 30.3674 21.4933C30.3674 16.8436 26.5981 13.0742 21.9484 13.0742C17.2986 13.0742 13.5293 16.8436 13.5293 21.4933C13.5293 26.143 17.2986 29.9124 21.9484 29.9124Z" stroke="black" stroke-width="1.75702" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.9004 27.4414L33.7338 33.2748" stroke="black" stroke-width="1.75702" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_20967"><rect width="26.941" height="26.941" fill="white" transform="translate(10.1602 9.70312)"></rect></clipPath></defs>',
						3
					)
				])
		)
	)
}
const R = l(E, [['render', q]]),
	U = {},
	Y = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '46',
		height: '46',
		viewBox: '0 0 46 46',
		fill: 'none'
	}
function J(s, e) {
	return (
		n(),
		r(
			'svg',
			Y,
			e[0] ||
				(e[0] = [
					t(
						'circle',
						{
							cx: '23.0972',
							cy: '23.2573',
							r: '21.8889',
							stroke: 'black',
							'stroke-width': '1.01809'
						},
						null,
						-1
					),
					t(
						'path',
						{
							d: 'M12.4121 22.5312H34.6677',
							stroke: 'black',
							'stroke-width': '1.63989',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round'
						},
						null,
						-1
					),
					t(
						'path',
						{
							d: 'M23.5399 33.658C29.6856 33.658 34.6677 28.6759 34.6677 22.5302C34.6677 16.3844 29.6856 11.4023 23.5399 11.4023C17.3942 11.4023 12.4121 16.3844 12.4121 22.5302C12.4121 28.6759 17.3942 33.658 23.5399 33.658Z',
							stroke: 'black',
							'stroke-width': '1.63989',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round'
						},
						null,
						-1
					),
					t(
						'path',
						{
							d: 'M28.1755 22.5302C28.1755 29.9487 23.5389 33.658 23.5389 33.658C23.5389 33.658 18.9023 29.9487 18.9023 22.5302C18.9023 15.1116 23.5389 11.4023 23.5389 11.4023C23.5389 11.4023 28.1755 15.1116 28.1755 22.5302Z',
							stroke: 'black',
							'stroke-width': '1.63989',
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
const K = l(U, [['render', J]]),
	Q = {
		__name: 'MenuButton',
		props: { isOpen: { type: Boolean, default: !1 } },
		emits: ['toggle'],
		setup(s, { emit: e }) {
			const o = e,
				c = () => {
					o('toggle')
				}
			return (a, p) => (
				n(),
				r(
					'button',
					{
						class: 'flex flex-col gap-[8px] cursor-pointer relative w-[28px] h-[20px]',
						onClick: c
					},
					[
						t(
							'span',
							{
								class: u([
									'absolute w-[24px] h-[3px] bg-dark rounded-full transition-all duration-300',
									{ 'rotate-45 top-[8px]': s.isOpen, 'top-0': !s.isOpen }
								])
							},
							null,
							2
						),
						t(
							'span',
							{
								class: u([
									'absolute w-[19px] h-[3px] bg-dark rounded-full top-[8px] transition-all duration-300',
									{ 'opacity-0': s.isOpen }
								])
							},
							null,
							2
						),
						t(
							'span',
							{
								class: u([
									'absolute w-[24px] h-[3px] bg-dark rounded-full transition-all duration-300',
									{ '-rotate-45 top-[8px]': s.isOpen, 'top-[16px]': !s.isOpen }
								])
							},
							null,
							2
						)
					]
				)
			)
		}
	},
	W = l(Q, [['__scopeId', 'data-v-dd6be091']]),
	X = { class: 'relative' },
	t1 = ['src', 'alt'],
	e1 = {
		key: 0,
		class:
			'absolute top-0 right-0 w-[14px] h-[14px] bg-[#FE8A71] rounded-full flex items-center justify-center'
	},
	n1 = { class: 'text-white text-[10px] leading-none' },
	o1 = {
		__name: 'UserAvatar',
		setup(s) {
			const e = x(!0),
				o = x(3)
			return (c, a) => {
				const p = b('router-link')
				return (
					n(),
					r('div', X, [
						i(
							p,
							{ to: e.value ? '/account' : '/auth', class: 'block' },
							{
								default: k(() => [
									t(
										'img',
										{
											src: e.value
												? '/images/avatars/avatar.png'
												: '/images/avatars/default-avatar.svg',
											alt: e.value ? 'User avatar' : 'Default avatar',
											class: 'min-w-[46px] h-[46px] aspect-square rounded-full object-cover'
										},
										null,
										8,
										t1
									)
								]),
								_: 1
							},
							8,
							['to']
						),
						o.value > 0 ? (n(), r('div', e1, [t('span', n1, C(o.value), 1)])) : M('', !0)
					])
				)
			}
		}
	},
	s1 = {},
	r1 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '20',
		height: '20',
		viewBox: '0 0 20 20',
		fill: 'none'
	}
function i1(s, e) {
	return (
		n(),
		r(
			'svg',
			r1,
			e[0] ||
				(e[0] = [
					t(
						'path',
						{
							d: 'M10.1342 9.06024C10.0509 9.0519 9.95091 9.0519 9.85924 9.06024C8.90275 9.02776 7.99645 8.62427 7.33227 7.9352C6.66809 7.24614 6.2982 6.32561 6.30091 5.36857C6.30091 3.3269 7.95091 1.66857 10.0009 1.66857C10.4863 1.65982 10.9686 1.74674 11.4203 1.92439C11.8721 2.10203 12.2844 2.36691 12.6338 2.70391C12.9832 3.04091 13.2627 3.44343 13.4566 3.88848C13.6504 4.33353 13.7547 4.81239 13.7634 5.29774C13.7722 5.78308 13.6852 6.2654 13.5076 6.71715C13.33 7.1689 13.0651 7.58123 12.7281 7.93061C12.3911 8.27999 11.9886 8.55958 11.5435 8.7534C11.0985 8.94722 10.6196 9.05148 10.1342 9.06024ZM5.96758 12.1352C3.95091 13.4852 3.95091 15.6852 5.96758 17.0269C8.25924 18.5602 12.0176 18.5602 14.3092 17.0269C16.3259 15.6769 16.3259 13.4769 14.3092 12.1352C12.0259 10.6102 8.26758 10.6102 5.96758 12.1352Z',
							stroke: 'currentColor',
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
const l1 = l(s1, [['render', i1]]),
	c1 = {},
	a1 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '20',
		height: '20',
		viewBox: '0 0 20 20',
		fill: 'none'
	}
function d1(s, e) {
	return (
		n(),
		r(
			'svg',
			a1,
			e[0] ||
				(e[0] = [
					t(
						'path',
						{
							d: 'M10.0175 2.42578C7.25914 2.42578 5.01747 4.66745 5.01747 7.42578V9.83412C5.01747 10.3424 4.80081 11.1174 4.54247 11.5508L3.58414 13.1424C2.99247 14.1258 3.40081 15.2174 4.48414 15.5841C8.07581 16.7841 11.9508 16.7841 15.5425 15.5841C16.5508 15.2508 16.9925 14.0591 16.4425 13.1424L15.4841 11.5508C15.2341 11.1174 15.0175 10.3424 15.0175 9.83412V7.42578C15.0175 4.67578 12.7675 2.42578 10.0175 2.42578Z',
							stroke: 'currentColor',
							'stroke-miterlimit': '10',
							'stroke-linecap': 'round'
						},
						null,
						-1
					),
					t(
						'path',
						{
							d: 'M11.5579 2.66719C10.5502 2.38018 9.48235 2.38018 8.47461 2.66719C8.71628 2.05052 9.31628 1.61719 10.0163 1.61719C10.7163 1.61719 11.3163 2.05052 11.5579 2.66719Z',
							stroke: 'currentColor',
							'stroke-miterlimit': '10',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round'
						},
						null,
						-1
					),
					t(
						'path',
						{
							d: 'M12.5176 15.8828C12.5176 17.2578 11.3926 18.3828 10.0176 18.3828C9.33424 18.3828 8.70091 18.0995 8.25091 17.6495C7.78271 17.1806 7.51907 16.5454 7.51758 15.8828',
							stroke: 'currentColor',
							'stroke-miterlimit': '10'
						},
						null,
						-1
					)
				])
		)
	)
}
const p1 = l(c1, [['render', d1]]),
	h1 = {},
	u1 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '22',
		height: '22',
		viewBox: '0 0 22 22',
		fill: 'none'
	}
function _1(s, e) {
	return (
		n(),
		r(
			'svg',
			u1,
			e[0] ||
				(e[0] = [
					d(
						'<g clip-path="url(#clip0_116_26565)"><path d="M6.875 12.375L9.625 9.625L12.375 12.375L15.125 9.625" stroke="currentColor" stroke-width="1.03125" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.8682 18.1404C8.60116 19.1433 10.6397 19.4818 12.6038 19.0928C14.5679 18.7037 16.3235 17.6136 17.5433 16.0257C18.763 14.4379 19.3636 12.4606 19.2332 10.4626C19.1028 8.46459 18.2502 6.5822 16.8344 5.16638C15.4186 3.75056 13.5362 2.89796 11.5381 2.76753C9.54013 2.6371 7.56287 3.23776 5.97501 4.4575C4.38714 5.67724 3.29706 7.43282 2.90799 9.39692C2.51892 11.361 2.85743 13.3996 3.86039 15.1325L2.78531 18.3423C2.74491 18.4635 2.73905 18.5934 2.76838 18.7177C2.79771 18.842 2.86107 18.9557 2.95136 19.0459C3.04166 19.1362 3.15531 19.1996 3.27959 19.2289C3.40387 19.2583 3.53386 19.2524 3.655 19.212L6.8682 18.1404Z" stroke="currentColor" stroke-width="1.03125" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_26565"><rect width="22" height="22" fill="white"></rect></clipPath></defs>',
						2
					)
				])
		)
	)
}
const C1 = l(h1, [['render', _1]]),
	f1 = {},
	w1 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '21',
		height: '21',
		viewBox: '0 0 21 21',
		fill: 'none'
	}
function x1(s, e) {
	return (
		n(),
		r(
			'svg',
			w1,
			e[0] ||
				(e[0] = [
					t(
						'g',
						{ 'clip-path': 'url(#clip0_116_26560)' },
						[
							t('path', {
								d: 'M8.53125 17.7193V12.4693H12.4688V17.7193H17.7188V9.84427C17.7188 9.75806 17.7019 9.67269 17.669 9.59302C17.636 9.51336 17.5877 9.44096 17.5268 9.37997L10.9643 2.81747C10.9033 2.75645 10.831 2.70805 10.7513 2.67502C10.6716 2.642 10.5862 2.625 10.5 2.625C10.4138 2.625 10.3284 2.642 10.2487 2.67502C10.169 2.70805 10.0967 2.75645 10.0357 2.81747L3.4732 9.37997C3.41228 9.44096 3.36397 9.51336 3.33104 9.59302C3.2981 9.67269 3.28118 9.75806 3.28125 9.84427V17.7193H8.53125Z',
								stroke: 'currentColor',
								'stroke-linecap': 'round',
								'stroke-linejoin': 'round'
							})
						],
						-1
					),
					t(
						'defs',
						null,
						[
							t('clipPath', { id: 'clip0_116_26560' }, [
								t('rect', { width: '21', height: '21', fill: 'white' })
							])
						],
						-1
					)
				])
		)
	)
}
const g1 = l(f1, [['render', x1]]),
	k1 = {},
	m1 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '22',
		height: '22',
		viewBox: '0 0 22 22',
		fill: 'none'
	}
function v1(s, e) {
	return (
		n(),
		r(
			'svg',
			m1,
			e[0] ||
				(e[0] = [
					d(
						'<g clip-path="url(#clip0_116_26555)"><path d="M3.4375 18.5625L10.3125 11.6875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.3125 17.1875L10.3116 11.6884L4.8125 11.6875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.75 15.8125H17.875C18.0573 15.8125 18.2322 15.7401 18.3611 15.6111C18.4901 15.4822 18.5625 15.3073 18.5625 15.125V4.125C18.5625 3.94266 18.4901 3.7678 18.3611 3.63886C18.2322 3.50993 18.0573 3.4375 17.875 3.4375H6.875C6.69266 3.4375 6.5178 3.50993 6.38886 3.63886C6.25993 3.7678 6.1875 3.94266 6.1875 4.125V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_26555"><rect width="22" height="22" fill="white"></rect></clipPath></defs>',
						2
					)
				])
		)
	)
}
const $1 = l(k1, [['render', v1]]),
	b1 = {},
	M1 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '19',
		height: '19',
		viewBox: '0 0 19 19',
		fill: 'none'
	}
function j1(s, e) {
	return (
		n(),
		r(
			'svg',
			M1,
			e[0] ||
				(e[0] = [
					t(
						'path',
						{
							d: 'M9.71924 16.063L16.3514 9.3358C17.0475 8.63977 17.4385 7.69576 17.4385 6.71143C17.4385 5.7271 17.0475 4.78308 16.3514 4.08705C15.6554 3.39102 14.7114 3 13.7271 3C12.7427 3 11.7987 3.39102 11.1027 4.08705L9.71924 5.37549L8.3358 4.08705C7.63977 3.39102 6.69576 3 5.71143 3C4.7271 3 3.78308 3.39102 3.08705 4.08705C2.39102 4.78308 2 5.7271 2 6.71143C2 7.69576 2.39102 8.63977 3.08705 9.3358L9.71924 16.063Z',
							stroke: 'currentColor',
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
const y1 = l(b1, [['render', j1]]),
	L1 = {},
	B1 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '25',
		height: '25',
		viewBox: '0 0 25 25',
		fill: 'none'
	}
function V1(s, e) {
	return (
		n(),
		r(
			'svg',
			B1,
			e[0] ||
				(e[0] = [
					d(
						'<g clip-path="url(#clip0_116_26542)"><path d="M12.5 15.625V14.0625C15.5205 14.0625 17.9688 11.9639 17.9688 9.375C17.9688 6.78613 15.5205 4.6875 12.5 4.6875C9.47949 4.6875 7.03125 6.78613 7.03125 9.375" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5 21.4844C13.1472 21.4844 13.6719 20.9597 13.6719 20.3125C13.6719 19.6653 13.1472 19.1406 12.5 19.1406C11.8528 19.1406 11.3281 19.6653 11.3281 20.3125C11.3281 20.9597 11.8528 21.4844 12.5 21.4844Z" fill="currentColor"></path></g><defs><clipPath id="clip0_116_26542"><rect width="25" height="25" fill="white"></rect></clipPath></defs>',
						2
					)
				])
		)
	)
}
const H1 = l(L1, [['render', V1]]),
	Z1 = {},
	I1 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '19',
		height: '19',
		viewBox: '0 0 19 19',
		fill: 'none'
	}
function P1(s, e) {
	return (
		n(),
		r(
			'svg',
			I1,
			e[0] ||
				(e[0] = [
					d(
						'<g clip-path="url(#clip0_116_26546)"><path d="M16.625 14.8438V15.4375C16.625 16.0674 16.3748 16.6715 15.9294 17.1169C15.484 17.5623 14.8799 17.8125 14.25 17.8125H10.0938" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.625 9.5H14.25C13.9351 9.5 13.633 9.62511 13.4103 9.84781C13.1876 10.0705 13.0625 10.3726 13.0625 10.6875V13.6562C13.0625 13.9712 13.1876 14.2732 13.4103 14.4959C13.633 14.7186 13.9351 14.8438 14.25 14.8438H16.625V9.5ZM16.625 9.5C16.625 8.56433 16.4407 7.63783 16.0826 6.77338C15.7246 5.90894 15.1998 5.12348 14.5381 4.46186C13.8765 3.80025 13.0911 3.27542 12.2266 2.91736C11.3622 2.55929 10.4357 2.375 9.5 2.375C8.56433 2.375 7.63783 2.55929 6.77338 2.91736C5.90894 3.27542 5.12348 3.80025 4.46186 4.46186C3.80025 5.12348 3.27542 5.90894 2.91736 6.77338C2.55929 7.63783 2.375 8.56433 2.375 9.5M2.375 9.5V13.6562C2.375 13.9712 2.50011 14.2732 2.72281 14.4959C2.94551 14.7186 3.24756 14.8438 3.5625 14.8438H4.75C5.06494 14.8438 5.36699 14.7186 5.58969 14.4959C5.81239 14.2732 5.9375 13.9712 5.9375 13.6562V10.6875C5.9375 10.3726 5.81239 10.0705 5.58969 9.84781C5.36699 9.62511 5.06494 9.5 4.75 9.5H2.375Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_116_26546"><rect width="19" height="19" fill="white"></rect></clipPath></defs>',
						2
					)
				])
		)
	)
}
const O1 = l(Z1, [['render', P1]]),
	F1 = {
		class:
			'absolute top-[calc(100%+25px)] right-0 w-[232px] bg-white rounded-[26px] shadow-lg px-[10px] pt-[36px] pb-[12px] transition-all duration-300 z-50'
	},
	T1 = { class: 'flex flex-col gap-4' },
	N1 = { class: 'text-dark group-hover:text-primary text-[13px] leading-[20px]' },
	D1 = { key: 0, class: 'h-[1px] bg-gray-divider' },
	S1 = {
		__name: 'HeaderMenu',
		props: { isOpen: { type: Boolean, default: !1 } },
		emits: ['close'],
		setup(s, { emit: e }) {
			const o = e,
				c = [
					{ name: 'Аккаунт', path: '/account', icon: l1 },
					{ name: 'Уведомления', path: '/notifications', icon: p1 },
					{ name: 'Сообщения', path: '/messages', icon: C1 },
					{ name: 'Мои объекты', path: '/my-objects', icon: g1 },
					{ name: 'Разместить объект', path: '/add-object', icon: $1 },
					{ name: 'Избранные объекты', path: '/favorites', icon: y1 },
					{ name: 'Помощь', path: '/help', icon: H1 },
					{ name: 'Связаться с нами', path: '/contact', icon: O1 }
				],
				a = () => {
					o('close')
				}
			return (p, v) => {
				const f = b('router-link')
				return Z(
					(n(),
					r(
						'div',
						F1,
						[
							t('nav', T1, [
								(n(),
								r(
									_,
									null,
									m(
										c,
										(h, $) => (
											n(),
											r(
												_,
												{ key: h.path },
												[
													i(
														f,
														{
															to: h.path,
															class:
																'flex items-center gap-3 hover:text-primary transition-colors group',
															onClick: a
														},
														{
															default: k(() => [
																(n(),
																g(j(h.icon), {
																	class: 'w-5 h-5 text-primary group-hover:text-primary'
																})),
																t('span', N1, C(h.name), 1)
															]),
															_: 2
														},
														1032,
														['to']
													),
													$ === 2 || $ === 5 ? (n(), r('div', D1)) : M('', !0)
												],
												64
											)
										)
									),
									64
								))
							])
						],
						512
					)),
					[[I, s.isOpen]]
				)
			}
		}
	},
	A1 = { class: 'flex items-center gap-5' },
	z1 = { class: 'flex items-center gap-2' },
	E1 = { class: 'relative' },
	G1 = {
		class:
			'flex justify-between items-center gap-[22px] py-[6px] pl-[22px] pr-[12px] bg-white rounded-[40px] w-[115px]'
	},
	q1 = {
		__name: 'TheHeaderActions',
		setup(s) {
			const e = [{ icon: z }, { icon: R }, { icon: K }],
				o = x(!1),
				c = () => {
					o.value = !o.value
				},
				a = () => {
					o.value = !1
				}
			return (p, v) => (
				n(),
				r('div', A1, [
					t('div', z1, [
						(n(),
						r(
							_,
							null,
							m(e, (f, h) =>
								t('button', { key: h, class: 'text-gray-600 hover:text-gray-900' }, [
									(n(), g(j(f.icon)))
								])
							),
							64
						))
					]),
					t('div', E1, [
						t('div', G1, [i(W, { 'is-open': o.value, onToggle: c }, null, 8, ['is-open']), i(o1)]),
						i(S1, { 'is-open': o.value, onClose: a }, null, 8, ['is-open'])
					])
				])
			)
		}
	},
	R1 = { class: 'w-full bg-primary-light rounded-b-[36px] relative z-40' },
	U1 = { class: 'container mx-auto px-4' },
	Y1 = { class: 'flex items-center py-5' },
	J1 = {
		__name: 'TheHeader',
		setup(s) {
			return (e, o) => (
				n(),
				r('header', R1, [
					t('div', U1, [
						t('nav', Y1, [i(y, { class: 'mr-[115px]' }), i(L), i(q1, { class: 'ml-auto' })])
					])
				])
			)
		}
	},
	K1 = {},
	Q1 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '24',
		height: '24',
		viewBox: '0 0 24 24',
		fill: 'none'
	}
function W1(s, e) {
	return (
		n(),
		r(
			'svg',
			Q1,
			e[0] ||
				(e[0] = [
					t(
						'path',
						{
							d: 'M12 2.162C15.2 2.162 15.584 2.174 16.849 2.232C18.1733 2.20221 19.4607 2.66999 20.457 3.543C21.333 4.53751 21.8012 5.82611 21.768 7.151C21.826 8.416 21.838 8.796 21.838 12C21.838 15.204 21.826 15.584 21.768 16.849C21.7953 18.1729 21.3278 19.4594 20.457 20.457C19.4625 21.3331 18.1739 21.8013 16.849 21.768C15.584 21.826 15.204 21.838 12 21.838C8.796 21.838 8.416 21.826 7.151 21.768C5.82769 21.7916 4.54247 21.3246 3.543 20.457C2.66957 19.461 2.20172 18.1734 2.232 16.849C2.174 15.584 2.162 15.204 2.162 12C2.162 8.796 2.174 8.416 2.232 7.151C2.20647 5.82737 2.67371 4.54149 3.543 3.543C4.53813 2.66802 5.8263 2.19995 7.151 2.232C8.416 2.174 8.8 2.162 12 2.162ZM12 0C8.741 0 8.332 0.014 7.052 0.072C5.1883 0.063286 3.38965 0.756613 2.014 2.014C0.75525 3.38881 0.0617091 5.18801 0.072 7.052C0.014 8.332 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.0640715 18.8116 0.757292 20.6099 2.014 21.986C3.38934 23.2439 5.1882 23.9373 7.052 23.928C8.332 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C18.8116 23.9362 20.6101 23.243 21.986 21.986C23.2447 20.6112 23.9383 18.812 23.928 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.332 23.928 7.052C23.9364 5.18836 23.2431 3.38981 21.986 2.014C20.6103 0.756698 18.8117 0.0633843 16.948 0.072C15.668 0.014 15.259 0 12 0Z',
							fill: 'black'
						},
						null,
						-1
					),
					t(
						'path',
						{
							d: 'M11.9999 5.83789C10.7812 5.83789 9.58981 6.19929 8.57647 6.87638C7.56313 7.55346 6.77334 8.51584 6.30695 9.6418C5.84056 10.7678 5.71853 12.0067 5.95629 13.202C6.19406 14.3973 6.78093 15.4953 7.6427 16.3571C8.50447 17.2189 9.60244 17.8057 10.7977 18.0435C11.9931 18.2813 13.232 18.1592 14.358 17.6928C15.4839 17.2264 16.4463 16.4367 17.1234 15.4233C17.8005 14.41 18.1619 13.2186 18.1619 11.9999C18.1619 10.3656 17.5127 8.7983 16.3571 7.6427C15.2015 6.4871 13.6342 5.83789 11.9999 5.83789ZM11.9999 15.9999C11.2088 15.9999 10.4354 15.7653 9.77761 15.3258C9.11982 14.8862 8.60713 14.2615 8.30437 13.5306C8.00162 12.7997 7.92241 11.9955 8.07675 11.2195C8.23109 10.4436 8.61206 9.73087 9.17147 9.17146C9.73088 8.61205 10.4436 8.23109 11.2195 8.07675C11.9955 7.92241 12.7997 8.00162 13.5306 8.30437C14.2615 8.60712 14.8862 9.11981 15.3258 9.77761C15.7653 10.4354 15.9999 11.2088 15.9999 11.9999C15.9999 13.0608 15.5785 14.0782 14.8283 14.8283C14.0782 15.5785 13.0608 15.9999 11.9999 15.9999Z',
							fill: 'black'
						},
						null,
						-1
					),
					t(
						'path',
						{
							d: 'M18.4058 7.0343C19.2011 7.0343 19.8458 6.38959 19.8458 5.5943C19.8458 4.79901 19.2011 4.1543 18.4058 4.1543C17.6105 4.1543 16.9658 4.79901 16.9658 5.5943C16.9658 6.38959 17.6105 7.0343 18.4058 7.0343Z',
							fill: 'black'
						},
						null,
						-1
					)
				])
		)
	)
}
const X1 = l(K1, [['render', W1]]),
	t2 = {},
	e2 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '24',
		height: '24',
		viewBox: '0 0 24 24',
		fill: 'none'
	}
function n2(s, e) {
	return (
		n(),
		r(
			'svg',
			e2,
			e[0] ||
				(e[0] = [
					t(
						'g',
						{ 'clip-path': 'url(#clip0_116_25449)' },
						[
							t('path', {
								d: 'M24 12.0723C24 18.0613 19.606 23.0263 13.87 23.9273V15.5643H16.659L17.19 12.1043H13.87V9.85927H17.329V5.04427C17.329 5.04427 15.959 4.81027 14.65 4.81027C11.916 4.81027 10.13 6.46727 10.13 9.46627V12.1033H7.091V15.5633H10.13V23.9263C4.395 23.0243 0 18.0603 0 12.0723C0 5.44527 5.373 0.0722656 12 0.0722656C18.627 0.0722656 24 5.44427 24 12.0723Z',
								fill: 'black'
							})
						],
						-1
					),
					t(
						'defs',
						null,
						[
							t('clipPath', { id: 'clip0_116_25449' }, [
								t('rect', { width: '24', height: '24', fill: 'white' })
							])
						],
						-1
					)
				])
		)
	)
}
const o2 = l(t2, [['render', n2]]),
	s2 = {},
	r2 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '21',
		height: '21',
		viewBox: '0 0 21 21',
		fill: 'none'
	}
function i2(s, e) {
	return (
		n(),
		r(
			'svg',
			r2,
			e[0] ||
				(e[0] = [
					t(
						'path',
						{
							d: 'M1 10.5H20',
							stroke: 'black',
							'stroke-width': '1.4',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round'
						},
						null,
						-1
					),
					t(
						'path',
						{
							d: 'M10.5 20C15.7467 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20Z',
							stroke: 'black',
							'stroke-width': '1.4',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round'
						},
						null,
						-1
					),
					t(
						'path',
						{
							d: 'M14.4557 10.5C14.4557 16.8333 10.4974 20 10.4974 20C10.4974 20 6.53906 16.8333 6.53906 10.5C6.53906 4.16667 10.4974 1 10.4974 1C10.4974 1 14.4557 4.16667 14.4557 10.5Z',
							stroke: 'black',
							'stroke-width': '1.4',
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
const l2 = l(s2, [['render', i2]]),
	c2 = {},
	a2 = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '15',
		height: '15',
		viewBox: '0 0 15 15',
		fill: 'none'
	}
function d2(s, e) {
	return (
		n(),
		r(
			'svg',
			a2,
			e[0] ||
				(e[0] = [
					t(
						'g',
						{ 'clip-path': 'url(#clip0_116_26602)' },
						[
							t('path', {
								d: 'M12.1875 5.625L7.5 10.3125L2.8125 5.625',
								stroke: 'black',
								'stroke-width': '1.5',
								'stroke-linecap': 'round',
								'stroke-linejoin': 'round'
							})
						],
						-1
					),
					t(
						'defs',
						null,
						[
							t('clipPath', { id: 'clip0_116_26602' }, [
								t('rect', { width: '15', height: '15', fill: 'white' })
							])
						],
						-1
					)
				])
		)
	)
}
const p2 = l(c2, [['render', d2]]),
	h2 = { class: 'bg-footer py-12 rounded-t-[30px]' },
	u2 = { class: 'container mx-auto flex flex-col items-center' },
	_2 = { class: 'flex items-center w-full mb-[72px]' },
	C2 = { class: 'flex items-center ml-auto gap-10' },
	f2 = { class: 'flex items-center gap-4' },
	w2 = { href: 'https://www.instagram.com', target: '_blank', rel: 'noopener noreferrer' },
	x2 = { href: 'https://www.facebook.com', target: '_blank', rel: 'noopener noreferrer' },
	g2 = { class: 'flex items-center mt-5 w-full text-center text-gray-600' },
	k2 = { class: 'flex items-center ml-auto gap-8' },
	m2 = { class: 'flex items-center gap-2' },
	v2 = { class: 'flex items-center gap-2' },
	$2 = {
		__name: 'TheFooter',
		setup(s) {
			return (e, o) => (
				n(),
				r('footer', h2, [
					t('div', u2, [
						t('div', _2, [
							i(y, { class: 'mr-[78px]' }),
							i(L),
							t('div', C2, [
								o[0] ||
									(o[0] = t('span', { class: 'text-black text-[16px] font-bold' }, 'Social', -1)),
								t('div', f2, [t('a', w2, [i(X1)]), t('a', x2, [i(o2)])])
							])
						]),
						o[5] || (o[5] = t('div', { class: 'w-full h-[1px] bg-gray-200' }, null, -1)),
						t('div', g2, [
							t('p', null, [
								P('© ' + C(new Date().getFullYear()) + ' ', 1),
								o[1] || (o[1] = t('b', null, 'm2 exchange', -1))
							]),
							o[4] ||
								(o[4] = t(
									'div',
									{ class: 'flex ml-[95px] gap-9' },
									[
										t('a', { href: '/privacy', class: 'hover:underline' }, 'Конфиденциальность'),
										t('a', { href: '/terms', class: 'hover:underline' }, 'Условия'),
										t('a', { href: '/download', class: 'hover:underline' }, 'Скачать приложение')
									],
									-1
								)),
							t('div', k2, [
								t('div', m2, [i(l2), o[2] || (o[2] = t('span', { class: 'ml-1' }, 'Русский', -1))]),
								t('div', v2, [
									o[3] || (o[3] = t('span', { class: 'ml-1' }, 'Поддержка и вопросы', -1)),
									i(p2)
								])
							])
						])
					])
				])
			)
		}
	},
	b2 = l($2, [['__scopeId', 'data-v-0ebbb638']]),
	M2 = { class: 'min-h-screen flex flex-col' },
	j2 = { class: 'flex flex-grow flex-col' },
	H2 = {
		__name: 'default',
		setup(s) {
			return (e, o) => (n(), r('div', M2, [i(J1), t('main', j2, [O(e.$slots, 'default')]), i(b2)]))
		}
	}
export { H2 as default }
