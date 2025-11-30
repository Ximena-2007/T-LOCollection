//Cargar datos de la ropa
async function cargarRopa() {
    const res = await fetch('https://dummyjson.com/products/category/womens-dresses');
    const data = await res.json();

    mostrarRopa(data.products);
}

function mostrarRopa(ropa) {
    const contenedor = document.getElementById('contenedorRopa');
    let datos = "";
    ropa.forEach(rop => {
        datos += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${rop.images[0]}" class="card-img-top" alt="..." style="height:150px; object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${rop.title.substring(0, 15)}</h5>
                    <p class="card-text">$${rop.price}</p>
                    <a href="#" class="btn btn-dark" onclick="agregarCarrito('${rop.title}',${rop.price},'${rop.images[0]}')">Agregar a carrito</a>
                    <button onclick="agregarFavorito('${rop.title}',${rop.price},'${rop.images[0]}')" type="button">
                    <i class="bi bi-heart"></i>
                    </button>        
                </div>
            </div>
        </div>`;
    });

    contenedor.innerHTML = datos;
}

async function cargarBolsos() {
    const re = await fetch('https://dummyjson.com/products/category/womens-bags');
    const dat = await re.json();

    mostrarBolsos(dat.products);
}

function mostrarBolsos(bolsos) {
    const cont = document.getElementById('contenedorBolsa');
    let info = "";
    bolsos.forEach(bol => {
        info += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${bol.images[0]}" class="card-img-top" alt="..." style="height:150px; object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${bol.title.substring(0, 15)}</h5>
                    <p class="card-text">$${bol.price}</p>
                    <a href="#" class="btn btn-dark btnCarrito" onclick="agregarCarrito('${bol.title}',${bol.price},'${bol.images[0]}')">Agregar a carrito</a>
                    <button onclick="agregarFavorito('${bol.title}',${bol.price},'${bol.images[0]}')" type="button">
                    <i class="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>`;
    });

    cont.innerHTML = info;
}

async function cargarZapatos() {
    const r = await fetch('https://dummyjson.com/products/category/womens-shoes');
    const d = await r.json();

    mostrarZapatos(d.products);
}

function mostrarZapatos(zapatos) {
    const caja = document.getElementById('contenedorZapatos');
    let dat = "";
    zapatos.forEach(zap => {
        dat += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${zap.images[1]}" class="card-img-top" alt="..." style="height:150px; object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${zap.title.substring(0, 15)}</h5>
                    <p class="card-text">$${zap.price}</p>
                    <a href="#" class="btn btn-dark btnCarrito" onclick="agregarCarrito('${zap.title}',${zap.price},'${zap.images[1]}')">Agregar a carrito</a>
                    <button onclick="agregarFavorito('${zap.title}',${zap.price},'${zap.images[1]}')" type="button">
                    <i class="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    });

    caja.innerHTML = dat;
}

cargarRopa();
cargarBolsos();
cargarZapatos();