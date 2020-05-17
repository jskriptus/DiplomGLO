const carousel = () => {
    const servicesSlider = document.querySelector('.services-slider');
    const slides = servicesSlider.querySelectorAll('.slide')
    const next = servicesSlider.querySelector('.next');
    const prev = servicesSlider.querySelector('.prev');

    let currentSlide = 0;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    }

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    }

    const activeSlides = (max) => {
        slides.forEach((item, index) => {
            if (index < max) {
                item.classList.add('active');
            }
        })
    }

    activeSlides(5)


};

export default carousel;