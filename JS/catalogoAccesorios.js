//Cargar datos de la ropa
async function cargarRelojesH() {
    const res = await fetch('https://dummyjson.com/products/category/mens-watches');
    const data = await res.json();

    mostrarRelojesH(data.products);
}

function mostrarRelojesH(relojH) {
    const contenedor = document.getElementById('contenedorRH');
    let datos = "";
    relojH.forEach(rh => {
        datos += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${rh.images[0]}" class="card-img-top" alt="..." style="height:150px; object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${rh.title.substring(0, 15)}</h5>
                    <p class="card-text">$${rh.price}</p>
                    <a href="#" class="btn btn-dark btnCarrito">Agregar a carrito</a>
                    <button class="btnFavorito" type="button">
                    <i class="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>`;
    });

    contenedor.innerHTML = datos;
}

async function cargarRelojesM() {
    const re = await fetch('https://dummyjson.com/products/category/womens-watches');
    const dat = await re.json();

    mostrarRelojesM(dat.products);
}

function mostrarRelojesM(relojM) {
    const cont = document.getElementById('contenedorRM');
    let info = "";
    relojM.forEach(rm => {
        info += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${rm.images[0]}" class="card-img-top" alt="..." style="height:150px; object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${rm.title.substring(0, 15)}</h5>
                    <p class="card-text">$${rm.price}</p>
                    <a href="#" class="btn btn-dark btnCarrito">Agregar a carrito</a>
                    <button class="btnFavorito" type="button">
                    <i class="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>`;
    });

    cont.innerHTML = info;
}

async function cargarGafas() {
    const r = await fetch('https://dummyjson.com/products/category/sunglasses');
    const d = await r.json();

    mostrarGafas(d.products);
}

function mostrarGafas(gafas) {
    const caja = document.getElementById('contenedorGafas');
    let dat = "";
    gafas.forEach(gaf => {
        dat += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card" style="width: 18rem;">
                <img src="${gaf.images[0]}" class="card-img-top" alt="..." style="height:150px; object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${gaf.title.substring(0, 15)}</h5>
                    <p class="card-text">$${gaf.price}</p>
                    <a href="#" class="btn btn-dark btnCarrito">Agregar a carrito</a>
                    <button class="btnFavorito" type="button">
                    <i class="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    });

    caja.innerHTML = dat;
}

async function cargarJoyas() {
    const r2 = await fetch('https://dummyjson.com/products/category/womens-jewellery');
    const d2 = await r2.json();

    mostrarJoyas(d2.products);
}

function mostrarJoyas(joyas) {
    const caja2 = document.getElementById('contenedorJoyeria');
    let d = "";
    joyas.forEach(joy => {
        d += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card border-0 shadow-sm" style="width: 18rem;">
                <img src="${joy.images[1]}" class="card-img-top" alt="..." style="height:150px; object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${joy.title.substring(0, 15)}</h5>
                    <p class="card-text">$${joy.price}</p>
                    <a href="#" class="btn btn-dark btnCarrito">Agregar a carrito</a>
                    <button class="btnFavorito" type="button">
                    <i class="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    });

    caja2.innerHTML = d;
}

cargarRelojesH();
cargarRelojesM();
cargarGafas();
cargarJoyas();