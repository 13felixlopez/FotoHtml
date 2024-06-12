let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    slides[slideIndex].classList.add('active');

    // Center the active slide
    const slidesContainer = document.querySelector('.slides');
    const slideWidth = slides[0].offsetWidth + 20; // width + margin
    slidesContainer.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= document.querySelectorAll('.slides img').length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slides img').length - 1;
    }
    showSlides(slideIndex);
}

setInterval(() => changeSlide(1), 3000); // Cambia de imagen automáticamente cada 3 segundos
