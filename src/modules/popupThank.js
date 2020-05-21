const popupThank = () => {
    const thanks = document.querySelector("#thanks");

    thanks.style.display = 'block';
    
    thanks.addEventListener('click', () => {
        const target = event.target;
        if (target.matches('.close_icon') || target.closest('.overlay') || target.classList.value === 'btn close-btn') {
            thanks.style.display = 'none';
        } 
    })
};

export default popupThank;