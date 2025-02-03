import{j as g,D as z,O as A,p as D,s as $,_ as I,x as W,T as F,z as X,A as L,m as v,E as T,o as r,c as u,a as j,F as S,h as N,n as p,r as m,f as O,H as h,I as y}from"./QH0o-v2E.js";import{b as V,c as H,d as q}from"./TOCU_C7x.js";const G={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute start-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute end-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid"}}},J=e=>{const l=g(0);function d(t){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",l.value=t.pageX,window.addEventListener("mousemove",s),window.addEventListener("mouseup",c)}function c(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),e.value.style.removeProperty("pointer-events"),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",c)}function s(t){t.preventDefault(),e.value.style.pointerEvents="none";const n=t.pageX-l.value;l.value=t.pageX,e.value.scrollBy(-n,0)}z(()=>{e.value&&e.value.addEventListener("mousedown",d)}),A(()=>{e.value&&e.value.removeEventListener("mousedown",d)})},w=D($.ui.strategy,$.ui.carousel,G),K=W({components:{UButton:F},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},dir:{type:String,default:"ltr"},prevButton:{type:Object,default:()=>w.default.prevButton},nextButton:{type:Object,default:()=>w.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:l}){const{ui:d,attrs:c}=X("carousel",L(e,"ui"),w,L(e,"class")),s=g(),t=g(0),{x:n}=V(s,{behavior:"smooth"}),{width:a}=H(s);J(s),q(s,i=>{var E,M;const[k]=i;t.value=((M=(E=k==null?void 0:k.target)==null?void 0:E.firstElementChild)==null?void 0:M.clientWidth)||0});const o=v(()=>e.dir==="rtl"),f=v(()=>t.value?o.value?Math.round(-n.value/t.value)+1:Math.round(n.value/t.value)+1:0),b=v(()=>{if(!t.value)return 0;const i=Math.round(a.value/t.value);return e.items.length<=i?0:e.items.length-i+1}),R=v(()=>f.value<=1),U=v(()=>f.value===b.value);function B(){n.value+=o.value?-t.value:t.value}function C(){n.value-=o.value?-t.value:t.value}function P(i){n.value=(i-1)*t.value*(o.value?-1:1)}return l({pages:b,page:f,prev:C,next:B,select:P}),{ui:d,attrs:c,isFirst:R,isLast:U,carouselRef:s,pages:b,currentPage:f,onClickNext:B,onClickPrev:C,onClick:P,twMerge:T}}}),Q=["dir"],Y=["role"],Z=["aria-selected","aria-label","onClick"];function x(e,l,d,c,s,t){const n=F;return r(),u("div",h({class:e.ui.wrapper},e.attrs,{dir:e.dir}),[j("div",{ref:"carouselRef",class:p([e.ui.container,"no-scrollbar"])},[(r(!0),u(S,null,N(e.items,(a,o)=>(r(),u("div",{key:o,class:p(e.ui.item),role:e.indicators?"tabpanel":null},[m(e.$slots,"default",{item:a,index:o},void 0,!0)],10,Y))),128))],2),e.arrows?(r(),u("div",{key:0,class:p(e.ui.arrows.wrapper)},[m(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var a;return[e.prevButton?(r(),O(n,h({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(a=e.prevButton)==null?void 0:a.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):y("",!0)]},!0),m(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var a;return[e.nextButton?(r(),O(n,h({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(a=e.nextButton)==null?void 0:a.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):y("",!0)]},!0)],2)):y("",!0),e.indicators?(r(),u("div",{key:1,role:"tablist",class:p(e.ui.indicators.wrapper)},[(r(!0),u(S,null,N(e.pages,a=>m(e.$slots,"indicator",{key:a,onClick:e.onClick,active:a===e.currentPage,page:a},()=>[j("button",{type:"button",role:"tab","aria-selected":a===e.currentPage,class:p([e.ui.indicators.base,a===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${a}`,onClick:o=>e.onClick(a)},null,10,Z)],!0)),128))],2)):y("",!0)],16,Q)}const te=I(K,[["render",x],["__scopeId","data-v-a3da86ff"]]);export{te as _};
