const gallery = () => {
    const slider = document.querySelector('.gallery-slider'),
        slides = document.querySelectorAll('.gallery-slider > .slide'),
        sliderDots = document.querySelector('.slider-dots');

    let dots = document.querySelectorAll('.slider-dots > li'),
        currentSlide = 0,
        interval;

    // Добавляет точки управления слайдером для каждого слайда
    const addDots = () => {
        slides.forEach(() => {
            const dot = document.createElement('li');
            const button = document.createElement('button');

            sliderDots.insertAdjacentElement('afterbegin', dot);
            dot.insertAdjacentElement('afterbegin', button);
        })

        dots = document.querySelectorAll('.slider-dots > li');
        dots[0].classList.add('slick-active');
    };

    addDots();

    const prevSlide = (slide, index, strClass) => {
        slide[index].classList.remove(strClass)
    };

    const nextSlide = (slide, index, strClass) => {
        slide[index].classList.add(strClass)
    };

    

    slider.addEventListener('click', event => {
        event.preventDefault();

        const target = event.target;

        // Если нажаты не точки управления и не стрелки, то ничего не делаем
        if (!target.matches('button, span')) {
            return;
        }

        prevSlide(slides, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'slick-active');

        if (target.closest('.next')) {
            currentSlide++;
        } else if (target.closest('.prev')) {
            currentSlide--;
        } else if (target.matches('button')) {
            dots.forEach((item, index) => {
                if (item.contains(target)) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'slick-active');

    });

};

export default gallery;