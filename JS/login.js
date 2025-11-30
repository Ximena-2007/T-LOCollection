document.getElementById('btnLogin').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('contraseña').value;

  if (!email || !password) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(u => u.correo === email);

  if (!usuario) {
    alert('Cuenta no existe');
    return;
  }

  if (usuario.password !== password) {
    alert('Contraseña incorrecta');
    return;
  }

  alert('Login exitoso');
  localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
  window.location.href = "index.html";
});