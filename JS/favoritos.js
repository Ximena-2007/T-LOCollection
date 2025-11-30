// obtenemos el usuario actual con sus respectivos datos
let usuarioActivo=JSON.parse(localStorage.getItem("usuarioActivo"));

// en el cuerpo del html de favoritos pusimos un span que va a mostrar el nombre del usuario
// ese span tiene un id=nombreUsuario, lo que hago es comprar si existe tal elemento 
// para evitar errores al momento de ejecutar el archivo
const nombreUsuarioElem=document.getElementById('nombreUsuario');
if (nombreUsuarioElem) {
    if (usuarioActivo) {
        // si hay usuario, mostramos su nombre
        nombreUsuarioElem.innerHTML = usuarioActivo.nombre;
    } else {
        // si no hay usuario
        nombreUsuarioElem.innerHTML = "Invitado";
    }
}

function agregarFavorito(nombre, precio, imagen) {
    // creamos nuestro arreglo temporal que almacenara los productos favoritos
    let favoritos=[];
    // evaluamos si el usuario actual existe para poder obtener su respectivo arreglo de productos favoritos
    // de nuevo, para crear areglos unicos para cada usario concatenamos su correo
    if (usuarioActivo) {
        favoritos=JSON.parse(localStorage.getItem(`favoritos_${usuarioActivo.correo}`)) || [];

    }else if (!usuarioActivo) {
        alert("Debes iniciar sesión para agregar productos a favoritos");
        return;
    }
    // evaluamos si ya se habia seleccionado como favorito un producto para no volverlo a agrgar
    // en el caso contrario se agrega al arreglo de favoritos
    const productoExistente=favoritos.find(p => p.nombre === nombre);
    if (productoExistente) {
        return;
    } else {
        favoritos.push({
            nombre,
            precio,
            imagen
        });
    }

    // y lo convertimos a formato JSON
    localStorage.setItem(`favoritos_${usuarioActivo.correo}`, JSON.stringify(favoritos));

    mostrarFavoritos();
}

function mostrarFavoritos() {
    // obtenemos el arreglo de favoritos del usuario actual 
    let favoritos = JSON.parse(localStorage.getItem(`favoritos_${usuarioActivo.correo}`)) || [];
    const lista = document.getElementById('contenedorFavoritos');

    let contenido = "";

    favoritos.forEach((item, index) => {
        contenido += ` 
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card position-relative" style="width: 18rem;">
                <img src="${item.imagen}" class="card-img-top" alt="..." style="height:150px; object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre.substring(0, 15)}</h5>
                    <p class="card-text">$${item.precio}</p>
                    <a href="#" class="btn btn-dark" onclick="agregarCarrito('${item.nombre}',${item.precio},'${item.imagen}')">Agregar a carrito</a>
                    <button class="btn position-absolute top-0 end-0 m-2" type="button" onclick="quitarFav(${index})">
                        <i class="bi bi-heart-fill"></i>
                    </button>        
                </div>
            </div>
        </div>`;
    });

    lista.innerHTML = contenido;

}

// para quitar un producto del arreglo de favoritos usamos la funcion splice
function quitarFav(index) {
    let favoritos = JSON.parse(localStorage.getItem(`favoritos_${usuarioActivo.correo}`)) || [];
    favoritos.splice(index, 1);
    localStorage.setItem(`favoritos_${usuarioActivo.correo}`, JSON.stringify(favoritos));
    mostrarFavoritos();
}


if (usuarioActivo) {
    mostrarFavoritos();
}