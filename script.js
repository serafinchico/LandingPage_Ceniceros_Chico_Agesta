// ===== FORMULARIO =====

function abrirFormulario() {
  const overlay = document.getElementById("registro");
  overlay.classList.remove("oculto");
  document.getElementById("paso-formulario").classList.remove("oculto");
  document.getElementById("paso-confirmacion").classList.add("oculto");
  document.body.style.overflow = "hidden";
}

function cerrarFormulario() {
  const overlay = document.getElementById("registro");
  overlay.classList.add("oculto");
  document.body.style.overflow = "";
  document.getElementById("form-registro").reset();
  document.getElementById("paso-formulario").classList.remove("oculto");
  document.getElementById("paso-confirmacion").classList.add("oculto");
}

// cerrar al clickear afuera
document.getElementById("registro").addEventListener("click", function(e) {
  if (e.target === this) {
    cerrarFormulario();
  }
});

// submit del formulario
document.getElementById("form-registro").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  document.getElementById("gracias-nombre").innerText = "¡Gracias " + nombre + "!";
  document.getElementById("paso-formulario").classList.add("oculto");
  document.getElementById("paso-confirmacion").classList.remove("oculto");
});

// ===== ANIMACIONES =====
const elementos = document.querySelectorAll(".animado");

function mostrar() {
  elementos.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", mostrar);
mostrar();

// ===== CARRUSEL ARRASTRABLE (DEPORTES) =====
const carruselDeportes = document.getElementById('carrusel-deportes');
let isDown = false;
let startX;
let scrollLeft;

if (carruselDeportes) {
  carruselDeportes.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carruselDeportes.offsetLeft;
    scrollLeft = carruselDeportes.scrollLeft;
  });

  carruselDeportes.addEventListener('mouseleave', () => {
    isDown = false;
  });

  carruselDeportes.addEventListener('mouseup', () => {
    isDown = false;
  });

  carruselDeportes.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carruselDeportes.offsetLeft;
    const walk = (x - startX) * 2; 
    carruselDeportes.scrollLeft = scrollLeft - walk;
  });
}