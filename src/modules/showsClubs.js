const showsClubs = () => {
    const clubSelect = document.querySelector('.club-select');
    const ulList = clubSelect.querySelector('ul');

    const toggleMenu = () => {
        const target = event.target;
        if (target.closest('.club-select')) {
            if (ulList.style.display === '' || ulList.style.display === 'none') {
                ulList.style.display = 'block';
            } else {
                ulList.style.display = 'none';
            }
        } 
    }

    clubSelect.addEventListener('click', toggleMenu);
};

export default showsClubs;