const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

// Mostrar la primera imagen al cargar la página
showSlide();

// Cambiar al siguiente slide cada 3 segundos
setInterval(nextSlide, 3000);
