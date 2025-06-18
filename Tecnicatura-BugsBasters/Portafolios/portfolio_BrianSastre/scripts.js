// Animación fade-in simple para todas las secciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("visible");
    });
});

// Selecciona el botón de menú hamburguesa
const navToggle = document.getElementById('nav-toggle'); // Botón de menú
// Selecciona el menú de navegación
const navMenu = document.getElementById('nav-menu'); // Menú de navegación

// Evento para mostrar/ocultar el menú en dispositivos móviles
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
  navToggle.classList.toggle('active'); // Alterna la animación del botón hamburguesa
});

// Cierra el menú al hacer clic en un enlace del menú (en móvil)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active'); // Oculta el menú
    navToggle.classList.remove('active'); // Quita la animación del botón
  });
});

// Validación simple del formulario de contacto
const contactForm = document.querySelector('.contact-form'); // Selecciona el formulario de contacto
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el envío por defecto
    // Muestra un mensaje de éxito (puedes personalizar esto)
    alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
    contactForm.reset(); // Limpia el formulario
  });
} 