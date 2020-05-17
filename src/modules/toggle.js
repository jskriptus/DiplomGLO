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

            if (target.matches('.close_icon') || target.closest('.overlay') || target.classList.value === 'btn close-btn') {
                myForm.style.display = 'none';
            }
        }
    };

    if (openBtn && myForm) {
        openBtn.addEventListener('click', showOrClose);
        myForm.addEventListener('click', showOrClose);
    } else {
        return;
    }
};

export default toggle;