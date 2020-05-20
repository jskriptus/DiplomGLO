'use strict';

import toggle from "./modules/toggle";
import mainSlider from "./modules/mainSlider";
import sendForm from "./modules/sendForm";
import carousel from "./modules/carousel";
import calc from "./modules/calc";
import gallery from "./modules/gallery";
import totop from "./modules/totop";
import topMenu from "./modules/topMenu";
import validationFields from "./modules/validationFields";

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
// Калькулятор
calc();
// галерея
gallery();
// Стрелка которая  возвращает вверх страницы 
totop();
// top menu
topMenu();
// Валидация форм
validationFields();