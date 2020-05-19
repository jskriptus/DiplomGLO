const calc = () => {
    const time = document.querySelectorAll('.time > input'),
        promocode = document.querySelector('input[placeholder="Промокод"]'),
        price = document.querySelector('#price-total');

    if (time && promocode && price) {
        let totalPrice = 0;

        time.forEach(item => {
            if (item.hasAttribute('checked')) {
                totalPrice = 2999;
                price.textContent = totalPrice;
            }
            item.addEventListener('click', () => {
                const target = event.target;

                if (target.value === '1') {
                    totalPrice = 2999;
                    price.textContent = totalPrice;
                } else if (target.value === '6') {
                    totalPrice = 9900;
                    price.textContent = totalPrice;
                } else if (target.value === '9') {
                    totalPrice = 13900;
                    price.textContent = totalPrice;
                } else if (target.value === '12') {
                    totalPrice = 19900;
                    price.textContent = totalPrice;
                }
            })
        })

        promocode.addEventListener('input', () => {
            const target = event.target;
            if (target.value === 'ТЕЛО2019') {
                price.textContent = Math.floor(totalPrice - (totalPrice * 30 / 100));
            }
        })
    }
}

export default calc;