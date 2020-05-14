const toggle = (btn, form) => {
    const openBtn = document.querySelector(btn);
    const myForm = document.querySelector(form);

    const showOrClose = () => {
        const target = event.target;

        if (target.closest('.club-select')) {
            if (myForm.style.display === '' || myForm.style.display === 'none') {
                myForm.style.display = 'block';
            } else {
                myForm.style.display = 'none';
            }
        } else {
            myForm.style.display = 'block';

            if (target.closest('.fixed-gift')) {
                openBtn.style.display = 'none';
            }

            if (target.matches('.close_icon') || target.closest('.overlay')) {
                myForm.style.display = 'none';
            }
        }

    }

    openBtn.addEventListener('click', showOrClose)
    myForm.addEventListener('click', showOrClose)
}

export default toggle;