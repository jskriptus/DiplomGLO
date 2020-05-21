import popupThank from "./popupThank";

const sendForm = () => {
    const formContentHeader = document.querySelector('.form-content > h4');
    const formContent = document.querySelector('.form-content > p');
    const forms = document.querySelectorAll('form');

    // Сообщения которые уведомляют пользователя
    const errorMessage = 'Ошибка отправки формы..',
        loadMessage = 'Идет отправка данных..',
        succesMessage = 'Круто! Мы скоро с вами свяжемся!';

    const showMessage = (form, message, color) => {
        formContentHeader.textContent = 'Внимание!'
        formContent.style.cssText = `font-size: 1.5rem;color:${color}`
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
                    showMessage(form, 'Согласитесь на обработку своих персональных данных', 'orange');
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
                    showMessage(form, succesMessage, 'green');
                    form.reset();
                })
                .catch((error) => {
                    formContentHeader.textContent = 'Ошибка!'
                    formContent.textContent = errorMessage;
                    popupThank();
                    showMessage(form, errorMessage, 'red')
                    form.reset();
                    console.error(error);
                });
        })
    })




};

export default sendForm;