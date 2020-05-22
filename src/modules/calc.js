const calc = () => {
    const time = document.querySelectorAll('.time > input'),
        promocode = document.querySelector('input[placeholder="Промокод"]'),
        price = document.querySelector('#price-total');

    let discount = 1;
    let months = '1';

    time.forEach(item => {
        item.addEventListener('click', () => {
            const target = event.target;
            months = target.value;
            renderPrice();
        });
    });

    const renderPrice = () => {
        const prices = {
            1: 2999,
            6: 9900,
            9: 13900,
            12: 19900
        };

        price.textContent = Math.floor(prices[months] * discount);
    };

    if (time && promocode && price) {
        promocode.addEventListener('change', () => {
            const target = event.target;

            if (target.value === 'ТЕЛО2019') {
                discount = 0.70;
                renderPrice();
            } else {
                discount = 1;
                renderPrice();
            }
        });
        renderPrice();
    }
};

export default calc;