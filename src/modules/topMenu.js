const topMenu = () => {
    const topMenu = document.querySelector('.top-menu');
    const hiddenSmall = document.querySelector('.hidden-small');
    const burgerMenu = document.querySelector('.menu-button');
    const popupMenu = document.querySelector('.popup-menu');

    if (document.documentElement.clientWidth < 768) {
        hiddenSmall.style.display = 'none';
        burgerMenu.style.display = 'block';
    }

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > topMenu.offsetTop) {
            topMenu.classList.add('menu-fix');
            return;
        } else {
            topMenu.classList.remove('menu-fix');
            return;
        }
    });

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 768) {
            hiddenSmall.style.display = 'none';
            burgerMenu.style.display = 'block';
            return;
        } else {
            hiddenSmall.style.display = 'flex';
            burgerMenu.style.display = 'none';
            return;
        }
    });

    burgerMenu.addEventListener('click', () => {
        const target = event.target;
        if (target.matches('img')) {
            popupMenu.style.display = 'flex';
        } else {
            return;
        }
    });

    popupMenu.addEventListener('click', () => {
        const target = event.target;
        if (target.matches('img') || target.matches('a')) {
            popupMenu.style.display = "none";
        } else {
            return;
        }
    });

};

export default topMenu;