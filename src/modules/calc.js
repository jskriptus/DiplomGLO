const calc = () => {
    const time = document.querySelectorAll('.time > input'),
        promocode = document.querySelector('input[placeholder="Промокод"]'),
        price = document.querySelector('#price-total');

    let discount = 1;

    const addPrice = () => {

        let totalPrice = 0;
        time.forEach(item => {
            if (item.hasAttribute('checked')) {
                totalPrice = Math.floor(2999 * discount);
                price.textContent = totalPrice;
            }
            item.addEventListener('click', () => {
                const target = event.target;

                if (target.value === '1') {
                    totalPrice = Math.floor(2999 * discount);
                    price.textContent = totalPrice;
                } else if (target.value === '6') {
                    totalPrice = Math.floor(9900 * discount);
                    price.textContent = totalPrice;
                } else if (target.value === '9') {
                    totalPrice = Math.floor(13900 * discount);
                    price.textContent = totalPrice;
                } else if (target.value === '12') {
                    totalPrice = Math.floor(19900 * discount);
                    price.textContent = totalPrice;
                }
            })
        })

    }

    if (time && promocode && price) {
        addPrice();

        promocode.addEventListener('input', () => {
            const target = event.target;
            if (target.value === 'ТЕЛО2019') {
                discount = 0.70;
                addPrice();
            }

        })
    }
}

export default calc;