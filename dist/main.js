!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e,t){var n=document.querySelector(e),r=document.querySelector(t),o=function(){var e=event.target;e.closest(".club-select")?""===r.style.display||"none"===r.style.display?r.style.display="block":r.style.display="none":(r.style.display="block",e.closest(".fixed-gift")&&(n.style.display="none"),(e.matches(".close_icon")||e.closest(".overlay")||"btn close-btn"===e.classList.value)&&(r.style.display="none"))};n&&r&&(n.addEventListener("click",o),r.addEventListener("click",o))},o=function(e){var t=document.querySelector(".main-slider"),n=t.querySelectorAll(".slide"),r=0;setInterval((function(){n[r].style.display="none",r=(r+1)%n.length,n[r].style.display="flex"}),e)};function l(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,l=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function r(e){var n=e.keyCode,r=t,o=r.replace(/\D/g,""),l=this.value.replace(/\D/g,""),i=0,c=r.replace(/[_\d]/g,(function(e){return i<l.length?l.charAt(i++)||o.charAt(i):e}));-1!=(i=c.indexOf("_"))&&(c=c.slice(0,i));var a=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}var o,i=l(n);try{for(i.s();!(o=i.n()).done;){var c=o.value;c.addEventListener("input",r),c.addEventListener("focus",r),c.addEventListener("blur",r)}}catch(e){i.e(e)}finally{i.f()}},a=function(){var e=document.querySelectorAll("form"),t=document.createElement("div");t.style.cssText="font-size: 1.5rem; color: white;",e.forEach((function(e){e.addEventListener("submit",(function(r){r.preventDefault(),e.insertAdjacentElement("beforebegin",t),t.textContent="Идет отправка данных..";var o=new FormData(e),l={};o.forEach((function(e,t){l[t]=e})),n(l).then((function(n){if(200!==n.status)throw new Error("status newtwork not 200");t.style.cssText="font-size: 1.5rem;color: green;",t.textContent="Круто! Мы скоро с вами свяжемся!",e.textContent=""})).catch((function(n){t.style.cssText="font-size: 1.5rem;color: red;",t.textContent="Ошибка отправки формы..",e.textContent="",console.error(n)}))}))}));var n=function(e){return fetch("/server.php",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)})};document.querySelectorAll('input[name="phone"]').forEach((function(e){c("#".concat(e.id))})),document.querySelectorAll('input[placeholder="Ваше имя..."]').forEach((function(e){e.addEventListener("input",(function(){var e=event.target;e.value=e.value.replace(/[^а-яё]/gi,"")}))}))},u=function(){var e=document.querySelector(".services-slider-wrapper"),t=e.querySelectorAll(".slide"),n=document.querySelector(".services-slider-block"),r=n.querySelector(".next"),o=n.querySelector(".prev"),l=parseFloat(getComputedStyle(e).width),i=parseFloat(getComputedStyle(t[0]).width),c=0,a=i/l*100,u=0,s=[];t.forEach((function(e,t){s.push({item:e,position:t,transform:0})}));var f={getItemMin:function(){var e=0;return s.forEach((function(t,n){t.position<s[e].position&&(e=n)})),e},getItemMax:function(){var e=0;return s.forEach((function(t,n){t.position>s[e].position&&(e=n)})),e},getMin:function(){return s[f.getItemMin()].position},getMax:function(){return s[f.getItemMax()].position}},d=function(t){var n;"rigth"===t?(++c+l/i-1>f.getMax()&&(n=f.getItemMin(),s[n].position=f.getMax()+1,s[n].transform+=100*s.length,s[n].item.style.transform="translateX("+s[n].transform+"%)"),u-=a):"left"===t&&(--c<f.getMin()&&(n=f.getItemMax(),s[n].position=f.getMin()-1,s[n].transform-=100*s.length,s[n].item.style.transform="translateX("+s[n].transform+"%)"),u+=a),e.style.transform="translateX( ".concat(u,"%")};r.addEventListener("click",(function(){d("rigth")})),o.addEventListener("click",(function(){d("left")}))},s=function(){var e=document.querySelectorAll(".time > input"),t=document.querySelector('input[placeholder="Промокод"]'),n=document.querySelector("#price-total"),r=1,o=function(){if(e&&t&&n){var o=0;e.forEach((function(e){e.hasAttribute("checked")&&(o=Math.floor(2999*r),n.textContent=o),e.addEventListener("click",(function(){var e=event.target;"1"===e.value?(o=Math.floor(2999*r),n.textContent=o):"6"===e.value?(o=Math.floor(9900*r),n.textContent=o):"9"===e.value?(o=Math.floor(13900*r),n.textContent=o):"12"===e.value&&(o=Math.floor(19900*r),n.textContent=o)}))}))}};o(),t.addEventListener("input",(function(){"ТЕЛО2019"===event.target.value&&(r=.7,o())}))},f=function(){var e=document.querySelector(".gallery-slider"),t=document.querySelectorAll(".gallery-slider > .slide"),n=document.querySelector(".slider-dots"),r=document.querySelectorAll(".slider-dots > li"),o=0;t.forEach((function(){var e=document.createElement("li"),t=document.createElement("button");n.insertAdjacentElement("afterbegin",e),e.insertAdjacentElement("afterbegin",t)})),(r=document.querySelectorAll(".slider-dots > li"))[0].classList.add("slick-active");var l=function(e,t,n){e[t].classList.remove(n)},i=function(e,t,n){e[t].classList.add(n)};e.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches("button, span")&&(l(t,o,"active"),l(r,o,"slick-active"),n.closest(".next")?o++:n.closest(".prev")?o--:n.matches("button")&&r.forEach((function(e,t){e.contains(n)&&(o=t)})),o>=t.length&&(o=0),o<0&&(o=t.length-1),i(t,o,"active"),i(r,o,"slick-active"))}))},d=function(){var e=document.querySelector("#totop"),t=document.querySelector(".header-main");window.addEventListener("scroll",(function(){pageYOffset>=t.clientHeight?e.style.display="block":e.style.display="none"}))},y=function(){var e=document.querySelector(".hidden-small"),t=document.querySelector(".hidden-large");window.addEventListener("resize",(function(){document.documentElement.clientWidth<768?(e.style.display="none",t.style.display="block"):(e.style.display="flex",t.style.display="none")}))};r(".club-select",".clubs"),r(".open-popup","#free_visit_form"),r(".callback-btn","#callback_form"),r(".fixed-gift","#gift"),o(5e3),u(),a(),s(),f(),d(),y()}]);