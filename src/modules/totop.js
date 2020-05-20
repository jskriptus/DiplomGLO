const totop = () => {
    const totopBtn = document.querySelector('#totop');
    const headerMain = document.querySelector('.header-main');
    
    window.addEventListener('scroll', () => {
        if (pageYOffset >= headerMain.clientHeight) {
            totopBtn.style.display = 'block';
        } else {
            totopBtn.style.display = 'none';
        }
    });
};

export default totop;