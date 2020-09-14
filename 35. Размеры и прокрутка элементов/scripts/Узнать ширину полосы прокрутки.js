//Напишите код, который возвращает ширину стандартной полосы прокрутки.

//Для Windows она обычно колеблется от 12px до 20px. Если браузере не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.

//P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого.

const div = document.createElement("div");
div.style.overflowY = "scroll";
div.style.width = "50px";
div.style.height = "50px";

document.body.append(div);
const scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

console.log(scrollWidth);
