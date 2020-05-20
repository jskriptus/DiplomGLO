const topMenu = () => {
    const hiddenSmall =  document.querySelector('.hidden-small');
    const hiddenLarge = document.querySelector('.hidden-large');

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 768) {
            hiddenSmall.style.display = 'none';
            hiddenLarge.style.display = 'block';
        } else {
            hiddenSmall.style.display = 'flex';
            hiddenLarge.style.display = 'none';
        }
    })
    
};

export default topMenu;