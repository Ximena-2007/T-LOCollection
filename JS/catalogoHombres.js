//Cargar datos de la ropa
async function cargarCamisas() {
    const res = await fetch('https://dummyjson.com/products/category/mens-shirts');
    const data = await res.json();

    mostrarCamisas(data.products);
}

function mostrarCamisas(camisas) {
    const contenedor = document.getElementById('contenedorCamisas');
    let datos = "";
    camisas.forEach(cam => {
        datos += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${cam.images[0]}" class="card-img-top" alt="..." style="height:150px; object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${cam.title.substring(0, 15)}</h5>
                    <p class="card-text">$${cam.price}</p>
                    <a href="#" class="btn btn-dark" onclick="agregarCarrito('${cam.title}',${cam.price},'${cam.images[0]}')">Agregar a carrito</a>
                    <button onclick="agregarFavorito('${cam.title}',${cam.price},'${cam.images[0]}')" type="button">
                    <i class="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>`;
    });

    contenedor.innerHTML = datos;
}

async function cargarZapatos() {
    const re = await fetch('https://dummyjson.com/products/category/mens-shoes');
    const dat = await re.json();

    mostrarZapatos(dat.products);
}

function mostrarZapatos(zapatos) {
    const cont = document.getElementById('contenedorZapatos');
    let info = "";
    zapatos.forEach(zap => {
        info += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${zap.images[0]}" class="card-img-top" alt="..." style="height:150px; object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${zap.title.substring(0, 15)}</h5>
                    <p class="card-text">$${zap.price}</p>
                     <a href="#" class="btn btn-dark" onclick="agregarCarrito('${zap.title}',${zap.price},'${zap.images[0]}')">Agregar a carrito</a>
                    <button onclick="agregarFavorito('${zap.title}',${zap.price},'${zap.images[0]}')" type="button">
                    <i class="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>`;
    });

    cont.innerHTML = info;
}

cargarCamisas();
cargarZapatos();
