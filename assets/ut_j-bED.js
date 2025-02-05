import{_ as h}from"./BqOE10aK.js";import{o as i,c as r,a as e,b as n,g as v,w as b,d as w,j as u,D as y,_ as x,F as j,h as F,U as C,V as $,f as V}from"./C-aQP7sg.js";import{_ as k,a as O,l as c}from"./AZ75Lda3.js";/* empty css        */import{L as S}from"./B1v9BZJy.js";import{R as L}from"./BOgBV-i1.js";import{O as E}from"./CscSHZd2.js";import"./D14M8vp2.js";const H={class:"flex gap-4"},B={class:"flex items-center xl:w-[420px] w-full border border-[#ECEDF3] rounded-[40px] py-2 xl:px-5 px-2"},P={__name:"ObjectEditLocationSection",props:{object:Object},setup(o){return(s,t)=>(i(),r("section",null,[t[2]||(t[2]=e("h1",{class:"text-2xl font-bold text-dark mb-4"},"Где находится объект?",-1)),e("div",H,[e("div",B,[n(v(S),{class:"mr-2 w-10 h-10"}),t[0]||(t[0]=e("select",{class:"w-full mr-2 xl:text-base text-sm cursor-pointer"},[e("option",{value:"location1"},"Italy, Sardinia"),e("option",{value:"location2"},"Spain, Barcelona"),e("option",{value:"location3"},"France, Paris")],-1))]),n(L,{class:"shrink-0"},{default:b(()=>t[1]||(t[1]=[w(" Показать на карте ")])),_:1})])]))}},M={class:"map-container"},z={__name:"ObjectEditMapSection",props:{object:Object,coordinates:{type:Array,required:!1,default:()=>[55.7558,37.6173],validator:o=>o.length===2&&typeof o[0]=="number"&&typeof o[1]=="number"}},setup(o){const s=o,t=u(null);y(()=>{window.ymaps&&window.ymaps.ready(()=>{a()})});const a=()=>{const l=new window.ymaps.Map("map",{center:s.object.coordinates,zoom:14,controls:["zoomControl"]}),d=window.ymaps.templateLayoutFactory.createClass('<div class="custom-placemark"><svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0C12.0645 0 5.625 6.43945 5.625 14.375C5.625 17.0996 6.43945 19.7754 7.96875 22.0215L19.0918 39.4043C19.3359 39.7852 19.6777 40 20 40C20.3223 40 20.6641 39.7852 20.9082 39.4043L32.0312 22.0215C33.5605 19.7754 34.375 17.0996 34.375 14.375C34.375 6.43945 27.9355 0 20 0ZM20 20C16.8945 20 14.375 17.4805 14.375 14.375C14.375 11.2695 16.8945 8.75 20 8.75C23.1055 8.75 25.625 11.2695 25.625 14.375C25.625 17.4805 23.1055 20 20 20Z" fill="#4460F6"/></svg></div>'),p=new window.ymaps.Placemark(s.object.coordinates,{},{iconLayout:d,iconShape:{type:"Rectangle",coordinates:[[-20,-48],[20,0]]}});l.geoObjects.add(p)};return(l,d)=>{const p=k;return i(),r("div",M,[n(p,null,{default:b(()=>[e("div",{id:"map",ref_key:"mapRef",ref:t},null,512)]),_:1})])}}},D={class:"flex flex-col items-start gap-4"},I=["value"],R={__name:"ObjectEditTitleSection",props:{object:Object},setup(o){return(s,t)=>(i(),r("div",D,[t[0]||(t[0]=e("label",{class:"text-lg text-dark font-medium"},"Название объявления",-1)),e("input",{type:"text",class:"xl:text-4xl lg:text-3xl text-lg text-dark font-bold border border-[#D2DBF5] rounded-lg py-2 lg:px-8 px-4 max-w-full",value:o.object.title},null,8,I)]))}},T=x(R,[["__scopeId","data-v-ab460307"]]),N={class:"flex flex-col gap-4"},W={class:"relative"},Z={class:"flex gap-4 overflow-x-auto pb-5"},q={class:"relative lg:min-w-[300px] lg:h-[300px] min-w-[150px] h-[150px] bg-[#F8F9FF] lg:rounded-xl rounded-lg flex items-center justify-center cursor-pointer"},U=["src","alt"],A={__name:"ObjectEditPhotosSection",props:{object:{type:Object,required:!0}},setup(o){const s=t=>{const a=t.target.files[0];a&&console.log("File selected:",a)};return(t,a)=>(i(),r("section",null,[e("div",N,[a[2]||(a[2]=e("label",{class:"text-lg text-dark font-medium"},"Фото объета",-1)),e("div",W,[e("ul",Z,[e("li",q,[e("input",{type:"file",accept:"image/*",class:"absolute inset-0 opacity-0 cursor-pointer",onChange:s},null,32),a[0]||(a[0]=e("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M31.6667 21.6667H21.6667V31.6667H18.3334V21.6667H8.33337V18.3333H18.3334V8.33334H21.6667V18.3333H31.6667V21.6667Z",fill:"#4460F6"})],-1))]),(i(!0),r(j,null,F(o.object.images,(l,d)=>(i(),r("li",{key:l.id,class:"relative lg:min-w-[300px] lg:h-[300px] min-w-[150px] h-[150px] lg:rounded-2xl rounded-lg overflow-hidden group"},[e("input",{type:"file",accept:"image/*",class:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:s},null,32),a[1]||(a[1]=e("div",{class:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"},[e("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M31.6667 21.6667H21.6667V31.6667H18.3334V21.6667H8.33337V18.3333H18.3334V8.33334H21.6667V18.3333H31.6667V21.6667Z",fill:"white"})])],-1)),e("img",{src:o.object.images[d],alt:l.id,class:"w-full h-full object-cover"},null,8,U)]))),128))])])])]))}},G=x(A,[["__scopeId","data-v-99914dc7"]]),J={class:"flex flex-col xl:gap-8 gap-4"},K=["value"],Q={__name:"ObjectEditDescriptionSection",props:{object:Object},setup(o){return(s,t)=>(i(),r("section",null,[e("div",J,[t[0]||(t[0]=e("h2",{class:"xl:text-4xl lg:text-3xl text-lg font-medium text-dark"},"Описание объекта",-1)),e("textarea",{class:"w-full resize-none xl:text-lg text-sm",value:o.object.description},null,8,K)])]))}},X=x(Q,[["__scopeId","data-v-918f2f0b"]]),Y={class:"container py-10"},ee={action:""},te={class:"flex flex-wrap justify-center items-center gap-4 w-full mb-20"},oe=["disabled"],me={__name:"index",setup(o){const s=u(!1),t=u(!1),a=[{name:"Все объекты",path:"/objects"},{name:"Испания",path:"/objects/spain"},{name:"Виллы",path:"/objects/spain/villas"},{name:"Вилла на море",path:"/objects/spain/villas/object?id=1"},{name:"Редактирование",path:"/objects/spain/villas/object/edit?id=1"}],l={owner:{name:"Жанна",id:"1234567890"},title:"Роскошная вилла в Испании с бассейном",description:`Эксклюзивные виллы на продажу в элитном жилом комплексе на юго-западном побережье Тенерифе.
    Это лимитированная коллекция из 12 великолепных особняков, каждый из которых имеет собственный бассейн с зоной для загара. <br><br>
    Атмосфера здесь очень уединенная, и вы можете полюбоваться потрясающими видами. Неподалеку находится теннисная академия Аннабель Крофт,
    окруженная блестящим полем для гольфа, спроектированным Дэйвом Томасом. Комплекс непременно привлечет тех, кто стремится найти для себя самое модное жилье.<br><br>
    Земельный участок занимает 594 м2, а жилая площадь составляет около 272 м2 и распределена на двух уровнях.<br><br>
    На первом этаже находится большая гостиная и столовая с прямым выходом на открытую и крытую террасы к красивому бассейну. Открытая и светлая кухня с качественной техникой и большим количеством места для приготовления пищи.`,price:"850 000",currency:"$",location:"Carrer de Lluís Peixó, 46011 Валенсия",bedrooms:4,bathrooms:3,area:200,plotArea:1e3,type:"Апартаменты",comfort:["Бассейн","Парковка","Кондиционер","Бесплатный Wi-Fi","Бесплатный Wi-Fi","Стоянка для машин","Парк","Бассейн","Парковка","Кондиционер","Бесплатный Wi-Fi","Бесплатный Wi-Fi","Стоянка для машин"],coordinates:[39.4699,-.3763],images:[c,c,c,c,c,c],wishes:"Ищу обмен домом на аналогичное жилье в другой стране. Предпочтительно спокойный, уютный район с развитой инфраструктурой, недалеко от природы или моря. Дом должен быть в хорошем состоянии, с минимальным ремонтом, подходящим для комфортного проживания семьи. Важно наличие нескольких спален, оборудованной кухни и уютного пространства для отдыха. Рассматриваю обмен на дом в теплых странах с мягким климатом и удобной транспортной доступностью."};C().query.id||$("/");const p={propertyTypeSection:{title:"Тип недвижимости",options:[{value:"all",label:"Все"},{value:"apartments",label:"Апартаменты"},{value:"houses",label:"Дома"},{value:"villas",label:"Виллы"},{value:"bungalows",label:"Бунгало"},{value:"townhouses",label:"Таунхаус"},{value:"country-house",label:"Деревенский дом"},{value:"mansion",label:"Особняк"},{value:"farm",label:"Ферма"},{value:"apartment",label:"Квартира"}]},priceSection:{title:"Стоимость",minPlaceholder:"Мин: 10 000 $",maxPlaceholder:"Макс: 1 000 000 000 $"},areaSection:{title:"Площадь",minPlaceholder:"Мин. м2",maxPlaceholder:"Макс. м2"},roomsSection:{bedroomsLabel:"Спальни",bathroomsLabel:"Ванны",bedrooms:{min:0,max:10},bathrooms:{min:0,max:10}},amenitiesSection:{title:"Удобства",options:[{id:"playground",label:"Детская площадка"},{id:"pool",label:"Бассейн"},{id:"barbecue",label:"Зона барбекю"},{id:"parking",label:"Стоянка"},{id:"security",label:"Безопасность"},{id:"jacuzzi",label:"Джакузи"},{id:"park",label:"Парк"},{id:"smart-home",label:"Умный дом"}]},buttons:{clear:"Очистить",apply:"Применить"}},f=u({propertyType:"all",price:{min:"",max:""},area:{min:"",max:""},rooms:{bedrooms:1,bathrooms:1},amenities:{}});return(ae,m)=>{const _=h;return i(),V(_,{name:"object"},{default:b(()=>[e("div",Y,[e("form",ee,[n(O,{class:"mb-2",breadcrumbs:a}),n(P,{object:l,class:"lg:mb-10 mb-5"}),n(z,{object:l,class:"lg:mb-10 mb-5"}),n(T,{object:l,class:"lg:mb-10 mb-5"}),n(G,{object:l,class:"lg:mb-10 mb-5"}),n(E,{modelValue:f.value,"onUpdate:modelValue":m[0]||(m[0]=g=>f.value=g),config:p,context:"edit",class:"lg:mb-20 mb-5"},null,8,["modelValue"]),n(X,{object:l,class:"mb-10"}),e("div",te,[e("button",{type:"submit",disabled:!s.value&&!t.value,class:"bg-secondary text-white rounded-lg py-2 px-4 w-[320px] h-[50px] hover:bg-secondary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-secondary"}," Сохранить изменения ",8,oe),m[1]||(m[1]=e("button",{class:"text-dark font-medium border border-[#B4CEFF] rounded-lg py-2 px-4 w-[320px] h-[50px] hover:bg-gray-50 transition-colors duration-200"}," Снять с пуликации ",-1))])])])]),_:1})}}};export{me as default};
