const mainSlider = (time) => {
    const mainSlider = document.querySelector('.main-slider');
    const slides = mainSlider.querySelectorAll('.slide');

    let currentSlide = 0;

    const nextSlide = () => {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'flex';
    };

    setInterval(nextSlide, time);

};

export default mainSlider;