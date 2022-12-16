var cuerpo = document.querySelector("body");
console.log(cuerpo);
//METODO PARA PRIORIZAR LA CARGA DE LOS ELEMENTOS
document.addEventListener("DOMContentLoaded", () => {
  let elemCard = 1;
  let conta = 0;

  document.addEventListener("load", inicio());
  //ARTICULOS QUE SE MUESTRAN AL INICIO
  function inicio() {
    //SELECCIONAMOS LA ETIQUETA QUE CONTENGA EL ID =
    const divs = document.querySelector("#articulos-filtrados");
    //CREAMOS DIVS A PARTIR DE LOS ELEMENTOS GUARDADOS EN EL ARREGLO
    // EN ESTE CASO computadoras[]
    computadoras.forEach((items) => {
      //CREAMOS EL DIV
      const articulo = document.createElement("div");
      //AGREGAMOS LA CLASE elem A LA ETIQUETA
      articulo.classList.add("elem");
      //AGREGAMOS EL HIJO AL ELEMENTO DIV
      divs.appendChild(articulo);

      //INSERCIÓN DE IMAGENES

      const img = document.createElement("img");
      img.src = computadoras[conta].img;
      img.classList.add("img-cart");
      articulo.appendChild(img);

      //INSERCION DEL TITULO DEL ARTICULO
      const title = document.createElement("h2");
      title.classList.add("item-title");
      title.textContent = computadoras[conta].itemTitle;
      articulo.appendChild(title);

      //INSERCION DEL PRECIO
      const price = document.createElement("h3");
      price.textContent = computadoras[conta].price;
      articulo.appendChild(price);

      //INSERCION DE LA DESCRIPCION DEL ARTICULO
      const description = document.createElement("p");
      description.textContent = computadoras[conta].description;
      articulo.appendChild(description);

      //CREACION DE LOS BOTONES
      const button = document.createElement("button");
      button.textContent = "AGREGAR AL CARRITO";
      button.id = "btnAgregar"
      articulo.appendChild(button);

      //AGREGAMOS UNO A LOS CONTADORES
      elemCard++;
      conta++;
    });
    // DESPUES DEL CICLO FOR-EACH REGRESAMOS LOS CONTADORES A SU VALOR ORIGINAL
    elemCard = 1;
    conta = 0;
  }

  function laptops() {
    //ELIMINAMOS LOS DIVS DEL LOAD
    const arti = document.querySelector("#articulos-filtrados");
    const divs = document.querySelectorAll("#articulos-filtrados div");
    let contador = 0;
    divs.forEach((elim) => {
      arti.removeChild(divs[contador]);
      contador++;
    });
    //INSERTAMOS LOS ELEMENTOS QUE ENCUENTRE EN EL ARREGLO laptop[]
    //Y LO RECORREMOS A PARTIR DE UN FOR-EACH
    laptop.forEach((items) => {
      //CREACION DEL DIV
      const articulo = document.createElement("div");
      articulo.classList.add("elem");
      arti.appendChild(articulo);

      //INSERCIÓN DE IMAGENES
      const img = document.createElement("img");
      img.src = laptop[conta].img;
      img.classList.add("img-cart");
      articulo.appendChild(img);

      //INSERCION DEL TITULO DEL ARTICULO
      const title = document.createElement("h2");
      title.classList.add("item-title");
      title.textContent = laptop[conta].itemTitle;
      articulo.appendChild(title);

      //INSERCION DEL PRECIO
      const price = document.createElement("h3");
      price.textContent = laptop[conta].price;
      articulo.appendChild(price);

      //INSERCION DE LA DESCRIPCION
      const description = document.createElement("p");
      description.textContent = laptop[conta].description;
      articulo.appendChild(description);

      //CREAMOS LOS BOTONES
      const button = document.createElement("button");
      button.textContent = "AGREGAR AL CARRITO";
      button.id = "btnAgregar"
      articulo.appendChild(button);
      elemCard++;
      conta++;
    });
    elemCard = 1;
    conta = 0;
  }

  //ESTE METODO HACE EXACTAMENTE LO MISMO QUE LA FUNCION DE LAS LAPTOPS
  //PRIMERO BORRA LOS DIVS, DESPUES CREA SUS PROPIOS Y AGREGA LAS IMAGENES
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
      button.id = "btnAgregar"
      articulo.appendChild(button);
      elemCard++;
      conta++;
    });
    elemCard = 1;
    conta = 0;
  }
  //EVENTO FRAME DEL CARRITO
  //SELECCIONAMOS EL LOGO DEL CARRITO EN EL NAVBAR
  const logoCarrito = document.querySelector("#carrito");
  //LE AGREGAMOS EL EVENTO CLICK
  logoCarrito.addEventListener("click", () => {
    //SELECCIONA EL CARRITO FRAME QUE PREVIAMENTE ESTA COMO
    //DISPLAY NONE EN SUS ESTILOS DE CSS
    const carritoFrame = document.querySelector("#carrito-frame");
    // carritoFrame.classList.add("hola");
    //CAMBIAMOS SU DISPLAY A BLOCK PARA MOSTRARLO
    carritoFrame.setAttribute("style", "display: block;");
    // cuerpo.classList = "deshabilitar"
  });
  //SELECCIONAMOS EL BOTON DE CERRAR
  const cerrarCarrito = document.querySelector("#carrito-frame button.cerrar");
  //LE AGREGAMOS EL EVENTO CLICK
  cerrarCarrito.addEventListener("click", () => {
    //OCULTAMOS CON EL DISPLAY NONE
    const carritoFrame = document.querySelector("#carrito-frame");
    carritoFrame.setAttribute("style", "display: none;");
  });

  //EVENTOS PARA FILTRAR
  //SE AGREGAN EVENTOS A LOS BOTONES PREVIO A LOS ARTICULOS
  //SELECCIONAMOS TODOS LOS BOTONES QUE PERTENEZCAN A LA CLASE FILTRAR
  const buttonCarts = document
    .querySelectorAll(".filtrar > button")
    .forEach((items) => {
      //AGREGAMOS EL EVENTO CLICK
      items.addEventListener("click", (e) => {
        console.log(e.target.id);
        //DEPENDIENDO SU ID FILTRAMOS LA INFORMACION LLAMANDO A LA FUNCION CORRESPONDIENTE
        //AUN EN PROCESO DE ELABORACIÓN
        if (e.target.id == "computadoras-btn") {
          compus();
        } else if (e.target.id == "laptops-btn") {
          laptops();
        }
      });
    });
  //SELECCIONAMOS TODOS LOS BOTONES DE LOS DIVS EN LOS ARTICULOS FILTRADOS
  const contadorArticulos = document.querySelectorAll(
    "#btnAgregar"
  );

  //BUG: CUENTA DE MÁS LOS ARTICULOS Y LOS REPITE
  //AUN EN ELABORACION!!!!
  let contadorCarrito = 1;
  let contadorArticulosArray = 0;
  contadorArticulos.forEach((itms) => {
    itms.addEventListener("click", (e) => {
      agregarCarrito(itms)
      contadorArticulosArray++;
    });
  });
  const arrays = [];
  function agregarCarrito(itms) {
    //ARTICULO SELECCIONADO
    itms.classList.add("seleccionado");
    const tablaArticulos = document.querySelector("#tabla-articulos")
    tablaArticulos.innerHTML = `
    <tr>
      <td>Articulo</td>
      <td>Nombre</td>
      <td>Descripción</td>
      <td>Unidades</td>
      <td>Precio Total</td>
    </tr>
    `;
    const precioAcumulado = document.querySelector("#pTotal")
    //GUARDANDO LOS ARTICULOS EN UN ARREGLO
    const articuloSeleccionado = itms.parentNode;
    articuloSeleccionado.classList.add("seleccionado")
    const imagenArticulo = articuloSeleccionado.childNodes[0].src;
    const nombreArticulo = articuloSeleccionado.childNodes[1].textContent;
    const precioArticulo = articuloSeleccionado.childNodes[2].textContent;
    const descripcionArticulo = articuloSeleccionado.childNodes[3].textContent;

    let datos = {
      imagen: imagenArticulo,
      nombre: nombreArticulo,
      precio: precioArticulo,
      description: descripcionArticulo,
    };
    arrays.push(JSON.stringify(datos));
    console.log(arrays);
    
    const unicos = [... new Set(arrays)]
    console.log(unicos)
    let contadorr = 0;

    unicos.forEach(e =>{  
      const data = JSON.parse(e)   
      const tr = document.createElement("tr")
      //
      const td1 = document.createElement("td")     
      const img = document.createElement("img")
      img.src = data.imagen
      img.style.width = "100px"
      td1.appendChild(img)
      //
      const td2 = document.createElement("td")
      td2.textContent = data.nombre
      //
      const td3 = document.createElement("td")
      td3.textContent = data.description
      //
      const td4 = document.createElement("td")
      td4.innerHTML = `<button class="agregar"><span class="material-symbols-outlined">
      add
      </span></button>
      <button class="restar"><span class="material-symbols-outlined">
      remove
      </span></button>`
      //
      const td5 = document.createElement("td")
      td5.textContent = `$${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.precio)}`
      //
      tablaArticulos.appendChild(tr)
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)
      tr.appendChild(td5)
      
      contadorr += parseInt(data.precio);
      let moneda = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(contadorr);
      precioAcumulado.textContent = `$${moneda}`
    })

  }

  function agregarItem(){
    
  }
});
 