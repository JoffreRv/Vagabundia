// Aquí puedes añadir funcionalidades en JavaScript
console.log("Script cargado correctamente.");
const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});
document.querySelectorAll('.destino').forEach(destino => {
    destino.addEventListener('click', () => {
        alert(`Has seleccionado: ${destino.querySelector('h4').innerText}`);
    });
});
document.querySelectorAll('.carrusel').forEach(carrusel => {
    const container = carrusel.querySelector('.carrusel-container');
    const prev = carrusel.querySelector('.prev');
    const next = carrusel.querySelector('.next');

    prev.addEventListener('click', () => {
        container.scrollBy({ left: -300, behavior: 'smooth' });
    });

    next.addEventListener('click', () => {
        container.scrollBy({ left: 300, behavior: 'smooth' });
    });
});
document.querySelector('form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
        alert('Por favor, complete todos los campos.');
        event.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Por favor, introduzca un email válido.');
        event.preventDefault();
    }
});
function initMap() {
    const ubicacion = { lat: -1.831239, lng: -78.183406 }; 
    const map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 8,
        center: ubicacion,
    });
    const marker = new google.maps.Marker({
        position: ubicacion,
        map: map, 
    });
}
// Inicializar el carrusel cuando el documento esté listo
document.addEventListener("DOMContentLoaded", function () {
    const casel = document.querySelector('#header-casel');
    if (casel) {
        $(casel).casel({
            interval: 5000, 
            pause: 'hover' 
        });
    }
});

