class Usuario {
    constructor(nombre, apellido, correo, direccion, ciudad, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.password = password;
    }
}

document.getElementById('btnRegistro').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;
    const password = document.getElementById('password').value;

    if (!nombre || !apellido || !correo || !direccion || !ciudad || !password) {
        alert('Por favor completa todos los campos.');
        return;
    }

    const nuevoUsuario = new Usuario(nombre, apellido, correo, direccion, ciudad, password);
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let existeCorreo = false;
    usuarios.forEach(u => {
        if (u.correo === correo) {
            existeCorreo = true;
        }
    });
    if (!existeCorreo) {
        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('usuarioActivo', JSON.stringify(nuevoUsuario));
        alert('¡Registro exitoso!');
        document.getElementById('formRegistro').reset();
        window.location.href = "index.html";
    } else {
        alert('Este usuario ya ha sido registrado');
        return;
    }
});