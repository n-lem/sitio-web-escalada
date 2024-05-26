// Seleccionar el formulario
const formularioContacto = document.getElementById('formulario-contacto');

// Agregar evento de envío del formulario
formularioContacto.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Validar campos obligatorios
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const asunto = document.getElementById('asunto').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  // Validar campos vacíos
  if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
    alert('Por favor, complete todos los campos obligatorios.');
    return;
  }

  // Validar formato de correo electrónico
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  // El formulario es válido, puedes enviar los datos aquí
  console.log('Formulario enviado correctamente');
  formularioContacto.reset(); // Restablecer el formulario después del envío
});