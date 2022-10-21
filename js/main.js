var cuerpo = document.querySelectorAll("body");
console.log(cuerpo);

document.addEventListener("DOMContentLoaded", () => {
  let elemCard = 1;
  let conta = 0;

  document.addEventListener("load", inicio())

  function inicio() {
    for (let index = 0; index < 12; index++) {
      //CREACION DE ELEMENTOS
      const elemento = document.querySelector(`.elem${elemCard}`);
      const img = document.createElement("img");
      const title = document.createElement("h2");
      const price = document.createElement("h3");
      const description = document.createElement("p");
      const button = document.createElement("button");
      //ASIGNACIÓN DE VALORES DEL JSON A CADA ELEMENTO

      img.id = "img-cart1";
      img.setAttribute("src", computadoras[conta].img);
      img.classList.add("img-cart");
      // elemento.insertBefore(img, elemento.childNodes[0]);
      elemento.appendChild(img);

      title.classList.add("item-title");
      title.textContent = computadoras[conta].itemTitle;
      // elemento.insertBefore(title, elemento.childNodes[1]);
      elemento.appendChild(title);

      price.textContent = computadoras[conta].price;
      // elemento.insertBefore(price, elemento.childNodes[2]);
      elemento.appendChild(price);

      description.textContent = computadoras[conta].description;
      // elemento.insertBefore(description, elemento.childNodes[3]);
      elemento.appendChild(description);

      button.textContent = "AGREGAR AL CARRITO";
      // elemento.insertBefore(button, elemento.childNodes[4]);
      elemento.appendChild(button);
      conta++;
      elemCard++;
    }
    console.log(document.querySelector(".elem1").childElementCount);
    elemCard = 1;
    conta = 0;
  }

  function laptops() {
    for (let index = 0; index < 12; index++) {
      const img = document.querySelector(`.elem${elemCard} img`);
      img.id = "img-cart1";
      img.setAttribute("src", laptop[conta].img);
      img.classList.add("img-cart");

      const title = document.querySelector(`.elem${elemCard} h2`);
      title.classList.add("item-title");
      title.textContent = laptop[conta].itemTitle;

      const price = document.querySelector(`.elem${elemCard} h3`);
      price.textContent = laptop[conta].price;

      const description = document.querySelector(`.elem${elemCard} p`);
      description.textContent = laptop[conta].description;

      elemCard++;
      conta++;
    }
    elemCard = 1;
    conta = 0;
  }

  function compus() {
    for (let index = 0; index < 12; index++) {
      const img = document.querySelector(`.elem${elemCard} img`);
      img.id = "img-cart1";
      img.setAttribute("src", computadoras[conta].img);
      img.classList.add("img-cart");

      const title = document.querySelector(`.elem${elemCard} h2`);
      title.classList.add("item-title");
      title.textContent = computadoras[conta].itemTitle;

      const price = document.querySelector(`.elem${elemCard} h3`);
      price.textContent = computadoras[conta].price;

      const description = document.querySelector(`.elem${elemCard} p`);
      description.textContent = computadoras[conta].description;

      elemCard++;
      conta++;
    }
    elemCard = 1;
    conta = 0;
  }
  const buttonCarts = document
    .querySelectorAll(".filtrar > button")
    .forEach((items) => {
      items.addEventListener("click", (e) => {
        console.log(e.target.id);
        if (e.target.id == "computadoras-btn") {
          compus();
        } else if (e.target.id == "laptops-btn") {
          laptops();
        }
      });
    });
});
