let startSlide = 0, numOfSlides = 4;

function updateActiveDot() {
    const blackDots = document.querySelectorAll('.black-dot');
    blackDots.forEach((dot, index) => {
        dot.src = index === Math.floor(startSlide / numOfSlides) ? './static/images/red-dot.png' : './static/images/black-dot.png';
    });
}

function updateSlidesDisplay() {
    const slides = document.querySelectorAll('.image-item');
    slides.forEach((slide, index) => {
        slide.style.display = (index >= startSlide && index < startSlide + numOfSlides) ? 'block' : 'none';
    });
}

function slideRight() {
    const slides = document.querySelectorAll('.image-item');
    startSlide = (startSlide + numOfSlides) % slides.length;
    updateSlidesDisplay();
    updateActiveDot();
}

function slideLeft() {
    const slides = document.querySelectorAll('.image-item');
    startSlide = (startSlide - numOfSlides + slides.length) % slides.length;
    updateSlidesDisplay();
    updateActiveDot();
}

const leftSlider = document.getElementById("slider-move-left");
const rightSlider = document.getElementById("slider-move-right");

leftSlider.addEventListener('click', slideLeft);
rightSlider.addEventListener('click', slideRight);

updateActiveDot();//initial dot