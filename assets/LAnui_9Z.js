import{_ as d,o as i,c,a as e,g as m,b as a,f as o,n as u,t as n,J as h,w as g}from"./CExKfF1L.js";import{_ as w}from"./BizdKnHo.js";import{L as v}from"./_vV6xu_p.js";import{B as _,a as p}from"./Bq2lPmYs.js";const C={},b={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"};function k(t,s){return i(),c("svg",b,s[0]||(s[0]=[e("path",{d:"M19.0712 13.1437L13.4142 18.8017C13.0391 19.1767 12.5305 19.3873 12.0002 19.3873C11.4699 19.3873 10.9613 19.1767 10.5862 18.8017L4.9292 13.1447C4.46157 12.6812 4.09011 12.1298 3.83613 11.5223C3.58216 10.9148 3.45067 10.2631 3.44923 9.6047C3.44779 8.94625 3.57642 8.294 3.82773 7.68539C4.07904 7.07679 4.44809 6.52381 4.91368 6.05822C5.37928 5.59262 5.93225 5.22357 6.54086 4.97226C7.14947 4.72095 7.80172 4.59232 8.46017 4.59376C9.11862 4.5952 9.7703 4.72669 10.3778 4.98066C10.9853 5.23464 11.5367 5.6061 12.0002 6.07373C12.9418 5.1556 14.2071 4.6454 15.5222 4.65364C16.8373 4.66188 18.0962 5.1879 19.0262 6.11776C19.9562 7.04761 20.4824 8.30643 20.4908 9.62151C20.4992 10.9366 19.9892 12.202 19.0712 13.1437Z",fill:"white",stroke:"#3D62FF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"transition-all duration-300"},null,-1)]))}const y=d(C,[["render",k]]),j={},F={xmlns:"http://www.w3.org/2000/svg",width:"38",height:"39",viewBox:"0 0 38 39",fill:"none"};function $(t,s){return i(),c("svg",F,s[0]||(s[0]=[e("path",{d:"M17.2793 30.5452C24.1459 30.5452 29.7124 24.804 29.7124 17.7218C29.7124 10.6397 24.1459 4.89844 17.2793 4.89844C10.4127 4.89844 4.84619 10.6397 4.84619 17.7218C4.84619 24.804 10.4127 30.5452 17.2793 30.5452Z",stroke:"currentColor","stroke-width":"4.00731","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{opacity:"0.4",d:"M32.8201 33.7501L26.0596 26.7773",stroke:"currentColor","stroke-width":"4.00731","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))}const st=d(j,[["render",$]]),B={},I={xmlns:"http://www.w3.org/2000/svg",width:"23",height:"22",viewBox:"0 0 23 22",fill:"none"};function L(t,s){return i(),c("svg",I,s[0]||(s[0]=[e("rect",{x:"0.841797",y:"0.375",width:"21.2143",height:"21.2143",rx:"5.30357",fill:"#3D62FF"},null,-1),e("rect",{x:"6.14844",y:"5.67822",width:"10.6071",height:"10.6071",rx:"1.76786",fill:"white"},null,-1)]))}const O=d(B,[["render",L]]);function N(){const t=m([]);return{favorites:t,toggleFavorite:r=>{const l=t.value.indexOf(r);l===-1?t.value.push(r):t.value.splice(l,1)},isFavorite:r=>t.value.includes(r)}}const S=["src","alt"],W={key:0,class:"card-label bg-white color-dark rounded-xl px-2 py-1 text-xs font-bold"},D={class:"flex flex-col xl:gap-3 gap-2"},M={class:"flex items-center flex-wrap gap-2 justify-between xl:text-xl lg:text-lg sm:text-sm text-xs"},V={class:"font-semibold truncate hover:text-primary"},q={class:"text-secondary font-semibold truncate"},Z={class:"flex items-center"},z={class:"ml-1 xl:text-base text-xs truncate"},E={class:"flex xl:gap-8 lg:gap-5 gap-2"},H={class:"flex items-center gap-1"},J={class:"lg:text-base sm:text-sm text-[10px]"},A={class:"flex items-center gap-1"},G={class:"lg:text-base sm:text-sm text-[10px]"},K={class:"flex items-center gap-1"},P={class:"lg:text-base sm:text-sm text-[10px]"},Q={key:0,class:"flex justify-between gap-2"},R={class:"lg:text-sm text-xs truncate"},T={__name:"ObjectCard",props:{card:{type:Object,required:!0},isWide:{type:Boolean,default:!1}},setup(t){const{toggleFavorite:s,isFavorite:x}=N();return(r,l)=>{const f=w;return i(),c("li",{class:u(["shadow-card relative bg-white xl:rounded-2xl rounded-lg xl:p-6 p-3 hover:scale-105 transition-all duration-300",[{"favorite-object":o(x)(t.card.id)},t.isWide?"object-item-wide":"object-item"]])},[e("img",{src:t.card.image,alt:t.card.title,class:"w-full h-auto rounded-md mb-3"},null,8,S),e("div",{class:u(["flex items-center justify-center rounded-full icon-heart cursor-pointer",{"is-favorite":o(x)(t.card.id)}]),onClick:l[0]||(l[0]=U=>o(s)(t.card.id))},[a(o(y),{class:"h-6"})],2),t.isWide?(i(),c("span",W,n(t.card.type),1)):h("",!0),a(f,{to:`/object/${t.card.id}`},{default:g(()=>[e("div",D,[e("div",M,[e("p",V,n(t.card.title),1),e("p",q,"$"+n(t.card.price),1)]),e("div",Z,[a(o(v)),e("span",z,n(t.card.location),1)]),e("div",E,[e("div",H,[a(o(O),{class:"w-4 lg:w-auto"}),e("span",J,n(t.card.area)+"m²",1)]),e("div",A,[a(o(_),{class:"w-5 lg:w-auto"}),e("span",G,n(t.card.beds),1)]),e("div",K,[a(o(p),{class:"w-5 lg:w-auto"}),e("span",P,n(t.card.baths),1)])]),t.isWide?(i(),c("div",Q,[e("span",R,n(t.card.description),1)])):h("",!0)])]),_:1},8,["to"])],2)}}},ot=d(T,[["__scopeId","data-v-21f54c3b"]]);export{ot as O,st as S};
