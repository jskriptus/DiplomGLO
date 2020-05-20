import maskPhone from "./maskPhone";

const validationFields = () => {
    // валидация ввода имен
    window.addEventListener('input', () => {
        const target = event.target;
        if (target.matches('input[placeholder="Ваше имя..."]')) {
            target.value = target.value.replace(/[^а-яё]/gi, '');
        }
    });
    // маска и валидация номера телефона 
    const telephones = document.querySelectorAll('input[name="phone"]');
    telephones.forEach((tel) => {
        maskPhone(`#${tel.id}`);
    });
};

export default validationFields;