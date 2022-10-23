var cuerpo = document.querySelectorAll("body");
console.log(cuerpo);

document.addEventListener("DOMContentLoaded", () => {
  let elemCard = 1;
  let conta = 0;

  document.addEventListener("load", inicio());

  function inicio() {
    const divs = document.querySelector("#articulos-filtrados");
    computadoras.forEach((items) => {
      const articulo = document.createElement("div");
      articulo.classList.add("elem");
      divs.appendChild(articulo);

      const img = document.createElement("img");
      img.src = computadoras[conta].img;
      img.classList.add("img-cart");
      articulo.appendChild(img);

      const title = document.createElement("h2");
      title.classList.add("item-title");
      title.textContent = computadoras[conta].itemTitle;
      articulo.appendChild(title);

      const price = document.createElement("h3");
      price.textContent = computadoras[conta].price;
      articulo.appendChild(price);

      const description = document.createElement("p");
      description.textContent = computadoras[conta].description;
      articulo.appendChild(description);

      const button = document.createElement("button");
      button.textContent = "AGREGAR AL CARRITO";
      articulo.appendChild(button);
      elemCard++;
      conta++;
    });

    elemCard = 1;
    conta = 0;
  }

  function laptops() {
    const arti = document.querySelector("#articulos-filtrados");
    const divs = document.querySelectorAll("#articulos-filtrados div");
    let contador = 0;
    divs.forEach((elim) => {
      arti.removeChild(divs[contador]);
      contador++;
    });

    laptop.forEach((items) => {
      const articulo = document.createElement("div");
      articulo.classList.add("elem");
      arti.appendChild(articulo);

      const img = document.createElement("img");
      img.src = laptop[conta].img;
      img.classList.add("img-cart");
      articulo.appendChild(img);

      const title = document.createElement("h2");
      title.classList.add("item-title");
      title.textContent = laptop[conta].itemTitle;
      articulo.appendChild(title);

      const price = document.createElement("h3");
      price.textContent = laptop[conta].price;
      articulo.appendChild(price);

      const description = document.createElement("p");
      description.textContent = laptop[conta].description;
      articulo.appendChild(description);

      const button = document.createElement("button");
      button.textContent = "AGREGAR AL CARRITO";
      articulo.appendChild(button);
      elemCard++;
      conta++;
    });
    elemCard = 1;
    conta = 0;
  }

  function compus() {
    const arti = document.querySelector("#articulos-filtrados");
    const divs = document.querySelectorAll("#articulos-filtrados div");
    let contador = 0;
    divs.forEach((elim) => {
      arti.removeChild(divs[contador]);
      contador++;
    });

    laptop.forEach((items) => {
      const articulo = document.createElement("div");
      articulo.classList.add("elem");
      arti.appendChild(articulo);

      const img = document.createElement("img");
      img.src = computadoras[conta].img;
      img.classList.add("img-cart");
      articulo.appendChild(img);

      const title = document.createElement("h2");
      title.classList.add("item-title");
      title.textContent = computadoras[conta].itemTitle;
      articulo.appendChild(title);

      const price = document.createElement("h3");
      price.textContent = computadoras[conta].price;
      articulo.appendChild(price);

      const description = document.createElement("p");
      description.textContent = computadoras[conta].description;
      articulo.appendChild(description);

      const button = document.createElement("button");
      button.textContent = "AGREGAR AL CARRITO";
      articulo.appendChild(button);
      elemCard++;
      conta++;
    });
    elemCard = 1;
    conta = 0;
  }
  const logoCarrito = document.querySelector("#carrito");
  logoCarrito.addEventListener("click", () => {
    const carritoFrame = document.querySelector("#carrito-frame");
    // carritoFrame.classList.add("hola");
    carritoFrame.setAttribute("style", "display: block;");
  });
  const cerrarCarrito = document.querySelector("#carrito-frame button.cerrar");
  cerrarCarrito.addEventListener("click", () => {
    const carritoFrame = document.querySelector("#carrito-frame");
    carritoFrame.setAttribute("style", "display: none;");
  });

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

  const contadorArticulos = document.querySelectorAll(
    "#articulos-filtrados div button"
  );
  let contadorCarrito = 1;
  contadorArticulos.forEach((itms) => {
    itms.addEventListener("click", (e) => {
      itms.classList.add("seleccionado");
      const articuloSeleccionado = itms.parentNode;

      const nombreArticulo = articuloSeleccionado.childNodes[1].textContent;
      const precioArticulo = articuloSeleccionado.childNodes[2].textContent;
      const descripcionArticulo =
        articuloSeleccionado.childNodes[3].textContent;
      const articulosCarrito = [
        {
          nombre: nombreArticulo,
        },
        {
          precios: precioArticulo,
        },
        {
          descripcion: descripcionArticulo,
        },
      ];
      articulosCarrito.forEach((items) => {
        console.log(items);
      });
      localStorage.setItem("articulo", JSON.stringify(articulosCarrito));
      const filasCarrito = document.querySelector("#carrito-frame div table");
      const tr = document.createElement("tr");
      filasCarrito.appendChild(tr);
      const tdArticulo = document.createElement("td");
      const txtArticulo = JSON.parse(localStorage.getItem("articulo"));
      tdArticulo.textContent = txtArticulo[0].nombre;
      tr.appendChild(tdArticulo);
      const tdDescripcion = document.createElement("td");
      tdDescripcion.style.fontSize = "0.5em";
      tdDescripcion.textContent = txtArticulo[2].descripcion;
      tr.appendChild(tdDescripcion);
      const btnAgregar = document.createElement("button");
      const btnRestar = document.createElement("button");
      btnAgregar.textContent = "+";
      btnRestar.textContent = "-";
      tr.appendChild(btnAgregar);
      tr.appendChild(btnRestar);
      const tdPrecio = document.createElement("td");
      tdPrecio.textContent = txtArticulo[1].precios;
      tr.appendChild(tdPrecio);

      const contadorArti = document.querySelector("#contador-carrito");
      contadorArti.textContent = contadorCarrito++;
      console.log("agregado");
    });
  });
});
