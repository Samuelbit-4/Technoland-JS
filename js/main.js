var cuerpo = document.querySelectorAll("body");
console.log(cuerpo);
const computadoras = [
  {
    id: 1,
    img: "/images/tienda/computadoras/compu1.jpg",
    itemTitle: "Laptop Huawei MateBook B3-410",
    price: "$12,999.00",
    description:
      "Procesador Intel Core i5 10210U (hasta 4.20 GHz), Memoria de 8GB LPDDR4, SSD de 512GB, Pantalla de 14' LED, Video UHD Graphics 620, S.O. Windows 10 Pro (64 Bits)",
  },
  {
    id: 2,
    img: "/images/tienda/computadoras/compu1.jpg",
    itemTitle: "Computadora All in One HP 200",
    price: "$7,399.00",
    description:
      "Procesador Intel Celeron J4025 (hasta 2.90GHz), Memoria de 4GB DDR4, SSD de 128GB, Pantalla de 20.7' LED, Video UHD Graphics 600, S.O. Windows 10 Pro 64 Bits",
  },
  {
    id: 3,
    img: "/images/tienda/computadoras/compu1.jpg",
    itemTitle: "PC All in One HP 200 G4",
    price: "$13,999.00",
    description:
      "Procesador Intel Core i3 10110U (hasta 4.10GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, Pantalla de 21.5' LED, Video UHD Graphics, S.O. Windows 10 Home.",
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
function compu() {
  let elemCard = 1;
  let conta = 0;
  for (let index = 0; index < 3; index++) {
    const elemento = document.querySelector(`.elem${elemCard}`);
    var img = document.createElement("img");
    img.id = "img-cart1";
    img.setAttribute("src", computadoras[conta].img);
    img.classList.add("img-cart");
    elemento.insertBefore(img, elemento.childNodes[0]);
    var title = document.createElement("h2");
    title.classList.add("item-title");
    title.textContent = computadoras[conta].itemTitle;
    elemento.insertBefore(title, elemento.childNodes[1]);
    var price = document.createElement("h3");
    price.textContent = computadoras[conta].price;
    elemento.insertBefore(price, elemento.childNodes[2]);
    var description = document.createElement("p");
    description.textContent = computadoras[conta].description;
    elemento.insertBefore(description, elemento.childNodes[3]);
    var button = document.createElement("button");
    button.textContent = "AGREGAR AL CARRITO";
    elemento.insertBefore(button, elemento.childNodes[4]);
    conta++
    elemCard++;
  }
}

console.log(computadoras[1].description)