


////////////////////////////////Категории//////////////////////////////////////////////////////





// const ProductEl = [
//     {
//         image: "./src/assets/img/category/women.svg",
//         title: "Для женщин",
//         desc: "4 147 объявлений",
//         icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image: "./src/assets/img/category/men.svg",
//         title: "Для мужчин",
//         desc: "547 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {   image:"./src/assets/img/category/children.svg",
//         title: "Детские товары",
//         desc: "635 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {   image:"./src/assets/img/category/boots.svg", 
//         title: "Обувь",
//         desc: "4 147 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/autoparts.svg",
//         title: "Автотовары",
//         desc: "63 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/garden.svg",
//         title: "Дача, сады и огороды",
//         desc: "847 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/fridge.svg",
//         title: "Бытовая техника",
//         desc: "547 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/makeUp.svg",
//         title: "Красота",
//         desc: "574 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/heart.svg",
//         title: "Здоровье",
//         desc: "684 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/jevelry.svg",
//         title: "Украшения и бижутерия",
//         desc: "4 147 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/chancellory.svg",
//         title: "Канцелярия",
//         desc: "101 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/auto.svg",
//         title: "Новые легковые автомобили",
//         desc: "847 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/himiya.svg",
//         title: "Личная гигиена",
//         desc: "741 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/building.svg",
//         title: "Строительство и ремонт",
//         desc: "4 147 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/boots2.svg",
//         title: "Бытовая химия и личная гигиена",
//         desc: "101 объявлений",
//         icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/laptop.svg",
//         title: "Электроника",
//         desc: "4 147 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/kitchen.svg",
//         title: "Домашняя утварь",
//         desc: "4 147 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/relax.svg",
//         title: "Спорт и отдых",
//         desc: "1741 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/moto.svg",
//         title: "Мототранспорт",
//         desc: "4 147 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/accessories.svg",
//         title: "Аксессуарлар",
//         desc: "574 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
//     {
//         image:"./src/assets/img/category/bag.svg",
//         title: "Сумки и чемоданы",
//         desc: "4 147 объявлений",
//          icon: "./src/assets/img/icons/chevron-right.svg"
//     },
// ]

// const products = document.getElementById("products");
// ProductEl.forEach((product)=>{
//     products.innerHTML += `
//         <div class="col-span-1 cursor-pointer flex flex-row items-center gap-5 rounded-xl border border-gray-300   shadow-product group w-80 h-24 hover:border-blue">

//             <div class="relative overflow-hidden bg-white w-16 h-16 p-4 justify-center rounded-xl border border-gray-300 -translate-x-1/3">

//               <img class="rounded-tl-xl rounded-tr-xl w-8" src=${product.image} alt="">
//               <svg class="absolute top-2 left-2" xmlns="" w-8 h-8 viewBox="0 0 40 40" fill="none">
//                 <path "" fill="white"/>
//               </svg>
//             </div>
            
//             <div class="flex flex-row gap-16 text-center justify-center">
//             <div class="title ">
              
//               <h3 class="overflow-hidden h-[50px] text-primaryText text-ellipsis font-semibold text-lg mt-4 group-hover:text-[#388FF3] transition-all duration-300">${product.title}</h3>
//               <p class="overflow-hidden h-[50px] text-primaryText text-ellipsis font-normal font-sm  group-hover:text-[#388FF3] transition-all duration-300 text-sm text-gray-500">${product.desc}<p>
//               </div>

//               <div class="py-14 justify-center">
//               <img class="w-5 h-5" src=${product.icon} alt="">
//                 </div>
//             </div>
//           </div> 
//     `
//     ;
// })



///////////////////////////Объявления////////////////////////////////



const CardEl = [
    {
        image:"./src/assets/img/products/kepka.png",
        location:"г.Ташкент",
        title: "Кепки Corneliani Diamond for him edition.",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"2 599 000",
        currency: "UZS"
    },
    {
        image:"./src/assets/img/products/onix.png",
        location:"г.Самарканд",
        title: "Chevrolet Onix 1.2 Turbo в наличии",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"204 000 000",
        currency: "UZS"
    },
    {
        image:"./src/assets/img/products/saber_kepka.png",
        location:"г.Ташкент",
        title: "7Saber Trucker Cap",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"280 000",
        currency: "UZS"
    },
    {
        image:"./src/assets/img/products/trainers.png",
        location:"г.Ташкент",
        title: "Оригинальные кроссовки Nike Air Max Plus",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"4 820 000",
        currency: "UZS"
    },
    {
        image:"./src/assets/img/products/nike97.png",
        location:"г.Ташкент",
        title: "Оригинальные кроссовки Nike Air Max 97",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"4 820 000",
        currency: "UZS"
    },
    {
        image:"./src/assets/img/products/watch.png",
        location:"г.Ташкент",
        title: "Apple Watch Series 8 - USA Non active",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"4 500 000",
        currency: "UZS"
    },
    {
        image:"./src/assets/img/products/geely.png",
        location:"г.Самарканд",
        title: "Лучший кроссовер Geely Monjaro Limited Edition",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"320 000 000",
        currency: "UZS"
    },
    {
        image:"./src/assets/img/products/dyson.png",
        location:"г.Ташкент",
        title: "Стайлер для волос Dyson airwrap complete long",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"500",
        currency: "USD"
    },
    {
        image:"./src/assets/img/products/saber_kepka.png",
        location:"г.Ташкент",
        title: "7Saber Trucker Cap",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"280 000",
        currency: "UZS"
    },
    {
        image:"./src/assets/img/products/trainers.png",
        location:"г.Ташкент",
        title: "Оригинальные кроссовки Nike Air Max Plus",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"4 820 000",
        currency: "UZS"
    },
    {
        image:"./src/assets/img/products/onix.png",
        location:"г.Самарканд",
        title: "Chevrolet Onix 1.2 Turbo в наличии",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"204 000 000",
        currency: "UZS"
    },
    {
        image:"./src/assets/img/products/kepka.png",
        location:"г.Ташкент",
        title: "Кепки Corneliani Diamond for him edition.",
        time: "Вчера, 19:20",
        phoneNumber: "+998 71 200 70 07",
        price:"2 599 000",
        currency: "UZS"
    }
]

const maincards = document.getElementById("maincards");
CardEl.forEach((maincard)=>{
    maincards.innerHTML += `
        <div class="product-card bg-white width='278' height='470'  rounded-xl border border-white">
            <img class="rounded-tl-xl rounded-tr-xl" src="${maincard.image}" alt="${maincard.title}">

           <div class="title py-6 px-5">
            <p class="text-slate-500 rounded border w-28 h-6 bg-slate-200 text-center pt-0"> ${maincard.location}</p>
            <h3 class="font-semibold text-lg pt-4 hover:text-blue-500"><a class="" href="#!">${maincard.title} </h3>
           <p class="pt-2 text-slate-500 font-normal text-sm"> ${maincard.time}</p>
           <p class= "text-slate-500 text-base font-semibold pt-2"> ${maincard.phoneNumber}</p>

           <div class="flex flex-row gap-2 pt-4"> 
           <p class="font-bold text-2xl"> ${maincard.price}</p>
           <p class="pt-2 text-base font-medium text-sky-600"> ${maincard.currency}</p> 
           <div>
           
           </div>
        </div>
   
        
    `;
})
