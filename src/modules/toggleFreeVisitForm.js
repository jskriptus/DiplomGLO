const toggleFreeVisitForm = () => {
    const openPopup = document.querySelector('.open-popup');
    const freeVisitForm = document.querySelector('#free_visit_form');

    openPopup.addEventListener('click', () => {
        freeVisitForm.style.display = 'block';
    })

    freeVisitForm.addEventListener('click', () => {
        const target = event.target;

        if (target.matches('.close_icon') || target.closest('.overlay')) {
            freeVisitForm.style.display = 'none';
        }
    })

};

export default toggleFreeVisitForm;