const sendForm = () => {
    // Сообщения которые уведомляют пользователя
    const errorMessage = 'Ошибка отправки формы..',
        loadMessage = 'Идет отправка данных..',
        succesMessage = 'Круто! Мы скоро с вами свяжемся!';

    // Создаем элемент который будем добавлять на страницу
    const statusMessage = document.createElement('div');
    // Присваиваем этому элементу размер текста и цвет
    statusMessage.style.cssText = 'font-size: 1.5rem; color: white;';

    const processesForm = (event) => {
        const target = event.target;

        if (target.closest('form')) {
            // Убираем стандартное поведение браузера (перезагрузку страницы после нажатия кнопки "Отправить")
            event.preventDefault();
            // Добавляем ранее созданный элемент на страницу после формы
            target.insertAdjacentElement('beforebegin', statusMessage);
            // Добавляем сообщение на страницу уведомляющее пользователя о начале загрузки его данных
            statusMessage.textContent = loadMessage;
            // Создаем обьект formdata который записывает все введенные данные из формы (из тех инпутов которые содержат атрибут name)
            const formData = new FormData(target);
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
                    target.textContent = '';
                })
                .catch((error) => {
                    statusMessage.style.cssText = 'font-size: 1.5rem;color: red;';
                    statusMessage.textContent = errorMessage;
                    target.textContent = '';

                    console.error(error);
                });
        } else {
            return;
        }

    };

    const postData = (body) => {
        return fetch("/server.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(body),
        });
    };

    window.addEventListener('submit', (event) => {
        processesForm(event);
    });
};

export default sendForm;