function agregarCarrito(nombre, precio, imagen) {
    // obtenemos el ultimo usuario registrado o que inicio sesión que por defecto es el actual con sus datos
    let usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

    //creamos un arreglo vacio temporal que almacenara todos los productos del usuario actual
    let carrito=[];
    
    // si nuestro usuario atual existe entonces obtenemos el arreglo de carrito, concatenado al correo
    // unico de cada usuario para crear un arreglo de carrito unico para cada usuario
    if (usuarioActivo) {
        carrito = JSON.parse(localStorage.getItem(`carrito_${usuarioActivo.correo}`)) || [];
    } else if(!usuarioActivo) {
        alert("Debes iniciar sesión para agregar productos al carrito");
        return;
    }

    // la funcion .find recorrera todo el arreglo de carrito y verificara si ya se agregó un producto
    // al carrito por medio del nombre, si el producto ya esta en el carrito entonces simplemente
    // aumentamos la cantidad, en caso contrario agregamos el producto al arreglo temporal del carrito
    const productoExistente = carrito.find(p => p.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            nombre,
            precio,
            imagen,
            cantidad: 1
        });
    }

    // almacenamos nuestro arreglo en localStorage 
    localStorage.setItem(`carrito_${usuarioActivo.correo}`, JSON.stringify(carrito));

    mostrarCarrito();
}

function mostrarCarrito() {

    // obtenemos nuestro usuario actual 
    let usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

    // obtenemos su arreglo de carrito 
    let carrito = JSON.parse(localStorage.getItem(`carrito_${usuarioActivo.correo}`)) || [];

    const lista = document.getElementById('contenedorCarrito');
    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        lista.innerHTML += ` 
        <div class="card position-relative w-100 my-2 h-100 border-0 shadow-sm product-card d-flex flex-row " style="width: 18rem;">
                <img src="${item.imagen}" class="card-img-top" style="height:150px; object-fit: contain;" alt="...">
                <div class="card-body w-100 text-center">
                    <h5 class="card-title fw-bold">${item.nombre.substring(0, 15)}</h5>
                    <p class="card-text text-muted">$ ${item.precio}</p>
                    <h6 class="card-title fw-bold">Cantidad: </h6>
                    <div class="d-flex align-items-center justify-content-center gap-2">
                        <button class="btn btn-dark rounded-0" type="button"  onclick="quitarItems(${index});">-</button>
                        <p class="card-text text-muted my-0" id="cantidadItems">${item.cantidad}</p>
                        <button class="btn btn-dark rounded-0" type="button" onclick="agregarItems(${index});">+</button>
                    </div>
                </div>
                <button class="btn position-absolute top-0 end-0 m-2" type="button" onclick="eliminarProducto(${index});">
                    <i class="bi bi-trash3-fill text-black"></i>
                </button>
                

          </div>`
        totalCantidad = item.cantidad * item.precio
        total += totalCantidad;
    });
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}


// esta funcion se ejecuta cuando el usuario da click en el boton de + para aumentar la cantidad de los productos
// para ello utilizamos el indice del producto para poder actualizar la cantidad
function agregarItems(index) {
    // siempre debemos acceder al usuario actual para poder obtener su respectivo arreglo de carrito
    let usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
    let carrito = JSON.parse(localStorage.getItem(`carrito_${usuarioActivo.correo}`)) || [];
    carrito[index].cantidad++;
    localStorage.setItem(`carrito_${usuarioActivo.correo}`, JSON.stringify(carrito));
    mostrarCarrito();
}

function quitarItems(index) {
    let usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
    let carrito = JSON.parse(localStorage.getItem(`carrito_${usuarioActivo.correo}`)) || [];
    carrito[index].cantidad--;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    localStorage.setItem(`carrito_${usuarioActivo.correo}`, JSON.stringify(carrito));
    mostrarCarrito();
}

function eliminarProducto(index) {
    let usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
    let carrito = JSON.parse(localStorage.getItem(`carrito_${usuarioActivo.correo}`)) || [];
    // se utiliza para eliminar un elemento del arreglo, se especifica su indice
    // el segundo parametro hace referencia a cuántos elementos se quieren eliminar 
    carrito.splice(index, 1);
    localStorage.setItem(`carrito_${usuarioActivo.correo}`, JSON.stringify(carrito));
    mostrarCarrito();
}

if (usuarioActivo && usuarioActivo.correo) {
    mostrarCarrito();
}