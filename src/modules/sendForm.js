import maskPhone from "./maskPhone";

const sendForm = () => {
    // Сообщения которые уведомляют пользователя
    const errorMessage = 'Ошибка отправки формы..',
        loadMessage = 'Идет отправка данных..',
        succesMessage = 'Круто! Мы скоро с вами свяжемся!';

    // Получаем формы
    const forms = document.querySelectorAll('form');
    // Создаем элемент который будем добавлять на страницу
    const statusMessage = document.createElement('div');
    // Присваиваем этому элементу размер текста и цвет
    statusMessage.style.cssText = 'font-size: 1.5rem; color: white;';
    // Вешаем обработчик события submit на формы
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            // Убираем стандартное поведение браузера (перезагрузку страницы после нажатия кнопки "Отправить")
            event.preventDefault();
            // Добавляем ранее созданный элемент на страницу после формы
            form.insertAdjacentElement('beforebegin', statusMessage);
            // Добавляем сообщение на страницу уведомляющее пользователя о начале загрузки его данных
            statusMessage.textContent = loadMessage;
            // Создаем обьект formdata который записывает все введенные данные из формы (из тех инпутов которые содержат атрибут name)
            const formData = new FormData(form);
            // Создаем переменную в которой хранится обьект
            const body = {};
            // Перебираем данные из обьекта formdata и записываем значения в вышесозданный обьект
            formData.forEach((item, key) => {
                body[key] = item;
            });

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error("status newtwork not 200");
                    }
                    statusMessage.style.cssText = 'font-size: 1.5rem;color: green;';
                    statusMessage.textContent = succesMessage;
                    form.textContent = '';
                })
                .catch((error) => {
                    statusMessage.style.cssText = 'font-size: 1.5rem;color: red;';
                    statusMessage.textContent = errorMessage;
                    form.textContent = '';

                    console.error(error);
                });

        });
    });

    const postData = (body) => {
        return fetch("/server.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(body),
        });
    };

    // маска и валидация номера телефона 
    const telephones = document.querySelectorAll('input[name="phone"]');
    telephones.forEach((tel) => {
        maskPhone(`#${tel.id}`);
    });

    // валидация ввода имен
    const nameInput = document.querySelectorAll('input[placeholder="Ваше имя..."]');
    nameInput.forEach(input => {
        input.addEventListener('input', () => {
            const target = event.target;
            target.value = target.value.replace(/[^а-яё]/gi, '');
        });
    });
};

export default sendForm;