import{_ as Oe}from"./CPNRJXg_.js";import{_ as Te}from"./CTitZ6go.js";import{_ as ye,u as ue,a as oe,L as Ee}from"./C8VAd5y4.js";import{k as Le,l as Me,m as K,p as Ae,q as Pe,s as le,x as j,y as we,z as v,g as z,A as he,f as W,_ as se,o as f,c as x,a,F as Z,h as ee,e as T,w as A,d as De,t as k,B as Re,C as de,D as I,E as re,G as te,H as ne,n as w,r as H,I as N,J as L,K as F,L as Fe,b as h,M as Ie}from"./C5HXoeai.js";import{R as Ue,_ as We}from"./DcG6DEAl.js";import{T as _e}from"./DW6OZKqQ.js";import{B as He,a as Ne}from"./fMldZ_U7.js";import{u as Ve}from"./Cu-U5S9N.js";import"./CE_i-bzG.js";function ke(e){return Le()?(Me(e),!0):!1}const qe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Xe=Object.prototype.toString,Ge=e=>Xe.call(e)==="[object Object]",V=()=>{};function Ce(e,t){function n(...o){return new Promise((s,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(s).catch(r)})}return n}function Je(e,t={}){let n,o,s=V;const r=c=>{clearTimeout(c),s(),s=V};let i;return c=>{const u=j(e),m=j(t.maxWait);return n&&r(n),u<=0||m!==void 0&&m<=0?(o&&(r(o),o=null),Promise.resolve(c())):new Promise((d,b)=>{s=t.rejectOnCancel?b:d,i=c,m&&!o&&(o=setTimeout(()=>{n&&r(n),o=null,d(i())},m)),n=setTimeout(()=>{o&&r(o),o=null,d(c())},u)})}}function Ze(...e){let t=0,n,o=!0,s=V,r,i,l,c,u;!Pe(e[0])&&typeof e[0]=="object"?{delay:i,trailing:l=!0,leading:c=!0,rejectOnCancel:u=!1}=e[0]:[i,l=!0,c=!0,u=!1]=e;const m=()=>{n&&(clearTimeout(n),n=void 0,s(),s=V)};return b=>{const g=j(i),y=Date.now()-t,$=()=>r=b();return m(),g<=0?(t=Date.now(),$()):(y>g&&(c||!o)?(t=Date.now(),$()):l&&(r=new Promise((C,_)=>{s=u?_:C,n=setTimeout(()=>{t=Date.now(),o=!0,C($()),m()},Math.max(0,g-y))})),!c&&!n&&(n=setTimeout(()=>o=!0,g)),o=!1,r)}}function Ke(e){return we()}function Q(e){return Array.isArray(e)?e:[e]}function Ye(e,t=200,n={}){return Ce(Je(t,n),e)}function Qe(e,t=200,n=!1,o=!0,s=!1){return Ce(Ze(t,n,o,s),e)}function je(e,t=!0,n){Ke()?K(e,n):t?e():Ae(e)}function et(e,t,n){return le(e,t,{...n,immediate:!0})}const ae=qe?window:void 0;function M(e){var t;const n=j(e);return(t=n==null?void 0:n.$el)!=null?t:n}function ve(...e){const t=[],n=()=>{t.forEach(l=>l()),t.length=0},o=(l,c,u,m)=>(l.addEventListener(c,u,m),()=>l.removeEventListener(c,u,m)),s=v(()=>{const l=Q(j(e[0])).filter(c=>c!=null);return l.every(c=>typeof c!="string")?l:void 0}),r=et(()=>{var l,c;return[(c=(l=s.value)==null?void 0:l.map(u=>M(u)))!=null?c:[ae].filter(u=>u!=null),Q(j(s.value?e[1]:e[0])),Q(W(s.value?e[2]:e[1])),j(s.value?e[3]:e[2])]},([l,c,u,m])=>{if(n(),!(l!=null&&l.length)||!(c!=null&&c.length)||!(u!=null&&u.length))return;const d=Ge(m)?{...m}:m;t.push(...l.flatMap(b=>c.flatMap(g=>u.map(y=>o(b,g,y,d)))))},{flush:"post"}),i=()=>{r(),n()};return ke(n),i}function tt(){const e=z(!1),t=we();return t&&K(()=>{e.value=!0},t),e}function nt(e){const t=tt();return v(()=>(t.value,!!e()))}function $e(e,t,n={}){const{window:o=ae,...s}=n;let r;const i=nt(()=>o&&"ResizeObserver"in o),l=()=>{r&&(r.disconnect(),r=void 0)},c=v(()=>{const d=j(e);return Array.isArray(d)?d.map(b=>M(b)):[M(d)]}),u=le(c,d=>{if(l(),i.value&&o){r=new ResizeObserver(t);for(const b of d)b&&r.observe(b,s)}},{immediate:!0,flush:"post"}),m=()=>{l(),u()};return ke(m),{isSupported:i,stop:m}}function ot(e,t={width:0,height:0},n={}){const{window:o=ae,box:s="content-box"}=n,r=v(()=>{var d,b;return(b=(d=M(e))==null?void 0:d.namespaceURI)==null?void 0:b.includes("svg")}),i=z(t.width),l=z(t.height),{stop:c}=$e(e,([d])=>{const b=s==="border-box"?d.borderBoxSize:s==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(o&&r.value){const g=M(e);if(g){const y=g.getBoundingClientRect();i.value=y.width,l.value=y.height}}else if(b){const g=Q(b);i.value=g.reduce((y,{inlineSize:$})=>y+$,0),l.value=g.reduce((y,{blockSize:$})=>y+$,0)}else i.value=d.contentRect.width,l.value=d.contentRect.height},n);je(()=>{const d=M(e);d&&(i.value="offsetWidth"in d?d.offsetWidth:t.width,l.value="offsetHeight"in d?d.offsetHeight:t.height)});const u=le(()=>M(e),d=>{i.value=d?t.width:0,l.value=d?t.height:0});function m(){c(),u()}return{width:i,height:l,stop:m}}const ge=1;function lt(e,t={}){const{throttle:n=0,idle:o=200,onStop:s=V,onScroll:r=V,offset:i={left:0,right:0,top:0,bottom:0},eventListenerOptions:l={capture:!1,passive:!0},behavior:c="auto",window:u=ae,onError:m=p=>{console.error(p)}}=t,d=z(0),b=z(0),g=v({get(){return d.value},set(p){$(p,void 0)}}),y=v({get(){return b.value},set(p){$(void 0,p)}});function $(p,P){var B,X,G,Y;if(!u)return;const O=j(e);if(!O)return;(G=O instanceof Document?u.document.body:O)==null||G.scrollTo({top:(B=j(P))!=null?B:y.value,left:(X=j(p))!=null?X:g.value,behavior:j(c)});const E=((Y=O==null?void 0:O.document)==null?void 0:Y.documentElement)||(O==null?void 0:O.documentElement)||O;g!=null&&(d.value=E.scrollLeft),y!=null&&(b.value=E.scrollTop)}const C=z(!1),_=he({left:!0,right:!1,top:!0,bottom:!1}),S=he({left:!1,right:!1,top:!1,bottom:!1}),q=p=>{C.value&&(C.value=!1,S.left=!1,S.right=!1,S.top=!1,S.bottom=!1,s(p))},ze=Ye(q,n+o),ie=p=>{var P;if(!u)return;const B=((P=p==null?void 0:p.document)==null?void 0:P.documentElement)||(p==null?void 0:p.documentElement)||M(p),{display:X,flexDirection:G,direction:Y}=getComputedStyle(B),O=Y==="rtl"?-1:1,E=B.scrollLeft;S.left=E<d.value,S.right=E>d.value;const pe=E*O<=(i.left||0),me=E*O+B.clientWidth>=B.scrollWidth-(i.right||0)-ge;X==="flex"&&G==="row-reverse"?(_.left=me,_.right=pe):(_.left=pe,_.right=me),d.value=E;let D=B.scrollTop;p===u.document&&!D&&(D=u.document.body.scrollTop),S.top=D<b.value,S.bottom=D>b.value;const xe=D<=(i.top||0),be=D+B.clientHeight>=B.scrollHeight-(i.bottom||0)-ge;X==="flex"&&G==="column-reverse"?(_.top=be,_.bottom=xe):(_.top=xe,_.bottom=be),b.value=D},fe=p=>{var P;if(!u)return;const B=(P=p.target.documentElement)!=null?P:p.target;ie(B),C.value=!0,ze(p),r(p)};return ve(e,"scroll",n?Qe(fe,n,!0,!1):fe,l),je(()=>{try{const p=j(e);if(!p)return;ie(p)}catch(p){m(p)}}),ve(e,"scrollend",q,l),{x:g,y,isScrolling:C,arrivedState:_,directions:S,measure(){const p=j(e);u&&p&&ie(p)}}}const st={},rt={width:"59",height:"59",viewBox:"0 0 59 59",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function at(e,t){return f(),x("svg",rt,t[0]||(t[0]=[a("rect",{x:"0.697311",y:"1.13091",width:"56.7147",height:"56.7147",rx:"28.3573",fill:"#F5F4F8",stroke:"#F5F4F8","stroke-width":"1.39462"},null,-1),a("path",{d:"M36.8024 27.5487C36.8024 31.8275 29.0545 39.1705 29.0545 39.1705C29.0545 39.1705 21.3066 31.8275 21.3066 27.5487C21.3066 25.4938 22.1229 23.5231 23.5759 22.0701C25.029 20.6171 26.9997 19.8008 29.0545 19.8008C31.1094 19.8008 33.0801 20.6171 34.5331 22.0701C35.9862 23.5231 36.8024 25.4938 36.8024 27.5487V27.5487Z",stroke:"#53587A","stroke-width":"1.45273"},null,-1),a("path",{d:"M29.0548 28.3244C29.363 28.3244 29.6586 28.2019 29.8766 27.984C30.0945 27.766 30.2169 27.4704 30.2169 27.1622C30.2169 26.854 30.0945 26.5583 29.8766 26.3404C29.6586 26.1224 29.363 26 29.0548 26C28.7465 26 28.4509 26.1224 28.233 26.3404C28.015 26.5583 27.8926 26.854 27.8926 27.1622C27.8926 27.4704 28.015 27.766 28.233 27.984C28.4509 28.2019 28.7465 28.3244 29.0548 28.3244Z",fill:"#53587A",stroke:"#53587A","stroke-width":"1.45273","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))}const it=se(st,[["render",at]]),ct={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},ut={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute start-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute end-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid"}}},dt={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs",type:"solid"}},ft={class:"flex items-center gap-2 text-sm","aria-label":"Breadcrumb"},pt={class:"flex items-center gap-2"},mt={key:1,class:"text-dark"},xt={__name:"Breadcrumbs",props:{breadcrumbs:{type:Array,required:!0,default:()=>[]}},setup(e){return(t,n)=>{const o=Te;return f(),x("nav",ft,[a("ul",pt,[(f(!0),x(Z,null,ee(e.breadcrumbs,(s,r)=>(f(),x("li",{key:r,class:"flex items-center gap-2"},[r!==e.breadcrumbs.length-1?(f(),T(o,{key:0,to:s.path,class:"text-gray-400 hover:text-accent-blue transition-colors duration-200"},{default:A(()=>[De(k(s.name)+" > ",1)]),_:2},1032,["to"])):(f(),x("span",mt,k(s.name),1))]))),128))])])}}},bt=e=>{const t=z(0);function n(r){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",t.value=r.pageX,window.addEventListener("mousemove",s),window.addEventListener("mouseup",o)}function o(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),e.value.style.removeProperty("pointer-events"),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",o)}function s(r){r.preventDefault(),e.value.style.pointerEvents="none";const i=r.pageX-t.value;t.value=r.pageX,e.value.scrollBy(-i,0)}K(()=>{e.value&&e.value.addEventListener("mousedown",n)}),Re(()=>{e.value&&e.value.removeEventListener("mousedown",n)})},ce=de(I.ui.strategy,I.ui.carousel,ut),ht=re({components:{UButton:ye},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},dir:{type:String,default:"ltr"},prevButton:{type:Object,default:()=>ce.default.prevButton},nextButton:{type:Object,default:()=>ce.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:t}){const{ui:n,attrs:o}=ue("carousel",te(e,"ui"),ce,te(e,"class")),s=z(),r=z(0),{x:i}=lt(s,{behavior:"smooth"}),{width:l}=ot(s);bt(s),$e(s,C=>{var S,q;const[_]=C;r.value=((q=(S=_==null?void 0:_.target)==null?void 0:S.firstElementChild)==null?void 0:q.clientWidth)||0});const c=v(()=>e.dir==="rtl"),u=v(()=>r.value?c.value?Math.round(-i.value/r.value)+1:Math.round(i.value/r.value)+1:0),m=v(()=>{if(!r.value)return 0;const C=Math.round(l.value/r.value);return e.items.length<=C?0:e.items.length-C+1}),d=v(()=>u.value<=1),b=v(()=>u.value===m.value);function g(){i.value+=c.value?-r.value:r.value}function y(){i.value-=c.value?-r.value:r.value}function $(C){i.value=(C-1)*r.value*(c.value?-1:1)}return t({pages:m,page:u,prev:y,next:g,select:$}),{ui:n,attrs:o,isFirst:d,isLast:b,carouselRef:s,pages:m,currentPage:u,onClickNext:g,onClickPrev:y,onClick:$,twMerge:ne}}}),vt=["dir"],gt=["role"],yt=["aria-selected","aria-label","onClick"];function wt(e,t,n,o,s,r){const i=ye;return f(),x("div",N({class:e.ui.wrapper},e.attrs,{dir:e.dir}),[a("div",{ref:"carouselRef",class:w([e.ui.container,"no-scrollbar"])},[(f(!0),x(Z,null,ee(e.items,(l,c)=>(f(),x("div",{key:c,class:w(e.ui.item),role:e.indicators?"tabpanel":null},[H(e.$slots,"default",{item:l,index:c},void 0,!0)],10,gt))),128))],2),e.arrows?(f(),x("div",{key:0,class:w(e.ui.arrows.wrapper)},[H(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var l;return[e.prevButton?(f(),T(i,N({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(l=e.prevButton)==null?void 0:l.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):L("",!0)]},!0),H(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var l;return[e.nextButton?(f(),T(i,N({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(l=e.nextButton)==null?void 0:l.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):L("",!0)]},!0)],2)):L("",!0),e.indicators?(f(),x("div",{key:1,role:"tablist",class:w(e.ui.indicators.wrapper)},[(f(!0),x(Z,null,ee(e.pages,l=>H(e.$slots,"indicator",{key:l,onClick:e.onClick,active:l===e.currentPage,page:l},()=>[a("button",{type:"button",role:"tab","aria-selected":l===e.currentPage,class:w([e.ui.indicators.base,l===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${l}`,onClick:c=>e.onClick(l)},null,10,yt)],!0)),128))],2)):L("",!0)],16,vt)}const _t=se(ht,[["render",wt],["__scopeId","data-v-a3da86ff"]]),R=de(I.ui.strategy,I.ui.avatar,ct),kt=re({components:{UIcon:oe},inheritAttrs:!1,props:{as:{type:[String,Object],default:"img"},src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>R.default.icon},size:{type:String,default:()=>R.default.size,validator(e){return Object.keys(R.size).includes(e)}},chipColor:{type:String,default:()=>R.default.chipColor,validator(e){return["gray",...I.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>R.default.chipPosition,validator(e){return Object.keys(R.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:n}=ue("avatar",te(e,"ui"),R),o=v(()=>typeof e.src=="boolean"?null:e.src),s=v(()=>(e.alt||"").split(" ").map(d=>d.charAt(0)).join("").substring(0,2)),r=v(()=>ne(F(t.value.wrapper,(u.value||!o.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),i=v(()=>ne(F(t.value.rounded,t.value.size[e.size]),e.imgClass)),l=v(()=>F(t.value.icon.base,t.value.icon.size[e.size])),c=v(()=>F(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),u=z(!1);le(()=>e.src,()=>{u.value&&(u.value=!1)});function m(){u.value=!0}return{ui:t,attrs:n,wrapperClass:r,imgClass:i,iconClass:l,chipClass:c,url:o,placeholder:s,error:u,onError:m}}});function Ct(e,t,n,o,s,r){const i=oe;return f(),x("span",{class:w(e.wrapperClass)},[e.url&&!e.error?(f(),T(Fe(e.as),N({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:e.onError}),null,16,["class","alt","src","onError"])):e.text?(f(),x("span",{key:1,class:w(e.ui.text)},k(e.text),3)):e.icon?(f(),T(i,{key:2,name:e.icon,class:w(e.iconClass)},null,8,["name","class"])):e.placeholder?(f(),x("span",{key:3,class:w(e.ui.placeholder)},k(e.placeholder),3)):L("",!0),e.chipColor?(f(),x("span",{key:4,class:w(e.chipClass)},k(e.chipText),3)):L("",!0),H(e.$slots,"default")],2)}const Se=se(kt,[["render",Ct]]),J=de(I.ui.strategy,I.ui.divider,dt),jt=re({components:{UIcon:oe,UAvatar:Se},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>J.default.size,validator(e){return Object.keys(J.border.size.horizontal).includes(e)||Object.keys(J.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:()=>J.default.type,validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:n}=ue("divider",te(e,"ui"),J),o=v(()=>ne(F(t.value.wrapper.base,t.value.wrapper[e.orientation]),e.class)),s=v(()=>F(t.value.container.base,t.value.container[e.orientation])),r=v(()=>F(t.value.border.base,t.value.border[e.orientation],t.value.border.size[e.orientation][e.size],t.value.border.type[e.type]));return{ui:t,attrs:n,wrapperClass:o,containerClass:s,borderClass:r}}});function $t(e,t,n,o,s,r){const i=oe,l=Se;return f(),x("div",N({class:e.wrapperClass},e.attrs),[a("div",{class:w(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(f(),x(Z,{key:0},[a("div",{class:w(e.containerClass)},[H(e.$slots,"default",{},()=>[e.label?(f(),x("span",{key:0,class:w(e.ui.label)},k(e.label),3)):e.icon?(f(),T(i,{key:1,name:e.icon,class:w(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(f(),T(l,N({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):L("",!0)])],2),a("div",{class:w(e.borderClass)},null,2)],64)):L("",!0)],16)}const Be=se(jt,[["render",$t]]),U=""+new URL("big-item.BpUBzPkN.png",import.meta.url).href,St={class:"flex flex-col items-start gap-4 shrink-0 lg:p-6 p-4 lg:max-w-[505px] w-full lg:w-1/3 border border-[#D2DBF5] rounded-lg"},Bt={class:"flex flex-col items-center gap-4 w-full"},zt={class:"flex justify-between items-center gap-2 w-full"},Ot={class:"flex items-center gap-2 w-full"},Tt=["innerHTML"],Et={class:"flex items-center gap-2 w-full text-secondary"},Lt={class:"2xl:text-3xl xl:text-2xl sm:text-xl text-base font-bold"},Mt={class:"2xl:text-3xl xl:text-2xl sm:text-xl text-base font-bold"},At={class:"flex flex-col items-start gap-3 w-full"},Pt={class:"flex justify-between items-center gap-2 w-full 2xl:text-xl xl:text-base text-sm 2xl:h-[45px] xl:h-[35px] h-[30px]"},Dt={class:"font-bold"},Rt={class:"flex justify-between items-center gap-2 w-full 2xl:text-xl xl:text-base text-sm 2xl:h-[45px] xl:h-[35px] h-[30px]"},Ft={class:"font-bold"},It={class:"flex justify-between items-center gap-2 w-full 2xl:h-[45px] xl:h-[35px] text-sm h-[30px]"},Ut={class:"flex items-center gap-2 bg-background-light rounded-lg 2xl:px-6 xl:px-4 px-3 2xl:py-2 xl:py-1.5 py-1"},Wt={class:"text-[#62648B]"},Ht={class:"flex justify-between items-center gap-2 w-full 2xl:h-[45px] xl:h-[35px] text-sm h-[30px]"},Nt={class:"flex items-center gap-2 bg-background-light rounded-lg 2xl:px-6 xl:px-4 px-3 2xl:py-2 xl:py-1.5 py-1"},Vt={class:"text-[#62648B]"},qt={__name:"ObjectCardInfo",props:{object:{type:Object,required:!0}},setup(e){const t=Ve();return(n,o)=>{const s=Be;return f(),x("div",St,[h(Ue,{onClick:W(t).openExchangeModal},{default:A(()=>o[0]||(o[0]=[a("span",null,"Запросить на обмен",-1)])),_:1},8,["onClick"]),h(s),a("div",Bt,[a("div",zt,[o[1]||(o[1]=a("h3",{class:"2xl:text-3xl xl:text-2xl sm:text-xl text-base font-bold"},"Подробности",-1)),h(_e,null,{default:A(()=>[a("span",null,k(e.object.type),1)]),_:1})]),a("div",Ot,[h(W(Ee)),a("span",{class:"text-[#545454] text-medium sm:text-base text-sm",innerHTML:e.object.location},null,8,Tt)])]),h(s),a("div",Et,[a("span",Lt,k(e.object.currency),1),a("span",Mt,k(e.object.price),1)]),h(s),a("ul",At,[a("li",Pt,[o[2]||(o[2]=a("span",{class:"text-primary"},"Площадь участка:",-1)),a("span",Dt,k(e.object.plotArea)+" м²",1)]),a("li",Rt,[o[3]||(o[3]=a("span",{class:"text-primary"},"Площадь участка:",-1)),a("span",Ft,k(e.object.area)+" м²",1)]),a("li",It,[o[4]||(o[4]=a("span",{class:"text-primary 2xl:text-xl xl:text-base text-sm"},"Спальни:",-1)),a("div",Ut,[h(W(He),{class:"2xl:w-6 xl:w-5 w-4"}),a("span",Wt,k(e.object.bedrooms),1)])]),a("li",Ht,[o[5]||(o[5]=a("span",{class:"text-primary 2xl:text-xl xl:text-base text-sm"},"Ванны:",-1)),a("div",Nt,[h(W(Ne),{class:"2xl:w-6 xl:w-5 w-4"}),a("span",Vt,k(e.object.bathrooms),1)])])])])}}},Xt={class:"flex flex-col gap-4 lg:max-w-[66%] w-full"},Gt=["innerHTML"],Jt={__name:"ObjectCardDescription",props:{object:Object},setup(e){return(t,n)=>(f(),x("div",Xt,[n[0]||(n[0]=a("h2",{class:"text-dark lg:text-4xl sm:text-2xl text-xl font-bold"},"Описание объекта",-1)),a("p",{class:"sm:text-sm text-xs",innerHTML:e.object.description},null,8,Gt)]))}},Zt={class:"flex flex-col gap-4 lg:max-w-[66%] w-full mb-10"},Kt={class:"flex items-center flex-wrap gap-2"},Yt={__name:"ObjectCardComfort",props:{object:Object},setup(e){return(t,n)=>(f(),x("div",Zt,[n[0]||(n[0]=a("h2",{class:"text-dark lg:text-4xl sm:text-2xl text-xl font-bold"},"Удобства",-1)),a("div",Kt,[(f(!0),x(Z,null,ee(e.object.comfort,o=>(f(),T(_e,{key:o.id},{default:A(()=>[a("span",null,k(o),1)]),_:2},1024))),128))])]))}},Qt=Symbol.for("nuxt:client-only"),en=re({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:n}){const o=z(!1);return K(()=>{o.value=!0}),Ie(Qt,!0),s=>{var c;if(o.value)return(c=t.default)==null?void 0:c.call(t);const r=t.fallback||t.placeholder;if(r)return r();const i=s.fallback||s.placeholder||"",l=s.fallbackTag||s.placeholderTag||"span";return x(l,n,i)}}}),tn={class:"map-container"},nn={__name:"ObjectMap",props:{location:{type:String,required:!0},coordinates:{type:Array,required:!1,default:()=>[55.7558,37.6173],validator:e=>e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"}},setup(e){const t=e,n=z(null);K(()=>{window.ymaps&&window.ymaps.ready(()=>{o()})});const o=()=>{const s=new window.ymaps.Map("map",{center:t.coordinates,zoom:14,controls:["zoomControl"]}),r=new window.ymaps.Placemark(t.coordinates,{},{preset:"islands#blueHomeIcon"});s.geoObjects.add(r)};return(s,r)=>{const i=en;return f(),x("div",tn,[h(i,null,{default:A(()=>[a("div",{id:"map",ref_key:"mapRef",ref:n},null,512)]),_:1})])}}},on={class:"flex flex-col gap-4 mb-10"},ln={class:"flex items-center flex-wrap gap-3"},sn=["innerHTML"],rn={__name:"ObjectCardLocation",props:{object:Object},setup(e){return(t,n)=>(f(),x("div",on,[n[0]||(n[0]=a("h2",{class:"text-dark lg:text-4xl sm:text-2xl text-xl font-bold"},"Объект на карте",-1)),a("div",ln,[h(W(it)),a("span",{innerHTML:e.object.location,class:"text=[#53587A] text-sm font-medium"},null,8,sn)]),h(nn,{location:e.object.location,coordinates:e.object.coordinates,class:"mb-7"},null,8,["location","coordinates"])]))}},an={class:"flex flex-col"},cn={class:"mb-4 text-xl lg:text-3xl 2xl:text-[40px] leading-[1.3] font-bold"},un={class:"flex flex-col lg:flex-row lg:gap-6 gap-12 min-h-[500px] w-full lg:mb-20 mb-10"},dn={id:"object-slider",class:"grow rounded-lg relative"},fn=["src"],pn={__name:"ObjectSection",setup(e){const t={title:"Роскошная вилла в Испании с бассейном",description:`Эксклюзивные виллы на продажу в элитном жилом комплексе на юго-западном побережье Тенерифе. 
    Это лимитированная коллекция из 12 великолепных особняков, каждый из которых имеет собственный бассейн с зоной для загара. <br><br>
    Атмосфера здесь очень уединенная, и вы можете полюбоваться потрясающими видами. Неподалеку находится теннисная академия Аннабель Крофт, 
    окруженная блестящим полем для гольфа, спроектированным Дэйвом Томасом. Комплекс непременно привлечет тех, кто стремится найти для себя самое модное жилье.<br><br> 
    Земельный участок занимает 594 м2, а жилая площадь составляет около 272 м2 и распределена на двух уровнях.<br><br>
    На первом этаже находится большая гостиная и столовая с прямым выходом на открытую и крытую террасы к красивому бассейну. Открытая и светлая кухня с качественной техникой и большим количеством места для приготовления пищи.`,price:"850 000",currency:"$",location:"Carrer de Lluís Peixó,<br>46011 Валенсия",bedrooms:4,bathrooms:3,area:200,plotArea:1e3,type:"Апартаменты",comfort:["Бассейн","Парковка","Кондиционер","Бесплатный Wi-Fi","Бесплатный Wi-Fi"],images:[U,U,U,U,U,U],coordinates:[39.4699,-.3763]};return(n,o)=>{const s=_t,r=Be,i=We;return f(),x("div",an,[a("h1",cn,k(t.title),1),a("div",un,[a("div",dn,[h(s,{items:t.images,arrows:"",indicators:"",ui:{item:"w-full",indicators:{wrapper:"flex justify-center items-center gap-2 absolute bottom-[-20px]"}},"prev-button":{color:"gray",icon:"i-heroicons-arrow-left-20-solid",class:"arrow-slider arrow-prev hover:scale-110 transition-transform duration-300"},"next-button":{color:"gray",icon:"i-heroicons-arrow-right-20-solid",class:"arrow-slider arrow-next hover:scale-110 transition-transform duration-300"}},{default:A(({item:l})=>[a("img",{src:l,class:"w-full h-full object-cover rounded-lg",alt:"Изображение объекта"},null,8,fn)]),indicator:A(({active:l})=>[a("div",{class:w(["grow h-1 rounded-full transition-colors duration-300",l?"bg-primary":"bg-[#E9ECFF]"])},null,2)]),_:1},8,["items"])]),h(qt,{object:t})]),h(Jt,{object:t,class:"mb-7"}),h(r,{class:"mb-7"}),h(Yt,{object:t,class:"mb-7"}),h(rn,{object:t,class:"mb-7"}),h(i)])}}},mn={class:"container py-10"},Cn={__name:"object",setup(e){const t=[{name:"Все объекты",path:"/catalog"},{name:"Испания",path:"/catalog/spain"},{name:"Виллы",path:"/catalog/spain/villas"}];return(n,o)=>{const s=Oe;return f(),T(s,null,{default:A(()=>[a("div",mn,[h(xt,{class:"mb-2",breadcrumbs:t}),h(pn)])]),_:1})}}};export{Cn as default};
