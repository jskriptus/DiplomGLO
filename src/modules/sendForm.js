import popupThank from "./popupThank";

const sendForm = () => {
    const formContentHeader = document.querySelector('.form-content > h4');
    const formContent = document.querySelector('.form-content > p');
    const forms = document.querySelectorAll('form');

    // Сообщения которые уведомляют пользователя
    const errorMessage = 'Ошибка отправки формы..',
        loadMessage = 'Идет отправка данных..',
        succesMessage = 'Круто! Мы скоро с вами свяжемся!';

    const showMessage = (message, color, type) => {
        formContentHeader.textContent = type;
        formContent.style.cssText = `font-size: 1.5rem;color:${color}`;
        formContent.textContent = message;
    };

    forms.forEach(form => {

        const postData = (body) => {
            return fetch("/server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(body),
            });
        };

        form.addEventListener('submit', () => {
            event.preventDefault();

            const checkbox = [...event.target.elements].filter((item) => item.type === 'checkbox');
            if (checkbox) {
                if (!checkbox[0].checked) {
                    popupThank();
                    showMessage('Согласитесь на обработку своих персональных данных', 'orange', 'Внимание!');
                    return;
                }
            }

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

                    popupThank();
                    showMessage(succesMessage, 'green', 'Спасибо!');
                    form.reset();
                })
                .catch((error) => {
                    formContent.textContent = errorMessage;
                    popupThank();
                    showMessage(errorMessage, 'red', 'Ошибка!');
                    form.reset();
                    console.error(error);
                });
        });
    });




};

export default sendForm;