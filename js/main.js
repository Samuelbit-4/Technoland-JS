var cuerpo = document.querySelectorAll("body");
console.log(cuerpo);
const computadoras = [
  {
    id: 1,
    img: "/images/tienda/computadoras/compu-desk-1.jpg",
    itemTitle: "Laptop Huawei MateBook B3-410",
    price: "$12,999.00",
    description:
      "Procesador Intel Core i5 10210U (hasta 4.20 GHz), Memoria de 8GB LPDDR4, SSD de 512GB, Pantalla de 14' LED, Video UHD Graphics 620, S.O. Windows 10 Pro (64 Bits)",
  },
  {
    id: 2,
    img: "/images/tienda/computadoras/compu-desk-2.jpg",
    itemTitle: "Computadora All in One HP 200",
    price: "$7,399.00",
    description:
      "Procesador Intel Celeron J4025 (hasta 2.90GHz), Memoria de 4GB DDR4, SSD de 128GB, Pantalla de 20.7' LED, Video UHD Graphics 600, S.O. Windows 10 Pro 64 Bits",
  },
  {
    id: 3,
    img: "/images/tienda/computadoras/compu-desk-3.jpg",
    itemTitle: "PC All in One HP 200 G4",
    price: "$13,999.00",
    description:
      "Procesador Intel Core i3 10110U (hasta 4.10GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, Pantalla de 21.5' LED, Video UHD Graphics, S.O. Windows 10 Home.",
  },
  {
    id: 4,
    img: "/images/tienda/computadoras/compu-desk-4.jpg",
    itemTitle: "PC All in One Lenovo V130-20IGM",
    price: "$6,499.00",
    description:
      "Procesador Intel Celeron J4025 (hasta 2.90 GHz), Memoria de 4GB DDR4, Disco Duro de 1TB, Pantalla de 19.5' LED, Video UHD Graphics 600, Unidad Óptica DVD±R/RW, S.O. Windows 10 Home (64 Bits)",
  },
  {
    id: 5,
    img: "/images/tienda/computadoras/compu-desk-5.jpg",
    itemTitle: "PC de Escritorio MateStation B515",
    price: "$11,999.00",
    description:
      "Procesador AMD Ryzen 5 4600G (hasta 4.20 GHz), Memoria de 8GB DDR4, SSD de 256GB, Video Radeon Graphics, S.O. Windows 10 Pro (64 Bits).",
  },
  {
    id: 6,
    img: "/images/tienda/computadoras/compu-desk-6.jpg",
    itemTitle: "PC All in One DELL Inspiron 5410",
    price: "$28,999.00",
    description:
      "Procesador Intel Core i7 1255U (hasta 4.70 GHz), Memoria de 16GB DDR4, Disco Duro de 1TB, SSD de 256GB, Pantalla de 23.8' LED, Video NVIDIA GeForce MX550, S.O. Windows 11 Home (64 Bits)",
  },
  {
    id: 7,
    img: "/images/tienda/computadoras/compu-desk-7.jpg",
    itemTitle: "PC All in One HP 24-df1505la",
    price: "$13,999.00",
    description:
      "Procesador Intel Core i3 1115G4 (hasta 4.10 GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, SSD de 256GB, Pantalla de 23.8' LED, Video UHD Graphics, S.O. Windows 11 Home (64 Bits).",
  },
  {
    id: 8,
    img: "/images/tienda/computadoras/compu-desk-8.jpg",
    itemTitle: "PC de Escritorio HP ProDesk 400 G7 SFF",
    price: "$15,499.00",
    description:
      "Procesador Intel Core i5 10505 (hasta 4.60 GHz), Memoria de 8GB DDR4, SSD de 512GB, Video UHD Graphics 630, S.O. Windows 10 Pro (64 Bits)",
  },
  {
    id: 9,
    img: "/images/tienda/computadoras/compu-desk-9.jpg",
    itemTitle: "PC de Escritorio MateStation S B515",
    price: "$15,499.00",
    description:
      "Procesador AMD Ryzen 5 4600G (hasta 4.20 GHz), Memoria de 8GB DDR4, SSD de 256GB, Video Radeon Graphics, S.O. Windows 10 Pro (64 Bits) Incluye Monitor Huawei AD80HW de 23.8' FHD.",
  },
  {
    id: 10,
    img: "/images/tienda/computadoras/compu-desk-10.jpg",
    itemTitle: "All in One Lenovo IdeaCentre 3",
    price: "$13,999.00",
    description:
      " Procesador AMD Ryzen 3 4300U (hasta 3.70 GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, Pantalla de 23.8' LED, Video Radeon Graphics, S.O. Windows 10 Home (64 Bits), Incluye Tablet Lenovo Tab M10.",
  },
  {
    id: 11,
    img: "/images/tienda/computadoras/compu-desk-11.jpg",
    itemTitle: "PC de Escritorio VORAGO GF CHOOSE",
    price: "$18,999.00",
    description:
      "Procesador Intel Core i5 11400 (hasta 4.40 GHz), Memoria de 16GB DDR4, SSD de 512GB, Video GeForce GTX 1660 SUPER, S.O. No Incluye.",
  },
  {
    id: 12,
    img: "/images/tienda/computadoras/compu-desk-12.jpg",
    itemTitle: "PC All in One HP 400 G6",
    price: "$22,399.00",
    description:
      " Procesador Intel Core i5 10500 (hasta 4.50 GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, Pantalla de 23.8' LED, Video UHD Graphics 630, S.O. Windows 10 Pro (64 Bits)",
  },
];

// function compu() {
//   const body = document.body;
//   var elemento = document.querySelector(".elem1");
//   console.log(elemento);
//   var img = document.createElement("img");
//   img.id = "img-cart1";
//   img.setAttribute("src", "./images/tienda/computadoras/compu1.jpg");
//   img.classList.add("img-cart");
//   elemento.insertBefore(img, elemento.childNodes[0]);
//   var title = document.createElement("h2");
//   title.classList.add("item-title");
//   title.textContent = "Laptop Huawei MateBook B3-410";
//   elemento.insertBefore(title, elemento.childNodes[1]);
//   var price = document.createElement("h3");
//   price.textContent = "$12,999.00";
//   elemento.insertBefore(price, elemento.childNodes[2]);
//   var description = document.createElement("p");
//   description.textContent =
//     "Procesador Intel Core i5 10210U (hasta 4.20 GHz), Memoria de 8GB LPDDR4, SSD de 512GB, Pantalla de 14' LED, Video UHD Graphics 620, S.O. Windows 10 Pro (64 Bits)";
//   elemento.insertBefore(description, elemento.childNodes[3]);
//   var button = document.createElement("button");
//   button.textContent = "AGREGAR AL CARRITO";
//   elemento.insertBefore(button, elemento.childNodes[4]);
// }
let elemCard = 1;
let conta = 0;


function inicio() {
  
  for (let index = 0; index < 12; index++) {
    const elemento = document.querySelector(`.elem${elemCard}`);
    const img = document.createElement("img");
const title = document.createElement("h2");
const price = document.createElement("h3");
const description = document.createElement("p");
var button = document.createElement("button");
    img.id = "img-cart1";
    img.setAttribute("src", computadoras[conta].img);
    img.classList.add("img-cart");
    elemento.insertBefore(img, elemento.childNodes[0]);
    
    title.classList.add("item-title");
    title.textContent = computadoras[conta].itemTitle;
    elemento.insertBefore(title, elemento.childNodes[1]);
    
    price.textContent = computadoras[conta].price;
    elemento.insertBefore(price, elemento.childNodes[2]);
    
    description.textContent = computadoras[conta].description;
    elemento.insertBefore(description, elemento.childNodes[3]);

    button.textContent = "AGREGAR AL CARRITO";
    elemento.insertBefore(button, elemento.childNodes[4]);
    conta++;
    elemCard++;
  }
}

function laptops() {
  
  for (let index = 0; index < 12; index++) {
    // const elemento = document.querySelector(`.elem${elemCard}`);
    // var img = document.createElement("img");
    // img.id = "img-cart1";
    // img.setAttribute("src", computadoras[conta].img);
    // img.classList.add("img-cart");
    // elemento.insertBefore(img, elemento.childNodes[0]);
    // var title = document.createElement("h2");
    // title.classList.add("item-title");
    // title.textContent = computadoras[conta].itemTitle;
    // elemento.insertBefore(title, elemento.childNodes[1]);
    // var price = document.createElement("h3");
    // price.textContent = computadoras[conta].price;
    // elemento.insertBefore(price, elemento.childNodes[2]);
    // var description = document.createElement("p");
    // description.textContent = computadoras[conta].description;
    // elemento.insertBefore(description, elemento.childNodes[3]);
    // var button = document.createElement("button");
    // button.textContent = "AGREGAR AL CARRITO";
    // elemento.insertBefore(button, elemento.childNodes[4]);
    // conta++;
    // elemCard++;
  }
}
