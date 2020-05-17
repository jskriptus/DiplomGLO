const carousel = () => {
    const servicesSlider = document.querySelector('.services-slider-wrapper');
    const slides = servicesSlider.querySelectorAll('.slide');
    const servicesSliderBlock = document.querySelector('.services-slider-block')
    const next = servicesSliderBlock.querySelector('.next');
    const prev = servicesSliderBlock.querySelector('.prev');
    const sliderWidth = parseFloat(getComputedStyle(servicesSlider).width); // получаем ширину блока с слайдами 
    const slideWidth = parseFloat(getComputedStyle(slides[0]).width); // получаем ширину одного слайда

    let positionLeftItem = 0, // позиция левого слайда
        step = slideWidth / sliderWidth * 100,
        transform = 0,
        items = [];

    slides.forEach((item, index) => {
        items.push({
            item: item,
            position: index,
            transform: 0
        })
    })

    const position = {
        getItemMin: function () {
            var indexItem = 0;
            items.forEach(function (item, index) {
                if (item.position < items[indexItem].position) {
                    indexItem = index;
                }
            });
            return indexItem;
        },
        getItemMax: function () {
            var indexItem = 0;
            items.forEach(function (item, index) {
                if (item.position > items[indexItem].position) {
                    indexItem = index;
                }
            });
            return indexItem;
        },
        getMin: function () {
            return items[position.getItemMin()].position;
        },
        getMax: function () {
            return items[position.getItemMax()].position;
        }
    }

    const transformItem = (direction) => {
        let nextItem;
        if (direction === 'rigth') {
            positionLeftItem++;
            if ((positionLeftItem + sliderWidth / slideWidth - 1) > position.getMax()) {
                nextItem = position.getItemMin();
                items[nextItem].position = position.getMax() + 1;
                items[nextItem].transform += items.length * 100;
                items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
            }
            transform -= step;
        } else if (direction === 'left') {
            positionLeftItem--;
            if (positionLeftItem < position.getMin()) {
                nextItem = position.getItemMax();
                items[nextItem].position = position.getMin() - 1;
                items[nextItem].transform -= items.length * 100;
                items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
            }
            transform += step;
        }
        servicesSlider.style.transform = `translateX( ${transform}%`;
    }

    next.addEventListener('click', () => {
        transformItem('rigth');
    })

    prev.addEventListener('click', () => {
        transformItem('left');
    })

};

export default carousel;