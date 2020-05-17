'use strict';

import toggle from "./modules/toggle";
import mainSlider from "./modules/mainSlider";
import sendForm from "./modules/sendForm";
import carousel from "./modules/carousel";


// При клике на кнопку “Выбрать клуб” открывает выпадающее меню
toggle('.club-select', '.clubs');
// При клике на надпись "Записаться на бесплатный визит" открывает модальное окно
toggle('.open-popup', '#free_visit_form');
// При клике на кнопку “Перезвоните мне” открывает модальное окно
toggle('.callback-btn', '#callback_form');
// При клике на "подарок" открывается модальное окно, а сам подарок полностью исчезает со страницы
toggle('.fixed-gift', '#gift');
// Автопрокрутка слайдов .main-slider через каждые 5 секунд
mainSlider(5000);
// Слайдер карусель услуг
carousel();
// Отправка форм
sendForm();