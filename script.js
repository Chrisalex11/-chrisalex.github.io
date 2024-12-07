let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 5000); // Slide changes every 5 seconds

showSlide(slideIndex);
