import{u as j,_ as E,L as F,a as O}from"./Bbadiqlx.js";import{_ as $}from"./VlEm0H2K.js";import{u as k}from"./BpOQ0DCY.js";import{E as S}from"./BVcpQfPd.js";import{_ as U,a as L,O as B}from"./CoicEKNE.js";import{_ as C,o as m,c as f,m as M,a as e,f as t,d as u,F as A,a1 as V,h,b as l,k as I,p as y,w as _,e as N,al as D,A as P}from"./CkmrAKuS.js";/* empty css        */import{C as R}from"./BWQApIpb.js";import{_ as q}from"./DcmEnGdl.js";import{A as H}from"./CsALMwde.js";import"./CNdFEy4L.js";import"./DvT5me6c.js";import"./VFkDwaWn.js";import"./DRUJFmpv.js";import"./DKPDaHKK.js";import"./rXTERgyM.js";const T={},Y={xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none"};function z(g,a){return m(),f("svg",Y,a[0]||(a[0]=[M('<g clip-path="url(#clip0_1_31760)"><path d="M20.625 12.1875H23.4375C23.6861 12.1875 23.9246 12.2863 24.1004 12.4621C24.2762 12.6379 24.375 12.8764 24.375 13.125V24.375C24.375 24.6236 24.2762 24.8621 24.1004 25.0379C23.9246 25.2137 23.6861 25.3125 23.4375 25.3125H6.5625C6.31386 25.3125 6.0754 25.2137 5.89959 25.0379C5.72377 24.8621 5.625 24.6236 5.625 24.375V13.125C5.625 12.8764 5.72377 12.6379 5.89959 12.4621C6.0754 12.2863 6.31386 12.1875 6.5625 12.1875H9.375" stroke="#BFC7F3" stroke-width="1.40625" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.3141 7.5L15.0016 2.8125L19.6891 7.5" stroke="#BFC7F3" stroke-width="1.40625" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.0038 2.8125V15.9375" stroke="#BFC7F3" stroke-width="1.40625" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_1_31760"><rect width="30" height="30" fill="white"></rect></clipPath></defs>',2)]))}const G=C(T,[["render",z]]),J={class:"flex flex-col items-center sm:gap-6 gap-4 pt-5 w-full"},K={class:"flex flex-col items-center gap-2"},Q={class:"w-20 h-20 rounded-full overflow-hidden"},W=["src"],X={__name:"ContactsInfo",setup(g){const a=new URL(""+new URL("avatar.Bg-8EY3a.png",import.meta.url).href,import.meta.url).href;return(o,s)=>(m(),f(A,null,[e("div",J,[s[1]||(s[1]=e("h2",{class:"text-[#0F172A] lg:text-3xl text-xl text-center"}," Контакты для связи ",-1)),e("div",K,[e("div",Q,[e("img",{src:t(a),alt:"User avatar",class:"w-full h-full object-cover"},null,8,W)]),s[0]||(s[0]=e("span",{class:"text-[#4460F6] sm:text-2xl text-xl font-bold"},"Жанна",-1))]),s[2]||(s[2]=M('<div class="flex flex-col sm:flex-row justify-between gap-4 grow w-full max-w-[600px]"><div class="flex items-center justify-between grow rounded-sm px-6 py-4 border border-[#E9E8E8]"><span class="text-[#41495E] text-sm">alexvoron@gmail.com</span></div><div class="flex items-center justify-between grow rounded-sm px-6 py-4 border border-[#E9E8E8]"><span class="text-[#41495E] text-sm">+7 939 939 8383</span></div></div>',1))]),s[3]||(s[3]=e("p",{class:"text-dark text-center mb-4 sm:text-base text-xs"},[u(" Теперь вы можете связаться с собственником и"),e("br"),u(" уточнить все интересующие вас вопросы ")],-1))],64))}},Z={class:"flex flex-col sm:flex-row justify-center items-center bg-white rounded-sm pt-10 pb-4 px-6 sm:h-auto h-screen"},ee={class:"flex flex-col gap-6 w-full"},te={key:1},oe={class:"flex flex-col justify-between items-center mb-6"},le={__name:"ObjectContactsRequestModal",setup(g){const a=k(),o=V(),s=[{id:"single",label:"Разовый доступ",price:"1"},{id:"pack",label:"10 объектов",price:"7"},{id:"unlimited",label:"Безлимит на месяц",price:"15"}],p=h("pack"),n=h(!1),d=h(!1),w=()=>{n.value=!0},i=()=>{n.value=!1,d.value=!0},r=async()=>{try{await navigator.clipboard.writeText(window.location.href),o.showShareMessage()}catch(x){console.error("Failed to copy:",x)}};return(x,c)=>{var b;return m(),f("div",Z,[e("div",ee,[e("button",{onClick:c[0]||(c[0]=(...v)=>t(a).closeContactsModal&&t(a).closeContactsModal(...v)),class:"absolute top-4 right-4 hover:opacity-50 transition-opacity duration-300"},[l(t(R),{class:"w-8 h-8"})]),d.value?(m(),f("button",{key:0,class:"absolute top-4 right-14 w-7 h-8 transition-opacity duration-300 cursor-pointer hover:opacity-50",onClick:r},[l(t(G))])):I("",!0),!n.value&&!d.value?(m(),f("div",te,[e("div",oe,[c[2]||(c[2]=e("h3",{class:"text-2xl text-center font-medium text-dark mb-6"},[u(" Получите доступ к контактам"),e("br"),u("собственника ")],-1)),c[3]||(c[3]=e("p",{class:"text-base text-center text-dark mb-6"},[u(" Подключите тариф и начните общение с владельцами"),e("br"),u("недвижимости для выгодного обмена ")],-1)),l(U,{modelValue:p.value,"onUpdate:modelValue":c[1]||(c[1]=v=>p.value=v),"payment-options":s,onSubmit:w},null,8,["modelValue"]),c[4]||(c[4]=e("p",{class:"text-dark text-center"},[u("Выбранный тариф активируется сразу после оплаты."),e("br"),u("Вы сможете мгновенно связаться с владельцем")],-1))])])):n.value?(m(),y(L,{key:2,amount:p.value?(b=s.find(v=>v.id===p.value))==null?void 0:b.price:"0",onSubmit:i},null,8,["amount"])):(m(),y(X,{key:3}))])])}}},se=C(le,[["__scopeId","data-v-2f7b3060"]]),ne={class:"flex flex-col bg-white rounded-sm p-8 max-w-[580px] w-full"},ae={key:0,class:"flex flex-col"},re={key:1,class:"flex flex-col items-center"},ie={__name:"ObjectOptionModal",emits:["close"],setup(g,{emit:a}){const o=a,s=V(),p=h(!1),n=()=>{o("close"),s.showUnpublishMessage()},d=()=>{o("close"),s.showDeleteMessage()},w=()=>{o("close"),s.showShareMessage()};return(i,r)=>{const x=q,c=N;return m(),f("div",ne,[p.value?(m(),f("div",re,[r[5]||(r[5]=e("h3",{class:"text-[#41495E] text-2xl font-medium text-center mb-8"},[u(" Вы уверенны, что хотите"),e("br"),u("удалить объект? ")],-1)),e("button",{class:"w-[250px] h-[70px] py-4 px-6 mb-4 bg-[#4460F6] text-white rounded-full hover:bg-[#2341D7] transition-colors duration-300",onClick:d}," Удалить "),e("button",{onClick:r[2]||(r[2]=b=>p.value=!1),class:"flex items-center gap-2 border border-[#E9E8E8] rounded-full px-4 py-2 text-sm text-[#41495E] hover:text-[#4460F6] transition-colors"},[l(t(H),{class:"w-5 h-5"}),r[4]||(r[4]=e("span",null,"назад",-1))])])):(m(),f("ul",ae,[e("li",null,[e("button",{class:"flex justify-center items-center w-full py-4 hover:text-[#4460F6] transition-colors duration-300",onClick:w}," Поделиться ")]),l(x),e("li",null,[e("button",{class:"flex justify-center items-center w-full py-4 hover:text-[#4460F6] transition-colors duration-300",onClick:n}," Снять с публикации ")]),l(x),e("li",null,[l(c,{to:"/objects/object/edit?id=1",class:"flex justify-center items-center w-full py-4 hover:text-[#4460F6] transition-colors duration-300",onClick:r[0]||(r[0]=b=>o("close"))},{default:_(()=>r[3]||(r[3]=[u(" Редактировать объект ")])),_:1})]),l(x),e("li",null,[e("button",{class:"flex justify-center items-center w-full py-4 hover:text-[#4460F6] transition-colors duration-300",onClick:r[1]||(r[1]=b=>p.value=!0)}," Удалить ")])]))])}}},ce={class:"min-h-screen flex flex-col"},de={class:"flex flex-grow flex-col"},ue={__name:"object",setup(g){const{isFullscreen:a}=j(),o=k(),s=h(1);return(p,n)=>{const d=O,w=D("AlertContainer");return m(),f("div",ce,[l(E),e("main",de,[P(p.$slots,"default",{},void 0,!0)]),l($),l(d,{fullscreen:t(a),modelValue:t(o).isExchangeFormSliderModalOpen,"onUpdate:modelValue":n[0]||(n[0]=i=>t(o).isExchangeFormSliderModalOpen=i),transition:!1,"overlay-transition":!1},{default:_(()=>[l(S,{fromModal:!0,closeModal:t(o).closeExchangeFormSliderModal,role:s.value},null,8,["closeModal","role"])]),_:1},8,["fullscreen","modelValue"]),l(d,{fullscreen:t(a),modelValue:t(o).isExchangeModalOpen,"onUpdate:modelValue":n[1]||(n[1]=i=>t(o).isExchangeModalOpen=i),transition:!1,"overlay-transition":!1,ui:{container:"max-w-[820px] w-full mx-auto"}},{default:_(()=>[l(B,{onClose:t(o).closeExchangeModal},null,8,["onClose"])]),_:1},8,["fullscreen","modelValue"]),l(d,{fullscreen:t(a),modelValue:t(o).isContactsModalOpen,"onUpdate:modelValue":n[2]||(n[2]=i=>t(o).isContactsModalOpen=i),transition:!1,"overlay-transition":!1,ui:{container:"max-w-[820px] w-full mx-auto"}},{default:_(()=>[l(se,{onClose:t(o).closeContactsModal},null,8,["onClose"])]),_:1},8,["fullscreen","modelValue"]),l(d,{modelValue:t(o).isObjectOptionModalOpen,"onUpdate:modelValue":n[3]||(n[3]=i=>t(o).isObjectOptionModalOpen=i),transition:!1,"overlay-transition":!1,ui:{container:"max-w-[580px] w-full mx-auto"}},{default:_(()=>[l(ie,{onClose:t(o).closeObjectOptionModal},null,8,["onClose"])]),_:1},8,["modelValue"]),l(d,{modelValue:t(o).isLanguageModalOpen,"onUpdate:modelValue":n[4]||(n[4]=i=>t(o).isLanguageModalOpen=i),fullscreen:t(a),transition:!1,"overlay-transition":!1,ui:{container:"sm:w-[350px] w-full mx-auto"}},{default:_(()=>[l(F,{onClose:t(o).closeLanguageModal},null,8,["onClose"])]),_:1},8,["modelValue","fullscreen"]),l(w)])}}},Ee=C(ue,[["__scopeId","data-v-afda78c4"]]);export{Ee as default};
