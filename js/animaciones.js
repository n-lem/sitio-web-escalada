// Animación de desplazamiento suave al hacer clic en enlaces internos
const Enlaces = document.querySelectorAll('a[href^="#"]');

Enlaces.forEach(enlace => {
  enlace.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animación de desvanecimiento para las imágenes de la sección "Equipo"
const imagenesEquipo = document.querySelectorAll('.miembro-equipo img');

imagenesEquipo.forEach(imagen => {
  imagen.style.opacity = 0;
  window.addEventListener('load', () => {
    imagen.style.transition = 'opacity 1s ease-in-out';
    imagen.style.opacity = 1;
  });
});

const btnIrArriba = document.querySelector('.btn-ir-arriba');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    btnIrArriba.classList.add('visible');
  } else {
    btnIrArriba.classList.remove('visible');
  }
});

btnIrArriba.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
